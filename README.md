# vue-cesium

> vue-cesium 的结合模版,特殊处理 viewer 设为全局,不会造成内存溢出,正常运行`60FPS`

## 演示

[演示](http://wangchaoxu.gitee.io/vue_cesium/#/)

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

[回到顶部](#vue-cesium)
