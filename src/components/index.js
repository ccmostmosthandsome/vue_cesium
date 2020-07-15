/*
 * @Author: wangchaoxu
 * @Date: 2020-05-12 17:17:38
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-15 17:12:32
 * @Description: 批量注册vue组件,需要的时候直接使用,不用注册
 */
const componentsWatcher = scaner => {
  scaner.keys().map(key => {
    let name = scaner(key).default.name
    if (name) {
      Vue.component(name, function(resolve) {
        require([key + ''], resolve)
      })
    }
  })
}
const vueScaner = require.context('@/components', true, /^\.\/((?!\/)[\s\S])+\/index\.vue$/)
componentsWatcher(vueScaner)
