# vue-cesium

> vue-cesium 的结合模版,使用vue-cli4.X,和Cesium1.7;viewer和Cesium 设为全局,操作方便,在vue中不会造成内存溢出,正常运行`60FPS`

## 演示

[演示](http://wangyoujin.gitee.io/vue_cesium/#/)

## 安装

```node

  yarn install

```

## 启动

```node
  yarn run serve

```
## 打包

```node
  yarn run build

```

## 配置说明

## 使用插件

|    技术    |     介绍     |
| :--------: | :----------: |
| vueRouter  |     路由     |
|    vuex    |   状态管理   |
| elemmentUI |   UI 框架    |
|    less    |   预处理器   |
|  prettier  |  格式化代码  |
|   eslint   | 检测代码质量 |
|   axios    |  ajax 请求   |
|   Cesium    |  三维GIS框架   |
|   @dvgis/cesium-map    |  Cesium加载地图的插件   |

## 项目结构

```js
├── public
├── dist                              // 上线项目文件，放在服务器即可正常访问
├──.babelc                            //  可以使用更高级语法
├──.browserslistrc                    // 浏览器设置
├──.editorconfig                      // 编辑器统一
├──.eslintrc.js                       // 代码校验
├──.gitignore                         // git设置
├── .prettierrc                        // 代码格式化风格
├── babel.config.js                   // babel 设置
├── package.json                      // 依赖信息
├── posstcss.config.js                // css处理插件
├── vue.config.js                     // 项目配置
├── README.md                         // 说明
├── src                               // 源码目录
│   ├── components                    // 组件
│   │   ├── Viewer                    // Viewer组件
│   │   │   ├── index.vue.vue         // 弹出框组件
│   ├── router                        // 路由
│   │   └── router.js                 // 路由配置
│   ├── store                         // vuex的状态管理
│   │   ├── getters.js                // 配置getters
│   │   ├── index.js                  // 引用vuex，创建store
│   ├── api                           // api文件
│   │   └── index.js                  // 接口封装
│   ├── util                          // 工具
│   │   └── request.js                // axios封装
│   ├── plugin                        // 插件
│   │   └── elementui.js              // elementui按需引入文件
|   |—— assets                        // 静态资源目录
|   |   |—— style                     // less和css样式文件
|   |   |—— images                    // 图片
|   |   |—— font                      // 字体文件
|   ├── views                         // 视图文件
|   ├── |—— index.vue
|   ├── App.Loader.js
│   ├── App.vue                        // 页面入口文件
│   ├── main.js                        // 程序入口文件

```
## 使用

### cesium指北针
+ 安装插件`yarn add cesium-navigation-es6`
+ 引入 `import CesiumNavigation from 'cesium-navigation-es6';`
+ 使用
```js
   var options = {
    // 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是Cesium.Cartographic 和 Cesium.Rectangle.
    defaultResetView: new Cesium.Rectangle.fromDegrees(111.339523, 33.231447, 112.838902, 35.100877),
    // 用于启用或禁用罗盘。true是启用罗盘，false是禁用罗盘。默认值为true。如果将选项设置为false，则罗盘将不会添加到地图中。
    enableCompass: true,
    // 用于启用或禁用缩放控件。true是启用，false是禁用。默认值为true。如果将选项设置为false，则缩放控件将不会添加到地图中。
    enableZoomControls: true,
    // 用于启用或禁用距离图例。true是启用，false是禁用。默认值为true。如果将选项设置为false，距离图例将不会添加到地图中。
    enableDistanceLegend: true,
    // 用于启用或禁用指南针外环。true是启用，false是禁用。默认值为true。如果将选项设置为false，则该环将可见但无效。
    enableCompassOuterRing: true
  };
  CesiumNavigation(viewer, options);
```
+ 报错解决
 `cesium-navigation-es6` 内部引入的时候 路径有个`Source/Cesium`把`Source`这个路径删除就行了

 ### cesium-map

 + 安装插件`yarn add @dvgis/cesium-map`
 + 引入 `import('@dvgis/cesium-map/build/cesium-map/cesium-map.min')`
 + 使用
```js
  // 卫星影像底图
  let imgLayer = {
    style: 'img',
    name: '图层',
    key: config.TIANDITU_KAY
  };
  viewer.imageryLayers.addImageryProvider(new Cesium.TdtImageryProvider(imgLayer));
  // 标注
  let ciaLayer = {
    style: 'cia',
    key: config.TIANDITU_KAY
  };
  viewer.imageryLayers.addImageryProvider(new Cesium.TdtImageryProvider(ciaLayer));
  // 国界
  let iboLayer = {
    style: 'ibo',
    key: config.TIANDITU_KAY
  };
  viewer.imageryLayers.addImageryProvider(new Cesium.TdtImageryProvider(iboLayer));

```

[回到顶部](#vue-cesium)
