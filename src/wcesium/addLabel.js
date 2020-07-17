/*
 * @Author: wangchaoxu
 * @Date: 2020-07-17 18:42:06
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-17 19:21:44
 * @Description:
 */
import cloneDeep from './cloneDeep';
function addLabel(viewer, option) {
  console.log(viewer.entities);
  let config = {
    data: '',
    name: '标注',
    position: Cesium.Cartesian3.fromDegrees(111.838902, 33.800877, 0),
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
  viewer.entities.add(option);
}
export default addLabel;
