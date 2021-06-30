<!--
 * @Author: atdow
 * @Date: 2021-03-18 11:58:08
 * @LastEditors: null
 * @LastEditTime: 2021-03-18 11:58:32
 * @Description: file content
-->

<template>
   
  <div class="s-magnify">   </div>
</template>
 
<script>
export default {
  name: 's-magnify',
  props: {},
  data() {
    return {}
  },
  components: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
}
</script>
 
<style lang="less" scoped>
// 放大
.s-magnify {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(1, 1, 1, 0.5);
  z-index: 99999;

  .magnify-content {
    width: 100%;
    box-sizing: border-box;
    padding: 0 40px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    .close {
      font-size: 30px;
      cursor: pointer;
      color: rgb(129, 126, 126);
    }
  }
}
</style>
