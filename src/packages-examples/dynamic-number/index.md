## 滚动数字

:::demo #### Button 组件基础用法:

```vue
<template>
    <DynamicNumber v-model="count" :isThousandSplit="true" :length="9" />
</template>

<script>
import DynamicNumber from "@/packages/dynamic-number";
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
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  },
  beforeDestroy() {},
};
</script>

<style lang="less" scoped></style>
```

:::