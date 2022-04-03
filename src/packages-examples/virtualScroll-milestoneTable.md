:::demo #### 1. 使用案例:

```vue
<template>
  <virtual-scroll-milestone-table
    :data="milestoneData"
    :contentHeight="300"
    title="相关药物"
  >
    <div slot="contentSlot" slot-scope="{ record }" class="content-slot">
      <template v-if="record.event">
        <i
          :class="[
            'dot',
            { research: record.event.status == '在研' ? true : false },
          ]"
        ></i>
        <div class="text-content">
          <p v-text="record.event.title"></p>
          <p>
            <span v-text="record.event.label"></span>
            <span>({{ record.event.phase }})</span>
          </p>
        </div>
      </template>
    </div>
    <div slot="footSlot" class="footSlot">
      <ul>
        <li>
          <i class="dot approved"></i>
          <span>上市</span>
        </li>
        <li>
          <i class="dot research"></i>
          <span>在研</span>
        </li>
      </ul>
    </div>
  </virtual-scroll-milestone-table>
</template>

<script>
import VirtualScrollMilestoneTable from "@/packages/virtual-scroll-milestone-table";
export default {
  name: "ListView",
  computed: {},
  mounted() {
    let data = [];
    for (let row = 0; row < 400; row++) {
      let rowData = [];
      for (let col = 10; col < 50; col++) {
        rowData.push({
          date: `19` + col,
          event: {
            label: "HRA PHARMA",
            phase: "批准上市",
            status: col % 3 === 0 ? "批准上市" : "在研",
            title: "米托坦",
          },
        });
      }
      data.push(rowData);
    }
    this.milestoneData = data;
    // console.log("this.milestoneData:", this.milestoneData);
  },
  data() {
    return {
      milestoneData: [],
    };
  },
  components: {
    VirtualScrollMilestoneTable,
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
  margin-right: 8px;
  margin-top: 4px;
  flex-shrink: 0;
}
.approved {
  background: red !important;
}
.research {
  background: #34b800 !important;
}
.content-slot {
  display: flex;
  align-items: flex-start;
  padding-top: 20px;
  p {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    line-height: 20px;
  }
}
.footSlot {
  li:first-child {
    margin-right: 140px;
  }
  li {
    display: flex;
    align-items: center;
    span {
      font-size: 16px;
      font-weight: 400;
      color: #333333;
      line-height: 12px;
    }
  }
}
</style>
```

:::

### API

| 属性       | 说明           | 类型         | 默认值 |
| ---------- | -------------- | ------------ | ------ |
| data       | 渲染数据       | `Array<Array> ` | `[[]]` 格式： `[[{date:xxx,event:{}}]]` |
| tdHeight | 每个格子的高度 | Number       | 80 `px` |
| tdWidth | 每个格子的宽度 | Number       | 230 `px` |
| contentHeight | 表格的高度 | Number       | 300 `px` |
| noFullScreen | 没有放大功能 | Boolean       | false     |
| fullScreenTitle | 放大弹窗的title | String       | 相关药物     |
