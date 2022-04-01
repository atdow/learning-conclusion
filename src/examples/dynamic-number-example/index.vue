<!--
 * @Author: atdow
 * @Date: 2021-06-18 16:01:14
 * @LastEditors: null
 * @LastEditTime: 2022-04-01 10:50:36
 * @Description: file description
-->

<template>
  <Doc>
    <p style="color: red">默认插槽</p>
    <template v-slot:scrollNumber>
      <DynamicNumber v-model="count" :isThousandSplit="true" :length="9" />
    </template>
  </Doc>
</template>

<script>
import DynamicNumber from "@/components/dynamic-number";
import Doc from "./readme.md";
export default {
  name: "dynamic-number",
  props: {},
  data() {
    return {
      count: 0,
    };
  },
  components: {
    DynamicNumber,
    Doc,
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    let timer = setInterval(() => {
      this.count += 123;
    }, 1000);
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  },
  beforeDestroy() {},
};
</script>

<style lang="less" scoped></style>
