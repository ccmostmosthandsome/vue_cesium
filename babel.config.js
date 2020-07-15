/*
 * @Author: wangchaoxu
 * @Date: 2020-05-12 17:17:38
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-15 17:06:31
 * @Description:
 */
// module.exports = {
//   presets: ['@vue/cli-plugin-babel/preset']
// }
module.exports = {
  presets: [['@babel/preset-env', { modules: false }], ['@vue/cli-plugin-babel/preset']],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
