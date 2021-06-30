import GeminiScrollbar from 'gemini-scrollbar'

/**
 * 参数说明：
 * height：容器高度，默认300
 * selector：选择器，就是document.querySelector查询节点的参数
 * scrollTarget：滚动条目标对象，值可以是 element，也可以是选择器selector字符串
 * controls：特殊的属性，用来解决a-select这类组件 和 dropdown不在一个共同的parent element 下，需要通过 controls关联
 * delayEvent：延迟事件名称，可以延迟初始化滚动条，比如在focus或者click事件触发时
 * 
 * 简单的情况：
 * <el-table height="100px" v-custom-scrollbar="{height: 40}">...</el-table>
 * 
 * // a-select 组件这自带dropdown下拉面板的复杂情况
 *  <a-select
      mode="multiple"
      placeholder="请选择剂型"
      v-decorator="['dosageForm']"
      v-custom-scrollbar="{
        selector:'.ant-select-selection',
        scrollTarget:'ul.ant-select-dropdown-menu',
        controls:'aria-controls',
        delayEvent:'click'
      }"
       v-custom-scrollbar="{
          scrollTarget: 'ant-select-dropdown-content', // select时最好使用这种方式
          controls: 'aria-controls',
          selector: '.ant-select-selection',
          delayEvent: 'click',
      }"
    >
 */
export default {
  name: 'custom-scrollbar',
  bind(el, binding, vnode) {
    // console.log('custom-scrollbar')
    if (typeof binding.value !== 'object') {
      throw new Error('v-custom-scrollbar args must be object')
    }
    let element
    // console.log("binding:", binding)
    let { selector, height = 300, maxWidth, controls, scrollTarget, delayEvent } = binding.value

    if (!(scrollTarget == 'object' && scrollTarget?.nodeName)) {
      if (selector) {
        element = el.querySelector(selector)
        if (element === null) {
          throw new Error(`can't find the selector(${selector} element`)
        }
      } else {
        element = el
      }
      // a-select 类似的组件兼容
      if (controls && scrollTarget) {
        let ariasControl = element.getAttribute(controls)
        // a-select 组件，下拉弹窗在未focus时没有渲染节点，所有要用延迟事件兼容 delayEvent:'focus'
        if (delayEvent) {
          el.delayEvent = delayEvent
          el.delayListener = () => {
            setTimeout(() => {
              if (!element) {
                element = el
              }
              ariasControl = element.getAttribute(controls)
              const controlsElment = document.getElementById(ariasControl)
              const targetElement = controlsElment.querySelector(scrollTarget) || controlsElment
              element = targetElement
              element.style.height = height + 'px'
              if (maxWidth) {
                element.style.maxWidth = maxWidth + 'px'
              }
              // 执行一次就清除事件
              el.removeEventListener(el.delayEvent, el.delayListener)
              new GeminiScrollbar({
                element
              }).create()
            })
          }
          el.addEventListener(delayEvent, el.delayListener)
        } else {
          const controlsElment = document.getElementById(ariasControl)
          const targetElement = controlsElment.querySelector(scrollTarget)
          element = targetElement
        }
      } else if (controls) {
        const ariasControl = element.getAttribute(controls)
        const controlsElment = document.getElementById(ariasControl)
        element = controlsElment
      }
    } else {
      element = scrollTarget
    }
    if (!delayEvent) {
      element.style.height = height + 'px'
      new GeminiScrollbar({
        element
      }).create()
    }
  },
  inserted(el, binding, vnode) { },
  unbind(el) {
    if (el.delayEvent) {
      el.removeEventListener(el.delayEvent, el.delayListener)
      delete el.delayEvent
    }
  }
}

/* const myScrollbar = new GeminiScrollbar({
  element: (() => {
    var controls = document.querySelector('.dosage-select .ant-select-selection').getAttribute('aria-controls')
    const controlsEl = document.getElementById(controls)
    // console.log(controlsEl)
    const ulElement = controlsEl.querySelector('ul.ant-select-dropdown-menu')
    ulElement.style.height = 300 + 'px'
    // console.log(ulElement)
    return ulElement
  })()
}).create() */

// a-select 组件，下拉弹窗在未focus时没有渲染节点，所有要用延迟事件兼容 delayEvent:'click'
// v-custom-scrollbar="{scrollTarget:'ul.ant-select-dropdown-menu',controls:'aria-controls',selector:'.ant-select-selection',delayEvent:'focus'}"
