<!--
 * @Author: atdow
 * @Date: 2021-06-17 10:31:50
 * @LastEditors: null
 * @LastEditTime: 2022-04-01 10:19:30
 * @Description: file description
-->
<template>
  <div class="s-home">
    <GlobalHeader />
    <div class="s-content">
      <SideBar />
      <div class="example-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/sidebar";
import GlobalHeader from "@/components/global-header";

export default {
  name: "index",
  data() {
    return {
      count: 0,
    };
  },
  components: {
    SideBar,
    GlobalHeader,
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.s-home {
}
.s-content {
  display: flex;
}
.example-container {
  width: 100%;
  padding: 30px;
  overflow-y: auto;
  box-sizing: border-box;
  height: calc(100vh - 50px);
}
</style>
