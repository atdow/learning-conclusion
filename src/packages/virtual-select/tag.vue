<!--
 * @Author: atdow
 * @Date: 2022-09-24 01:15:53
 * @LastEditors: null
 * @LastEditTime: 2022-09-24 20:59:44
 * @Description: file description
-->
<script>
import IconClose from './icon/IconClose'
export default {
  name: 'ElTag',
  props: {
    text: String,
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String,
    effect: {
      type: String,
      default: 'light',
      validator(val) {
        return ['dark', 'light', 'plain'].indexOf(val) !== -1
      },
    },
  },
  components: {
    IconClose,
  },
  methods: {
    handleClose(event) {
      event.stopPropagation()
      this.$emit('close', event)
    },
    handleClick(event) {
      this.$emit('click', event)
    },
  },
  computed: {
    tagSize() {
      return this.size || (this.$ELEMENT || {}).size
    },
  },
  render(h) {
    const { type, tagSize, hit, effect } = this
    const classes = [
      'el-tag',
      type ? `el-tag--${type}` : '',
      tagSize ? `el-tag--${tagSize}` : '',
      effect ? `el-tag--${effect}` : '',
      hit && 'is-hit',
    ]
    const tagEl = (
      <span class={classes} style={{ backgroundColor: this.color }} on-click={this.handleClick}>
        {this.$slots.default}
        {
          this.closable && <IconClose class="icon-close" on-click={this.handleClose} />
          // <i class="el-tag__close el-icon-close" on-click={this.handleClose}></i>
        }
      </span>
    )

    return this.disableTransitions ? tagEl : <transition name="el-zoom-in-center">{tagEl}</transition>
  },
}
</script>
<style lang="less" scoped>
.el-tag.el-tag--info {
  background-color: #f4f4f5;
  border-color: #e9e9eb;
  color: #909399;
}
.el-tag {
  box-sizing: border-box;
  border-color: transparent;
  margin: 2px 0 2px 6px;
  background-color: #f0f2f5;
  display: flex;
  max-width: 100%;
  align-items: center;
}
.el-tag {
  background-color: #ecf5ff;
  display: inline-block;
  height: 32px;
  padding: 0 10px;
  line-height: 30px;
  font-size: 12px;
  color: #409eff;
  border: 1px solid #d9ecff;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
}
.el-tag--small {
  height: 24px;
  padding: 0 8px;
  line-height: 22px;
}
.icon-close {
  border-radius: 50%;
  text-align: center;
  position: relative;
  cursor: pointer;
  font-size: 12px;
  height: 16px;
  width: 16px;
  line-height: 16px;
  vertical-align: middle;
  top: -1px;
  right: -5px;
}
</style>