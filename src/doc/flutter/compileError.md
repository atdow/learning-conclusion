> 编译报错解决方案

## 1. jdk版本不支持

报错信息：

```bash
* What went wrong:
An exception occurred applying plugin request [id: 'com.android.application']
> Failed to apply plugin 'com.android.internal.application'.
   > Android Gradle plugin requires Java 17 to run. You are currently using Java 11.
      Your current JDK is located in /Applications/Android Studio.app/Contents/jre/Contents/Home
      You can try some of the following options:
       - changing the IDE settings.
       - changing the JAVA_HOME environment variable.
       - changing `org.gradle.java.home` in `gradle.properties`.
```

安装 `jdk17` （上面报错的版本），并手动执行配置（android studio暂时没发现解决方案）

```bash
# 目录需要是本地安装的jdk目录
flutter config --jdk-dir="/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home"
```

## 2. NDK报错

报错信息：

```bash
* What went wrong:
A problem occurred configuring project ':app'.
> [CXX1101] NDK at /Users/a/Library/Android/sdk/ndk/26.3.11579264 did not have a source.properties file

```

原因是没有安装 `NDK`

解决办法：

1. 1.打开android studio>file>setting>Languages&Frameworks >`Android SDK`

2. 2.选择`SDK tools`，勾选右下角`Show Package Details`

3. 3.找到`NDK`，选择安装报错里要求的版本，我的是26.3.11579264

4. 4.安装完成，问题解决。

## 3. 运行卡住：flutter Downloading ios tools...

解决方案：

1. 1.设置环境变量：

```bash
# .zshrc
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

2. 2.执行命令：

```bash
# 注意，需要执行命令运行，不能直接点编译，可能还会卡住
flutter run #（项目根目录下）
```
