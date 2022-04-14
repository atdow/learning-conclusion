## 进度条

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
