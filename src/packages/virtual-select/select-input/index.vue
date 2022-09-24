<!--
 * @Author: atdow
 * @Date: 2022-09-23 20:15:43
 * @LastEditors: null
 * @LastEditTime: 2022-09-25 00:11:33
 * @Description: file description
-->
<template>
  <div class="sino-select-input" @mouseenter="inputMouseenter" @mouseleave="inputMouseleave">
    <div
      class="el-select__tags"
      v-if="multiple"
      ref="tags"
      :style="{ 'max-width': inputWidth - 32 + 'px', width: '100%' }"
    >
      <span v-if="collapseTags && selected.length">
        <el-tag
          :closable="!selectDisabled"
          :size="collapseTagSize"
          :hit="selected[0].hitState"
          type="info"
          @close="deleteTag($event, selected[0])"
          disable-transitions
        >
          <span class="el-select__tags-text">{{ selected[0] }}</span>
        </el-tag>
        <el-tag v-if="selected.length > 1" :closable="false" :size="collapseTagSize" type="info" disable-transitions>
          <span class="el-select__tags-text">+ {{ selected.length - 1 }}</span>
        </el-tag>
      </span>
      <!-- <transition-group @after-leave="resetInputHeight" v-if="!collapseTags"> -->
      <el-tag
        v-for="item in selected"
        :key="getValueKey(item)"
        :closable="!selectDisabled"
        :size="collapseTagSize"
        :hit="item.hitState"
        type="info"
        @close="deleteTag($event, item)"
        disable-transitions
      >
        <span class="el-select__tags-text">{{ item }}</span>
      </el-tag>
      <!-- </transition-group> -->
      <input
        type="text"
        class="el-select__input"
        :class="[selectSize ? `is-${selectSize}` : '']"
        :disabled="selectDisabled"
        :autocomplete="autoComplete || autocomplete"
        @focus="handleFocus"
        @blur="selectInputBlur"
        @keyup="managePlaceholder"
        @keydown="resetInputState"
        @keydown.enter.prevent="selectOption"
        @keydown.esc.stop.prevent="visible = false"
        v-model="query"
        @input="debouncedQueryChange"
        v-if="filterable"
        :style="{ 'flex-grow': '1', width: inputLength / (inputWidth - 32) + '%', 'max-width': inputWidth - 42 + 'px' }"
        ref="input"
      />
    </div>
    <div class="el-input">
      <input
        ref="reference"
        class="el-input__inner"
        v-model="selectedLabel"
        type="text"
        :placeholder="currentPlaceholder"
        :autocomplete="autoComplete || autocomplete"
        :disabled="selectDisabled"
        :readonly="readonly"
        :validate-event="false"
        :class="{ 'is-focus': visible }"
        :tabindex="multiple && filterable ? '-1' : null"
        @input="debouncedQueryChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown.enter.prevent="selectOption"
        @keydown.esc.stop.prevent="visible = false"
        @paste="debouncedOnInputChange"
        @mouseenter="inputHovering = true"
        @mouseleave="inputHovering = false"
      >
      <!-- <template slot="suffix"> -->
      <svg
        v-show="!showClose"
        :class="['sino-select-input-close', {'sino-select-input-down':expandState}]"
        @click="handleClearClick"
        width="20"
        height="20"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M13 30L25 18L37 30" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <IconCloseSimple v-if="showClose" class="sino-select-input-close" @click="handleClearClick"></IconCloseSimple>
      <!-- </template> -->
      </input>
    </div>
 
  </div>
</template>
 
<script>
import ElTag from '../tag'
import IconCloseSimple from '../icon/IconCloseSimple.vue'
import { addResizeListener, removeResizeListener } from '@/utils/resize-event'
export default {
  name: 'SelectInput',
  props: {
    filterable: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    expandState: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Array,
      default: function () {
        return []
      },
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    selectSingleName: {
      type: [String, Number],
      default: '',
    },
    selectSingleValue: {
      type: [String, Number],
      default: '',
    },
  },
  data() {
    return {
      query: '',
      collapseTags: false,
      selectDisabled: false,
      softFocus: false,
      inputLength: 20,
      inputWidth: 0,
      selectedLabel: '',
      currentPlaceholder: '',
      readonly: false,
      showClose: false,
      iconClass: '',
      selectSize: 'small',
      visible: true,
      collapseTagSize: 'small',
    }
  },
  components: {
    ElTag,
    IconCloseSimple,
  },
  watch: {
    selected: {
      deep: true,
      handler: function () {
        this.$nextTick(() => {
          this.resetInputHeight()
        })
      },
    },
    selectSingleName: {
      immediate: true,
      handler: function () {
        this.selectedLabel = this.selectSingleName
      },
    },
  },
  computed: {},
  created() {},
  mounted() {
    addResizeListener(this.$el, this.handleResize)
    this.$once('hook:beforeDestroy', () => {
      if (this.$el && this.handleResize) removeResizeListener(this.$el, this.handleResize)
    })
  },
  beforeDestroy() {},
  methods: {
    getValueKey() {},
    deleteTag(event, tag) {
      const index = this.selected.indexOf(tag)
      if (index > -1 && !this.selectDisabled) {
        this.$emit('input', this.selected)
        // this.emitChange(this.selected)
        this.$emit('remove-tag', tag)
      }
      event.stopPropagation()
    },
    relativePosition(element, target, elementHeight = 0) {
      /**
       * We could get the elementHeight througth element basely,
       * but we control the element's height to display dropMenu's hidden and shown which
       * result geting the elementHeight througth element error!
       */
      const elementDimensions = { width: element.offsetWidth, height: element.offsetHeight }
      const targetHeight = target.offsetHeight
      const targetOffset = target.getBoundingClientRect()
      const viewport = this.getViewport()
      if (targetOffset.top + targetHeight + elementHeight > viewport.height) {
        element.style.top = null
        element.style.bottom = targetHeight + 7 + 'px'
      } else {
        element.style.bottom = null
        element.style.top = targetHeight + 7 + 'px'
      }
    },
    resetInputHeight() {
      const tags = this.$refs.tags
      const sizeInMap = this.initialInputHeight || 40
      const input = this.$refs.reference
      input.style.height =
        this.selected.length === 0
          ? sizeInMap + 'px'
          : Math.max(tags ? tags.clientHeight + (tags.clientHeight > sizeInMap ? 6 : 0) : 0, sizeInMap) + 'px'
    },
    autoComplete() {},
    handleFocus() {},
    handleBlur() {},
    selectInputBlur() {
      this.query = ''
      this.debouncedQueryChange()
      if (this.expandState) {
        this.$refs.input.focus()
      }
    },
    setSearchInputFocusState(state) {
      if (!this.multiple) {
        return
      }
      if (state === true) {
        this.$refs.input.focus()
      } else {
        setTimeout(() => {
          this.$refs.input.blur()
        }, 0)
      }
    },
    managePlaceholder() {},
    resetInputState() {},
    selectOption() {},
    debouncedQueryChange() {
      if (this.multiple) {
        this.$emit('inputChange', this.query)
      } else {
        this.$emit('inputChange', this.selectedLabel)
      }
    },
    handleClearClick() {
      this.$emit('clear')
    },
    debouncedOnInputChange() {},
    resetInputWidth() {
      this.inputWidth = this.$refs.reference.getBoundingClientRect().width
    },
    handleResize() {
      this.resetInputWidth()
      if (this.multiple) this.resetInputHeight()
    },
    inputMouseenter() {
      if (!this.filterable) {
        return
      }
      if (this.multiple) {
        if (this.selected.length > 0) {
          this.showClose = true
        }
      } else {
        if (this.selectSingleValue) {
          this.showClose = true
        }
      }
    },
    inputMouseleave() {
      this.showClose = false
    },
    // collapseTagSize() {
    //   return ['small', 'mini'].indexOf(this.selectSize) > -1 ? 'mini' : 'small'
    // },
  },
}
</script>
 
<style lang="less" scoped>
@import './styles.less';
</style>