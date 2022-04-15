<!--
 * @Author: atdow
 * @Date: 2022-04-14 22:15:53
 * @LastEditors: null
 * @LastEditTime: 2022-04-16 01:19:00
 * @Description: file description
-->
<template>
  <div
    v-if="percent || true"
    class="s-progress"
    :style="{
      width: `calc(100%)`,
      height: height + 'px',
      background: background,
      'line-height': height + 'px',
      'justify-content': direction === 'left' ? 'flex-start' : 'flex-end',
      'border-radius': containerRadius === true ? `${height / 2}px` : '0px',
    }"
    ref="progressContainerRef"
  >
    <div
      class="s-progress-content"
      :style="{
        background: strokeColor,
        width: progressContentWidth,
        'text-align': direction === 'right' ? 'left' : 'right',
        'border-radius': strokeRadius === true ? `${height / 2}px` : '0px',
      }"
    >
      <template v-if="$slots.default">
        <div
          :style="{
            'margin-right': direction === 'left' ? '10px' : 0,
            'margin-left': direction === 'right' ? '10px' : 0,
          }"
        >
          <slot></slot>
        </div>
      </template>
      <template v-else>
        <div
          :style="{
            'margin-right': direction === 'left' ? '10px' : 0,
            'margin-left': direction === 'right' ? '10px' : 0,
          }"
        >
          {{ percent }}%
        </div>
      </template>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'SProgress',
  props: {
    percent: {
      type: Number,
      default: 0,
    },
    direction: {
      type: String,
      default: 'left',
      validator: function (value) {
        return ['left', 'right'].indexOf(value) !== -1
      },
    },
    strokeColor: {
      type: String,
      default: 'green',
    },
    background: {
      type: String,
      default: '#ebeef5',
    },
    height: {
      type: Number,
      default: 20,
    },
    strokeRadius: {
      type: Boolean,
      default: true,
    },
    containerRadius: {
      type: Boolean,
      default: true,
    },
    minWidth: {
      type: Number,
      default: 0,
    },
    resizeDebounce: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      progressContentWidth: '0%',
    }
  },
  components: {},
  watch: {
    percent: {
      immediate: true,
      handler: function () {
        if (this.minWidth) {
          this.calProgressHasMinWidthContentWidth()
        } else {
          this.progressContentWidth = this.percent + '%'
        }
      },
    },
  },
  computed: {},
  created() {},
  mounted() {
    if (this.minWidth) {
      window.addEventListener('resize', this.calProgressHasMinWidthContentWidth, this.resizeDebounce)
      this.$once('hook:beforeDestroy', () => {
        window.removeEventListener('resize', this.calProgressHasMinWidthContentWidth)
      })
    }
  },
  methods: {
    calProgressHasMinWidthContentWidth() {
      this.$nextTick(() => {
        const { progressContainerRef } = this.$refs
        const progressContainerWidth = progressContainerRef.getBoundingClientRect().width
        const totalSplitWidth = progressContainerWidth - this.minWidth || 0
        this.progressContentWidth = this.minWidth + (this.percent / 100) * totalSplitWidth + 'px'
      })
    },
  },
  beforeDestroy() {},
}
</script>
 
<style lang="less" scoped>
.s-progress {
  display: flex;
  width: 100%;
  font-size: 12px;
  color: white;
  overflow: hidden;
  position: relative;
  &-content {
    flex-shrink: 0;
    box-sizing: border-box;
    overflow: hidden;
  }
}
</style>