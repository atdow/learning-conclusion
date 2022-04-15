<template>
  <div class="s-scroll-number">
    <li
      :class="{ 'number-item': !isNaN(item), 'mark-item': isNaN(item) }"
      v-for="(item, index) in initNumArray"
      :key="index"
      ref="itemRef"
    >
      <span v-if="!isNaN(item)">
        <i>0123456789</i>
      </span>
      <span class="comma" v-else>{{ item }}</span>
    </li>
  </div>
</template>
<script>
export default {
  name: 'ScrollNumber',
  model: {
    prop: 'count',
    event: 'setCount',
  },
  props: {
    count: {
      type: Number,
      default: 0,
    },
    isThousandSplit: {
      type: Boolean,
      default: false,
    },
    /**
     * 最大限制范围
     * 如果小于最大限制，则前面会补0
     */
    length: {
      type: Number,
      default: 9,
    },
  },
  data() {
    return {
      initNumArray: ['0'], // 初始化显示用
      displayNumArray: [], // 真正显示的数据
    }
  },
  watch: {
    count: {
      immediate: true,
      handler: function () {
        const num = this.count
        const numArray = this.numToArray(num)
        this.initNumArray = []
        numArray.forEach((orderNumItem) => {
          if (isNaN(orderNumItem)) {
            this.initNumArray.push(',')
          } else {
            this.initNumArray.push('0')
          }
        })
        this.displayNumArray = numArray
        this.$nextTick(() => {
          const timer = setTimeout(() => {
            this.setNumberTransform()
            clearTimeout(timer)
          }, 0)
        })
      },
    },
  },
  mounted() {},
  methods: {
    numToArray(num) {
      if (this.isThousandSplit === true) {
        if (this.length) {
          // -----最大限制范围判断start-----
          let maxNumStr = ''
          for (let i = 0; i < this.length; i++) {
            maxNumStr += '9'
          }
          if (Number(maxNumStr) < num && process.env.NODE_ENV === 'development') {
            console.warn('超出了最大限制范围')
            return this.thousandSplit(maxNumStr).split('')
            // return [];
          }
          // -----最大限制范围判断end-----
          // -----补0start-----
          let formatNum = ''
          if (String(num).length <= this.length) {
            const subLength = this.length - String(num).length
            formatNum = String(num)
            for (let i = 0; i < subLength; i++) {
              formatNum = '0' + formatNum
            }
          }
          // -----补0end-----
          return this.thousandSplit(formatNum).split('')
        } else {
          return this.thousandSplit(num).split('')
        }
      } else {
        return String(num).split('')
      }
    },
    // 千位分割
    thousandSplit(num) {
      var reg = /\d{1,3}(?=(\d{3})+$)/g
      return (num + '').replace(reg, '$&,')
    },
    // 文字滚动
    setNumberTransform() {
      this.displayNumArray.forEach((displayNumArrayItem, index) => {
        if (!isNaN(displayNumArrayItem)) {
          const elem = this.$refs.itemRef[index].children[0].children[0]
          elem.style.transform = `translate(-50%, -${displayNumArrayItem * 10}%)`
        }
      })
    },
  },
}
</script>
<style scoped lang="less">
/*总量滚动数字设置*/
.s-scroll-number {
  position: relative;
  height: 100px;
  font-size: 54px;
  line-height: 41px;
  text-align: center;
  list-style: none;
  color: #2d7cff;
  writing-mode: vertical-lr;
  text-orientation: upright;
  /*文字禁止编辑*/
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
  /* overflow: hidden; */
}
/* 默认逗号设置 */
.mark-item {
  width: 10px;
  height: 100px;
  margin-right: 5px;
  line-height: 10px;
  font-size: 48px;
  position: relative;
  & > span {
    position: absolute;
    width: 100%;
    bottom: 0;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
}
/*滚动数字设置*/
.number-item {
  width: 41px;
  height: 75px;
  background: #ccc;
  list-style: none;
  margin-right: 5px;
  background: rgba(250, 250, 250, 1);
  border-radius: 4px;
  border: 1px solid rgba(221, 221, 221, 1);
  & > span {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    width: 100%;
    height: 100%;
    writing-mode: vertical-rl;
    text-orientation: upright;
    overflow: hidden;
    & > i {
      font-style: normal;
      position: absolute;
      top: 11px;
      left: 50%;
      transform: translate(-50%, 0);
      transition: transform 0.7s ease-in-out;
      letter-spacing: 10px;
    }
  }
}
.number-item:last-child {
  margin-right: 0;
}
</style>
