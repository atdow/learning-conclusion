<!--
 * @Author: atdow
 * @Date: 2023-09-15 19:27:25
 * @LastEditors: null
 * @LastEditTime: 2023-09-15 21:01:10
 * @Description: file description
-->
<template>
   
  <div class="width-drag-demo">
    <div class="content" :style="{ width: menuWidth + 'px' }">
      <width-drag class="width-drag" :width="menuWidth" :min-width="200" :max-width="600" @widthChange="widthChange" />
    </div>
  </div>
</template>
 
<script>
import WidthDrag from '@/packages/width-drag'
export default {
  name: 'WidthDragDemo',
  props: {},
  data() {
    return {
      menuWidth: 400,
    }
  },
  components: {
    WidthDrag,
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    widthChange(value) {
      this.menuWidth = value
    },
  },
  beforeDestroy() {},
}
</script>
 
<style lang="less" scoped>
.width-drag-demo {
  .content {
    width: 400px;
    height: 600px;
    border: 1px solid #ccc;
    position: relative;
    .width-drag {
      position: absolute;
      top: 0;
      right: -1px;
      bottom: 0;
    }
  }
}
</style>
