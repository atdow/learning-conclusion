/*
 * @Author: atdow
 * @Date: 2023-10-05 16:38:31
 * @LastEditors: null
 * @LastEditTime: 2023-10-05 16:38:33
 * @Description: file description
 */
/* istanbul ignore next */
import Ellipsis from './src/index'
Ellipsis.install = function (Vue) {
  Vue.component(Ellipsis.name, Ellipsis)
}

export default Ellipsis
