<!--
 * @Author: atdow
 * @Date: 2022-04-14 22:14:50
 * @LastEditors: null
 * @LastEditTime: 2023-04-16 11:56:30
 * @Description: file description
-->
<template>
   <div class="progress">
     <s-progress :percent="10" background="rgb(232, 232, 232)" :height="20" :minWidth="50" direction="left"></s-progress>
  </div class="progress">
</template>
 
<script>
import SProgress from '@/packages/progress'
export default {
  name: 'Progress',
  props: {},
  data() {
    return {}
  },
  components: {
    SProgress,
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
}
</script>
 
<style lang="less" scoped>
</style>