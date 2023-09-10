# 1. windows下的使用

## 1.1 杀死所有进程

```shell
taskkill /f /t /im nginx.exe
```

## 1.2 开启

```shell
nginx
```

## 1.3 重启

```shell
nginx -s  reload
```

# 2. mac下的使用

## 2.1 开启

```shell
nginx
```

## 2.2 重启

```shell
nginx -s  reload
```

## 2.3 查看brew的方式安装的nginx所有目录

```shell
brew list nginx

# /usr/local/Cellar/nginx/1.21.4/.bottle/etc/ (16 files)
# /usr/local/Cellar/nginx/1.21.4/bin/nginx
# /usr/local/Cellar/nginx/1.21.4/homebrew.mxcl.nginx.plist
# /usr/local/Cellar/nginx/1.21.4/homebrew.nginx.service
# /usr/local/Cellar/nginx/1.21.4/html -> ../../../var/www
# /usr/local/Cellar/nginx/1.21.4/share/man/man8/nginx.8
# /usr/local/Cellar/nginx/1.21.4/share/nginx/ (2 files)
```

## 3.4 配置文件位置

brew配置位置为 `/usr/local/Cellar/nginx/1.21.4/.bottle/etc/nginx.conf`

需要修改的配置位置为： `/usr/local/etc/nginx/nginx.conf`
