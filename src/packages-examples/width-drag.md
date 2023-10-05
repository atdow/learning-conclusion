#### 1. 基础用法

:::demo 

```vue
<template>
  <div class="width-drag-demo">
    <div class="content" :style="{ width: menuWidth + 'px' }">
      <width-drag class="width-drag" :width="menuWidth" :min-width="200" :max-width="600" @widthChange="widthChange" />
    </div>
  </div>
</template>

<script>
import WidthDrag from "@/packages/width-drag";
export default {
  name: "dynamic-number",
  props: {},
  data() {
    return {
      menuWidth: 400,
    };
  },
  components: {
    WidthDrag,
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {}, 
  methods: {
    widthChange(value) {
      this.menuWidth = value
    },
  },
  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.width-drag-demo {
  .content {
    width: 400px;
    height: 200px;
    border: 1px solid #ccc;
    position: relative;
    .width-drag {
      position: absolute;
      top: 0;
      right: -1px;
      bottom: 0;
    }
  }
}
</style>
```

:::

#### 2. 指定左侧拖拽

:::demo 

```vue
<template>
  <div class="width-drag-demo2">
    <div class="content" :style="{ width: menuWidth + 'px' }">
      <width-drag class="width-drag" :width="menuWidth" :min-width="200" :max-width="600" positionType="left" @widthChange="widthChange" />
    </div>
  </div>
</template>

<script>
import WidthDrag from "@/packages/width-drag";
export default {
  name: "dynamic-number",
  props: {},
  data() {
    return {
      menuWidth: 400,
    };
  },
  components: {
    WidthDrag,
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {}, 
  methods: {
    widthChange(value) {
      this.menuWidth = value
    },
  },
  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.width-drag-demo2 {
  display: flex;
  justify-content: flex-end;
  .content {
    width: 400px;
    height: 200px;
    border: 1px solid #ccc;
    position: relative;
    .width-drag {
      position: absolute;
      top: 0;
      left: -1px;
      bottom: 0;
    }
  }
}
</style>
```

:::

### API

| 属性       | 说明           | 类型   | 默认值 |
| ---------- | -------------- | ------------ |------ |
| width | 当前宽度 | Number `required` | - |
| minWidth | 最小宽度 | Number `required` | - |
| maxWidth | 最大宽度 | Number `required` | - |
| positionType | 拖拽方向  | String `right/left` | right |
