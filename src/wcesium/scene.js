/*
 * @Author: wangchaoxu
 * @Date: 2020-07-21 11:39:35
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-21 11:58:45
 * @Description: 场景操作
 */
/**
 * @description: 天空盒子
 * @param {type}
 * @return:
 * @author: wangchaoxu
 */
function addSkyBox() {}

/**
 * @description: 显示隐藏天空盒
 * @param {Object}  viewer 对象
 * @param {Boolean}  isShow 是否显示
 * @author: wangchaoxu
 */
function skyBoxIsShow(viewer, isShow) {
  viewer.scene.skyBox.show = isShow;
  viewer.scene.requestRender(); //重新渲染
}
/**
 * @description:设置场景的背景颜色
 * @param {Object} cesium的color new Cesium.color(r,g,b,a); Cesium.color.RED
 * @return:
 * @author: wangchaoxu
 */
function setColor(viewer, color) {
  viewer.scene.skyBox.show = false;
  viewer.scene.backgroundColor = color;
}
