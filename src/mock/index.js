/*
 * @Author: atdow
 * @Date: 2023-04-16 16:15:09
 * @LastEditors: null
 * @LastEditTime: 2023-04-16 16:15:11
 * @Description: file description
 */
if (true) {
  const Mock = require('mockjs2')

  require('./api/table')
  Mock.setup({
    timeout: 500, // 请求延时时间
  })
  console.warn('mockjs2: Mock 服务加载完成')
}
