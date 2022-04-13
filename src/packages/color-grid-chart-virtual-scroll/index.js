/*
 * @Author: atdow
 * @Date: 2022-03-23 15:10:41
 * @LastEditors: null
 * @LastEditTime: 2022-03-23 16:22:42
 * @Description: file description
 */
import ColorGridChartVirtualScroll from './src/index'

/* istanbul ignore next */
ColorGridChartVirtualScroll.install = function (Vue) {
  Vue.component(ColorGridChartVirtualScroll.name, ColorGridChartVirtualScroll)
}

export default ColorGridChartVirtualScroll