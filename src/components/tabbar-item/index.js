/*
 * @Author: atdow
 * @Date: 2021-11-11 10:27:19
 * @LastEditors: null
 * @LastEditTime: 2021-11-11 10:40:57
 * @Description: file description
 */
/* istanbul ignore next */
import StabbarItem from "../tabbar/src/tabbar-item";
StabbarItem.install = function(Vue) {
  Vue.component(StabbarItem.name, StabbarItem);
};

export default StabbarItem;