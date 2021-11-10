<!--
 * @Author: atdow
 * @Date: 2021-11-10 17:16:54
 * @LastEditors: null
 * @LastEditTime: 2021-11-10 17:34:43
 * @Description: file description
-->
<template>
  <div class="test">
    <TestDemoMd>
      <p style="color:red">默认插槽</p>
      <template v-slot:select>
        <s-select></s-select>
      </template>
     
    </TestDemoMd>
  </div>
</template>

<script>
import TestDemoMd from "./test-demo.md";
import SSelect from '@/components/select'
export default {
  name: "test",
  props: {},
  data() {
    return {};
  },
  components: {
    TestDemoMd,
    SSelect
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
};
</script>

<style lang="less" scoped></style>
