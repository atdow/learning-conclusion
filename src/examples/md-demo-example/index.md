## Button 组件

一、`Button` 组件的基本使用

:::demo #### Button 组件基础用法:

```vue
<template>
  <div>
    <s-tabbar v-model="activeName" @tab-click="handleClick">
      <s-tabbar-item label="用户管理" name="first">用户管理</s-tabbar-item>
      <s-tabbar-item label="配置管理" name="second">配置管理</s-tabbar-item>
      <s-tabbar-item label="角色管理" name="third">角色管理</s-tabbar-item>
    </s-tabbar>
  </div>
</template>

<script>
export default {
  name: "test",
  props: {},
  data() {
    return {
      activeName: "first",
    };
  },
  components: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleClick() {},
  },
  beforeDestroy() {},
};
</script>

<style lang="less" scoped></style>
```

:::
