/*
 * @Author: atdow
 * @Date: 2021-03-18 11:12:35
 * @LastEditors: null
 * @LastEditTime: 2021-03-18 11:43:57
 * @Description: file content
 */
import SMilestoneTable from './src/index.js';

/* istanbul ignore next */
SMilestoneTable.install = function (Vue) {
    Vue.component(SMilestoneTable.name, SMilestoneTable);
};

export default SMilestoneTable;
