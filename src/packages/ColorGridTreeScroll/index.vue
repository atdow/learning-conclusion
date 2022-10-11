<!--
 * @Author: atdow
 * @Date: 2022-03-23 16:01:41
 * @LastEditors: null
 * @LastEditTime: 2022-10-11 22:58:13
 * @Description: file description
-->
<template>
  <div class="color-grid-scroll" ref="containerRef">
    <template slot-scope="{ record }"> <slot :record="record"></slot></template>
    <div class="s-left-title-container">
      <div class="s-left-title" ref="leftTitleRef">
        <ul
          :style="{
            height: chartHeight + 'px',
          }"
        >
           <YAxis
            :data="treeDataFormat"
            :yAxisRender="yAxisRender"
            :lazy="lazy"
            @collapseChange="collapseChange"
            @expandLoad="expandLoad"
            ref="yAxisRef"
          />
        </ul>
      </div>
    </div>
    <div>
      <div class="s-top-title-container">
        <div class="s-title" :style="`width:${chartWidth}px`" ref="topTitleRef">
          <ul
            :style="{
              width: (chartWidth > chartContentWidth ? chartWidth : chartContentWidth) + 'px',
              height: styleVars.sTopTitleHeight + 'px',
            }"
          >
            <li
              :style="{
                width: gridWidth + 'px',
              }"
              v-for="(item, index) in xAxis"
              :key="index"
            >
              {{ `${item.name}(${item.total})` }}
            </li>
          </ul>
        </div>
      </div>
      <ChartGrid
        :data="treeDataFormat"
        :itemWidth="Number(gridWidth)"
        :itemHeight="Number(styleVars.sLeftTitleGridHeight)"
        :showTooltip="showTooltip"
        :chartCursorStyleRender="chartCursorStyleRender"
        :chartHeight="chartHeight"
        :cursorStyle="chartCursorStyle"
        :style="{
          width: chartWidth + 'px',
        }"
        @scroll="chartScroll"
        @itemClick="itemClick"
        ref="chartGridRef"
      >
        <template slot-scope="{ record }">
          <slot :record="record"></slot>
        </template>
        <template slot-scope="{ record }" slot="tooltipSlot">
          <slot name="tooltipSlot" :record="record"></slot>
        </template>
      </ChartGrid>
    </div>
     
  </div>
</template>
 
<script>
import { listDepthFirstTraversal } from '@/utils/util'
import styleVars from './vars.less'
import YAxis from './YAxis'
import ChartGrid from './ChartGrid'
export default {
  name: 'ColorGridTreeScroll',
  props: {
    xAxis: {
      type: Array,
      require: true,
      default: function () {
        return [
          // { name: 'xxx', total: 0 }
        ]
      },
    },
    yAxisRender: {
      type: Function,
      default: function (data) {
        return data.name
      },
    },
    // data: {
    //   type: Array,
    //   require: true,
    //   default: function () {
    //     return [] // [[{name:xxx,value:xxx}]]
    //   }
    // },
    treeData: {
      type: Array,
      default: function () {
        return []
      },
    },
    showTooltip: {
      type: Boolean,
      default: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    chartMaxHeight: {
      type: Number,
      default: 300,
    },
    chartCursorStyleRender: {
      type: Function,
      default: function (data) {
        if (data.value > 0) {
          return { cursor: 'pointer' }
        } else {
          return { cursor: 'not-allowed' }
        }
      },
    },
    gridWidth: {
      type: Number,
      default: 120,
    },
    // 默认展开到第几层级（负数则展开全部层级）
    defaultExpandMesh: {
      type: Number,
      default: -1,
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    load: {
      type: Function,
    },
  },
  data() {
    return {
      styleVars,
      chartWidth: 0,
      chartContentWidth: 0,
      chartHeight: 0,
      chartCursorStyle: {},
      treeDataFormat: [],
    }
  },
  components: {
    YAxis,
    ChartGrid,
  },
  watch: {
    xAxis: {
      immediate: true,
      handler: function () {
        this.chartContentWidth = this.xAxis.length * this.gridWidth
      },
    },
    treeData: {
      immediate: true,
      handler: function () {
        const treeDataFormat = JSON.parse(JSON.stringify(this.treeData))
        // 给数据添加mesh，并且控制展开层级
        listDepthFirstTraversal(treeDataFormat, (data, parent) => {
          if (parent) {
            data.mesh = parent.mesh + 1
          } else {
            data.mesh = 0
          }
          data.parent = parent
          // 控制展开层级
          if (this.defaultExpandMesh < 0) {
            data.collapse = false
            return
          }
          if (data.mesh < this.defaultExpandMesh) {
            data.collapse = false
          } else {
            data.collapse = true
          }
        })
        this.treeDataFormat = treeDataFormat
        this.updateChartHeight(treeDataFormat)
        this.$nextTick(() => {
          this.calContainerReact()
        })
        // console.log('treeDataFormat:', treeDataFormat)
      },
    },
  },
  computed: {},
  created() {},
  mounted() {
    this.calContainerReact()
    window.addEventListener('resize', this.resizeResolve)
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', this.resizeResolve)
    })
    if (this.lazy) {
      this.load(null, (data) => {
        this.init(data)
      })
    }
  },
  methods: {
    chartScroll(data) {
      const { scrollLeft = 0, scrollTop = 0 } = data
      this.$refs.leftTitleRef.scrollTop = scrollTop
      this.$refs.topTitleRef.scrollLeft = scrollLeft
    },
    calContainerReact() {
      const { width = 0 } = this.$refs.containerRef.getBoundingClientRect()
      let chartWidth = 0
      chartWidth = width - this.styleVars.sLeftTitleWidth
      this.chartWidth = chartWidth
    },
    resizeResolve() {
      clearTimeout(this.scrollResolveTimer)
      this.scrollResolveTimer = setTimeout(() => {
        this.calContainerReact()
      }, 500)
    },
    itemClick(data) {
      this.$emit('itemClick', data)
    },
    collapseChange() {
      this.updateChartHeight(this.treeDataFormat)
      this.$refs.chartGridRef?.forceUpdate()
    },
    updateChartHeight(list) {
      let itemShowCount = list.length
      recursion(list)
      this.chartHeight =
        itemShowCount * styleVars.sLeftTitleGridHeight > this.chartMaxHeight
          ? this.chartMaxHeight
          : itemShowCount * styleVars.sLeftTitleGridHeight
      function recursion(list) {
        list.forEach((listItem) => {
          if (listItem.children && listItem.children.length > 0) {
            if (!listItem.collapse) {
              itemShowCount += listItem.children.length
              recursion(listItem.children, listItem)
            }
          }
        })
      }
    },
    init(list, node) {
      const treeDataFormat = JSON.parse(JSON.stringify(list))
      // 给数据添加mesh，并且控制展开层级
      let treeId = 0
      listDepthFirstTraversal(treeDataFormat, (data, parent) => {
        if (parent) {
          data.mesh = parent.mesh + 1
          data.treeId = `${parent.treeId}-${data.treeId}`
        } else {
          data.mesh = 0
          data.treeId = treeId
          treeId++
        }
        data.parent = parent
        if (node) {
          data.collapse = false
        } else {
          data.collapse = true
        }
      })
      this.treeDataFormat = treeDataFormat
      this.updateChartHeight(treeDataFormat)
    },
    expandLoad(node) {
      console.log('node:', node)
      const { treeId } = node
      this.load(node, (data) => {
        listDepthFirstTraversal(this.treeDataFormat, (itemData) => {
          if (itemData.treeId === treeId) {
            itemData.children = data.map((dataItem, dataIndex) => {
              return {
                ...dataItem,
                mesh: node.mesh + 1,
                parent: node,
                collapse: true,
                treeId: `${node.treeId}-${dataIndex}`,
              }
            })
            itemData.collapse = false
          }
        })
        // this.init(this.treeDataFormat, node)
        // this.treeDataFormat = this.treeDataFormat
        this.$refs.yAxisRef.forceUpdate()
        this.$refs.chartGridRef.forceUpdate()
        this.updateChartHeight(this.treeDataFormat)
        // console.log('this.treeDataFormat', this.treeDataFormat)
        // this.init(data)
      })
    },
  },
  beforeDestroy() {},
}
</script>

<style lang="less" scoped>
@import '~@/style/vars.less';
@import './vars.less';
@import './ChartGrid.less';
.color-grid-scroll {
  display: flex;
  justify-content: space-between;
  .s-left-title-container {
    width: @sLeftTitleWidth - 20 * 1px;
    overflow: hidden;
    margin-top: @sTopTitleHeight*1px;
    .s-left-title {
      // height: 300px;
      // overflow: auto;
      overflow: hidden;
      width: @sLeftTitleWidth*1px;
      ul {
        margin-bottom: 0;
        li {
          // height: @sLeftTitleGridHeight*1px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          color: #333333;
        }
        /deep/ .common-item {
          color: #333333;
          line-height: @sLeftTitleGridHeight*1px;
          box-sizing: border-box;
        }
        /deep/ .loading-icon {
          margin-left: 10px;
          width: 22px;
          height: @sLeftTitleGridHeight*1px;
          display: inline-block;
          box-sizing: border-box;
          position: absolute;
          svg {
            animation: loading-icon-animation 1s linear infinite;
            margin-top: 17px;
          }
        }
        @keyframes loading-icon-animation {
          0% {
            transform: rotate(0deg);
          }
          // 50% {
          //   transform: rotate(180deg);
          // }
          100% {
            transform: rotate(360deg);
          }
        }
        /deep/ .last-children {
          height: @sLeftTitleGridHeight*1px;
        }
        /deep/ .fold-icon {
          font-size: 12px;
          // line-height: @sLeftTitleGridHeight*1px;
          cursor: pointer;
          margin-left: 10px;
          display: inline-block;
          width: 14px;
          height: 14px;
          background: @theme-color;
          align-items: center;
          justify-content: center;
          text-align: center;
          line-height: 14px;
          color: white;
          border-radius: 2px;
        }
        /deep/ .collapse {
          height: @sLeftTitleGridHeight*1px;
          overflow: hidden;
        }
      }
    }
  }
  .s-top-title-container {
    height: @sTopTitleHeight*1px;
    overflow: hidden;
    .s-title {
      overflow: hidden;
      box-sizing: border-box;
      ul {
        display: flex;
        justify-content: space-around;
        li {
          flex-shrink: 0;
          text-align: center;
          color: #333333;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      }
    }
  }
  /deep/.gm-scrollbar.-horizontal {
    height: 10px;
    .thumb {
      // background-color: red;
    }
  }
}
</style>
