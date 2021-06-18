<!--
 * @Author: atdow
 * @Date: 2021-06-18 15:38:27
 * @LastEditors: null
 * @LastEditTime: 2021-06-18 18:43:38
 * @Description: file description
-->
<template>
  <aside class="s-siderbar">
    <ul class="component-list">
      <li
        :class="['component-list-content', { active: key === routeActiveName }]"
        v-for="key in Object.keys(packagesJson)"
        :key="key"
        @click="switchComponent(key)"
      >
        {{ packagesJson[key].title }}
      </li>
    </ul>
  </aside>
</template>

<script>
import packagesJson from "@/packages/packages.json";
export default {
  name: "siderbar",
  props: {},
  data() {
    return {
      packagesJson,
    };
  },
  components: {},
  watch: {},
  computed: {
    routeActiveName: function() {
      return this.$route.name;
    },
  },
  created() {
    // console.log("packagesJson:", packagesJson);
  },
  methods: {
    switchComponent(key) {
      // console.log("switchComponent:", key);
      // console.log("this.$route:", this.$route.name);
      if (this.$route.name !== key) {
        this.$router.push({ name: key });
      }
    },
  },
  mounted() {},
  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.s-siderbar {
  width: 300px;
  border-right: 1px solid rgba(0, 0, 0, 0.07);
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: rgba(0, 0, 0, 0.07);
  height: calc(100vh - 50px);
  box-sizing: border-box;
  padding: 30px 0 30px 0;
  overflow-y: auto;
}
.component-list {
  display: flex;
  flex-direction: column;
  .component-list-content {
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    color: #7285a1;
    padding: 3px 0 3px 20px;
    cursor: pointer;
    border-left: 4px solid white;
    &:hover {
      color: green;
    }
    &.active {
      border-left: 4px solid green;
      color: green;
    }
  }
}
</style>
