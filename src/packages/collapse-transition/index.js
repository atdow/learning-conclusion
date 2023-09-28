/*
 * @Author: atdow
 * @Date: 2023-09-29 01:01:20
 * @LastEditors: null
 * @LastEditTime: 2023-09-29 01:01:22
 * @Description: file description
 */
import CollapseTransition from './src/collapse-transition'

/* istanbul ignore next */
CollapseTransition.install = function (Vue) {
  Vue.component(CollapseTransition.name, CollapseTransition)
}

export default CollapseTransition
