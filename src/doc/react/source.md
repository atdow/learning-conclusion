## 1. react的生命周期

### 1.1 react的生命周期执行顺序

> 父组件 `componentWillMount` >子组件 `componentWillMount` >子组件 `componentDidMount` >父组件 `componentDidMount`

> 父组件 `componentWillUpdate` >子组件 `componentWillUpdate`  ` >子组件 ` componentDidUpdate ` ` >父组件 ` componentDidUpdate` `

这样的执行顺序是因为react使用的是 `递归渲染` 方式，所以先执行父组件 `componentWillMount` ，再执行子组件 `componentWillMount` ，然后递归回来执行子组件 `componentDidMount` ，最后执行父组件 `componentDidMount` 。

## 2. 注意事项

> 禁止在 `shouldComponentUpdate` 和 `componentWillUpdate` 中调用 `setState` ，这会造成循环调用，直至耗光浏览器内存后奔溃
