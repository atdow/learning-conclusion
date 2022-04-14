<!--
 * @Author: atdow
 * @Date: 2022-04-14 22:15:53
 * @LastEditors: null
 * @LastEditTime: 2022-04-14 23:40:53
 * @Description: file description
-->
<template>
  <div
    v-if="percent"
    class="s-progress"
    :style="{
      width: `calc(100% - ${minWidth}px)`,
      height: height + 'px',
      background: background,
      'line-height': height + 'px',
      'justify-content': direction === 'left' ? 'flex-start' : 'flex-end',
      'border-radius': containerRadius === true ? `${height / 2}px` : '0px',
    }"
  >
    <div
      class="s-progress-content"
      :style="{
        background: strokeColor,
        width: `calc(${percent}% + ${minWidth}px)`,
        padding: direction === 'right' ? '0 0 0 10px' : '0 10px 0 0 ',
        'text-align': direction === 'right' ? 'left' : 'right',
        'border-radius': strokeRadius === true ? `${height / 2}px` : '0px',
      }"
    >
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else> {{ percent }}%</template>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'SProgress',
  props: {
    percent: {
      type: Number,
      default: 0,
    },
    direction: {
      type: String,
      default: 'left',
      validator: function (value) {
        return ['left', 'right'].indexOf(value) !== -1
      },
    },
    strokeColor: {
      type: String,
      default: 'green',
    },
    background: {
      type: String,
      default: 'white',
    },
    minWidth: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 20,
    },
    strokeRadius: {
      type: Boolean,
      default: false,
    },
    containerRadius: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  components: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
}
</script>
 
<style lang="less" scoped>
.s-progress {
  display: flex;
  width: 100%;
  font-size: 12px;
  color: white;
  &-content {
    flex-shrink: 0;
    box-sizing: border-box;
    padding-left: 10px;
  }
}
</style>