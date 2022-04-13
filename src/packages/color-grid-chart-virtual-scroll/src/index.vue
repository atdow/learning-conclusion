<!--
 * @Author: atdow
 * @Date: 2022-03-23 15:10:51
 * @LastEditors: null
 * @LastEditTime: 2022-04-01 17:13:21
 * @Description: file description
-->
<template>
  <div class="color-grid-chart">
    <GeminiScrollbar
      class=".pmd-scrollbar .mCustomScrollbar gm-scrollbar-color white"
      :style="`height:${contentHeight + 'px'}`"
      ref="geminiScrollbarRef"
    >
      <div
        class="list-view-phantom"
        ref="clientHeight"
        :style="{ height: virtualContentHeight + 'px' }"
      ></div>
      <div
        ref="content"
        @mouseenter="contentMouseenter"
        @mouseleave="contentMouseleave"
      >
        <div
          class="color-grid-chart-row"
          v-for="(dataRow, dataRowIndex) in renderData"
          :key="dataRowIndex"
          :style="{ height: itemHeight + 'px' }"
        >
          <div
            class="color-grid-chart-item"
            :style="{ ...calItemStyle(dataItem), ...cursorStyle }"
            v-for="(dataItem, dataItemIndex) in dataRow"
            :key="dataItemIndex"
            @click="itemClick(dataItem, dataRowIndex, dataItemIndex)"
            @mousemove="itemMousemove(dataItem)"
          >
            <template v-if="$scopedSlots.default">
              <slot :record="dataItem" />
            </template>
            <span v-else> {{ dataItem.value }}</span>
          </div>
        </div>
      </div>
    </GeminiScrollbar>
    <div
      class="color-grid-chart-tooltip"
      :style="{ left: tooltipPosition.x + 'px', top: tooltipPosition.y + 'px' }"
      v-show="tooltipIsShow"
    >
      <template v-if="$scopedSlots.tooltipSlot">
        <slot name="tooltipSlot" :record="tooltipData"></slot>
      </template>
      <span v-else>请指定插槽内容</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ColorGridChartVirtualScroll',
  props: {
    data: {
      type: Array,
      default: function () {
        return [[]]
      },
      require: true,
    },
    itemHeight: {
      type: Number,
      default: 50,
    },
    itemWidth: {
      type: Number,
    },
    maxHeight: {
      type: Number,
      default: 300,
    },
    showTooltip: {
      type: Boolean,
      default: true,
    },
    cursorStyle: {
      type: Object,
      default: function () {
        return {
          cursor: 'auto',
        }
      },
    },
  },
  data() {
    return {
      maxValue: 0,
      minValue: 0,
      colors: [],
      startColor: '#eceff9',
      endColor: '#273C70',
      // 虚拟滚动
      renderData: [],
      virtualContentHeight: 300,
      contentHeight: 300,
      scrollHeight: 300,
      scrollResolveTimer: null,
      tooltipPosition: {
        x: 0,
        y: 0,
      },
      tooltipData: {},
      tooltipIsShow: false,
    }
  },
  components: {},
  watch: {
    data: {
      immediate: true,
      handler: function () {
        const { max, min } = this.calDataBoundaryValue()
        this.maxValue = max
        this.minValue = min
        let step = 0
        if (this.minValue === 0) {
          if (this.maxValue === 0) {
            step = 0
          } else {
            step = this.maxValue - this.minValue + 1 // 如果是0-x时，step应该是x-0+1,0也需要占一个分割
          }
        } else {
          step = this.maxValue - this.minValue
        }
        const colors = this.gradientColors(this.startColor, this.endColor, step)
        this.colors = colors
        this.$nextTick(() => {
          this.updateVirtualContentHeight()
          this.updateContentHeight()
          this.update(0)
        })
        // console.log('max:', max, min)
        // console.log('this.colors :', this.colors)
      },
    },
  },
  computed: {},
  created() {},
  mounted() {
    const geminiScrollbarView = this.$refs.geminiScrollbarRef.$el.childNodes[2]
    geminiScrollbarView.scrollTop = this.scrollTop
    geminiScrollbarView.addEventListener('scroll', this.scrollResolve)
    this.$once('hook:beforeDestroy', () => {
      geminiScrollbarView.removeEventListener('scroll', this.scrollResolve)
    })
    // console.log('$scopedSlots:', this.$scopedSlots)
  },
  methods: {
    /**
      start 开始颜色
      end 结束颜色
      steps 颜色分解 次数
      gamma 暂时理解为透明一点（伽马）
     */
    gradientColors(start, end, steps, gamma) {
      var i,
        j,
        ms,
        me,
        output = [],
        so = []
      gamma = gamma || 1
      var normalize = function (channel) {
        return Math.pow(channel / 255, gamma)
      }
      start = this.parseColor(start).map(normalize)
      end = this.parseColor(end).map(normalize)
      for (i = 0; i < steps; i++) {
        ms = i / (steps - 1)
        me = 1 - ms
        for (j = 0; j < 3; j++) {
          so[j] = this.pad(
            Math.round(
              Math.pow(start[j] * me + end[j] * ms, 1 / gamma) * 255
            ).toString(16)
          )
        }
        output.push('#' + so.join(''))
      }
      return output
    },
    parseColor(hexStr) {
      return hexStr.length === 4
        ? hexStr
            .substr(1)
            .split('')
            .map(function (s) {
              return 0x11 * parseInt(s, 16)
            })
        : [hexStr.substr(1, 2), hexStr.substr(3, 2), hexStr.substr(5, 2)].map(
            function (s) {
              return parseInt(s, 16)
            }
          )
    },
    // zero-pad 1 digit to 2
    pad(s) {
      return s.length === 1 ? '0' + s : s
    },
    calDataBoundaryValue() {
      let max = 0
      let min = 0
      this.data.forEach((dataItem) => {
        if (dataItem) {
          dataItem.forEach((item) => {
            if (item.value > max) {
              max = item.value
            }
            if (item.value < min) {
              min = item.value
            }
          })
        }
      })
      // console.log('data:', this.data)
      // console.log('max:', max, min)
      return { max, min }
    },
    // TODO后面需要抽离出去在初始化时一次计算出来，不要一直重复地渲染计算
    calItemStyle(dataItem) {
      const style = {}
      style.background = this.calItemColor(dataItem.value).color
      if (this.itemWidth) {
        if (this.data.length > 0) {
          // console.log('width:', this.data[0].length * this.itemWidth, this.$el.clientWidth)
          if (this.data[0].length * this.itemWidth > this.$el.clientWidth) {
            style.width = this.itemWidth + 'px'
            style.flexShrink = 0
          } else {
            style.flex = 1
          }
        }
      } else {
        style.flex = 1
      }
      return style
    },
    calItemColor(value) {
      let color = 'white'
      /**
       * 基本公式：colorsIndex/(this.colors.length - 1) = value/(this.maxValue - this.minValue)
       * 但是不一定会有整取的索引，容易越界
       */
      let colorsIndex = Math.ceil(
        ((this.colors.length - 1) * value) / (this.maxValue - this.minValue)
      )
      // 容易越界处理
      if (colorsIndex > this.colors.length - 1) {
        colorsIndex = this.colors.length - 1
      }
      color = this.colors[colorsIndex]
      // if (!!!color) {
      //   console.log('color:', color)
      //   console.log('colorsIndex:', colorsIndex)
      // }
      return { color, colorsIndex }
    },
    //------------------------虚拟滚动 start-----------------------------------
    scrollResolve(e) {
      // 防抖
      clearTimeout(this.scrollResolveTimer)
      this.scrollResolveTimer = setTimeout(() => {
        this.geminiScrollbarScrollTop = e.target.scrollTop
        const { scrollLeft, scrollTop } = e.target
        this.$emit('scroll', { scrollLeft, scrollTop })
      }, 10)
      this.update(e.target.scrollTop)
    },
    // 更新当前被渲染出来的数据
    update(scrollTop = 0) {
      this.$nextTick(() => {
        // 获取当前可展示数量
        const count = Math.ceil(this.$el.clientHeight / this.itemHeight)
        const start = Math.floor(scrollTop / this.itemHeight)
        // 取得可见区域的结束数据索引
        let end = start + count
        // 往下补1，减少闪烁感
        if (end + 1 <= this.data.length - 1) {
          end = end + 1
        }
        // 计算出可见区域对应的数据，让 Vue.js 更新
        this.renderData = this.data.slice(start, end)
        // 把可见区域的 top 设置为起始元素在整个列表中的位置（使用 transform 是为了更好的性能）
        this.$nextTick(() => {
          if (this.$refs.content) {
            this.$refs.content.style.webkitTransform = `translate3d(0, ${
              start * this.itemHeight
            }px, 0)`
          }
        })
      })
    },
    // 更新每条格子高度
    updateGridHeight() {
      if (this.processTableMode == 'double') {
        this.gridHeight = 70
      } else {
        this.gridHeight = 35
      }
    },
    // 滚动条滚动到顶部
    geminiScrollbarReset() {
      try {
        this.$refs.geminiScrollbarRef.$el.childNodes[2].scrollTop = 0
        this.$emit('scroll', 0)
        // eslint-disable-next-line no-empty
      } catch (error) {}
    },
    // 更新撑开高度
    updateVirtualContentHeight() {
      this.virtualContentHeight = this.data.length * this.itemHeight
    },
    updateContentHeight() {
      if (this.virtualContentHeight > this.maxHeight) {
        this.contentHeight = this.maxHeight
      } else {
        this.contentHeight = this.virtualContentHeight
      }
    },
    //------------------------虚拟滚动 end-----------------------------------
    itemClick(data, rowIndex, ColumnIndex) {
      this.$emit('itemClick', data, rowIndex, ColumnIndex)
    },
    itemMousemove(data) {
      this.$emit('itemMouseMove', data)
      if (this.showTooltip === false) {
        return
      }
      this.tooltipData = data
      var eve = window.event
      var x = eve.x // X坐标
      var y = eve.y // Y坐标
      this.tooltipPosition = {
        x: x + 20,
        y: y + 20,
      }
      // console.log('itemHover')
    },
    contentMouseenter() {
      if (this.showTooltip === false) {
        return
      }
      this.tooltipIsShow = true
    },
    contentMouseleave() {
      if (this.showTooltip === false) {
        return
      }
      this.tooltipIsShow = false
    },
  },
  beforeDestroy() {},
}
</script>
<style lang="less" scoped>
.color-grid-chart {
  &-row {
    display: flex;
    width: 100%;
  }
  &-item {
    // width: 50px;
    // height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    box-sizing: border-box;
    border: 1px solid white;
    &:hover {
      border-color: black;
    }
    // border-bottom: 1px solid white;
  }
}
.list-view-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}
.color-grid-chart-tooltip {
  background: #fff;
  opacity: 0.96;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 12px;
  color: #333333;
  font-size: 13px;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
}
</style>