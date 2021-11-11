<!--
 * @Author: atdow
 * @Date: 2021-11-10 17:31:45
 * @LastEditors: null
 * @LastEditTime: 2021-11-11 11:55:23
 * @Description: file description
-->
<template>
  <div class="s-tabbar">
    <div class="s-tabbar-header">
      <div
        :class="['s-tabbar-header-item', { acitve: activeName === item.name }]"
        v-for="(item, index) in tabbarData"
        :key="index"
        @click="tabbarClick(item)"
      >
        {{ item.label }}
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "STabbar",
  model: {
    prop: "activeName",
    event: "setActiveName",
  },
  props: {
    activeName: {
      type: String,
    },
  },
  data() {
    return {
      tabbarData: [
        // {
        //   label:"",
        //   name:""
        // }
      ],
    };
  },
  components: {},
  watch: {
    $slots: {
      immediate: true,
      handler: function() {
        let slots = this.$slots.default;
        slots.forEach((slotsItem) => {
          this.tabbarData.push(slotsItem.componentOptions.propsData);
        });
      },
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    tabbarClick(item) {
      this.$emit("setActiveName", item.name);
    },
  },
  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.s-tabbar {
  &-header {
    display: flex;
    &-item {
      cursor: pointer;
      padding: 10px 20px;
      &.acitve {
        color: blue;
      }
    }
  }
}
</style>
