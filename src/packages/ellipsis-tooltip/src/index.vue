<!--
 * @Author: atdow
 * @Date: 2023-10-05 16:38:40
 * @LastEditors: null
 * @LastEditTime: 2023-10-07 23:36:56
 * @Description: file description
-->
<template>
   
  <div class="ellipsis" ref="contentRef">
    <div v-if="lines > 1" ref="slotMultiContainerRef">
      <div v-if="isEllipsis" class="over-ellipsis-n" :style="{ '-webkit-line-clamp': lines }">
        <el-tooltip class="box-item" effect="dark" placement="top">
          <template #content>
            <slot></slot>
          </template>
          <div>
            <slot></slot>
          </div>
        </el-tooltip>
      </div>
       <slot v-else></slot>
    </div>
    <div v-else ref="slotSingleContainerRef2" style="white-space: nowrap">
      <div v-if="isEllipsis" class="over-ellipsis-n" :style="{ '-webkit-line-clamp': lines }">
        <el-tooltip class="box-item" effect="dark" placement="top">
          <template #content>
            <slot></slot>
          </template>
          <div class="single-over-ellipsis">
            <slot></slot>
          </div>
        </el-tooltip>
      </div>
       <slot v-else></slot>
    </div>
  </div>
</template>
 
<script>
import { addResizeListener, removeResizeListener } from '@/utils/resize-event'
export default {
  name: 'EllipsisTooltip',
  props: {
    lines: {
      type: Number,
      default: 1,
    },
    // 用于检测文字变化触发重新计算
    text: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      isEllipsis: false,
    }
  },
  components: {},
  watch: {
    text: {
      handler: function () {
        this.$nextTick(() => {
          this.calTooltip()
        })
      },
    },
  },
  computed: {},
  created() {},
  mounted() {
    addResizeListener(this.$refs.contentRef, this.resizeResolve)
  },
  methods: {
    resizeResolve() {
      this.calTooltip()
    },
    calTooltip() {
      this.setIsEllipsis(false)
      this.$nextTick(() => {
        // 多行超出
        if (this.lines > 1) {
          const slotDom = this.$refs.slotMultiContainerRef
          if (!slotDom) {
            return
          }
          const style = window.getComputedStyle(slotDom, null)
          const fontSize = style.fontSize.replace('px', '')
          // NOTE 如果lineHeight计算不对，需要外部样式设置容器的line-height样式
          const lineHeight = style.lineHeight === 'normal' ? fontSize : style.lineHeight.replace('px', '')
          const textLines = Math.round(style.height.replace('px', '') / lineHeight)
          this.setIsEllipsis(textLines > this.lines)
        } else {
          // 单行超出
          const slotDom = this.$refs.slotSingleContainerRef2
          if (!slotDom) {
            return
          }
          const flag = this.isSingleOverEllipsis(slotDom)
          this.setIsEllipsis(flag)
        }
      })
    },
    setIsEllipsis(flag) {
      this.isEllipsis = flag
    },
    isSingleOverEllipsis(el) {
      const textContent = el
      const targetW = textContent.getBoundingClientRect().width
      const range = document.createRange()
      range.setStart(textContent, 0)
      range.setEnd(textContent, textContent.childNodes.length)
      const rangeWidth = range.getBoundingClientRect().width
      range.detach() //从文档中分离
      // range = null //解除引用
      return rangeWidth > targetW
    },
  },
  beforeDestroy() {
    removeResizeListener(this.$refs.contentRef, this.resizeResolve)
  },
}
</script>
 
<style lang="less" scoped>
.over-ellipsis-n {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  // white-space: normal;
}
.single-over-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}
</style>
