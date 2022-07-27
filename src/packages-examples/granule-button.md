#### 1. 基础用法

:::demo

```vue
<template>
  <button class="button">Button</button>
</template>
 
<script>
export default {
  components: {}
}
</script>
<style lang="less" scoped>
.button {
  display: inline-block;
  padding: 1em 2em;
  background-color: #ff0081;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  position: relative;
  box-shadow: 0 2px 25px rgba(233, 30, 99, 0.5);
  outline: 0;
  transition: transform ease-in 0.1s, background-color ease-in 0.1s, box-shadow ease-in 0.25s;
}

.button::before {
    position: absolute;
    content: '';
    left: -2em;
    right: -2em;
    top: -2em;
    bottom: -2em;
    pointer-events: none;
    background-repeat: no-repeat;
    background-image: radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        /* 下面的点 */
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%),
        radial-gradient(circle, #ff0081 20%, transparent 20%);
    /*扩散的状态*/
    background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%, 80% 0%, 100% -2%, -5% 80%,
        100% 55%, 2% 100%, 23% 100%, 42% 100%, 60% 95%, 70% 96%, 100% 100%;
    /*隐藏*/
    background-size: 0% 0%;
    transition: background-position .5s ease-in-out, background-size .75s ease-in-out;
}

.button:active::before {
    /**注意取消掉过渡，达到瞬时变化到下面的状态**/
    transition: 0s;
    /*聚合的状态*/
    background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%, 65% 30%, 80% 32%, 15% 60%,
        83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%, 64% 70%, 80% 71%;
    /*显示*/
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%,
        15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
}
</style>

```
:::

### 2.设计思路
粒子使用`background-image`，每个粒子由`radial-gradient(circle, #ff0081 20%, transparent 20%)`径向渐变实现。一开始粒子是扩散隐藏状态，当点击的时候瞬间`（transition: 0s）`切换为聚合显示状态，最终粒子将会是从中心向周围扩散并慢慢消失。
