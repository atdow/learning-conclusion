<!--
 * @Author: atdow
 * @Date: 2021-11-10 17:16:54
 * @LastEditors: null
 * @LastEditTime: 2022-04-01 10:51:50
 * @Description: file description
-->
<template>
  <Doc>
    <!-- <p style="color:red">默认插槽</p> -->
    <template v-slot:select>
      <s-tabbar v-model="activeName" @tab-click="handleClick">
        <s-tabbar-item label="用户管理" name="first">用户管理</s-tabbar-item>
        <s-tabbar-item label="配置管理" name="second">配置管理</s-tabbar-item>
        <s-tabbar-item label="角色管理" name="third">角色管理</s-tabbar-item>
      </s-tabbar>
    </template>
  </Doc>
</template>

<script>
import Doc from "./readme.md";
export default {
  name: "test",
  props: {},
  data() {
    return {
      activeName: "first",
    };
  },
  components: {
    Doc,
  },
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
