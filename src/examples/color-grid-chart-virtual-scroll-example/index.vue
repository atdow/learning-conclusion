<!--
 * @Author: atdow
 * @Date: 2022-04-01 10:28:05
 * @LastEditors: null
 * @LastEditTime: 2022-04-01 17:13:46
 * @Description: file description
-->
<template>
  <Doc>
    <template v-slot:base>
      <ColorGridChartVirtualScroll
        :data="ColorGridChartData"
        :showTooltip="false"
      >
      </ColorGridChartVirtualScroll>
    </template>
    <template v-slot:useGridSlot>
      <ColorGridChartVirtualScroll
        :data="ColorGridChartData"
        :showTooltip="false"
      >
        <span slot-scope="{ record }">{{ `slot-${record.value}` }}</span>
      </ColorGridChartVirtualScroll>
    </template>
    <template v-slot:useTooltip>
      <ColorGridChartVirtualScroll
        :data="ColorGridChartData"
        :showTooltip="true"
      >
        <span slot="tooltipSlot" slot-scope="{ record }">{{ record }}</span>
      </ColorGridChartVirtualScroll>
    </template>
    <template v-slot:customCursorStyle>
      <ColorGridChartVirtualScroll
        :data="ColorGridChartData"
        :showTooltip="false"
        :cursorStyle="cursorStyle"
        @itemMouseMove="itemMouseMove"
        @itemClick="itemClick"
      >
      </ColorGridChartVirtualScroll>
    </template>
  </Doc>
</template>
<script>
import Doc from "./readme.md";
import ColorGridChartVirtualScroll from "@/packages/color-grid-chart-virtual-scroll";
export default {
  name: "color-grid-chart-example",
  props: {},
  data() {
    return {
      ColorGridChartData: [],
      cursorStyle: { cursor: "auto" },
    };
  },
  components: {
    Doc,
    ColorGridChartVirtualScroll,
  },
  watch: {},
  computed: {},
  created() {
    let ColorGridChartData = [];
    for (let i = 0; i < 30; i++) {
      let item = [];
      for (let j = 0; j < 10; j++) {
        item.push({
          name: i,
          value: j,
        });
      }
      ColorGridChartData.push(item);
    }
    this.ColorGridChartData = ColorGridChartData;
  },
  mounted() {},
  methods: {
    itemMouseMove(item) {
      const { value = 0 } = item;
      if (value > 0) {
        this.cursorStyle = { cursor: "pointer" };
      } else {
        this.cursorStyle = { cursor: "not-allowed" };
      }
    },
    itemClick(item) {},
  },
  beforeDestroy() {},
};
</script>
<style lang="less" scoped>
</style>