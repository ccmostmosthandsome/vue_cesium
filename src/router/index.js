/*
 * @Author: wangchaoxu
 * @Date: 2020-07-15 20:07:10
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-16 15:15:14
 * @Description:
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views')
  },
  {
    path: '/',
    name: '/login',
    component: () => import('@/views/login')
  }
];

const router = new VueRouter({
  routes
});

export default router;
