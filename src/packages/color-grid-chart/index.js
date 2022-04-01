/*
 * @Author: atdow
 * @Date: 2022-03-23 15:10:41
 * @LastEditors: null
 * @LastEditTime: 2022-03-23 15:10:41
 * @Description: file description
 */
import ColorGridChart from './src/index';

/* istanbul ignore next */
ColorGridChart.install = function (Vue) {
  Vue.component(ColorGridChart.name, ColorGridChart);
};

export default ColorGridChart;