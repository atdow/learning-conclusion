### 1. 基本使用

:::demo 

```vue
<template>
  <div>
    <virtual-list 
      :data="data" 
      :itemHeight="30" 
      ref="virtualListRef"
      style="height: 300px"
      @scroll="scroll"
      @scrollBottom="scrollBottom"
    >
      <div slot-scope="{ item, index }">{{ item }}</div>
    </virtual-list>
    <button style="margin-top: 10px" @click="scrollTopTest">滚动到顶部</button>
  </div>

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
    },
    scroll(data) {
      console.log('data:', data)
    },
    scrollTopTest() {
      this.$refs.virtualListRef.resetToTop()
    }
  },
  beforeDestroy() {},
};
</script>
<style lang="less" scoped>
</style>
```

:::

### 2. 内容高度小于maxHeight时取内容高度

:::demo 

```vue
<template>
  <div>
    <virtual-list 
      :data="data" 
      :itemHeight="30" 
      :fixedHeight="true"
      :maxHeight="300"
      ref="virtualListRef"
    >
      <div slot-scope="{ item, index }">{{ item }}</div>
    </virtual-list>
    <button style="margin-top: 10px" @click="handleChangeData('add')">增加数据</button>
    <button style="margin-top: 10px" @click="handleChangeData('reduce')">减少数据数据</button>
  </div>

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
    for(let i = 0;i < 3; i++){
      data.push(i)
    }
    this.data = data
  },
  mounted() {},
  methods: {
    handleChangeData(type) {
      if(type === 'add') {
        this.data.push(...[6,6,6])
      } else {
        this.data = this.data.slice(0, this.data.length - 2)
      }
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
| data  | 数据  | Array `required` | []  |
| itemHeight | 每一项的高度 | Number `required` | 30     |
| fixedHeight | 是否固定高度 | Boolean       | true     |
| maxHeight | 最大高度 | Number 当 `fixedHeight:true` 时需要指定 `maxHeight` | 200     |
| defaultUpdateToTop | 当data更新时，是否自动滚到到顶部 | Boolean       | true     |
| bufferCount | 预渲染数据 | Number       | 3     |

### 事件

| 事件名称  | 说明                 | 回调参数           |
| --------- | -------------------- | ------------------ |
| scroll | 滚动事件 | (data) => void |
| scrollBottom | 滚动到底部事件 | - |

### 方法

| 事件名称  | 说明                 | 参数           |
| --------- | -------------------- | ------------------ |
| resetToTop | 滚动到顶部 | - |
