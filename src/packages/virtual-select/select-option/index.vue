<!--
 * @Author: atdow
 * @Date: 2022-09-23 17:15:11
 * @LastEditors: null
 * @LastEditTime: 2022-09-24 22:46:55
 * @Description: file description
-->
<template>
  <li @click.stop.prevent="select(data)" ref="liRef" :class="['sino-select-option', { multiple: multiple }]">
    <p v-if="!data.isShow || true" ref="selectLiContentRef" :class="{ select_active: isCheck }">
      {{ data.name }}
    </p>
    <!-- <a-tooltip placement="topLeft" v-if="data.isShow">
      <template slot="title">
        <p v-text="data.name"></p>
      </template>
      <p v-text="data.name" :class="['single-over-ellipsis', { select_active: isCheck}]"></p>
    </a-tooltip> -->
    <i v-if="isCheck" aria-label="图标: check" class="check">
      <svg
        viewBox="64 64 896 896"
        data-icon="check"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        class=""
      >
        <path
          d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
        ></path>
      </svg>
    </i>
  </li>
</template>
 
<script>
import { isSingleOverEllipsis } from '../utils'
export default {
  name: 'SinoSelectOption',
  props: {
    data: {
      type: Object,
      default: function () {
        return {}
      },
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    isCheck: {
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
  mounted() {
    // 判断是否出现ellipsis
    this.$nextTick(() => {
      if (this.$refs.selectLiContentRef) {
        this.data.isShow = isSingleOverEllipsis(this.$refs.selectLiContentRef)
      }
    })
  },
  beforeDestroy() {},
  methods: {
    select(data) {
      this.$emit('select', data, this.isCheck)
    },
  },
}
</script>
 
<style lang="less" scoped>
@import './select-option-styles';
</style>