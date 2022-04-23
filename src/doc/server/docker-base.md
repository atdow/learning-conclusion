# 1. 基本使用

## 1.1. 列出本机的所有 image 文件。

```shell
docker image ls
```

## 1.2. 删除 image 文件

```shell
docker image rm [imageName]
```

## 1.3. 拉image

```shell
docker image pull library/hello-world # 第一种方式
docker image pull hello-world # 第二种方式
```

## 1.4. 运行image

```shell
# 这两个指令都会新建一个容器，适用于第一次运行
docker container run hello-world
docker container run -it ubuntu bash ## ubuntu
# 这个命令适用于后面的启动
docker container start [containerID]
```

## 1.5. 终止image

```shell
# 向容器里面的主进程发出 SIGKILL 信号
docker container kill [containID]
# 向容器里面的主进程发出 SIGTERM 信号，然后过一段时间再发出 SIGKILL 信号
docker container stop [containerID]
```

## 1.6. 容器文件

```shell
# 列出本机正在运行的容器
docker container ls

# 列出本机所有容器，包括终止运行的容器
docker container ls --all

# 删除容器
docker container rm [containerID]
```

## 1.7. Dockerfile 文件

```shell
FROM node:8.4 # 该image文件继承官方的node image，冒号表示标签，这里标签是8.4，即8.4版本的node
COPY . /app # 将当前目录下的所有文件（除了.dockerignore排除的路径），都拷贝进入 image 文件的/app目录
WORKDIR /app # 指定接下来的工作路径为/app
RUN ["npm", "install"] # 在/app目录下，运行npm install命令安装依赖。注意，安装后所有的依赖，都将打包进入 image 文件
EXPOSE 3000/tcp # 将容器 3000 端口暴露出来， 允许外部连接这个端口
```

## 1.8. CMD 命令

```shell
FROM node:8.4
COPY . /app
WORKDIR /app
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 3000
CMD node demos/01.js # CMD命令
```

RUN命令在 image 文件的构建阶段执行，执行结果都会打包进入 image 文件；CMD命令则是在容器启动后执行。另外，一个 Dockerfile 可以包含多个RUN命令，但是只能有一个CMD命令。指定了CMD命令以后，docker container run命令就不能附加命令了（比如前面的/bin/bash），否则它会覆盖CMD命令

## 1.9. 查看logs

```shell
docker container logs [containerID]
```

## 1.10. 进入容器

```shell
docker container exec -it [containerID] /bin/bash
```

## 1.11. 拷贝文件

从正在运行的 Docker 容器里面，将文件拷贝到本机

```shell
docker container cp [containID]:[/path/to/file] . # 拷贝到当前目录
```

# 2. 制作自己的 Docker 容器

## 2.1 编写 Dockerfile 文件

首先，在项目的根目录下，新建一个文本文件.dockerignore，写入下面的内容

```shell
.git
node_modules
npm-debug.log
```

新建一个文本文件 Dockerfile

```shell
FROM node:8.4 # 该image文件继承官方的node image，冒号表示标签，这里标签是8.4，即8.4版本的node
COPY . /app # 将当前目录下的所有文件（除了.dockerignore排除的路径），都拷贝进入 image 文件的/app目录
WORKDIR /app # 指定接下来的工作路径为/app
RUN ["npm", "install"] # 在/app目录下，运行npm install命令安装依赖。注意，安装后所有的依赖，都将打包进入 image 文件
EXPOSE 3000/tcp # 将容器 3000 端口暴露出来， 允许外部连接这个端口
```

## 2.2 创建 image 文件

```shell
docker image build -t koa-demo . 
# 或者
docker image build -t koa-demo:0.0.1 .
```

`-t` 参数用来指定 image 文件的名字，后面还可以用冒号指定标签。如果不指定，默认的标签就是 `latest` 。最后的那个点表示 Dockerfile 文件所在的路径，上例是当前路径，所以是一个点。

验证是否成功：

```shell
docker image ls
```

## 2.3 生成容器

```shell
docker container run -p 8000:3000 -it koa-demo /bin/bash
# 或者
docker container run -p 8000:3000 -it koa-demo:0.0.1 /bin/bash
```

* -p参数：容器的 3000 端口映射到本机的 8000 端口。
* -it参数：容器的 Shell 映射到当前的 Shell，然后你在本机窗口输入的命令，就会传入容器。
* koa-demo:0.0.1：image 文件的名字（如果有标签，还需要提供标签，默认是 latest 标签）。
* /bin/bash：容器启动以后，内部第一个执行的命令。这里是启动 Bash，保证用户可以使用 Shell。

## 2.4 关闭容器

```shell
# 在本机的另一个终端窗口，查出容器的 ID
docker container ls
# 停止指定的容器运行
docker container kill [containerID]
```

## 2.5 删除容器

```shell
# 查出容器的 ID
docker container ls --all

# 删除指定的容器文件
docker container rm [containerID]
```

也可以使用 `docker container run` 命令的 `--rm` 参数，在容器终止运行后自动删除容器文件

```shell
docker container run --rm -p 8000:3000 -it koa-demo /bin/bash
```

# 3. 发布 image 文件

```shell
docker login
```

为本地的 image 标注用户名和版本

```shell
docker image tag [imageName] [username]/[repository]:[tag]
# 实例
docker image tag koa-demos:0.0.1 atdow/koa-demos:0.0.1
```

也可以不标注用户名，重新构建一下 image 文件。

```shell
docker image build -t [username]/[repository]:[tag] .
```

最后，发布 image 文件。

```shell
docker image push [username]/[repository]:[tag]
```
