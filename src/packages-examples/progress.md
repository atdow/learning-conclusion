:::demo #### 1. 基础用法

```vue
<template>
  <s-progress :percent="50"></s-progress>
</template>
 
<script>
import SProgress from '@/packages/progress'
export default {
  components: {
    SProgress,
  }
}
</script>
```

:::

:::demo #### 2. 使用插槽指定文字

```vue
<template>
  <s-progress :percent="50">这是指定的插槽文字</s-progress>
</template>
 
<script>
import SProgress from '@/packages/progress'
export default {
  components: {
    SProgress,
  }
}
</script>
```

:::

:::demo #### 3. 进度条颜色

```vue
<template>
  <s-progress :percent="50" strokeColor="pink" background="#ebeef5"></s-progress>
</template>
 
<script>
import SProgress from '@/packages/progress'
export default {
  components: {
    SProgress,
  }
}
</script>
```

:::

:::demo #### 4. 进度条方向

```vue
<template>
  <s-progress :percent="50" direction="right" background="#ebeef5"></s-progress>
</template>
 
<script>
import SProgress from '@/packages/progress'
export default {
  components: {
    SProgress,
  }
}
</script>
```

:::

:::demo #### 5. 进度条高度

```vue
<template>
  <s-progress :percent="50" :height="30"></s-progress>
</template>
 
<script>
import SProgress from '@/packages/progress'
export default {
  components: {
    SProgress,
  }
}
</script>
```

:::

:::demo #### 6. 进度条圆角

```vue
<template>
  <s-progress :percent="50" :strokeRadius="true" :containerRadius="true" background="#ebeef5"></s-progress>
</template>
 
<script>
import SProgress from '@/packages/progress'
export default {
  components: {
    SProgress,
  }
}
</script>
```

:::

:::demo #### 7. 指定最小宽度

```vue
<template>
  <s-progress :percent="1" :minWidth="50" :strokeRadius="true" :containerRadius="true" background="#ebeef5"></s-progress>
</template>
 
<script>
import SProgress from '@/packages/progress'
export default {
  components: {
    SProgress,
  }
}
</script>
```

:::

### API

| 属性       | 说明           | 类型         | 默认值 |
| ---------- | -------------- | ------------ | ------ |
| percent       | 百分比       | Number | 0 |
| direction | 方向 | String  left|right      | left |
| strokeColor | 进度条颜色 | String       | green |
| background | 背景颜色 | String       | white |
| height | 高度 | Number       | 20 `px` |
| strokeRadius | 进度条是否使用圆角 | Boolean       | false |
| containerRadius | 进度条容器是否使用圆角 | Boolean       | false     |
| minWidth | 最小长度 | Number       | 0 `px` |
