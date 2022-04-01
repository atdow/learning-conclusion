<!--
 * @Author: atdow
 * @Date: 2022-04-01 21:49:54
 * @LastEditors: null
 * @LastEditTime: 2022-04-01 23:08:29
 * @Description: file description
-->
<template>
  <div class="demo-button">
    <ButtonDemo></ButtonDemo>
  </div>
</template>

<script>
import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js";
import ButtonDemo from "./ButtonDemo.md";

export default {
  name: "APP",
  components: {
    ButtonDemo,
  },
  mounted() {
    this.$nextTick(() => {
      [
        ...document.querySelectorAll(".vue-demo-highlight pre code:not(.hljs)"),
      ].forEach((block) => {
        hljs.highlightBlock(block);
      });
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
};
</script>

<style lang="scss">
.demo-button {
  margin: 20px auto 0;
  width: 70%;

  .vue-demo-wrapper {
    position: relative;
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 20px;
    margin-top: 20px;

    .vue-demo-desc,
    .vue-demo-highlight {
      margin-top: 20px;
    }
    .vue-demo-highlight {
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
        &.expand {
          max-height: var(--max-height);
          //   height: 100px;
          //   overflow: auto;
        }
      }
    }
  }
}
</style>