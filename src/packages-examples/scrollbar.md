### 1. 基本使用

:::demo 

```vue
<template>
    <div>
      <sino-scrollbar 
        style="width:100%;height:200px" 
        ref="scrollbarRef"   
        @scroll="scroll" 
        @scrollBottom="scrollBottom"
      >
        <ul>
          <li v-for="(item,index) in 10" :key="index">{{item}}</li>   
        </ul>
      </sino-scrollbar >
      <button style="margin-top: 10px" @click="scrollTopTest">滚动到顶部</button>
    </div>
</template>
<script>
import SinoScrollbar from "@/packages/scrollbar";
export default {
  name: "ScrollbarExample",
  props: {},
  data() {
    return {

    };
  },
  components: {
    SinoScrollbar,
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    scroll(data) {
      console.log('data:',data)
    },
    scrollTopTest() {
      this.$refs.scrollbarRef.resetToTop()
    },
    scrollBottom() {
      console.log('scrollBottom')
    }
  },
  beforeDestroy() {},
};
</script>
<style lang="less" scoped>
li {
  border-bottom:1px solid #ccc;
  padding:10px 0;
  text-align:center;
}
</style>
```

:::

### API

| 属性       | 说明           | 类型         | 默认值 |
| ---------- | -------------- | ------------ | ------ |
| showHorizontalBar  | 是否显示横向滚动条  | Boolean | true |
| showVerticalBar | 是否显示竖向滚动条 | Boolean       | true     |
| wrapStyle | wrapStyle | String       | null     |
| wrapClass | wrapClass | String       | null     |
| viewClass | viewClass | String       | null     |
| viewStyle | viewStyle | String       | null     |
| noresize | 如果 container 尺寸不会发生变化，最好设置它可以优化性能 | Boolean | false |

### 事件

| 事件名称  | 说明                 | 回调参数           |
| --------- | -------------------- | ------------------ |
| scroll | 滚动事件 | (data) => void |
| scrollBottom | 滚动到底部事件 | - |

### 方法

| 事件名称  | 说明                 | 参数           |
| --------- | -------------------- | ------------------ |
| resetToTop | 滚动到顶部 | - |
