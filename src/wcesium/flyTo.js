/*
 * @Author: wangchaoxu
 * @Date: 2020-07-16 16:12:59
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-17 14:01:57
 * @Description:
 */
function flyTo(viewer) {
  viewer.camera.flyTo({ destination: Cesium.Cartesian3.fromDegrees(103.84, 31.15, 5050000) });
}
export default flyTo;
