#### 1. 单行省略

:::demo 

```vue
<template>
   <ellipsis-tooltip>
      单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略
    </ellipsis-tooltip>
</template>

<script>
import EllipsisTooltip from "@/packages/ellipsis-tooltip";
export default {
  components: {
    EllipsisTooltip,
  },
};
</script>

<style lang="less" scoped></style>
```

:::

#### 2. 多行省略

:::demo 

```vue
<template>
   <ellipsis-tooltip :lines="2">
      多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略
    </ellipsis-tooltip>
</template>

<script>
import EllipsisTooltip from "@/packages/ellipsis-tooltip";
export default {
  components: {
    EllipsisTooltip,
  },
};
</script>

<style lang="less" scoped></style>
```

:::

### API

| 属性       | 说明           | 类型   | 默认值 |
| ---------- | -------------- | ------------ |------ |
| lines | 省略行数 | Number | 1 |
