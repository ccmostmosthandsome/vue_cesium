/*
 * @Author: wangchaoxu
 * @Date: 2020-05-12 17:17:38
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-15 17:12:23
 * @Description:
 */
import Vue from 'vue'

import 'cesium/Widgets/widgets.css'

const hub = new Vue()
class AppLoader {
  constructor() {
    Vue.config.productionTip = false
    Vue.use({
      install(Vue) {
        Vue.prototype.$hub = hub
      }
    })
  }

  install() {
    global.Vue = Vue
    global.Cesium = require('cesium/Cesium')
    return Promise.all([import('@dvgis/cesium-map/build/cesium-map/cesium-map.min'), import('@/components')])
  }
}

const appLoader = new AppLoader()
export default appLoader
