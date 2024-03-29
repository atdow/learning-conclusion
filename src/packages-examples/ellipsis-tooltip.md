> 当指定 `多行省略` 时，如果计算错误，请给容器内的文字添加 `line-height` 样式

> 组件使用 `el-tooltip` 作为tooltip基础组件，如果使用其他ui组件，请手动替换代码的tooltip基础组件

#### 1. 单行省略

:::demo 

```vue
<template>
   <div>
    <ellipsis-tooltip text="单行省略">
      1.单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略
    </ellipsis-tooltip>
    <br/>
    <ellipsis-tooltip :text="text">{{ text }}</ellipsis-tooltip>
    <br/>
    <button @click="decText">减少文字</button>
    <button @click="addText">添加文字</button>
   </div>
</template>

<script>
import EllipsisTooltip from "@/packages/ellipsis-tooltip";
export default {
  data() {
    return {
      text: '2.文字'
    }
  },
  components: {
    EllipsisTooltip,
  },
  methods: {
    decText() {
      this.text = this.text.slice(0, this.text.length - 5)
    },
    addText() {
      this.text += '添加的文字'
    }
  }
};
</script>

<style lang="less" scoped></style>
```

:::

#### 2. 多行省略

:::demo 

```vue
<template>
   <div>
    <ellipsis-tooltip :lines="2" text="多行省略" style="line-height: 20px">
      1.多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略
    </ellipsis-tooltip>
    <br/>
    <ellipsis-tooltip :lines="2" :text="text" style="line-height: 20px">{{ text }}</ellipsis-tooltip>
    <br/>
    <button @click="decText">减少文字</button>
    <button @click="addText">添加文字</button>
   </div>
</template>

<script>
import EllipsisTooltip from "@/packages/ellipsis-tooltip";
export default {
  data() {
    return {
      text: '2.文字'
    }
  },
  components: {
    EllipsisTooltip,
  },
  methods: {
    decText() {
      this.text = this.text.slice(0, this.text.length - 5)
    },
    addText() {
      this.text += '添加的文字'
    }
  }
};
</script>

<style lang="less" scoped></style>
```

:::

### API

| 属性       | 说明           | 类型   | 默认值 |
| ---------- | -------------- | ------------ |------ |
| lines | 省略行数 | Number | 1 |
| text | 容器内的文本( `用于监测容器内文本变化时触动计算` ) | String `required` | '' |
