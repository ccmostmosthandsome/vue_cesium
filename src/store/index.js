/*
 * @Author: wangchaoxu
 * @Date: 2020-07-15 20:07:10
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-17 14:34:44
 * @Description:
 */
import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  getters
});
