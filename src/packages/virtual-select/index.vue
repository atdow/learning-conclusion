<template>
  <div
    class="s-select"
    :style="{ width }"
    tabindex="0"
    @click="selectClick"
    @blur="selectBlur"
    v-clickoutside="handleClickoutside"
  >
    <SelectInput
      ref="selectBoxRef"
      :selected="selected"
      :expandState="expandState"
      :multiple="multiple"
      :selectSingleName="selectSingleName"
      :selectSingleValue="selectSingleValue"
      @remove-tag="removeTag"
      @inputChange="inputChange"
      @clear="inputClear"
    />
    <div
      class="s-select-drop"
      ref="popoverRef"
      :style="{
        width: dropContentDisplayWidth,
        height: expandState ? dropContentDisplayHeight : 0,
        top: selectBoxHeight + 7 + 'px',
      }"
    >
      <!-- <li
        v-if="hasSelectAll"
        @click.stop="select({ id: 'all', name: 'all' })"
        :class="{ select_active: selectValueDisplay == '全部' }"
      >
        全部
      </li> -->
      <GeminiScrollbar
        v-show="filterOptionData.length > 0"
        class="table-scroll .pmd-scrollbar .mCustomScrollbar gm-scrollbar-color white"
        :style="{ width: dropContentDisplayWidth, height: dropContentDisplayHeight }"
        ref="dropContentDisplayRef"
        @ready="ready"
      >
        <!-- 这里是用于撑开高度，出现滚动条用 -->
        <div class="list-view-phantom" ref="clientHeight" :style="{ height: virtualContentHeight + 'px' }"></div>
        <ul ref="content">
          <template>
            <SelectOption
              v-for="(item, index) in virtualRenderData"
              :key="index"
              :data="item"
              :multiple="multiple"
              :isCheck="selected.includes(item.value)"
              @select="select"
            />
          </template>
        </ul>
      </GeminiScrollbar>
      <!-- <NoData v-show="filterOptionData.length === 0" style="height: 100%" /> -->
    </div>
  </div>
</template>

<script>
import SelectInput from './select-input'
import { throttle } from '@/utils/util'
import styles from './vars.less'
import SelectOption from './select-option'
import Clickoutside from './clickoutside'
export default {
  name: 'SelectWidthVirtualScroll',
  model: {
    prop: 'modelValue',
    event: 'setModelValue',
  },
  props: {
    modelValue: {
      type: [String, Number, Array],
    },
    selectValue: {
      type: [String, Number],
      default: '',
    },
    selectData: {
      type: Array,
      default: () => {
        return []
      },
    },
    placeholder: {
      type: String,
      default: '',
    },
    allowClear: {
      type: Boolean,
      deafult: false,
    },
    defaultValue: {
      type: [String, Number],
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '150px',
    },
    dropContentWidth: {
      type: String,
      // default: '150px',
    },
    dropContentHeight: {
      type: String,
      default: '300px',
    },
    hasSelectAll: {
      type: Boolean,
      default: true,
    },
    // value绑定id还是name
    bindType: {
      type: String,
      default: 'id',
    },
    useTooltip: {
      type: Boolean,
      default: true,
    },
    filterOption: {
      type: Boolean,
      default: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    this.dropContentScrollThrottle = null
    return {
      selected: [], // 多选选中的值
      selectSingleValue: '', // 单选选中的值
      selectSingleName: '',
      chooseValue: [],
      formatSelectData: [], // [{id:xxx,name:xxx,isShow:xxx}]
      selectValueDisplay: '',
      dropContentDisplayWidth: 0,
      dropContentDisplayHeight: 0,
      selectBoxHeight: 36,
      expandState: false,
      dropContentNoDateHeight: '200px',
      filterOptionData: [],
      inputValue: '',
      debounce: 1000,
      // 虚拟滚动
      virtualRenderData: [],
      virtualContentHeight: 0,
      liRefHeight: styles.liHeight,
    }
  },
  components: {
    SelectInput,
    SelectOption,
  },
  directives: { Clickoutside },
  watch: {
    selectData: {
      immediate: true,
      handler: function () {
        this.selectData.forEach((selectDataItem) => {
          this.formatSelectData.push({
            ...selectDataItem,
            isShow: false,
          })
        })
        const filterOptionData = JSON.parse(JSON.stringify(this.formatSelectData))
        this.filterOptionData = filterOptionData // 进行第一次渲染
        // 判断是否出现ellipsis
        this.$nextTick(() => {
          this.formatSelectData = JSON.parse(JSON.stringify(this.filterOptionData))
          this.caldropContentDisplayHeight()
          this.update(0)
        })
      },
    },
    hasSelectAll: function () {
      this.caldropContentDisplayHeight()
    },
    modelValue: {
      immediate: true,
      handler: function () {
        if (this.multiple) {
          this.selected = JSON.parse(JSON.stringify(this.modelValue))
        } else {
          this.selectSingleValue = this.modelValue
          this.selectSingleName =
            (this.selected.find((item) => item.value === this.modelValue) || {}).name || this.modelValue
        }
      },
    },
    inputValue: {
      handler: function () {
        // 输入防抖
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          const value = this.inputValue.trim()
          if (value) {
            const filterDate = this.formatSelectData.filter((item) => {
              return item.name?.toUpperCase().indexOf(value?.toUpperCase()) !== -1
            })
            this.filterOptionData = filterDate
            // 虚拟滚动
            this.caldropContentDisplayHeight()
            const bodyRef = this.$refs.dropContentDisplayRef
            bodyRef.$el.querySelector('.gm-scroll-view').scrollTop = 0
            this.$nextTick(() => {
              this.update(0)
            })
          } else {
            this.filterOptionData = JSON.parse(JSON.stringify(this.formatSelectData))
            this.caldropContentDisplayHeight()
            // 虚拟滚动
            const bodyRef = this.$refs.dropContentDisplayRef
            bodyRef.$el.querySelector('.gm-scroll-view').scrollTop = 0
            this.$nextTick(() => {
              this.update(0)
            })
          }
        }, this.debounce)
      },
    },
    filterOptionData: {
      immediate: true,
      handler: function () {
        // console.log('filterOptionData:', this.filterOptionData)
      },
    },
    selected: {
      deep: true,
      handler: function () {
        this.$nextTick(() => {
          setTimeout(() => {
            this.refreshSelectBoxHeight()
          }, 1000)
        })
      },
    },
  },
  computed: {},
  created() {
    if (this.placeholder) {
      return
    }
    if (!!!this.selectValue) {
      this.resetValue()
    }
  },
  mounted() {
    this.refreshSelectBoxHeight()
    if (!!!this.dropContentWidth) {
      this.dropContentDisplayWidth = this.$refs.selectBoxRef.$el.getBoundingClientRect().width + 'px'
    } else {
      this.dropContentDisplayWidth = this.dropContentWidth
    }

    // 虚拟滚动
    const bodyRef = this.$refs.dropContentDisplayRef
    const bodyScorllBar = bodyRef.$el.querySelector('.gm-scroll-view')
    this.bodyScorllBar = bodyScorllBar
    this.tableBodyScrollThrottle = throttle(this.updateThrottleMethod, 100)
    bodyScorllBar.addEventListener('scroll', this.tableBodyScrollThrottle)
    this.$once('hook:beforeDestroy', () => {
      bodyScorllBar.removeEventListener('scroll', this.tableBodyScrollThrottle)
    })
  },
  beforeDestroy() {},
  methods: {
    refreshSelectBoxHeight() {
      this.selectBoxHeight = this.$refs.selectBoxRef.$el.getBoundingClientRect().height
    },
    selectClick() {
      this.expandState = !this.expandState
      if (this.expandState) {
        this.$refs.selectBoxRef.setSearchInputFocusState(true)
      }
    },
    selectBlur() {
      if (this.filterOption === false) {
        this.expandState = false
      }
    },
    inputBlur() {
      //
      this.$nextTick(() => {
        const timer = setTimeout(() => {
          if (this.expandState === true) {
            this.expandState = false
          }
          clearTimeout(timer)
        }, 100)
      })
    },
    inputFocus() {
      this.$refs.inputRef.value = ''
      this.inputValue = ''
      this.filterOptionData = JSON.parse(JSON.stringify(this.formatSelectData))
    },
    calDefaultValue() {
      // console.log('this.defaultValue:', this.defaultValue)
      // 指定没有全部选项时默认选择第一个
      if (Object.keys(this.filterOptionData).length > 0 && !this.hasSelectAll) {
        if (this.bindType == 'id') {
          if (this.defaultValue) {
            return this.defaultValue
          } else {
            return this.filterOptionData[0]?.id
          }
        }
        if (this.bindType == 'name') {
          if (this.defaultValue) {
            return this.defaultValue
          } else {
            return this.filterOptionData[0]?.name
          }
        }
      } else {
        return '全部'
      }
    },
    ready() {},
    expand() {
      this.expandState = !this.expandState
      this.$nextTick(() => {
        // control the dropMenu's position
        if (this.expandState) {
          this.relativePosition(
            this.$refs.popoverRef,
            this.$refs.selectBoxRef,
            Number(this.dropContentDisplayHeight?.slice(0, -2))
          )
          this.filterOption === true && this.$refs.inputRef.focus()
        }
      })
    },
    select(item, isCheck) {
      this.$emit('setSelectValue', item[this.bindType])
      this.$emit('selectChange', item[this.bindType])
      if (this.multiple) {
        if (isCheck) {
          this.selected = this.selected.filter((chooseValueItem) => chooseValueItem !== item.value)
        } else {
          this.selected.push(item.value)
        }
        this.$emit('setModelValue', this.selected)
        return
      } else {
        this.selectSingleValue = item.value
        this.selectSingleName = item.name
        this.selectValueDisplay = item.name
        this.expandState = !this.expandState
        this.$emit('setModelValue', this.selectSingleValue)
      }
    },
    resetValue() {
      this.selectValueDisplay = this.calDefaultValue()
      // console.log('this.selectValueDisplay1:', this.selectValueDisplay)
    },
    caldropContentDisplayHeight() {
      // this.resetValue()
      if (this.filterOptionData.length === 0) {
        this.dropContentDisplayHeight = this.dropContentNoDateHeight
        return
      }
      this.$nextTick(() => {
        const liRefHeight = this.liRefHeight
        let calHeight = ''
        if (this.hasSelectAll) {
          calHeight = (this.filterOptionData.length + 1) * liRefHeight + 10
          this.virtualContentHeight = calHeight
        } else {
          calHeight = this.filterOptionData.length * liRefHeight + 10
          this.virtualContentHeight = calHeight
        }
        if (calHeight > Number(this.dropContentHeight.slice(0, -2))) {
          this.dropContentDisplayHeight = this.dropContentHeight
        } else {
          this.dropContentDisplayHeight = calHeight + 'px'
        }
        // console.log('this.dropContentDisplayHeight:', this.dropContentDisplayHeight)
      })
    },
    clear() {
      this.$emit('setSelectValue', undefined)
      this.$emit('selectChange', undefined)
      this.selectValueDisplay = ''
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
    getViewport() {
      const win = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        w = win.innerWidth || e.clientWidth || g.clientWidth,
        h = win.innerHeight || e.clientHeight || g.clientHeight
      return { width: w, height: h }
    },
    inputChange(query) {
      const value = query.trim()
      if (value) {
        const filterDate = this.selectData.filter((item) => {
          return item.value.indexOf(value) !== -1
        })
        if (JSON.stringify(this.filterOptionData) === JSON.stringify(filterDate)) {
          return
        }
        this.filterOptionData = filterDate
        // 虚拟滚动
        this.caldropContentDisplayHeight()
        const bodyRef = this.$refs.dropContentDisplayRef
        bodyRef.$el.querySelector('.gm-scroll-view').scrollTop = 0
        this.$nextTick(() => {
          this.update(0)
        })
      } else {
        if (JSON.stringify(this.filterOptionData) === JSON.stringify(this.selectData)) {
          return
        }
        this.filterOptionData = JSON.parse(JSON.stringify(this.selectData))
        this.caldropContentDisplayHeight()
        // 虚拟滚动
        const bodyRef = this.$refs.dropContentDisplayRef
        bodyRef.$el.querySelector('.gm-scroll-view').scrollTop = 0
        this.$nextTick(() => {
          this.update(0)
        })
      }
    },
    inputClear() {
      if (this.multiple) {
        this.selected = []
        this.$emit('setModelValue', this.selected)
      } else {
        this.selectSingleName = ''
        this.selectSingleValue = ''
        this.$emit('setModelValue', this.selectSingleValue)
      }
    },
    // 更新数据
    update(scrollTop = 0) {
      // return
      this.$nextTick(() => {
        if (this.dropContentDisplayHeight) {
          // 获取当前可展示数量
          let count = Math.ceil(Number(this.dropContentDisplayHeight.replace(/px/, '')) / this.liRefHeight)
          if (this.hasSelectAll) {
            count = count - 1
          }
          // console.log('count:', count)
          const start = Math.floor(scrollTop / this.liRefHeight)
          const end = start + count // 取得可见区域的结束数据索引
          this.virtualRenderData = this.filterOptionData.slice(start, end) // 计算出可见区域对应的数据，让 Vue.js 更新
          // 把可见区域的 top 设置为起始元素在整个列表中的位置（使用 transform 是为了更好的性能）
          this.$refs.content &&
            (this.$refs.content.style.webkitTransform = `translate3d(0, ${start * this.liRefHeight}px, 0)`)
          // console.log('this.virtualRenderData :', this.virtualRenderData)
        }
      })
    },
    updateThrottleMethod(e) {
      // return
      this.update(e.target.scrollTop)
    },
    removeTag(tag) {
      if (this.selected.includes(tag)) {
        this.selected = this.selected.filter((item) => item !== tag)
        this.$emit('setModelValue', this.selected)
      }
    },
    handleClickoutside() {
      this.expandState = false
      this.$refs.selectBoxRef.setSearchInputFocusState(false)
    },
  },
}
</script>

<style lang="less" scoped>
@import './selectStyles.less';
</style>
