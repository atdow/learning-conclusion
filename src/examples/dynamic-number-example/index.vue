<!--
 * @Author: atdow
 * @Date: 2021-06-18 16:01:14
 * @LastEditors: null
 * @LastEditTime: 2021-06-18 18:28:00
 * @Description: file description
-->

<template>
  <div class="dynamic-number">
    <DynamicNumberMd>
      <p style="color:red">默认插槽</p>
      <template v-slot:scrollNumber>
        <DynamicNumber v-model="count" :isThousandSplit="true" :length="9" />
      </template>
    </DynamicNumberMd>
  </div>
</template>

<script>
import DynamicNumber from "@/components/dynamic-number";
import DynamicNumberMd from "./dynamic-numbe.md";
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
    DynamicNumberMd,
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    let timer = setInterval(() => {
      this.count += 123;
    }, 1000);
    this.$once("hook:beforeDestory", () => {
      clearInterval(timer);
    });
  },
  beforeDestroy() {},
};
</script>

<style lang="less" scoped></style>
