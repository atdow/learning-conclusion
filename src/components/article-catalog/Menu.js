/*
 * @Author: atdow
 * @Date: 2023-02-28 17:22:04
 * @LastEditors: null
 * @LastEditTime: 2023-02-28 19:52:15
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
          <a class={{ active: item.id === this.activeId }} onClick={() => this.menuClick(item)}>
            {item.text}
          </a>
          <ul class="markdown-toc-list">{this.renderList(item.children || [])}</ul>
        </li>
      ))
    },
    menuClick(item) {
      this.$emit('menuClick', item)
    },
    receiveContentScrollData(data) {
      const { scrollTop } = data
      const domMap = this.flatList.map((item) => document.querySelector(`#${item.id}`))
      this.flatList.forEach((listItem) => {
        const dom = document.querySelector(`#${listItem.id}`)
        if (dom.offsetTop - scrollTop < 10) {
          this.activeId = listItem.id
        }
      })
    },
  },
  render() {
    return <ul class="markdown-toc-list">{this.renderList(this.list)}</ul>
  },
}
