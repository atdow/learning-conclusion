## 1.全局变量
定义：styles/vars.wxss
```scss
page {
  --themeColor: #0a0b39; // 必须以为--开头
}
```
引入：app.wxss
```scss
@import './styles/vars.wxss';
```
使用：page.wxss
```scss
.demo {
  color: var(--themeColor);
}
```
