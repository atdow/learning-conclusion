/*
 * @Author: atdow
 * @Date: 2021-06-17 10:39:42
 * @LastEditors: null
 * @LastEditTime: 2021-06-17 16:15:56
 * @Description: file description
 */

/* istanbul ignore next */
import ScrollNumber from './src/index'
ScrollNumber.install = function(Vue) {
  Vue.component(ScrollNumber.name, ScrollNumber)
}

export default ScrollNumber
