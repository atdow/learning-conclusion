## 1. 环境配置区分

在项目中我们一般分为 `本地环境` 、 `测试环境` 、 `qa环境` 以及 `正式环境` ，所以需要配置不同打包环境以及增加不同的环境变量。

### 1.1 第一步，增加打包指令

 `package.json`

```json
{
    "scripts": {
        "build:development": "vue-cli-service build  --mode development",
        "build:test": "vue-cli-service build  --mode test",
        "build:qa": "vue-cli-service build  --mode qa",
        "build:production": "vue-cli-service build  --mode production",
    }
}
```

### 1.2 第二步，增加环境配置文件

> 当是测试环境、qa环境和正式环境时，我们都将 `NODE_ENV` 设置为 `production` ，这样将会使用生产环境的方式进行打包（会进行分包和代码压缩），而区分真正环境的时候使用我们自定义的 `APP_NODE_ENV` ，这样就可以既使用生产环境的方式进行打包，又可以区分不同的环境。

 `.env.development`

```shell
# 覆写vue-cli环境为开发打包环境
NODE_ENV=development

APP_NODE_ENV=development
```

 `.env.test`

```shell
# 覆写vue-cli环境为生产打包环境
NODE_ENV=production

APP_NODE_ENV=test
```

 `.env.qa`

```shell
# 覆写vue-cli环境为生产打包环境
NODE_ENV=production

APP_NODE_ENV=qa
```

 `.env.production`

```shell
# 覆写vue-cli环境为生产打包环境
NODE_ENV=production

APP_NODE_ENV=production
```

### 1.3 使用

当运行起来或者打包的时候，我们可以通过 `process.env.APP_NODE_ENV` 来获取当前的环境变量。

```js
if (process.env.APP_NODE_ENV === 'development') {
    // 开发环境
} else if (process.env.APP_NODE_ENV === 'test') {
    // 测试环境
} else if (process.env.APP_NODE_ENV === 'qa') {
    // qa环境
} else if (process.env.APP_NODE_ENV === 'production') {
    // 生产环境
}
```
