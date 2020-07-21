/*
 * @Author: wangchaoxu
 * @Date: 2020-07-20 17:46:37
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-21 19:11:33
 * @Description:鼠标事件
 */
import { isFunction } from './core.js';
/**
 * @description: 左键点击获取实体对象
 * @param {type}
 * @return:
 * @author: wangchaoxu
 */
function leftSingleClick(viewer, callback) {
  var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
  var scene = viewer.scene;
  handler.setInputAction(function(click) {
    var cartesian = viewer.camera.pickEllipsoid(click.position, viewer.scene.globe.ellipsoid);
    if (cartesian) {
      var pickdObject = scene.pick(click.position);
      if (Cesium.defined(pickdObject)) {
        if (isFunction(callback)) {
          callback(pickdObject);
        }
      }
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
}
function mouseMove(viewer, callback) {
  var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
  var scene = viewer.scene;
  handler.setInputAction(function(event) {
    let ellipsoid = scene.globe.ellipsoid;
    let cartesian = viewer.camera.pickEllipsoid(event.endPosition, ellipsoid);
    if (cartesian) {
      //能获取，显示坐标
      let cartographic = ellipsoid.cartesianToCartographic(cartesian);
      if (isFunction(callback)) {
        callback(cartographic);
      }
    }
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
  return handler;
}

export { leftSingleClick, mouseMove };
