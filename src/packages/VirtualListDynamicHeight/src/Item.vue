<!--
 * @Author: atdow
 * @Date: 2023-02-13 11:26:15
 * @LastEditors: null
 * @LastEditTime: 2023-02-20 23:41:49
 * @Description: file description
-->
<template>
  <li ref="node">
    <slot :data="data" :index="index"></slot>
  </li>
</template>
 
<script>
import { addResizeListener, removeResizeListener } from '@/utils/resize-event'
export default {
  props: {
    data:[Number,String,Object,Array],
    index: Number
  },
  data() {
    return {}
  },
  mounted() {
    this.resizeResolve()
    addResizeListener(this.$el, this.resizeResolve)
    this.$once('hook:beforeDestroy', () => {
      if (this.$el && this.resizeResolve) removeResizeListener(this.$el, this.resizeResolve)
    })
  },
  methods: {
    resizeResolve() {
      this.$emit('update-height', { height: this.$el.getBoundingClientRect().height, index: this.index })
    }
  }
}
</script>