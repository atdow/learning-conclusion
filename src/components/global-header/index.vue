<!--
 * @Author: atdow
 * @Date: 2021-06-18 16:56:38
 * @LastEditors: null
 * @LastEditTime: 2022-04-03 21:31:11
 * @Description: file description
-->
<template>
  <div class="s-global-header">
    <h3>常用组件</h3>
    <ul class="s-menu">
      <template v-for="(item, index) in navConfig['zh-CN']">
        <li
          :class="{ 's-menu__active': $route.path.indexOf(item.path) !== -1 }"
          :key="index"
          @click="changeMenu(item)"
        >
          {{ item.name }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import navConfig from "@/config/navConfig";
// console.log("navConfig:", navConfig);

export default {
  name: "global-header",
  props: {},
  data() {
    return {
      navConfig,
    };
  },
  components: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    changeMenu(item) {
      const path = item.groups[0].list[0].path;
      if (this.$route.path.indexOf(path) === -1) {
        this.$router.push({ path: path });
      }
    },
  },
  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
@import "~@/style/vars.less";
.s-global-header {
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding-left: 30px;
}
.s-menu {
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 10px;
  li {
    padding: 0 10px;
    height: 100%;
    transition: all 0.3s;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 5px;
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background: @theme-color;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      transition: width 0.3s;
    }
    &:hover {
      color: @theme-color;
      &::after {
        width: 100%;
      }
    }
  }
  &__active {
    color: @theme-color;
    &::after {
      width: 100% !important;
    }
  }
}
</style>
