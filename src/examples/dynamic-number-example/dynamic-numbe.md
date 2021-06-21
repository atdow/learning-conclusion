<!--
 * @Author: atdow
 * @Date: 2021-06-18 18:23:37
 * @LastEditors: null
 * @LastEditTime: 2021-06-21 16:59:36
 * @Description: file description
-->

# 滚动数字

## 第二标题

<slot></slot>

<slot name="scrollNumber"></slot>
language-javascript

```language-javascript
<template>
  <DynamicNumber v-model="count" :isThousandSplit="true" :length="9" />
</template>

<script>
import DynamicNumber from "@/components/dynamic-number";
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
```
