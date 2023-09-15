<!--
 * @Author: atdow
 * @Date: 2023-09-15 19:27:25
 * @LastEditors: null
 * @LastEditTime: 2023-09-15 19:50:50
 * @Description: file description
-->
<template>
   
  <div class="horizontal-drag-demo">
    <div class="content" :style="{ width: menuWidth + 'px' }">
      <horizontal-drag
        class="horizontal-drag"
        :width="menuWidth"
        :min-width="200"
        :max-width="600"
        @widthChange="widthChange"
      />
    </div>
  </div>
</template>
 
<script>
import HorizontalDrag from '@/packages/horizontal-drag'
export default {
  name: 'HorizontalDragDemo',
  props: {},
  data() {
    return {
      menuWidth: 400,
    }
  },
  components: {
    HorizontalDrag,
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
.horizontal-drag-demo {
  .content {
    width: 400px;
    height: 600px;
    border: 1px solid #ccc;
    position: relative;
    .horizontal-drag {
      position: absolute;
      top: 0;
      right: -1px;
      bottom: 0;
    }
  }
}
</style>
