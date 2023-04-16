<!--
 * @Author: atdow
 * @Date: 2023-04-16 12:17:04
 * @LastEditors: null
 * @LastEditTime: 2023-04-16 16:33:33
 * @Description: file description
-->
<template>
  <div class="s-table-demo">
    <s-table :data="data" class="table">
      <el-table-column prop="index" label="索引"></el-table-column>
    </s-table>
    <s-table :data="dataFn" ref="tableRef" class="table">
      <el-table-column prop="index" label="索引"></el-table-column>
    </s-table>
  </div>
</template>
 
<script>
import STable from '@/packages/s-table/src/table.js'
import { getTableData } from '@/api/table'
export default {
  name: 'STableDemo',
  props: {},
  data() {
    return {
      data: [],
      dataFn: (paginationParams) => {
        const params = {} // 其他请求参数
        return getTableData({ ...paginationParams, ...params }).then((res) => {
          return res.data
        })
      },
    }
  },
  components: {
    STable,
  },
  watch: {},
  computed: {},
  created() {
    const data = []
    for (let i = 0; i < 100; i++) {
      data.push({ index: i })
    }
    this.data = data
  },
  mounted() {
    this.$refs.tableRef.refresh(true)
  },
  beforeDestroy() {},
}
</script>
 
<style lang="less" scoped>
.s-table-demo {
  padding: 20px;
  .table {
    margin-bottom: 50px;
  }
}
</style>
