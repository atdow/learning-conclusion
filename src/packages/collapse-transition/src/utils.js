/*
 * @Author: atdow
 * @Date: 2023-09-29 02:41:51
 * @LastEditors: null
 * @LastEditTime: 2023-09-29 02:41:54
 * @Description: file description
 */

const reset = function (el) {
  el.style.maxHeight = ''
  el.style.overflow = el.dataset.oldOverflow
  el.style.paddingTop = el.dataset.oldPaddingTop
  el.style.paddingBottom = el.dataset.oldPaddingBottom
}

export const on = {
  beforeEnter(el) {
    if (!el.dataset) el.dataset = {}

    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom

    el.style.maxHeight = 0
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
  },
  enter(el) {
    el.dataset.oldOverflow = el.style.overflow
    if (el.scrollHeight !== 0) {
      el.style.maxHeight = `${el.scrollHeight}px`
    } else {
      el.style.maxHeight = 0
    }
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
    el.style.overflow = 'hidden'
  },
  afterEnter(el) {
    el.style.maxHeight = ''
    el.style.overflow = el.dataset.oldOverflow
  },
  enterCancelled(el) {
    reset(el)
  },
  beforeLeave(el) {
    if (!el.dataset) el.dataset = {}
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldOverflow = el.style.overflow

    el.style.maxHeight = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el) {
    if (el.scrollHeight !== 0) {
      el.style.maxHeight = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
  },
  afterLeave(el) {
    reset(el)
  },
  leaveCancelled(el) {
    reset(el)
  },
}
