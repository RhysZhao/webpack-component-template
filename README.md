<!--
 * Author  rhys.zhao
 * Date  2021-09-16 13:23:39
 * LastEditors  rhys.zhao
 * LastEditTime  2023-02-06 17:41:35
 * Description 拖拽、缩放容器组件
-->
## 描述

webpack-component-template 是一个 React 组件模板。开发组件可以使用此模板。
内有一个示例组件 DragZoomContainer。
DragZoomContainer 是一个 React 容器组件，放在里面的组件可以拖拽，滚动缩放。

## 项目目录

```
webpack-component-template
├─ config
│  ├─ webpack.dev.config.js  // webpack开发环境配置
│  └─ webpack.prod.config.js // webpack生产环境配置
├─ example                   // 示例，通过引用组件来测试组件是否正常
│  ├─ app.js
│  └─ index.html
├─ lib                       // 组件打包生成目录
│  └─ index.js
├─ src                       // 组件源文件目录
│  ├─ index.js
│  └─ index.scss
├─ LICENSE
├─ README.md
├─ package-lock.json
└─ package.json

```

## 使用

1. 预览

```
npm start
```

2. 打包

```
npm run build
```

3. 打包后预览
```
npm run build
```

然后修改 /example/app.js 里的引入地址为 /lib.
比如：
```
import DragZoomContainer from '../src';
```
修改为
```
import DragZoomContainer from '../lib';
```

最后启动：
```
npm start
```
这样就可以实现打包后组件的预览。

