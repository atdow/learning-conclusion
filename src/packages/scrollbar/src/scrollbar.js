import { addResizeListener, removeResizeListener } from '@/utils/resize-event'
import scrollbarWidth from './scrollbar-width'
import { toObject } from './util'
import Bar from './bar'
require('./styles.less')

/* istanbul ignore next */
export default {
  name: 'SinoScrollbar',

  components: { Bar },

  props: {
    native: Boolean, // 是否使用滚动条
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    showHorizontalBar: {
      type: Boolean,
      default: true,
    },
    showVerticalBar: {
      type: Boolean,
      default: true,
    },
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div',
    },
  },

  data() {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0,
    }
  },

  computed: {
    wrap() {
      return this.$refs.wrap
    },
  },

  render(h) {
    // console.log('native:', this.native)
    const gutter = scrollbarWidth() // 原生滚动条的宽度
    let style = this.wrapStyle

    // mac的是没有gutter的
    if (gutter) {
      const gutterWith = `-${gutter}px`
      const gutterStyle = `margin-bottom: ${gutterWith}; margin-right: ${gutterWith};`

      if (Array.isArray(this.wrapStyle)) {
        style = toObject(this.wrapStyle)
        style.marginRight = style.marginBottom = gutterWith
      } else if (typeof this.wrapStyle === 'string') {
        style += gutterStyle
      } else {
        style = gutterStyle
      }
      // 手动加上宽高，不然容易导致容器宽高不对
      style += `width: calc(100% + ${gutter}px);height: calc(100% + ${gutter}px);`
    } else {
      style += `width: 100%;height: 100%;`
    }
    const view = h(
      this.tag,
      {
        class: ['sino-scrollbar__view', this.viewClass],
        style: this.viewStyle,
        ref: 'resize',
      },
      this.$slots.default
    )
    const wrap = (
      <div
        ref="wrap"
        style={style}
        onScroll={this.handleScroll}
        class={[this.wrapClass, 'sino-scrollbar__wrap', gutter ? '' : 'sino-scrollbar__wrap--hidden-default']}
      >
        {[view]}
      </div>
    )
    let nodes

    if (!this.native) {
      nodes = [wrap]
      if (this.showHorizontalBar) {
        nodes.push(<Bar move={this.moveX} size={this.sizeWidth}></Bar>)
      }
      if (this.showVerticalBar) {
        nodes.push(<Bar vertical move={this.moveY} size={this.sizeHeight}></Bar>)
      }
      // nodes = ([
      //   wrap,
      //   <Bar
      //     move={this.moveX}
      //     size={this.sizeWidth}></Bar>,
      //   <Bar
      //     vertical
      //     move={this.moveY}
      //     size={this.sizeHeight}></Bar>
      // ])
    } else {
      nodes = [
        <div ref="wrap" class={[this.wrapClass, 'sino-scrollbar__wrap']} style={style}>
          {[view]}
        </div>,
      ]
    }
    return h('div', { class: 'sino-scrollbar' }, nodes)
  },

  methods: {
    handleScroll(e) {
      const wrap = this.wrap

      this.moveY = (wrap.scrollTop * 100) / wrap.clientHeight
      this.moveX = (wrap.scrollLeft * 100) / wrap.clientWidth
      this.$emit('scroll', { scrollTop: e.target.scrollTop, scrollLeft: e.target.scrollLeft, e })
      if (e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight) {
        // 防抖
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.$emit('scrollBottom')
        }, 100)
      }
    },

    update() {
      let heightPercentage = ''
      let widthPercentage = ''
      const wrap = this.wrap
      if (!wrap) return

      heightPercentage = (wrap.clientHeight * 100) / wrap.scrollHeight
      widthPercentage = (wrap.clientWidth * 100) / wrap.scrollWidth

      this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : ''
      this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : ''
    },
    resetToTop() {
      this.wrap.scrollTop = 0
    },
    scrollToTop(top) {
      this.wrap.scrollTop = top
    },
  },

  mounted() {
    if (this.native) return
    this.$nextTick(this.update)
    !this.noresize && addResizeListener(this.$refs.resize, this.update)
  },

  beforeDestroy() {
    if (this.native) return
    !this.noresize && removeResizeListener(this.$refs.resize, this.update)
  },
}
