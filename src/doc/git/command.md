## 1. 修改git账号

```shell
git config--global user.name "yourGitUserName"
git config--global user.email "youGitEmail"
```

## 2. 删除分支

```shell
# 删除本地分支
git branch -D branch_name
# 删除远程分支
git push origin branch_name --delete
```

## 3. git配置用户名和邮箱

```shell
git config --global user.name <yourUserName>
git config --global user.email <xxx@xx.com>

git config --global user.name xxx
git config --global user.email xxx@xxx.com
```

## 4. github代理

如果代理类型是socks5进行如下设置即可

```shell
git config --global http.proxy socks5://127.0.0.1:1086
git config --global https.proxy socks5://127.0.0.1:1086
```

如果是普通的http/https进行如下设置即可

```shell
git config --global https.proxy http://127.0.0.1:1087
git config --global https.proxy https://127.0.0.1:1087
```

取消代理设置

```shell
git config --global --unset http.proxy 
git config --global --unset https.proxy
```

查看代理设置

```shell
git config -l --global
```

mac git配置文件位置

```text
/Users/a/.gitconfig
```

## 5. 更新本地列表

```text
git remote update
```
