/*
 * @Author: atdow
 * @Date: 2022-11-18 10:41:29
 * @LastEditors: null
 * @LastEditTime: 2022-11-18 10:42:39
 * @Description: file description
 */
import VirtualList from './src/index.vue'

/* istanbul ignore next */
VirtualList.install = function (Vue) {
  Vue.component(VirtualList.name, VirtualList)
}

export default VirtualList