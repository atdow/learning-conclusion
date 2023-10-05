<!--
 * @Author: atdow
 * @Date: 2023-10-05 16:38:40
 * @LastEditors: null
 * @LastEditTime: 2023-10-05 18:13:33
 * @Description: file description
-->
<template>
   
  <div class="ellipsis">
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
export default {
  name: 'EllipsisTooltip',
  props: {
    lines: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      isEllipsis: false,
    }
  },
  components: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {
    // 多行超出
    if (this.lines > 1) {
      const slotDom = this.$refs.slotMultiContainerRef
      if (!slotDom) {
        return
      }
      const style = window.getComputedStyle(slotDom, null)
      const fontSize = style.fontSize.replace('px', '')
      // TODO有潜在的问题
      const lineHeight = style.lineHeight === 'normal' ? fontSize : style.lineHeight.replace('px', '')
      const textLines = Math.round(style.height.replace('px', '') / lineHeight)
      // console.log('textLines:', textLines)
      this.setTooltip(textLines >= this.lines)
    } else {
      // 单行超出
      const slotDom = this.$refs.slotSingleContainerRef2
      if (!slotDom) {
        return
      }
      const flag = this.isSingleOverEllipsis(slotDom)
      this.setTooltip(flag)
    }
  },
  methods: {
    setTooltip(flag) {
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
  beforeDestroy() {},
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
