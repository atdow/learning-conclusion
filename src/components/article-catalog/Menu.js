/*
 * @Author: atdow
 * @Date: 2023-02-28 17:22:04
 * @LastEditors: null
 * @LastEditTime: 2023-02-28 21:20:07
 * @Description: file description
 */
import { listDepthFirstTraversal } from '@/utils/util'
export default {
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
  data() {
    return {
      flatList: [],
      activeId: '',
      isMenuClick: false,
    }
  },
  watch: {
    list: {
      immediate: true,
      handler: function () {
        const flatList = []
        listDepthFirstTraversal(this.list, (item) => {
          flatList.push(item)
        })
        this.flatList = flatList
        this.$nextTick(() => {
          this.receiveContentScrollData({ scrollTop: 20 })
        })
      },
    },
  },
  methods: {
    renderList(list) {
      return list.map((item) => (
        <li class="markdown-toc-list_item">
          <a
            style={`padding-left:${item.level * 20}px`}
            id={item.id}
            class={{ active: item.id === this.activeId }}
            onClick={() => this.menuClick(item)}
          >
            {item.text}
          </a>
          <ul class="markdown-toc-list">{this.renderList(item.children || [])}</ul>
        </li>
      ))
    },
    menuClick(item) {
      this.activeId = item.id
      this.$emit('menuClick', item)
      this.isMenuClick = true
      setTimeout(() => {
        this.isMenuClick = false
      }, 500)
    },
    receiveContentScrollData(data) {
      if (this.isMenuClick) {
        return
      }
      const { scrollTop } = data
      const domMap = this.flatList.map((item) => document.querySelector(`#${item.id}`))
      this.flatList.forEach((listItem) => {
        const dom = document.querySelector(`#${listItem.id}`)
        if (dom.offsetTop - scrollTop < 30) {
          this.activeId = listItem.id
        }
      })
      if (!this.activeId) {
        return
      }
      const dom = this.$el.querySelector(`#${this.activeId}`)
      if (dom) {
        this.$emit('activeChange', this.activeId, dom)
      }
    },
  },
  render() {
    return <ul class="markdown-toc-list">{this.renderList(this.list)}</ul>
  },
}
