import ColorGridChartVirtualScroll from '@/packages/color-grid-chart-virtual-scroll'
import { throttle } from '@/utils/util'
export default {
  props: {
    data: {
      type: Array,
      require: true,
      default: function () {
        return []
      }
    },
    itemWidth: {
      type: Number,
      default: 120
    },
    itemHeight: {
      type: Number,
      default: 120
    },
    showTooltip: {
      type: Boolean,
      default: true
    },
    chartHeight: {
      type: Number,
      default: 0
    },
    chartCursorStyleRender: {
      type: Function,
      default: function (data) {
        if (data.value > 0) {
          return { cursor: 'pointer' }
        } else {
          return { cursor: 'not-allowed' }
        }
      }
    },
  },
  data() {
    return {
      colorMap: [['#c1cae9', '#273C70'], ['#AFF0B5', '#006622'], ['#FFE4BA', '#792E00']],
      scrollResolveTimer: null,
      itemMousemoveTimer: null,
      // 同级最大最小值
      dataMeshBoundary: [
        // {
        //   min: 0,
        //   max: 0
        // }
      ],
      chartCursorStyle: {},
    }
  },
  componets: {
    ColorGridChartVirtualScroll
  },
  watch: {
    data: {
      immediate: true,
      handler: function () {
        const data = this.data
        const dataMeshBoundary = []
        const meshData = {}
        recursion(data)
        Object.keys(meshData).forEach((key) => {
          meshData[key] = meshData[key].map((item) => Number(item.value))
        })
        Object.keys(meshData).forEach((key) => {
          dataMeshBoundary.push({
            max: Math.max(...meshData[key]),
            min: Math.min(...meshData[key])
          })
        })
        this.dataMeshBoundary = dataMeshBoundary
        this.$nextTick(() => {
          this.forceUpdate()
          this.$nextTick(() => {
            setTimeout(() => {
              this.$refs.geminiScrollbarRef.forceFit()
            }, 300)
          })
        })
        function recursion(list) {
          list.forEach((listItem) => {
            if (meshData[listItem.mesh]) {
              meshData[listItem.mesh].push(...listItem.data)
            } else {
              meshData[listItem.mesh] = [...listItem.data]
            }
            if (listItem.children && listItem.children.length > 0) {
              recursion(listItem.children, listItem)
            }
          })
        }
      }
    }
  },
  mounted() {
    const dom = this.$el.querySelector('.gm-scroll-view')
    dom.addEventListener('scroll', this.handleScroll)
    this.$once('hook:beforeDestroy', () => {
      dom.removeEventListener('scroll', this.handleScroll)
    })
  },
  methods: {
    getItem(data) {
      const renderData = data
      if (!data.children || data.children.length === 0) {
        return <ColorGridChartVirtualScroll
          data={[data.data]}
          itemWidth={this.itemWidth}
          itemHeight={this.itemHeight}
          useVirtualScroll={false}
          startColor={this.colorMap[data.mesh][0]}
          endColor={this.colorMap[data.mesh][1]}
          boundaryValue={this.dataMeshBoundary[data.mesh]}
          showTooltip={this.showTooltip}
          cursorStyle={this.chartCursorStyle}
          onItemMousemove={this.itemMousemove}
          onItemMouseenter={this.itemMouseenter}
          onItemClick={(data, rowIndex, ColumnIndex) => this.itemClick({ data: renderData, itemData: data, columnIndex: ColumnIndex })}
          scopedSlots={{
            default: (record) => {
              return this.$scopedSlots.default?.(record)
            },
            tooltipSlot: (record) => {
              return this.$scopedSlots.tooltipSlot?.(record)
            },
          }}
        >
        </ColorGridChartVirtualScroll>
      } else {
        return <div class={this.className({ 'chart-grid-collapse': data.collapse === true })} >
          <ColorGridChartVirtualScroll
            data={[data.data]}
            itemWidth={this.itemWidth}
            itemHeight={this.itemHeight}
            useVirtualScroll={false}
            startColor={this.colorMap[data.mesh][0]}
            endColor={this.colorMap[data.mesh][1]}
            boundaryValue={this.dataMeshBoundary[data.mesh]}
            showTooltip={this.showTooltip}
            cursorStyle={this.chartCursorStyle}
            onItemMousemove={this.itemMousemove}
            onItemMouseenter={this.itemMouseenter}
            onItemClick={(data, rowIndex, ColumnIndex) => this.itemClick({ data: renderData, itemData: data, columnIndex: ColumnIndex })}
            scopedSlots={{
              default: (record) => {
                return this.$scopedSlots.default?.(record)
              },
              tooltipSlot: (record) => {
                return this.$scopedSlots.tooltipSlot?.(record)
              },
            }}
          >
          </ColorGridChartVirtualScroll>
          <div class={this.className({ 'is-height-none': data.collapse === true })}>
            {data.children.map(childrenItem => this.getItem(childrenItem))}
          </div>
        </div >
      }
    },
    className(classObj = {}) {
      const arr = []
      Object.keys(classObj).forEach(key => {
        if (classObj[key]) {
          arr.push(key)
        }
      })
      return arr.join(' ')
    },
    forceUpdate() {
      this.$forceUpdate()
    },
    handleScroll(e) {
      // 防抖
      clearTimeout(this.scrollResolveTimer)
      this.scrollResolveTimer = setTimeout(() => {
        const { scrollLeft, scrollTop } = e.target
        this.$emit('scroll', { scrollLeft, scrollTop })
      }, 10)
    },
    throttle() {
      return throttle
    },
    itemMousemove: throttle(function (data) {
      // this.chartCursorStyle = this.chartCursorStyleRender(data)
    }, 100),
    itemMouseenter(data) {
      this.chartCursorStyle = this.chartCursorStyleRender(data)
    },
    itemClick(data) {
      this.$emit('itemClick', data)
    },
  },
  render() {
    const { data, chartHeight } = this.$props
    return (
      <GeminiScrollbar
        class="table-scroll .pmd-scrollbar .mCustomScrollbar gm-scrollbar-color white"
        ref="geminiScrollbarRef"
        style={{ height: chartHeight + 'px' }}
      >
        {
          data.map(dataItem => this.getItem(dataItem))
        }
      </GeminiScrollbar>
      // <div style={{ height: chartHeight + 'px' }} class="tableWrapper">
      //   {
      //     data.map(dataItem => this.getItem(dataItem))
      //   }
      // </div>
    )
  }
}