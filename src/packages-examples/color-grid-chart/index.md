## 色块图

:::demo ### 1.基本使用:

```vue
<template>
    <ColorGridChart
      :data="ColorGridChartData"
      :itemHeight="50"
      style="width:80%;margin:0 auto"
    ></ColorGridChart>
</template>
<script>
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
```

:::

:::demo #### 2.使用插槽:

```vue
<template>
      <ColorGridChart :data="ColorGridChartData" :itemHeight="50" style="width:80%;margin:0 auto">
        <span slot-scope="{ record }">{{ `slot-${record.value}` }}</span>
      </ColorGridChart>
</template>
<script>
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
```

:::

### API

| 属性       | 说明           | 类型         | 默认值 |
| ---------- | -------------- | ------------ | ------ |
| data       | 渲染数据       |    `Array<Array> `| `[[]]`   |
| itemHeight | 每个格子的高度 | Number       | 50     |

### 事件

| 事件名称  | 说明                 | 回调参数           |
| --------- | -------------------- | ------------------ |
| itemClick | 点击每个格子时的回调 | (itemData) => void |