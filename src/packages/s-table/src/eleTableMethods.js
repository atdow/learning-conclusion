/*
 * @Author: atdow
 * @Date: 2023-04-14 20:23:59
 * @LastEditors: null
 * @LastEditTime: 2023-04-16 12:49:19
 * @Description: file description
 */
import T from 'element-ui/lib/table'

const methods = {}
Object.keys(T.methods).forEach((eventName) => {
  methods[eventName] = function (...args) {
    this.$refs.eleTableRef[eventName](...args)
  }
})

export default methods
