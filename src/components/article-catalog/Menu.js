/*
 * @Author: atdow
 * @Date: 2023-02-28 17:22:04
 * @LastEditors: null
 * @LastEditTime: 2023-02-28 17:35:58
 * @Description: file description
 */
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
    return {}
  },
  methods: {
    renderList(list) {
      return list.map((item) => (
        <li class="">
          <a onClick={() => this.menuClick(item)}>{item.text}</a>
          <ul class="markdown-toc-list">{this.renderList(item.children || [])}</ul>
        </li>
      ))
    },
    menuClick(item) {
      this.$emit('menuClick', item)
    },
  },
  render() {
    return <ul class="markdown-toc-list">{this.renderList(this.list)}</ul>
  },
}
