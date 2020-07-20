/*
 * @Author: wangchaoxu
 * @Date: 2020-07-15 20:35:20
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-20 08:42:48
 * @Description: 添加底部鼠标移动info*/

import { isFunction } from './type.js';
function mouseMove(viewer, callback) {
  var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
  var scene = viewer.scene;
  handler.setInputAction(function(event) {
    let ellipsoid = scene.globe.ellipsoid;
    let cartesian = viewer.camera.pickEllipsoid(event.endPosition, ellipsoid);
    if (cartesian) {
      //能获取，显示坐标
      let cartographic = ellipsoid.cartesianToCartographic(cartesian);
      let cityLng = Cesium.Math.toDegrees(cartographic.longitude);
      let cityLat = Cesium.Math.toDegrees(cartographic.latitude);
      let height = Math.ceil(viewer.camera.positionCartographic.height / 1000);
      if (isFunction(callback)) {
        callback(cityLng, cityLat, height, cartesian);
      }
    }
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
  return handler;
}

export default mouseMove;
