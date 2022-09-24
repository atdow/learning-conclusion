<!--
 * @Author: atdow
 * @Date: 2022-09-24 23:43:59
 * @LastEditors: null
 * @LastEditTime: 2022-09-24 23:52:32
 * @Description: file description
-->
<!--
 * @Author: atdow
 * @Date: 2022-09-24 20:49:50
 * @LastEditors: null
 * @LastEditTime: 2022-09-24 20:59:28
 * @Description: file description
-->
<template>
  <div class="icon-close" @click.stop="handleClick">x</div>
</template>
 
<script>
export default {
  name: 'IconClose',
  props: {},
  data() {
    return {}
  },
  components: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
  },
}
</script>
 
<style lang="less" scoped>
.icon-close {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid #c0c4cc;
  text-align: center;
  line-height: 12px;
  color: #909399;
  cursor: pointer;
  flex-shrink: 0;
  font-size: 12px;
}
</style>