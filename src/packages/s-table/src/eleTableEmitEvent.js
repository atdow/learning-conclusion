/*
 * @Author: atdow
 * @Date: 2023-04-14 20:23:59
 * @LastEditors: null
 * @LastEditTime: 2023-04-16 12:49:03
 * @Description: file description
 */
const eventArr = [
  'select',
  'select-all',
  'selection-change',
  'cell-mouse-enter',
  'cell-mouse-leave',
  'cell-click',
  'cell-dblclick',
  'row-click',
  'row-contextmenu',
  'row-dblclick',
  'header-click',
  'header-contextmenu',
  'sort-change',
  'filter-change',
  'current-change',
  'header-dragend',
  'expand-change',
]

const methods = {}
const bindEvent = {}
eventArr.forEach((eventName) => {
  const methodName = `handle-${eventName}`
  const bindEventName = 'on' + eventName.slice(0, 1).toUpperCase() + eventName.slice(1)
  methods[methodName] = function (...args) {
    this.$emit(eventName, ...args)
  }
  bindEvent[bindEventName] = methodName
})

export default {
  methods,
  bindEvent,
}
