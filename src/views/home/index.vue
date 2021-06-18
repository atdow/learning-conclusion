<!--
 * @Author: atdow
 * @Date: 2021-06-17 10:31:50
 * @LastEditors: null
 * @LastEditTime: 2021-06-18 18:44:02
 * @Description: file description
-->
<template>
  <div class="s-home">
    <GlobalHeader />
    <div class="s-content">
      <SiderBar />
      <div class="example-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import SiderBar from "@/components/siderbar";
import GlobalHeader from "@/components/global-header";

export default {
  name: "index",
  data() {
    return {
      count: 0,
    };
  },
  components: {
    SiderBar,
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
