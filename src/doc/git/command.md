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
