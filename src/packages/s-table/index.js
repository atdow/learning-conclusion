/*
 * @Author: atdow
 * @Date: 2022-05-06 16:49:49
 * @LastEditors: null
 * @LastEditTime: 2023-04-16 12:49:32
 * @Description: file description
 */
import Table from './src/table'

/* istanbul ignore next */
Table.install = function (Vue) {
  Vue.component(Table.name, Table)
}

export default Table
