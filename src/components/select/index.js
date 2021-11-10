/*
 * @Author: atdow
 * @Date: 2021-06-17 10:39:42
 * @LastEditors: null
 * @LastEditTime: 2021-11-10 17:32:11
 * @Description: file description
 */

/* istanbul ignore next */
import Select from "./src/index";
Select.install = function(Vue) {
  Vue.component(Select.name, Select);
};

export default Select;
