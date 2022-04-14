<!--
 * @Author: atdow
 * @Date: 2022-04-14 22:15:53
 * @LastEditors: null
 * @LastEditTime: 2022-04-14 22:47:11
 * @Description: file description
-->
<template>
  <div
    v-if="percent"
    class="s-progress"
    :style="{
      width: `calc(100% - ${minWidth}px)`,
      height: height + 'px',
      'line-height': height + 'px',
      background: background,
      'justify-content': direction === 'left' ? 'flex-start' : 'flex-end',
    }"
  >
    <div
      class="s-progress-content"
      :style="{
        background: strokeColor,
        width: `calc(${percent}% + ${minWidth}px)`,
        'text-align': direction === 'right' ? 'left' : 'right',
        padding: direction === 'right' ? '0 0 0 10px' : '0 10px 0 0 ',
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
    text: {
      type: String,
      default: '',
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
  color: rgb(232, 232, 232);
  display: flex;
  width: 100%;
  font-size: 12px;
  color: white;
  &-content {
    flex-shrink: 0;
    text-align: left;
    box-sizing: border-box;
    padding-left: 10px;
  }
}
</style>