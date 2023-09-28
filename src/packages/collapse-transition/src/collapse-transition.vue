<!--
 * @Author: atdow
 * @Date: 2023-09-29 01:01:50
 * @LastEditors: null
 * @LastEditTime: 2023-09-29 02:43:03
 * @Description: file description
-->
<template>
  <transition name="s-collapse-transition" v-on="on">
    <slot />
  </transition>
</template>
 
<script>
import { on } from './utils'
export default {
  name: 'CollapseTransition',
  props: {},
  data() {
    return {
      on: on,
    }
  },
  components: {},
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
}
</script>
 
<style lang="less" scoped>
@duration: 0.3s;
.collapse-transition {
  transition: @duration height ease-in-out, @duration padding-top ease-in-out, @duration padding-bottom ease-in-out;
}

.s-collapse-transition-leave-active,
.s-collapse-transition-enter-active {
  transition: @duration max-height ease-in-out, @duration padding-top ease-in-out, @duration padding-bottom ease-in-out;
}
</style>
