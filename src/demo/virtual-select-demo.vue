<!--
 * @Author: atdow
 * @Date: 2022-09-23 19:54:24
 * @LastEditors: null
 * @LastEditTime: 2022-09-25 00:48:09
 * @Description: file description
-->
<template>
  <div class="virtual-select-demo">
    <virtual-select v-model="value1" :multiple="true" placeholder="请选择" :selectData="options" style="width: 200px">
    </virtual-select>
    <virtual-select v-model="value2" placeholder="请选择" :selectData="options" style="width: 200px"> </virtual-select>
  </div>
</template>
 
<script>
import VirtualSelect from '@/packages/virtual-select'
export default {
  name: 'VirtualSelectDemo',
  props: {},
  data() {
    return {
      value1: ['1', '3'],
      value2: '2',
      options: [],
      selectData: [],
    }
  },
  components: {
    VirtualSelect,
  },
  watch: {
    value1: {
      handler: function () {
        console.log('value1:', this.value1)
      },
    },
    value2: {
      handler: function () {
        console.log('value2:', this.value2)
      },
    },
  },
  computed: {},
  created() {
    for (let i = 0; i < 30000; i++) {
      if (i === 0) {
        this.options.push({ name: i, value: String(i) })
      } else {
        this.options.push({ name: i, value: String(i) })
      }
    }
  },
  mounted() {},
  beforeDestroy() {},
}
</script>
<style lang="less" scoped>
</style>