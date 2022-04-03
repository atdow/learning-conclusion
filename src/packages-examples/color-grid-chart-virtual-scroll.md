> 默认使用 `{name:xxx, value:xxx}` 中的 value 显示格子内容，不显示 tooltip

:::demo #### 1. 基本使用:

```vue
<template>
    <ColorGridChartVirtualScroll
      :data="ColorGridChartData"
      :showTooltip="false"
      style="width:80%;margin:0 auto"
    >
    </ColorGridChartVirtualScroll>
</template>
<script>
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
  },
  beforeDestroy() {},
};
</script>
<style lang="less" scoped>
</style>
```

:::

:::demo #### 2. 使用插槽显示格子内容:

```vue
<template>
    <ColorGridChartVirtualScroll
      :data="ColorGridChartData"
      :showTooltip="false"
      style="width:80%;margin:0 auto"
    >
        <span slot-scope="{ record }">{{ `slot-${record.value}` }}</span>
    </ColorGridChartVirtualScroll>
</template>
<script>
import ColorGridChartVirtualScroll from "@/packages/color-grid-chart-virtual-scroll";
export default {
  name: "color-grid-chart-example",
  props: {},
  data() {
    return {
      ColorGridChartData: [],
    };
  },
  components: {
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
  },
  beforeDestroy() {},
};
</script>
<style lang="less" scoped>
</style>
```

:::

:::demo #### 3. 使用 tooltip:

```vue
<template>
    <ColorGridChartVirtualScroll
      :data="ColorGridChartData"
      :showTooltip="true"
      style="width:80%;margin:0 auto"
    >
        <span slot="tooltipSlot" slot-scope="{ record }">{{ record }}</span>
    </ColorGridChartVirtualScroll>
</template>
<script>
import ColorGridChartVirtualScroll from "@/packages/color-grid-chart-virtual-scroll";
export default {
  name: "color-grid-chart-example",
  props: {},
  data() {
    return {
      ColorGridChartData: [],
    };
  },
  components: {
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
  },
  beforeDestroy() {},
};
</script>
<style lang="less" scoped>
</style>
```

:::

:::demo #### 4. 改变 grid 中的鼠标样式:

```vue
<template>
    <ColorGridChartVirtualScroll
      :data="ColorGridChartData"
      :showTooltip="false"
      :cursorStyle="cursorStyle"
      @itemMouseMove="itemMouseMove"
      @itemClick="itemClick"
      style="width:80%;margin:0 auto"
    >
    </ColorGridChartVirtualScroll>
</template>
<script>
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
```

:::

### API

| 属性        | 说明                                                            | 类型         | 默认值           |
| ----------- | --------------------------------------------------------------- | ------------ | ---------------- |
| data        | 渲染数据                                                        | `Array<Array>` | `[[]]  ` |
| itemHeight  | 每个格子的高度                                                  | Number       | 50               |
| itemWidth   | 每个格子的宽度                                                  | Number       |                  |
| maxHeight   | 容器的最大高度                                                  | Number       | 300              |
| showTooltip | 是否显示 showTooltip , 当时显示时需要指定插槽 slot="tooltipSlot" | Boolean      | true             |
| cursorStyle | grid 的鼠标样式                                                 | Object       | {cursor:"auto" } |

### 事件

| 事件名称      | 说明                     | 回调参数           |
| ------------- | ------------------------ | ------------------ |
| itemClick     | 点击每个格子时的回调     | `(itemData) => void` |
| itemMouseMove | 在每个格子上移动时的回调 | `(itemData) => void` |
