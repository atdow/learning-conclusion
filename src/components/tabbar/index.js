/*
 * @Author: atdow
 * @Date: 2021-06-17 10:39:42
 * @LastEditors: null
 * @LastEditTime: 2021-11-11 10:38:58
 * @Description: file description
 */

/* istanbul ignore next */
import SStabbar from './src/index'
SStabbar.install = function(Vue) {
  Vue.component(SStabbar.name, SStabbar)
}

export default SStabbar
