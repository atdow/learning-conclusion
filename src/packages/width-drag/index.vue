<!--
 * @Author: atdow
 * @Date: 2023-09-15 19:25:48
 * @LastEditors: null
 * @LastEditTime: 2023-09-15 20:55:14
 * @Description: file description
-->
<template>
   
  <div
    ref="horizontalDragDom"
    :class="['horizontal-drag', { 'horizontal-drag__hidden': showDragDom }]"
    @mousedown="handleMouseDown"
  >
    <div v-if="showDragDom" ref="dragDomRef" class="drag-dom" :style="getDragDomStyle()"></div>
  </div>
</template>
 
<script>
export default {
  name: 'HorizontalDrag',
  props: {
    width: {
      type: Number,
      require: true,
    },
    minWidth: {
      type: Number,
      require: true,
    },
    maxWidth: {
      type: Number,
      require: true,
    },
    positionType: {
      type: String,
      validator(val) {
        return ['left', 'right'].indexOf(val) !== -1
      },
      default: 'left',
    },
  },
  data() {
    return {
      showDragDom: false,
      startPosition: { x: 0, y: 0 },
      // 拖拽轴坐标
      dragDomX: 0,
      ragDomHeight: 0,
    }
  },
  components: {},
  watch: {},
  computed: {
    positionRate: function () {
      return this.positionType === 'left' ? 1 : -1
    },
  },
  created() {},
  mounted() {},
  methods: {
    getDragDomStyle() {
      return {
        left: this.startPosition.x + 'px',
        height: this.dragDomHeight + 'px',
        transform: `translateX(${this.dragDomX}px)`,
      }
    },
    handleMouseDown(event) {
      if (!event.target.classList.contains('horizontal-drag')) {
        return
      }
      const { height, left, top } = this.$refs.horizontalDragDom.getBoundingClientRect()
      // startPosition.value = { x: event.clientX, y: event.clientY } // 这里将会产生抖动
      this.startPosition = { x: left, y: top }

      this.dragDomX = 0
      this.dragDomHeight = height
      this.showDragDom = true
      this.setGlobalCursor('col-resize')
      document.addEventListener('mousemove', this.handleMouseMove)
      document.addEventListener('mouseup', this.handleMouseUp)
    },
    handleMouseMove(event) {
      const currentX = event.clientX
      this.updateDragDomX(currentX, currentX - this.startPosition.x)
      event.preventDefault() // 禁止全局选中
    },
    updateDragDomX(currentX, moveX) {
      // 不能使用这种方式，以为拖拽很快时将会将在边缘值周围直接停留
      // if (props.width + moveX < props.minWidth || props.width + moveX > props.maxWidth) {
      //   return
      // }
      this.dragDomX = currentX - this.startPosition.x
      const currentWidth = this.width + this.dragDomX * this.positionRate
      if (currentWidth > this.maxWidth) {
        this.dragDomX = (this.maxWidth - this.width) * this.positionRate
      } else if (currentWidth < this.minWidth) {
        this.dragDomX = (this.minWidth - this.width) * this.positionRate
      }
    },
    handleMouseUp() {
      this.showDragDom = false
      this.$emit('widthChange', this.width + this.dragDomX * this.positionRate)
      this.setGlobalCursor('auto')
      document.removeEventListener('mousemove', this.handleMouseMove)
      document.removeEventListener('mouseup', this.handleMouseUp)
    },
    setGlobalCursor(value) {
      document.body.style.cursor = value
    },
    disableGlobalSelect() {
      document.body.style.userSelect = 'none'
    },
    removeDisableGlobalSelect() {
      document.body.style.userSelect = 'auto'
    },
  },
  beforeDestroy() {},
}
</script>
<style lang="less" scoped>
.horizontal-drag {
  position: relative;
  width: 3px;
  background: transparent;
  cursor: col-resize;
  &:hover {
    background: green;
  }
  &.horizontal-drag__hidden {
    background: transparent;
  }
  .drag-dom {
    position: fixed;
    width: 3px;
    background: green;
    cursor: col-resize;
  }
}
</style>
