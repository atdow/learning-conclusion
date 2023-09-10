## 1. 创建Personal access tokens

地址：Settings > Developer Settings > Personal access tokens > Tokens(classic) > Generate new token(classic)
配置：

```text
名称：XXX_DEPLOY
勾选配置：全选repo和workflow
```

> 保存后生成唯一的token，需要复制下来，下面需要使用到

## 2. 配置仓库token

地址：仓库 > Settings > Secrets and variables > Actions > Repository secrets>Secrets > New repository secrete

```shell
Name：XXX_DEPLOY # 尽量跟步骤一的名称一致
Secrete: xxx # 步骤一生成的token值
```

最后保存

> token过期后从步骤一中重新生成token更新仓库的token即可

## 3. 新建github pages

> TODO
