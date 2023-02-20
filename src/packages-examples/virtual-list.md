### 1. 基本使用

:::demo 

```vue
<template>
  <virtual-list 
    :data="data" 
    :maxHeight="300" 
    :itemHeight="30" 
    @scrollBottom="scrollBottom"
  >
    <div slot-scope="{ item, index }">{{ item }}</div>
  </virtual-list>
</template>
<script>
import VirtualList from "@/packages/virtual-list";
export default {
  name: "ScrollbarExample",
  props: {},
  data() {
    return {
      data: []
    };
  },
  components: {
    VirtualList,
  },
  watch: {},
  computed: {},
  created() {
    const data = []
    for(let i = 0;i < 100; i++){
      data.push(i)
    }
    this.data = data
  },
  mounted() {},
  methods: {
    scrollBottom() {
      console.log('scrollBottom')
    }
  },
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
| data  | 数据  | Array | [] |
| itemHeight | 每一项的高度 | Number       | 30     |
| maxHeight | 最大高度 | Number       | 200     |
| fixedHeight | 是否固定高度 | Boolean       | false     |
| defaultUpdateToTop | 当data更新时，是否自动滚到到顶部 | Boolean       | true     |
| bufferCount | 预渲染数据 | Number       | 3     |

### 事件

| 事件名称  | 说明                 | 回调参数           |
| --------- | -------------------- | ------------------ |
| scrollBottom | 滚动到底部事件 | - |

### 方法

| 事件名称  | 说明                 | 参数           |
| --------- | -------------------- | ------------------ |
| resetToTop | 滚动到顶部 | - |
