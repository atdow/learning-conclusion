### 1. 基本使用

:::demo 

```vue
<template>
    <SinoScrollbar style="width:100%;height:200px">
      <ul>
        <li v-for="(item,index) in 10" :key="index">{{item}}</li>   
      </ul>
    </SinoScrollbar>
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
  created() {
    
  },
  mounted() {},
  beforeDestroy() {},
};
</script>
<style lang="less" scoped>
li{
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
