<!--
 * @Author: atdow
 * @Date: 2021-06-17 10:31:50
 * @LastEditors: null
 * @LastEditTime: 2022-04-01 19:20:25
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
import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js";

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
  mounted() {
    this.setCodeHighLight();
  },
  updated() {
    this.setCodeHighLight();
  },
  methods: {
    setCodeHighLight() {
      this.$nextTick(() => {
        [
          ...document.querySelectorAll(
            ".vue-demo-highlight pre code:not(.hljs)"
          ),
        ].forEach((block) => {
          hljs.highlightBlock(block);
        });
      });
    },
  },
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
