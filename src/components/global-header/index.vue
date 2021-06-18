<!--
 * @Author: atdow
 * @Date: 2021-06-18 16:56:38
 * @LastEditors: null
 * @LastEditTime: 2021-06-18 18:46:31
 * @Description: file description
-->
<template>
  <div class="s-global-header">
    <h3>常用组件</h3>
  </div>
</template>

<script>
export default {
  name: "global-header",
  props: {},
  data() {
    return {};
  },
  components: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.s-global-header {
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding-left: 30px;
}
</style>
