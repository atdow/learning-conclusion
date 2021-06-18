# 滚动数字

## 第二标题

<slot></slot>

<slot name="scrollNumber"></slot>

```vue
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
