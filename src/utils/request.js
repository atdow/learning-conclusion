/*
 * @Author: atdow
 * @Date: 2023-04-16 16:11:53
 * @LastEditors: null
 * @LastEditTime: 2023-04-16 16:12:56
 * @Description: file description
 */
import axios from 'axios'

const service = axios.create({
  baseURL: '',
  timeout: 20000,
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (res) => {
    const data = res.data
    return data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
