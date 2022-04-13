<!--
 * @Author: atdow
 * @Date: 2021-06-18 15:38:27
 * @LastEditors: null
 * @LastEditTime: 2022-04-12 21:02:16
 * @Description: file description
-->
<template>
  <aside class="s-sidebar">
    <div
      v-for="(sideBarDataItem, sideBarDataIndex) in sideBarData.groups || []"
      :key="sideBarDataIndex"
    >
      <p class="group-name">{{ sideBarDataItem.groupName }}</p>
      <ul class="component-list">
        <li
          :class="[
            'component-list-content',
            { active: $route.path.indexOf(listItem.path) !== -1 },
          ]"
          v-for="(listItem, listIndex) in sideBarDataItem.list"
          :key="listIndex"
          @click="switchRoute(listItem)"
        >
          {{ listItem.title }}
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import navConfig from '@/config/navConfig'
export default {
  name: 'Sidebar',
  props: {},
  data() {
    return {
      sideBarData: {
        groups: [],
      },
    }
  },
  components: {},
  watch: {},
  updated() {
    this.updatedSideBar()
  },
  computed: {
    routeActiveName: function () {
      return this.$route.name
    },
  },
  created() {
    this.updatedSideBar()
    // console.log("navConfig:", navConfig);
  },
  methods: {
    switchRoute(listItem) {
      if (this.$route.path.indexOf(listItem.path) === -1) {
        this.$router.push({ path: listItem.path })
      }
    },
    updatedSideBar() {
      const data = navConfig['zh-CN']
      const sideBarData =
        data.filter((dataItem) => {
          return this.$route.path.indexOf(dataItem.path) !== -1
        })[0] || {}
      this.sideBarData = sideBarData
    },
  },
  mounted() {},
  beforeDestroy() {},
}
</script>

<style lang="less" scoped>
@import "~@/style/vars.less";
.s-sidebar {
  width: 300px;
  // border-right: 1px solid rgba(0, 0, 0, 0.07);
  // border-right-width: 1px;
  // border-right-style: solid;
  // border-right-color: rgba(0, 0, 0, 0.07);
  // height: calc(100vh - 50px);
  box-sizing: border-box;
  padding: 30px 0 30px 0;
  overflow-y: auto;
  background: white;
  margin-right: 10px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
}
.component-list {
  display: flex;
  flex-direction: column;
  .component-list-content {
    height: 42px;
    line-height: 38px;
    font-size: 14px;
    color: #7285a1;
    padding: 1px 0 1px 20px;
    margin-bottom: 2px;
    cursor: pointer;
    // border-left: 4px solid white;
    transition: all 0.3s;
    position: relative;
    &::after {
      content: "";
      display: block;
      width: 4px;
      height: 0;
      background: @theme-color;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      transition: height 0.3s;
    }
    .active {
      color: @theme-color;
      &::after {
        height: 100%;
      }
    }
    &:hover {
      .active;
    }
    &.active {
      .active;
    }
  }
}
.group-name {
  color: rgb(163, 163, 163);
  padding-left: 10px;
}
</style>
