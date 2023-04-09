/*
 * @Author: atdow
 * @Date: 2023-04-09 18:08:54
 * @LastEditors: null
 * @LastEditTime: 2023-04-09 18:09:21
 * @Description: file description
 */
export default {
  data() {
    return {
      contentHeight: 0,
    }
  },
  mounted() {
    const sGlobalHeader = document.querySelector('.s-global-header')
    const { height = 0 } = sGlobalHeader.getBoundingClientRect()
    this.contentHeight = `calc(100vh - ${height}px)`
  },
}
