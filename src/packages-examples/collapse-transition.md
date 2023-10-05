#### 1. 基础用法

:::demo 

```vue
<template>
  <div>
    <button style="margin-bottom: 10px" @click="changeCollapse">{{isCollapse?"展开":"折叠"}}</button>
    <collapse-transition>
      <ul v-show="!isCollapse" style="padding: 10px;border: 1px solid #ccc">
        <li v-for="item in 10" :key="item">{{item}}</li>
      </ul>
    </collapse-transition>
  </div>
</template>

<script>
import CollapseTransition from "@/packages/collapse-transition";
export default {
  props: {},
  data() {
    return {
      isCollapse: false,
    };
  },
  components: {
    CollapseTransition,
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {}, 
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse
    },
  },
  beforeDestroy() {},
};
</script>

<style lang="less" scoped></style>
```

:::
