#### 1. 基础用法

:::demo 

```vue
<template>
  <DynamicNumber v-model="count"/>
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

#### 2. 指定数字最大显示长度

:::demo 

```vue
<template>
  <DynamicNumber v-model="count" :length="2"/>
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
      this.count += 12;
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

#### 3. 使用千分分割

:::demo 

```vue
<template>
  <DynamicNumber v-model="count" :isThousandSplit="true"/>
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

### API

| 属性       | 说明           | 类型   | 默认值 |
| ---------- | -------------- | ------------ |------ |
| v-modal | 绑定值 | Number | 0 |
| length | 最大显示长度 | Number | 9 |
| isThousandSplit | 是否使用千分分割 | Boolean | false |
