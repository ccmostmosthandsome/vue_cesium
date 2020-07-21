/*
 * @Author: wangchaoxu
 * @Date: 2020-07-15 20:32:58
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-21 19:00:57
 * @Description:引入cesium的方法
 */
import { initViewer, flyTo } from './viewer';
import { addNav, moveGetInfo, infoWindow, infoWindowClose } from './other';
import { addLayer, getAllLayer, getLayerByAttr, removeAllLayer, removeLayerByAttr } from './layer';
import addBoundary from './addBoundary';
import { leftSingleClick, mouseMove } from './mouse';
import { addLabel, addBillboard, addMarker, getAllEntities, getEntitysByAttr, removeAllEntities, removeEntitiesByAttr, clickGetEntitties, clickRemoveEntities } from './entities';

export default {
  initViewer,
  flyTo,
  addNav,
  moveGetInfo,
  infoWindow,
  infoWindowClose,
  addLayer,
  getAllLayer,
  getLayerByAttr,
  removeAllLayer,
  removeLayerByAttr,
  addBoundary,
  mouseMove,
  addLabel,
  addBillboard,
  addMarker,
  getAllEntities,
  getEntitysByAttr,
  removeAllEntities,
  removeEntitiesByAttr,
  clickRemoveEntities,
  clickGetEntitties,
  leftSingleClick
};
