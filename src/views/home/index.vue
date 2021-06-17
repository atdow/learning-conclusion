<!--
 * @Author: atdow
 * @Date: 2021-06-17 10:31:50
 * @LastEditors: null
 * @LastEditTime: 2021-06-17 18:49:38
 * @Description: file description
-->
<template>
  <div>
    <h3 class="orderTitle">滚动数字</h3>
    <dynamic-number v-model="count" :isThousandSplit="true" :length="9" />
  </div>
</template>
<script>
import DynamicNumber from "@/components/dynamic-number";
export default {
  name: "index",
  data() {
    return {
      count: 0,
    };
  },
  components: {
    DynamicNumber,
  },
  mounted() {
    let timer = setInterval(() => {
      this.count += 123;
    }, 1000);
    this.$once("hook:beforeDestory", () => {
      clearInterval(timer);
    });
  },
};
</script>
<style lang="less" scoped></style>
