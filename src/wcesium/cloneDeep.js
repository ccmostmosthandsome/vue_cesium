/*
 * @Author: wangchaoxu
 * @Date: 2020-07-16 16:00:47
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-17 18:44:59
 * @Description:
 */
function cloneDeep(obj1, obj) {
  for (var key in obj) {
    obj1[key] = obj1[key] && obj1[key].toString() === '[object Object]' ? this.deepAssign(obj1[key], obj[key]) : (obj1[key] = obj[key]);
  }
  return obj1;
}
export default cloneDeep;
