/*
 * @Author: atdow
 * @Date: 2022-09-23 20:05:33
 * @LastEditors: null
 * @LastEditTime: 2022-09-24 21:34:16
 * @Description: file description
 */
export const isSingleOverEllipsis = function (el) {
  const textContent = el
  const targetW = textContent.getBoundingClientRect().width
  const range = document.createRange()
  range.setStart(textContent, 0)
  range.setEnd(textContent, textContent.childNodes.length)
  const rangeWidth = range.getBoundingClientRect().width
  range.detach() //从文档中分离
  // range = null //解除引用
  // console.log('targetW:', targetW)
  // console.log('rangeWidth:', rangeWidth)
  return rangeWidth > targetW
}
