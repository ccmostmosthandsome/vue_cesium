/*
 * @Author: wangchaoxu
 * @Date: 2020-07-20 16:15:06
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-21 11:03:05
 * @Description:实体的增删改查
 */
import { cloneDeep, isFunction } from './core';
import { leftSingleClick } from './mouse';
import { for2 } from './core';
/**
 * @description: 添加广告牌和label结合的标记
 * @param {Object} viewer对象
 * @return:{Object} entity 实体对象
 * @author: wangchaoxu
 */
function addMarker(viewer, option) {
  let config = {
    position: Cesium.Cartesian3.fromDegrees(111.938902, 34.700877, 0),
    name: 'marker',
    billboard: {
      image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=706556033,4228383680&fm=26&gp=0.jpg',
      pixelOffset: new Cesium.Cartesian2(0, 0),
      eyeOffset: new Cesium.Cartesian3(0.0, 0.0, 0.0),
      horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      width: 32,
      height: 32
    },
    label: {
      text: 'Citizens Bank Park',
      font: '14pt monospace',
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.TOP,
      pixelOffset: new Cesium.Cartesian2(0, 32)
    }
  };
  option = cloneDeep(config, option);
  let entity = viewer.entities.add(option);
  return entity;
}
/**
 * @description: 添加label标记
 * @param {Object} viewer对象
 * @param {Object} option label配置属性
 * @return:{Object} entity 实体对象
 * @author: wangchaoxu
 */
function addLabel(viewer, option) {
  console.log(viewer.entities);
  let config = {
    data: 'label',
    name: '标注',
    position: Cesium.Cartesian3.fromDegrees(111.938902, 33.700877, 0),
    label: {
      text: '测试',
      font: '15px sans-serif',
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      outlineColor: Cesium.Color.BLACK,
      fillColor: Cesium.Color.RED,
      showBackground: true,
      backgroundColor: Cesium.Color.BLACK
    },
    width: 20, // default: undefined
    height: 20, // default: undefined
    pixelOffset: new Cesium.Cartesian2(0, 0) // default: (0, 0)
  };
  option = cloneDeep(config, option);
  let label = viewer.entities.add(option);
  return label;
}
/**
 * @description: 添加广告牌,广告牌是一种始终面向用户的标记
 * @param {Object}viewer 地图的viewer对象
 * @param {Object}option 配置属性
 * @return:
 * @author: wangchaoxu
 */
function addBillboard(viewer, option) {
  let config = {
    name: 'billboard',
    data: '',
    position: Cesium.Cartesian3.fromDegrees(111.838902, 33.800877, 0),
    billboard: {
      // show: false,
      image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=706556033,4228383680&fm=26&gp=0.jpg',
      // pixelOffset: new Cesium.Cartesian2(0, 0),
      // eyeOffset: new Cesium.Cartesian3(0.0, 0.0, 0.0),
      // horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
      // verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      // width: 32,
      // height: 32,

      heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
      verticalOrigin: 0,
      width: 32,
      height: 145,
      pixelOffset: new Cesium.Cartesian2(0, -72)
    }
  };
  option = cloneDeep(config, option);
  let billboard = viewer.entities.add(option);
  return billboard;
}
/**
 * @description: 获取所有实体
 * @param {Object} viewer viewer对象
 * @return: {Object} entities实体对象
 * @author: wangchaoxu
 */
function getAllEntities(viewer) {
  var entitys = viewer.entities._entities._array;
  return entitys;
}
/**
 * @description: 根据属性获取实体
 * @param {Object} viewer viewer对象
 * @param {String} attr   获取时的参照属性
 * @param {String} val    获取时的参照属性值
 * @return:
 * @author: wangchaoxu
 */
function getEntitysByAttr(viewer, attr, val) {
  // console.log(arguments);
  if (!attr) throw '请设置删除时的参照属性';
  if (!val) throw '请设置删除时的参照属性值';
  let entities = getAllEntities(viewer);
  return entities.filter(item => item[attr] == val);
}
/**
 * @description:
 * @param {type}
 * @return:
 * @author: wangchaoxu
 */
function removeAllEntities(viewer) {
  viewer.entities.removeAll();
}

/**
 * @description:
 * @param {type}
 * @return:
 * @author: wangchaoxu
 */
function removeEntitiesByAttr(viewer, attr, val) {
  const layers = getAllEntities(viewer);
  for2(layers, item => {
    if (item[attr] === val) viewer.entities.remove(item);
  });
}

function clickGetEntitties(viewer, callback) {
  leftSingleClick(viewer, function(pickdObject) {
    if (isFunction(callback)) {
      callback(pickdObject.id);
    }
  });
}

function clickRemoveEntities(viewer) {
  leftSingleClick(viewer, function(pickdObject) {
    viewer.entities.removeById(pickdObject.id._id);
  });
}

export { addBillboard, addLabel, addMarker, getAllEntities, getEntitysByAttr, removeAllEntities, removeEntitiesByAttr, clickRemoveEntities, clickGetEntitties };
