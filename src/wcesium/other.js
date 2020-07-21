/*
 * @Author: wangchaoxu
 * @Date: 2020-07-20 19:13:02
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-21 17:09:10
 * @Description: cesium的扩展功能
 */
import CesiumNavigation from 'cesium-navigation-es6';
import { isFunction } from './core';
import { mouseMove } from './mouse';
function addNav(viewer) {
  var options = {
    // 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是Cesium.Cartographic 和 Cesium.Rectangle.
    defaultResetView: new Cesium.Rectangle.fromDegrees(111.339523, 33.231447, 112.838902, 35.100877),
    // 用于启用或禁用罗盘。true是启用罗盘，false是禁用罗盘。默认值为true。如果将选项设置为false，则罗盘将不会添加到地图中。
    enableCompass: true,
    // 用于启用或禁用缩放控件。true是启用，false是禁用。默认值为true。如果将选项设置为false，则缩放控件将不会添加到地图中。
    enableZoomControls: true,
    // 用于启用或禁用距离图例。true是启用，false是禁用。默认值为true。如果将选项设置为false，距离图例将不会添加到地图中。
    enableDistanceLegend: true,
    // 用于启用或禁用指南针外环。true是启用，false是禁用。默认值为true。如果将选项设置为false，则该环将可见但无效。
    enableCompassOuterRing: true
  };
  CesiumNavigation(viewer, options);
}
/**
 * @description: 移动获取信息
 * @param {type}
 * @return:
 * @author: wangchaoxu
 */
function moveGetInfo(viewer, callback) {
  mouseMove(viewer, function(cartographic) {
    let cityLng = Cesium.Math.toDegrees(cartographic.longitude);
    let cityLat = Cesium.Math.toDegrees(cartographic.latitude);
    let height = Math.ceil(viewer.camera.positionCartographic.height / 1000);
    if (isFunction(callback)) {
      callback(cityLng, cityLat, height);
    }
  });
}

/**
 * @description:信息窗口
 * @param {type}
 * @return:
 * @author: wangchaoxu
 */
function infoWindow(viewer, htmlOverlay, lng, lat, height = 50) {
  var scratch = new Cesium.Cartesian2();
  let event = viewer.scene.preRender.addEventListener(() => {
    var position = Cesium.Cartesian3.fromDegrees(lng, lat, height);
    var canvasPosition = viewer.scene.cartesianToCanvasCoordinates(position, scratch);
    if (Cesium.defined(canvasPosition)) {
      htmlOverlay.style.top = canvasPosition.y + 'px';
      htmlOverlay.style.left = canvasPosition.x + 'px';
    }
  });
  return event;
}
/**
 * @description: 接触infowindow的事件监听
 * @param {Function }  infoWindow 返回值
 * @author: wangchaoxu
 */
function infoWindowClose(el, event) {
  event();
}

export { addNav, moveGetInfo, infoWindow, infoWindowClose };
