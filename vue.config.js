/*
 * @Author: wangchaoxu
 * @Date: 2020-05-12 17:17:38
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-15 18:12:37
 * @Description:
 */
'use strict'
const path = require('path')
const cesiumBuild = './node_modules/cesium/Build/Cesium' //cesium的目录
const webpack = require('webpack')
const CopywebpackPlugin = require('copy-webpack-plugin') //复制文件

let resolve = dir => {
  return path.resolve(__dirname, dir)
}
console.log('==========当前运行环境=========', process.env.NODE_ENV)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  productionSourceMap: false,
  devServer: {
    host: '192.168.1.8', //host:'0.0.0.0'，//可以通过localhost访问
    open: true,
    hot: true,
    port: 3000
  },
  configureWebpack: {
    module: {
      unknownContextCritical: false
    },
    performance: {
      hints: false
    }
  },
  chainWebpack: config => {
    config.resolve.extensions.add('.js').add('.vue')
    config.resolve.alias.set('cesium', path.resolve(__dirname, cesiumBuild))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        name: 'images/[name].[ext]',
        limit: 10000
      })
      .end()

    config.module
      .rule('fonts')
      .test(/\.(eot|ttf|woff|woff2)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        name: 'fonts/[name].[ext]',
        limit: 10000
      })
      .end()

    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/svg/icons'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    config.plugin('copy').use(CopywebpackPlugin, [
      [
        { from: path.join(cesiumBuild, 'Workers'), to: 'resources/Workers' },
        { from: path.join(cesiumBuild, 'Assets'), to: 'resources/Assets' },
        { from: path.join(cesiumBuild, 'Widgets'), to: 'resources/Widgets' },
        {
          from: path.join(cesiumBuild, 'ThirdParty'),
          to: 'resources/ThirdParty'
        }
      ]
    ])

    config.plugin('define').use(webpack.DefinePlugin, [{ CESIUM_BASE_URL: JSON.stringify('./resources/') }])
  }
}
