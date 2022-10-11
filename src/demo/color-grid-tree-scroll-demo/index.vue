<!--
 * @Author: atdow
 * @Date: 2022-10-11 20:47:42
 * @LastEditors: null
 * @LastEditTime: 2022-10-11 22:57:27
 * @Description: file description
-->
<template>
   <div class="color-grid-tree-scroll-demo">
     <ColorGridTreeScroll
       :xAxis="colorGirdDate.xAxis"
       :treeData="data"
       :gridWidth="120"
       :showTooltip="true"
       :yAxisRender="(data) => `${data.target}(${data.total})`"
       :defaultExpandMesh="-1">
       <span slot-scope="{ record }">{{ record.value }}</span>
       <div slot="tooltipSlot" slot-scope="{ record }">
         <p class="margin-bottom-0">研发阶段：{{ record.name }}</p>
         <p class="margin-bottom-0">总数：{{ record.value }}</p>
       </div>
     </ColorGridTreeScroll>
     <ColorGridTreeScroll
      :xAxis="colorGirdDate.xAxis"
      :gridWidth="120"
      :showTooltip="true"
      :yAxisRender="(data) => `${data.target}(${data.total})`"
      lazy
      :load="loadNode"
    >
      <span slot-scope="{ record }">{{ record.value }}</span>
      <div slot="tooltipSlot" slot-scope="{ record }">
        <p class="margin-bottom-0">研发阶段：{{ record.name }}</p>
        <p class="margin-bottom-0">总数：{{ record.value }}</p>
      </div>
    </ColorGridTreeScroll>
  </div class="color-grid-tree-scroll-demo">
</template>
 
<script>
import ColorGridTreeScroll from '@/packages/ColorGridTreeScroll'
import data from '@/packages/ColorGridTreeScroll/data'
export default {
  name: 'ColorGridTreeScrollDemo',
  props: {},
  data() {
    return {
      data,
      colorGirdDate: {
        xAxis: [],
      },
    }
  },
  components: {
    ColorGridTreeScroll,
  },
  watch: {},
  computed: {},
  created() {
    const colorGirdDate = {
      xAxis: [],
    }
    if (data.length > 0) {
      const xAxis = data[0].data.map((item) => {
        return {
          name: item.name,
          total: item.total,
        }
      })
      colorGirdDate.xAxis = xAxis
    }
    this.colorGirdDate = colorGirdDate
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    loadNode(node, resolve) {
      if (!node) {
        resolve([
          {
            data: [
              { name: 'BE试验', total: 87, value: '0' },
              { name: '临床阶段不明', total: 196, value: '21' },
              { name: '临床前', total: 2158, value: '68' },
              { name: '申请临床', total: 365, value: '15' },
              { name: '临床1期', total: 4074, value: '407' },
              { name: '临床2期', total: 12177, value: '1787' },
              { name: '临床3期', total: 4890, value: '1029' },
              { name: '申请上市', total: 413, value: '13' },
              { name: '批准上市', total: 1323, value: '151' },
            ],
            empty: false,
            target: '其他靶点',
            total: 3493,
          },
          {
            data: [
              { name: 'BE试验', total: 87, value: '0' },
              { name: '临床阶段不明', total: 196, value: '11' },
              { name: '临床前', total: 2158, value: '842' },
              { name: '申请临床', total: 365, value: '100' },
              { name: '临床1期', total: 4074, value: '511' },
              { name: '临床2期', total: 12177, value: '390' },
              { name: '临床3期', total: 4890, value: '78' },
              { name: '申请上市', total: 413, value: '3' },
              { name: '批准上市', total: 1323, value: '9' },
            ],
            empty: false,
            target: '未知',
            total: 1943,
          },
        ])
      } else if (node.mesh === 0) {
        setTimeout(() => {
          resolve([
            {
              data: [
                { name: 'BE试验', total: 87, value: '3' },
                { name: '临床阶段不明', total: 196, value: '21' },
                { name: '临床前', total: 2158, value: '68' },
                { name: '申请临床', total: 365, value: '15' },
                { name: '临床1期', total: 4074, value: '407' },
                { name: '临床2期', total: 12177, value: '1787' },
                { name: '临床3期', total: 4890, value: '1029' },
                { name: '申请上市', total: 413, value: '13' },
                { name: '批准上市', total: 1323, value: '151' },
              ],
              empty: false,
              target: '二级1',
              total: 3493,
            },
            {
              data: [
                { name: 'BE试验', total: 87, value: '3' },
                { name: '临床阶段不明', total: 196, value: '21' },
                { name: '临床前', total: 2158, value: '68' },
                { name: '申请临床', total: 365, value: '15' },
                { name: '临床1期', total: 4074, value: '407' },
                { name: '临床2期', total: 12177, value: '1787' },
                { name: '临床3期', total: 4890, value: '1029' },
                { name: '申请上市', total: 413, value: '13' },
                { name: '批准上市', total: 1323, value: '151' },
              ],
              empty: false,
              target: '二级2',
              total: 3493,
            },
          ])
        }, 2000)
      } else if (node.mesh === 1) {
        setTimeout(() => {
          resolve([
            {
              data: [
                { name: 'BE试验', total: 87, value: '3' },
                { name: '临床阶段不明', total: 196, value: '21' },
                { name: '临床前', total: 2158, value: '68' },
                { name: '申请临床', total: 365, value: '15' },
                { name: '临床1期', total: 4074, value: '407' },
                { name: '临床2期', total: 12177, value: '1787' },
                { name: '临床3期', total: 4890, value: '1029' },
                { name: '申请上市', total: 413, value: '13' },
                { name: '批准上市', total: 1323, value: '151' },
              ],
              empty: false,
              target: '三级1',
              total: 3493,
            },
            {
              data: [
                { name: 'BE试验', total: 87, value: '3' },
                { name: '临床阶段不明', total: 196, value: '21' },
                { name: '临床前', total: 2158, value: '68' },
                { name: '申请临床', total: 365, value: '15' },
                { name: '临床1期', total: 4074, value: '407' },
                { name: '临床2期', total: 12177, value: '1787' },
                { name: '临床3期', total: 4890, value: '1029' },
                { name: '申请上市', total: 413, value: '13' },
                { name: '批准上市', total: 1323, value: '151' },
              ],
              empty: false,
              target: '三级2',
              total: 3493,
            },
          ])
        }, 2000)
      }
    },
  },
}
</script>
 <style lang="less">
</style>