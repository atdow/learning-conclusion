<!--
 * @Author: atdow
 * @Date: 2022-11-18 10:41:36
 * @LastEditors: null
 * @LastEditTime: 2023-11-15 20:23:12
 * @Description: file description
-->
<template>
  <div class="virtual-list" :style="virtualListContainerStyle">
    <SinoScrollbar
      style="height: 100%"
      class="scrollbar"
      @scroll="scrollResolve"
      @scrollBottom="scrollBottomResolve"
      ref="scrollbarRef"
    >
      <!-- 这里是用于撑开高度，出现滚动条用 -->
      <div class="list-view-phantom" ref="clientHeightRef" :style="{ height: virtualContentHeight + 'px' }"></div>
      <ul v-if="data.length > 0" class="option-warp" ref="contentRef">
        <li
          :style="{ height: itemHeight + 'px' }"
          class="option"
          v-for="(item, index) in virtualRenderData"
          :key="index"
        >
          <slot :item="item" :index="index"></slot>
        </li>
        <slot name="bottom"></slot>
      </ul>
      <no-data v-else /> </SinoScrollbar
    > 
  </div>
</template>
 
<script>
import SinoScrollbar from '@/packages/scrollbar'
export default {
  name: 'VirtualList',
  props: {
    data: {
      type: Array,
      require: true,
      default: function () {
        return []
      },
    },
    itemHeight: {
      type: Number,
      default: 30,
      require: true,
    },
    fixedHeight: {
      type: Boolean,
      default: true,
    },
    maxHeight: {
      type: Number,
      default: 200,
    },
    // 当data更新时，是否自动滚到到顶部
    defaultUpdateToTop: {
      type: Boolean,
      default: true,
    },
    bufferCount: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      height: 200,
      virtualContentHeight: 0,
      virtualRenderData: [],
      currentScrollTop: 0,
    }
  },
  components: {
    SinoScrollbar,
  },
  watch: {
    data: {
      immediate: true,
      handler: function () {
        // 清空数据和使用$nextTick为了弹窗秒开和数据卡死
        this.virtualRenderData = []
        this.virtualContentHeight = this.itemHeight * this.data.length
        this.$nextTick(() => {
          this.calGeminiScrollbarHeight()
          if (this.defaultUpdateToTop) {
            this.resetToTop()
          }
          this.update(this.currentScrollTop)
        })
      },
    },
  },
  computed: {
    virtualListContainerStyle: function () {
      if (this.fixedHeight === true) {
        return { height: '100%' }
      } else {
        return { height: this.height + 'px' }
      }
    },
  },
  created() {},
  mounted() {},
  methods: {
    resetToTop() {
      this.currentScrollTop = 0
      this.$refs.scrollbarRef.resetToTop()
    },
    calGeminiScrollbarHeight() {
      if (this.fixedHeight === true) {
        return
      }
      const height = this.itemHeight * this.data.length
      // 动态高度
      if (height > this.maxHeight || height === 0) {
        this.height = this.maxHeight
      } else {
        this.height = height
      }
    },
    // 更新数据
    update(scrollTop = 0) {
      this.$nextTick(() => {
        // 获取当前可展示数量
        const count = Math.ceil(this.height / this.itemHeight)
        const start = Math.floor(scrollTop / this.itemHeight)
        // 取得可见区域的结束数据索引
        const end = start + count + this.bufferCount
        // 计算出可见区域对应的数据，让 Vue.js 更新
        this.virtualRenderData = this.data.slice(start, end)
        // 把可见区域的 top 设置为起始元素在整个列表中的位置（使用 transform 是为了更好的性能）
        this.$refs.contentRef &&
          (this.$refs.contentRef.style.webkitTransform = `translate3d(0, ${start * this.itemHeight}px, 0)`)
        // console.log('this.virtualRenderData:', this.virtualRenderData)
      })
    },
    scrollResolve(data) {
      const { scrollTop } = data
      this.update(scrollTop)
      this.currentScrollTop = scrollTop
      this.$emit('scroll', data)
    },
    resetToTopUpdate() {
      this.$nextTick(() => {
        this.resetToTop()
        this.update(0)
      })
    },
    scrollBottomResolve() {
      this.$emit('scrollBottom')
    },
  },
  beforeDestroy() {},
}
</script>
 
<style lang="less" scoped>
.virtual-list {
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
  .option-warp {
    margin-bottom: 0;
  }
}
</style>
