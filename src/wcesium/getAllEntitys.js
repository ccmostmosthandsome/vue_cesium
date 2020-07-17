/*
 * @Author: wangchaoxu
 * @Date: 2020-07-17 19:33:13
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-17 19:33:31
 * @Description:
 */
function getEntitys(viewer) {
  var entitys = viewer.entities._entities._array;
  return entitys;
}

export default getEntitys;
