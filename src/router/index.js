/*
 * @Author: wangchaoxu
 * @Date: 2020-07-15 20:07:10
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-17 16:40:29
 * @Description:
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/index',
    name: 'index',
    meta: { title: '首页' },
    component: () => import('@/views')
  },
  {
    path: '/',
    name: '/login',
    meta: { title: '登陆' },
    component: () => import('@/views/login')
  }
];

const router = new VueRouter({
  routes
});

export default router;
