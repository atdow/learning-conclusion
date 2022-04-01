<!--
 * @Author: atdow
 * @Date: 2022-04-01 10:28:05
 * @LastEditors: null
 * @LastEditTime: 2022-04-01 13:42:40
 * @Description: file description
-->
<template>
  <Doc>
    <template v-slot:base>
      <ColorGridChart
        :data="ColorGridChartData"
        :itemHeight="50"
      ></ColorGridChart>
    </template>
    <template v-slot:slotWay>
      <ColorGridChart :data="ColorGridChartData" :itemHeight="50">
        <span slot-scope="{ record }">{{ `slot-${record.value}` }}</span>
      </ColorGridChart>
    </template>
  </Doc>
</template>
<script>
import Doc from "./readme.md";
import ColorGridChart from "@/packages/color-grid-chart";
export default {
  name: "color-grid-chart-example",
  props: {},
  data() {
    return {
      ColorGridChartData: [[{ name: 1, value: 1 }]],
    };
  },
  components: {
    Doc,
    ColorGridChart,
  },
  watch: {},
  computed: {},
  created() {
    let ColorGridChartData = [];
    for (let i = 0; i < 5; i++) {
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
  beforeDestroy() {},
};
</script>
<style lang="less" scoped>
</style>