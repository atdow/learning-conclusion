/*
 * @Author: atdow
 * @Date: 2023-02-20 21:28:34
 * @LastEditors: null
 * @LastEditTime: 2023-02-20 21:28:37
 * @Description: file description
 */
import SinoScrollbar from './src/scrollbar'

/* istanbul ignore next */
SinoScrollbar.install = function (Vue) {
  Vue.component(SinoScrollbar.name, SinoScrollbar)
}

export default SinoScrollbar