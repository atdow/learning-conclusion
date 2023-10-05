<!--
 * @Author: atdow
 * @Date: 2021-06-18 15:38:27
 * @LastEditors: null
 * @LastEditTime: 2023-10-05 16:23:58
 * @Description: file description
-->
<template>
  <div class="s-sidebar" :style="{ height: contentHeight, width: $store.getters.menuWidth + 'px' }">
    <MyScrollbar style="height: 100%">
      <div v-for="(sideBarDataItem, sideBarDataIndex) in sideBarData.groups || []" :key="sideBarDataIndex">
        <div class="group-name" @click="foldChange(sideBarDataItem, sideBarDataIndex)">
          <p class="group-name_title">{{ sideBarDataItem.groupName }}</p>
          <span :class="['group-name_fold', { 'is-fold': sideBarDataItem.isFold === true }]">
            <svg width="23" height="23" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M36 18L24 30L12 18"
                stroke="rgb(163, 163, 163)"
                stroke-width="3"
                stroke-linecap="butt"
                stroke-linejoin="miter"
              />
            </svg>
          </span>
        </div>
        <CollapseTransition>
          <ul
            v-show="sideBarDataItem.isFold !== true"
            :class="['component-list', { 'is-fold': sideBarDataItem.isFold === true }]"
          >
            <li
              :class="['component-list-content', { active: $route.path.endsWith(listItem.path) }]"
              v-for="(listItem, listIndex) in sideBarDataItem.list"
              :key="listIndex"
              @click="switchRoute(listItem)"
            >
              {{ listItem.title }}
            </li>
          </ul>
        </CollapseTransition>
      </div>
    </MyScrollbar>
    <width-drag
      class="width-drag"
      :width="$store.getters.menuWidth"
      :min-width="menuMinWidth"
      :max-width="menuMaxWidth"
      @widthChange="widthChange"
    />
  </div>
</template>

<script>
import navConfig from '@/config/navConfig'
import MyScrollbar from '@/packages/scrollbar'
import contentMixin from '@/mixins/contentMixin'
import WidthDrag from '@/packages/width-drag'
import CollapseTransition from '@/packages/collapse-transition'
import { Menu_Min_Width, Menu_Max_Width } from '@/store/mutation-types'

export default {
  name: 'Sidebar',
  mixins: [contentMixin],
  props: {},
  data() {
    return {
      sideBarData: {
        groups: [],
      },
      menuMinWidth: Menu_Min_Width,
      menuMaxWidth: Menu_Max_Width,
    }
  },
  components: {
    MyScrollbar,
    WidthDrag,
    CollapseTransition,
  },
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
  mounted() {},
  methods: {
    switchRoute(listItem) {
      if (!this.$route.path.endsWith(listItem.path)) {
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
    foldChange(sideBarDataItem, sideBarDataIndex) {
      this.$set(this.sideBarData.groups, sideBarDataIndex, {
        ...sideBarDataItem,
        isFold: !Boolean(sideBarDataItem.isFold),
      })
    },
    widthChange(value) {
      this.$store.dispatch('setMenuWidth', value)
    },
  },
  beforeDestroy() {},
}
</script>

<style lang="less" scoped>
@import '~@/style/vars.less';
.s-sidebar {
  width: 250px;
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
  flex-shrink: 0;
  position: relative;
  /deep/.width-drag {
    position: absolute;
    top: 0;
    right: 0px;
    bottom: 0;
    z-index: 1000;
    border-radius: 0 2px 2px 0;
    .drag-dom {
      border-radius: 0 2px 2px 0;
    }
  }
}
.component-list {
  display: flex;
  flex-direction: column;
  &.is-fold {
    // height: 0;
    // overflow: hidden;
  }
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
      content: '';
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
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  .group-name_fold {
    cursor: pointer;
    // transform: rotateZ(90deg);
    &.is-fold {
      transform: rotateZ(180deg);
    }
  }
}
</style>
