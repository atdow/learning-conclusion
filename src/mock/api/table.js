/*
 * @Author: atdow
 * @Date: 2023-04-16 16:15:42
 * @LastEditors: null
 * @LastEditTime: 2023-04-16 16:31:21
 * @Description: file description
 */
import Mock from 'mockjs2'

import { builder, getQueryParameters } from '../util'
const totalCount = 5701
const getTableData = (options) => {
  const parameters = getQueryParameters(options)
  const result = []
  const pageNum = parseInt(parameters.pageNum)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNum - 1) * pageSize
  const next = (pageNum >= totalPage ? totalCount % pageSize : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      index: (pageNum - 1) * pageSize + i,
    })
  }

  return builder({
    pageNum: pageNum,
    pageSize: pageSize,
    total: totalCount,
    totalPage: totalPage,
    data: result,
  })
}

// const getTableData = function () {
//   const data = []
//   for (let i = 0; i < 100; i++) {
//     data.push({ index: i })
//   }
//   this.data = data
//   return {
//     pageNum: 1,
//     pageSize: 10,
//     total: 100,
//     totalPage: 10,
//     data: data,
//   }
// }

Mock.mock(/v1\/getTableData/, 'get', getTableData)
