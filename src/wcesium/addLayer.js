/*
 * @Author: wangchaoxu
 * @Date: 2020-07-16 16:47:59
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-16 17:38:11
 * @Description:
 */
//需要在mian.js中引入 import('@dvgis/cesium-map/build/cesium-map/cesium-map.min');
import config from './config';

function addLayer(viewer) {
  viewer.imageryLayers.removeAll();
  let imgLayer = {
    style: 'img',
    key: config.TIANDITU_KAY
  };
  viewer.imageryLayers.addImageryProvider(new Cesium.TdtImageryProvider(imgLayer));
  let ciaLayer = {
    style: 'cia',
    key: config.TIANDITU_KAY
  };
  viewer.imageryLayers.addImageryProvider(new Cesium.TdtImageryProvider(ciaLayer));
  let iboLayer = {
    style: 'ibo',
    key: config.TIANDITU_KAY
  };
  viewer.imageryLayers.addImageryProvider(new Cesium.TdtImageryProvider(iboLayer));
}

export default addLayer;
