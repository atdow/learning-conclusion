<!--
 * @Author: atdow
 * @Date: 2022-03-23 15:10:51
 * @LastEditors: null
 * @LastEditTime: 2022-04-01 13:46:06
 * @Description: file description
-->
<template>
  <div class="color-grid-chart">
    <div
      class="color-grid-chart-row"
      v-for="(dataRow, dataRowIndex) in data"
      :key="dataRowIndex"
      :style="{ height: itemHeight + 'px' }"
    >
      <div
        class="color-grid-chart-item"
        :style="{ background: calItemColor(dataItem.value).color }"
        v-for="(dataItem, dataItemIndex) in dataRow"
        :key="dataItemIndex"
        @click="itemClick(dataItem)"
      >
        <template v-if="$scopedSlots.default">
          <slot :record="dataItem" />
        </template>
        <span v-else> {{ dataItem.value }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ColorGridChart',
  props: {
    data: {
      type: Array,
      default: function () {
        return [[]]
      },
    },
    itemHeight: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      maxValue: 0,
      minValue: 0,
      colors: [],
      startColor: '#eceff9',
      endColor: '#273C70',
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
        // console.log('max:', max, min)
        // console.log('this.colors :', this.colors)
      },
    },
  },
  computed: {},
  created() {},
  mounted() {},
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
    itemClick(item) {
      this.$emit('itemClick', item)
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
    flex: 1;
    border: 1px solid white;
    &:hover {
      border-color: black;
    }
  }
}
</style>