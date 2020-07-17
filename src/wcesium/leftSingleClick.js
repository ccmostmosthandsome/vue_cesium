/*
 * @Author: wangchaoxu
 * @Date: 2020-07-17 19:19:16
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-17 19:28:54
 * @Description:
 */
import { isFunction } from './type';
function leftSingleClick(viewer, callback) {
  var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
  var scene = viewer.scene;
  handler.setInputAction(function(click) {
    var cartesian = viewer.camera.pickEllipsoid(click.position, viewer.scene.globe.ellipsoid);
    if (cartesian) {
      var pickdObject = scene.pick(click.position);
      var position = viewer.camera.pickEllipsoid(click.position);
      if (Cesium.defined(pickdObject)) {
        //根据点击对象的id删除该对象
        // this.viewer.entities.remove(this.viewer.entities.getById(pickdObject.id._id)[i]);
        if (isFunction(callback) && callback) {
          callback(pickdObject.id);
        }
      }
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
}

export default leftSingleClick;
