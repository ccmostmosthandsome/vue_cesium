/*
 * @Author: wangchaoxu
 * @Date: 2020-05-12 17:17:38
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-15 19:01:23
 * @Description:
 */
import '@/plugin/elementui.js'
import '@/plugin/drag.js'
import appLoader from './App.Loader'
import '@/assets/style/include.less'
;(async () => {
  await appLoader.install()
  Promise.all([import('./App.vue'), import('./router'), import('./store')]).then(([{ default: App }, { default: router }, { default: store }]) => {
    new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
    // 路由拦截守卫
    router.beforeEach((to, from, next) => {
      console.log('走到这里了')
      document.title = `${to.meta.title} | 威盾智能监控`
      // 路由配置出声明是否需要登陆访问
      if (to.meta.needLogin) {
        const userName = '张三'
        const role = '管理员'
        if (!userName && to.path !== '/login') {
          next('/login')
        } else {
          next()
        }
      } else {
        next()
      }
    })
  })
})()
