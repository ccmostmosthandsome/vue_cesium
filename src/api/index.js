/*
 * @Author: wangchaoxu
 * @Date: 2020-05-13 15:36:41
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-17 14:51:43
 * @Description:
 */
// 每个模块都应该有自己的接口文件去统一管理api
import { get, post } from '@/util/request.js';
const env = process.env.NODE_ENV;
let gaodeUrl = '';
if (process.env.NODE_ENV !== 'development') gaodeUrl = 'https://restapi.amap.com';
// 登录界面
export const login = params => post('/api/Account/Login', params); //登陆接口
export const getWearn2 = params => get('./data/wearn.json', params);

export const getCityMsg = params => get(`${gaodeUrl}/baiduApi/v3/geocode/regeo?key=fe8d9bcb5da43b6e5fd6325d8ff00478&s=rsv3&language=zh_cn&location=${params.lng},${params.lat}`);
