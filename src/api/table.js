/*
 * @Author: atdow
 * @Date: 2023-04-16 16:14:09
 * @LastEditors: null
 * @LastEditTime: 2023-04-16 16:16:48
 * @Description: file description
 */
import request from '@/utils/request'

export function getTableData(params) {
  return request({
    url: '/v1/getTableData',
    method: 'get',
    params,
  })
}
