## 1. 封装监听dom大小的函数

> 函数依赖于 `resize-observer-polyfill` ，请先安装 `resize-observer-polyfill`

```text
npm install resize-observer-polyfill@1.5.0 --save
```

```js
import ResizeObserver from 'resize-observer-polyfill'

const isServer = typeof window === 'undefined'

/* istanbul ignore next */
const resizeHandler = function(entries) {
    for (const entry of entries) {
        const listeners = entry.target.__resizeListeners__ || []
        if (listeners.length) {
            listeners.forEach(fn => {
                fn()
            })
        }
    }
}

/* istanbul ignore next */
export const addResizeListener = function(element, fn) {
    if (isServer) return
    if (!element.__resizeListeners__) {
        element.__resizeListeners__ = []
        element.__ro__ = new ResizeObserver(resizeHandler)
        element.__ro__.observe(element)
    }
    element.__resizeListeners__.push(fn)
}

/* istanbul ignore next */
export const removeResizeListener = function(element, fn) {
    if (!element || !element.__resizeListeners__) return
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1)
    if (!element.__resizeListeners__.length) {
        element.__ro__.disconnect()
    }
}
```

## 2. 使用方式

:::demo 

```vue
<template>
  <div>
    <p>dom大小变化次数: {{count}}</p>
    <div class='resize-dom'>当dom大小发生变化时，将会触发监听函数。可以改变浏览器大小来触发dom的大小变化。</div>
  </div>
</template>
<script>
import { addResizeListener, removeResizeListener } from '@/utils/resize-event'
export default {
  name: "resize-event",
  props: {},
  data() {
    return {
      count: 0
    };
  },
  mounted() {
    const dom = document.querySelector('.resize-dom')
    addResizeListener(dom, () => {
      this.count ++
    })
    this.$once('hook:beforeDestroy', ()=>{
      removeResizeListener(dom)
    })
  },
  beforeDestroy() {}
};
</script>
<style lang="less" scoped>
.resize-dom {
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 30px;
}
</style>
```

:::
