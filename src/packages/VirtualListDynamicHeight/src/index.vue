<template>
  <div ref="containerRef" :style="virtualListContainerStyle">
    <SinoScrollbar class="virtual-list-dynamic-height" style="height: 100%" ref="scrollbarRef" @scroll="onScroll">
      <div class="list-view-phantom" :style="{ height: scrollBarHeight + 'px' }"></div>
      <!-- 列表总高 -->
      <ul ref="contentRef">
        <Item
          v-for="item in visibleList"
          :data="item.data"
          :index="item.index"
          :key="item.index"
          @update-height="updateItemHeight"
        >
          <slot slot-scope="{ data, index }" :data="data" :index="index"></slot>
        </Item>
      </ul>
    </SinoScrollbar>
  </div>
</template>
 
<script>
import SinoScrollbar from '@/packages/scrollbar'
import Item from './Item'
export default {
  name: 'VirtualListDynamicHeight',
  props: {
    list: {
      type: Array,
      required: true,
      default: function () {
        return []
      },
    },
    // 每一项假定的高度
    // 不宜调得太小，不然首次渲染的时候将会渲染太大数据；调得太小可能会出现瞬间留白
    estimatedItemHeight: {
      type: Number,
      default: 40,
    },
    // 缓冲加载项
    bufferItemCount: {
      type: Number,
      default: 4,
    },
    // 固定容器的高度
    isFixContainerHeight: {
      type: Boolean,
      default: true,
    },
    maxHeight: {
      type: Number,
      default: 600,
    },
  },
  data() {
    return {
      containerHeight: 0,
      dataList: [
        // {
        //   index:0,
        //   height:50
        // }
      ], // 数据列表
      visibleList: [],
      startIndex: 0, // 截取数组的 起始 索引
      endIndex: 0, // 截取数组的 结束 索引
      scrollTop: 0, // 距离顶部的偏移量
      scrollBarHeight: 0, // 虚拟列表高度
      // 每一项高度
      itemHeightCache: [
        // {
        //   isEstimated: true, // 是否是预设的值
        //   height: 0
        // }
      ],
      itemTopCache: [], // 每一项距顶部的实际高度
    }
  },
  components: {
    SinoScrollbar,
    Item,
  },
  computed: {
    virtualListContainerStyle: function () {
      if (this.isFixContainerHeight === true) {
        return { height: '100%' }
      } else {
        return { height: this.containerHeight + 'px' }
      }
    },
  },
  watch: {
    list: {
      immediate: true,
      deep: true,
      handler: function () {
        if (this.list.length === 0) {
          return
        }
        this.dataList = this.list.map((item, index) => {
          return {
            index,
            data: item,
          }
        })
        //  console.log('this.dataList:', this.dataList)
        this.generateEstimatedItemData()
        this.update()
      },
    },
  },
  created() {},
  mounted() {},
  methods: {
    generateEstimatedItemData() {
      const estimatedTotalHeight = this.dataList.reduce((pre, current, index) => {
        // 给每一项一个虚拟高度
        this.itemHeightCache[index] = { isEstimated: true, height: this.estimatedItemHeight }
        // 给每一项距顶部的虚拟高度
        this.itemTopCache[index] = index === 0 ? 0 : this.itemTopCache[index - 1] + this.estimatedItemHeight
        return pre + this.estimatedItemHeight
      }, 0)
      // 列表总高
      this.scrollBarHeight = estimatedTotalHeight
    },
    updateItemHeight({ index, height }) {
      // 每次创建的时候都会抛出事件，因为没有处理异步的情况，所以必须每次高度变化都需要更新
      // dom元素加载后得到实际高度 重新赋值回去
      this.itemHeightCache[index] = { isEstimated: false, height: height }
      this.updateContainerHeight()
      // 重新确定列表的实际总高度
      this.scrollBarHeight = this.itemHeightCache.reduce((pre, current) => {
        return pre + current.height
      }, 0)
      // 更新itemTopCache
      const newItemTopCache = [0]
      for (let i = 1, l = this.itemHeightCache.length; i < l; i++) {
        // 虚拟每项距顶部高度 + 实际每项高度
        newItemTopCache[i] = this.itemTopCache[i - 1] + this.itemHeightCache[i - 1].height
      }
      // 获得每一项距顶部的实际高度
      this.itemTopCache = newItemTopCache
      this.update()
    },
    // 获取渲染项起始索引
    getStartIndex() {
      const scrollTop = this.scrollTop
      // 每一项距顶部的距离
      const arr = this.itemTopCache
      let index = -1
      let left = 0,
        right = arr.length - 1,
        mid = Math.floor((left + right) / 2)
      // 判断 有可循环项时进入
      while (right - left > 1) {
        /*
        二分法：拿每一次获得到的 距顶部距离 scrollTop 同 获得到的模拟每个列表据顶部的距离作比较。
        arr[mid] 为虚拟列高度的中间项
        不断while 循环，利用二分之一将数组分割，减小搜索范围
        直到最终定位到 目标index 值
      */
        // 目标数在左侧
        if (scrollTop < arr[mid]) {
          right = mid
          mid = Math.floor((left + right) / 2)
        } else if (scrollTop > arr[mid]) {
          // 目标数在右侧
          left = mid
          mid = Math.floor((left + right) / 2)
        } else {
          index = mid
          return index
        }
      }
      index = left
      return index
    },
    getEndIndex() {
      const whiteHeight = this.scrollTop - this.itemTopCache[this.startIndex] // 出现留白的高度
      const clientHeight = this.$refs.scrollbarRef?.clientHeight || this.maxHeight
      let itemHeightTotal = 0
      let endIndex = 0
      for (let i = this.startIndex; i < this.dataList.length; i++) {
        // 留白偏差处理 + whiteHeight
        if (itemHeightTotal < clientHeight + whiteHeight) {
          itemHeightTotal += this.itemHeightCache[i].height
          endIndex = i
        } else {
          break
        }
      }
      endIndex = endIndex + this.bufferItemCount // 加上预渲染数
      return endIndex
    },
    update() {
      const startIndex = this.getStartIndex()
      // 如果是奇数开始，就取其前一位偶数
      if (startIndex % 2 !== 0) {
        this.startIndex = startIndex - 1
      } else {
        this.startIndex = startIndex
      }
      this.endIndex = this.getEndIndex()
      this.visibleList = this.dataList.slice(this.startIndex, this.endIndex)
      if (this.$refs.contentRef) {
        // 这里必须采用this.itemTopCache[this.startIndex而不能使用scrollTop，因为scrollTop的刻度度非常细，当每一项item的高度
        // 非常高的时候，`transform将会一直跟随scrollTop`，导致视觉上看起来无法滚动
        this.$refs.contentRef.style.webkitTransform = `translate3d(0, ${this.itemTopCache[this.startIndex]}px, 0)`
      }
    },
    onScroll(data) {
      this.scrollTop = data.scrollTop
      this.update()
    },
    updateContainerHeight() {
      if (this.isFixContainerHeight) {
        this.containerHeight = this.$refs.containerRef.getBoundingClientRect().height
        return
      }
      if (this.scrollTop !== 0) {
        return
      }
      if (this.itemHeightCache.every((item) => item.isEstimated === false)) {
        const itemTotalHeight = this.itemHeightCache.reduce((pre, value) => pre + value.height, 0)
        if (itemTotalHeight < this.maxHeight) {
          this.containerHeight = itemTotalHeight
        } else {
          this.containerHeight = this.maxHeight
        }
        // console.log('itemTotalHeight:', itemTotalHeight)
      }
    },
  },
}
</script>
<style lang="less" scoped>
.virtual-list-dynamic-height {
  // overflow: auto;
  // position: relative;
  /deep/ .sino-scrollbar__view {
    position: relative;
  }
  .list-view-phantom {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
  }
}
ul {
  background: white;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
