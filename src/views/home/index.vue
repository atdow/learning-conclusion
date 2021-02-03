import VueRouter from "vue-router";

<template>
  <div>
    <div class="test-container">
      <div
        class="vuebar-element"
        :style="{ height: testContainerHeight + 'px' }"
        v-bar="{ overrideFloatingScrollbar: true, useScrollbarPseudo: true }"
      >
        <div class="el2">
          <ul class="test-scollbar-content">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      testContainerHeight: 200,
    };
  },
  components: {},
  mounted() {
    setTimeout(() => {
      this.testContainerHeight += 100;
      // let dom = document.querySelector(".el-select-dropdown__wrap");
      // console.log("dom:", dom);
      // dom.style.maxHeight = "400px";
    }, 3000);
  },
};
</script>
<style lang="less" scoped>
.test-container {
  // width: 300px;
  // overflow-x: scroll;
  // height: 200px;
  // background: pink;
}
.test-scollbar-content {
  // display: flex;
  // flex-direction: column;
  width: 500px;
  li {
    width: 500px;
    height: 100px;
    border-bottom: 1px solid #ccc;
  }
}
</style>