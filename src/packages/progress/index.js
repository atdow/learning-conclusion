/*
 * @Author: atdow
 * @Date: 2022-04-14 22:15:41
 * @LastEditors: null
 * @LastEditTime: 2022-04-14 22:16:59
 * @Description: file description
 */
/* istanbul ignore next */
import Progress from './src/index'
Progress.install = function(Vue) {
  Vue.component(Progress.name, Progress)
}

export default Progress