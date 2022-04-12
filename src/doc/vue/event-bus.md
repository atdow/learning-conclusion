## 1. 封装

### 1.1 event.js

```js
import Vue from 'vue'

const eventHub = new Vue({
    methods: {
        on(...args) {
            this.$on.apply(this, args);
        },
        emit(...args) {
            this.$emit.apply(this, args);
        },
        off(...args) {
            this.$off.apply(this, args);
        },
        once(...args) {
            this.$once.apply(this, args);
        }
    }
});

const CustomEventPlugin = V =>
    Object.defineProperty(V.prototype, '$event', {
        value: eventHub,
        writable: true
    })

export default CustomEventPlugin;
```

### 1.2 main.js

```js
import Vue from 'vue'
import CustomEventPlugin from './utils/event'

Vue.use(CustomEventPlugin)
```

## 2. 使用

```js
mounted() {
    // 发送
    this.$event.emit('change_value', 1);
    // 监听方式1
    this.$event.on('change_value', (id) => {
        console.log(id)
    })
    // 监听方式2
    this.$event.once('change_value', (id) => {
        console.log(id)
    })
    // 取消监听
    this.$event.off('change_value')
}
```
