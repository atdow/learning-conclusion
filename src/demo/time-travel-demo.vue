<!--
 * @Author: atdow
 * @Date: 2022-10-07 18:49:14
 * @LastEditors: null
 * @LastEditTime: 2022-10-07 18:56:41
 * @Description: file description
-->
<template>
  <div class="g-container">
    <div class="g-group">
      <div class="item item-right"></div>
      <div class="item item-left"></div>   
      <div class="item item-top"></div>
      <div class="item item-bottom"></div> 
      <div class="item item-middle"></div>    
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'TimeTravelDemo',
  props: {},
  data() {
    return {}
  },
  components: {},
  watch: {},
  computed: {},
  created() { },
  mounted() { },
  beforeDestroy() { },
}
</script>
 
<style lang="less" scope>
body {
  background: #000;
}
.g-container {
  position: relative;
  // perspective: 4px;
}
.g-group {
  position: absolute;
  width: 100px;
  height: 100px;
  left: -50px;
  top: -50px;
  transform-style: preserve-3d;
}
.item {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, .5);
}
.item-right {
  background: red;
  transform: rotateY(90deg) translateZ(50px);
}
.item-left {
  background: green;
  transform: rotateY(-90deg) translateZ(50px);
}
.item-top {
  background: blue;
  transform: rotateX(90deg) translateZ(50px);
}
.item-bottom {
  background: deeppink;
  transform: rotateX(-90deg) translateZ(50px);
}
.item-middle {
  background: rgba(255, 255, 255, 0.5);
  transform: rotateX(180deg) translateZ(50px);
}
</style>