<!--
 * @Author: atdow
 * @Date: 2021-06-17 10:31:50
 * @LastEditors: null
 * @LastEditTime: 2022-04-04 17:33:15
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
    this.addExpand();
  },
  updated() {
    this.setCodeHighLight();
    this.addExpand();
  },
  methods: {
    setCodeHighLight() {
      this.$nextTick(() => {
        [
          ...document.querySelectorAll(
            // ".vue-demo-highlight pre code:not(.hljs)"
            "pre code:not(.hljs)"
          ),
        ].forEach((block) => {
          hljs.highlightBlock(block);
        });
      });
    },
    addExpand() {
      this.$nextTick(() => {
        let dom = document.querySelectorAll(".vue-demo-highlight pre");
        dom.forEach((domItem) => {
          let height = domItem.scrollHeight;
          domItem.style.setProperty("--max-height", height + "px");
          domItem.addEventListener("dblclick", () => {
            let className = domItem.className;
            if (className.indexOf("expand") === -1) {
              className = "expand";
            } else {
              className = "";
            }
            domItem.className = className;
          });
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

/deep/.vue-demo-highlight {
  position: relative;
  padding-bottom: 30px;
  &::after {
    content: "双击代码区域折叠展开";
    text-align: center;
    display: block;
    width: 100%;
    height: 30px;
    border: 1px solid #ccc;
    position: absolute;
    left: 0;
    bottom: 0;
    background: white;
    color: #ccc;
    font-size: 12px;
    line-height: 30px;
  }
  pre {
    transition: max-height 0.5s;
    overflow: hidden;
    max-height: 100px;
    margin-bottom: 0;
    &.expand {
      max-height: var(--max-height);
    }
  }
}
</style>
