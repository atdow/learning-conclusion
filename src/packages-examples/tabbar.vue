<!--
 * @Author: atdow
 * @Date: 2021-11-10 17:16:54
 * @LastEditors: null
 * @LastEditTime: 2022-04-01 18:51:08
 * @Description: file description
-->
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
  name: 'Test',
  props: {},
  data() {
    return {
      activeName: 'first',
    }
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
}
</script>

<style lang="less" scoped></style>
