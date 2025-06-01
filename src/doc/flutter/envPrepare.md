> mac环境, 终端zsh

## 1. 安装homebrew

安装步骤自行百度

## 2. 安装android studio

安装步骤自行百度

> 使用技巧： `Android studio` 找不到 `Plugins` ，按下 `command+, ` (逗号键)，你就会发现，studio会跳出一个窗口，就会包含 `Plugins`

## 3. 安装xcode

安装步骤自行百度

## 4. 安装Cocoapads

```bash
brew install cocoapads
```

## 5. 安装fvm

> fvm是flutter包管理工具

### 5.1 安装

```bash
# install
brew tap leoafarias/fvm
brew install fvm

# uninstall
brew uninstall fvm
brew untap leoafarias/fvm
```

### 5.2 配置环境变量

```bash
# 注意替换 your-user-name 
export PATH="$PATH:/Users/your-user-name/fvm/default/bin" #.zshrc
```

### 5.3 设置国内镜像站点

> 注意：如果不设置，后面可能会卡在拉包过程不动

```bash
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

### 5.4 常用命令

```bash
# releases 查看远端最新15个已发布的flutter版本
fvm releases | tail -15

# install 安装指定版本的flutter
fvm install 3.16.5

# list 查看本机安装的flutter版本
fvm list

# use 在某个工程中使用指定的flutter版本
fvm use 3.16.5

# remove 删除指定版本的flutter sdk
fvm remove 3.16.5

# global 全局切换flutter版本
fvm global 3.16.5
```

### 5.5 fvm use说明 

```bash
.
├── flutter_sdk # 是个软链接，指向fvm对应版本 -> ~/fvm/versions/3.19.2
└── fvm_config.json # fvm 配置文件

# fvm_config.json
{
  "flutter": "3.19.2",
  "flavors": {
    "development": "stable",
    "staging": "3.16.9",
    "production": "3.10.3"
  }
}
```

fvm_config.json 说明：
  flutter，指向当前工程配置版本
  flavors，可以配置不同开发环境的flutter版本

## 6. 安装flutter sdk

### 6.1 安装

```bash
# install 安装指定版本的flutter
fvm install 3.16.5
# global 全局切换flutter版本
fvm global 3.16.5
```

### 6.2 自检

#### 6.2.1 命令

```bash
flutter doctor
```

####  6.2.1 报错：path/to/sdkmanager --install “cmdline-tools；latest“

需要在 `android studio` 中安装 `Android sdk command-line tools` ；需要安装对应本地 `jdk` 版本的tools，对应关系如下：

| cmdline-tools 版本 | 最低 JDK |
|---|---|
| 19.0 / 17.0 / 16.0 / 13.0 / 12.0 / 11.0	 | 17 |
| 10.0 / 9.0 | 11 |
| 8.0 / 7.0 / 6.0 | 8 |

执行

```bash
flutter doctor --android-licenses # 安卓证书
```

全部accept即可

#### 6.2.2 报错：CocoaPods 1.10.1 out of date (1.16.2 is recommended)

```bash
# 升级cocaPods
brew reinstall cocoapods # 可能版本不兼容, 建议不要用这种方式
brew uninstall cocoapods # 卸载旧版本
brew install cocoapods @1.16.2 # 安装上面报错的版本

pod --version # 检查版本

```

#### 6.2.3 报错：Proxy Configuration ! NO_PROXY is not set

```bash
# 除了解决上面的问题，热更新跟这里也有关系
export NO_PROXY=localhost,127.0.0.1,LOCALHOST  # .zshrc
```
