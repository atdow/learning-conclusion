## 1.tree回显问题

```js
<template>
  <div class="tree">
    <el-tree
      :data="treeData"
      show-checkbox
      node-key="id"
      :default-expand-all="true"
      :default-expanded-keys="[]"
      :default-checked-keys="[]"
      :props="{
        children: 'children',
        label: 'label',
      }"
      @check="check"
      ref="treeRef"
    >
    </el-tree>
  </div>
</template>
<script>
export default {
  name: "tree",
  props: {},
  data() {
    return {
      treeData: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
      ],
      allCheckedData: [1, 4, 2, 9, 5], // 半选：1, 4, 2  全选：9, 5(半选在前面，全选在后面)
      checkedKeys: [],
      halfCheckedKeys: [],
    };
  },
  components: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {
    // 回显逻辑
    this.allCheckedData.forEach((key) => {
      // 1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中 3. boolean 类型，是否设置子节点 ，默认为 false
      this.$refs.treeRef.setChecked(key, true, false);
    });
    this.$nextTick(() => {
      this.checkedKeys = this.$refs.treeRef.getCheckedKeys() || [];
      this.halfCheckedKeys = this.$refs.treeRef.getHalfCheckedKeys() || [];
    });
  },
  beforeDestroy() {},
  methods: {
    check(
      target,
      { checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys }
    ) {
      this.checkedKeys = checkedKeys;
      this.halfCheckedKeys = halfCheckedKeys;
    },
    submit() {
      const checked = [this.halfCheckedKeys, this.checkedKeys]; // 必须是这个顺序，不然就会有问题(半选在前面，全选在后面)
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
```
