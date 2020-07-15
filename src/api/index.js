/*
 * @Author: wangchaoxu
 * @Date: 2020-05-13 15:36:41
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-05-13 15:40:46
 * @Description:
 */
// 每个模块都应该有自己的接口文件去统一管理api
import { get, post } from '@/util/request.js'

// 登录界面
export const login = params => post('/api/Account/Login', params) //登陆接口
export const getWearn2 = params => get('./data/wearn.json', params)
