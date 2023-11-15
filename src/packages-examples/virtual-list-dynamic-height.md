### 1. 基础使用

:::demo 

```vue
<template>
  <div>
    <virtual-list-dynamic-height 
      :list="dataList" 
      style="height: 600px"
      ref="virtualListRef"
      @scroll="scroll"
      @scrollBottom="scrollBottom"
    >
      <div
        class="slot-item"
        slot-scope="{ data, index }"
        :style="{
          height: index === 10 || index === 13 ? null : randomHeight[index] + 'px',
          lineHeight: index === 10 || index === 13 ? null : randomHeight[index] + 'px',
          boxSizing: 'border-box',
          padding: '0 10px',
          background: index % 2 === 0 ? '#f4f5f5' : 'white'
        }"
      >
        <div>{{ index }}: {{ data }}</div>
        <img
          v-if="index === 10 || index === 13"
          style="height: 300px"
          src="https://img2.baidu.com/it/u=3960765496,2398254827&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
          alt=""
        />
      </div>
    </virtual-list-dynamic-height>
    <button style="margin-top: 10px" @click="scrollTopTest">滚动到顶部</button>
  </div>

</template>
<script>
import VirtualListDynamicHeight from "@/packages/VirtualListDynamicHeight";
export default {
  name: "ScrollbarExample",
  props: {},
  data() {
    return {
      dataList: [],
      randomHeight: [],
      dataLength: 100
    };
  },
  components: {
    VirtualListDynamicHeight,
  },
  watch: {},
  computed: {},
  created() {
    this.dataList = [...Array(this.dataLength || 0).keys()].map((v, i) => ({
      id: i + 1,
      name: `第${i + 1}项`
    }))
    this.randomHeight = [...Array(this.dataLength || 0).keys()].map((v, i) => {
      return Math.floor(Math.max(Math.random() * 10, 5)) * 7
    })
    console.log('this.dataList:', this.dataList)
  },
  mounted() {},
  methods: {
    scrollBottom() {
      console.log('scrollBottom')
    },
    scroll(data) {
      console.log('data:', data)
    },
    scrollTopTest() {
      this.$refs.virtualListRef.scrollToTop()
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
| data  | 数据  | Array `required` | [] |
| estimatedItemHeight | 每一项假定的高度(不宜调得太小，不然首次渲染的时候将会渲染太大数据；调得太小可能会出现瞬间留白) | Number | 40     |
| bufferCount | 预渲染数据 | Number       | 3     |
| defaultUpdateToTop | 当data更新时，是否自动滚到到顶部 | Boolean       | true     |

### 事件

| 事件名称  | 说明                 | 回调参数           |
| --------- | -------------------- | ------------------ |
| scroll | 滚动事件 | (data) => void |
| scrollBottom | 滚动到底部事件 | - |

### 方法

| 事件名称  | 说明                 | 参数           |
| --------- | -------------------- | ------------------ |
| scrollToTop | 滚动到顶部 | - |
| scrollTo | 滚动到指定位置 | top `number` |
