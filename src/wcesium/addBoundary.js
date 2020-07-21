/*
 * @Author: wangchaoxu
 * @Date: 2020-07-16 17:00:16
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-21 10:00:20
 * @Description:添加边界线
 */
function addBoundary(viewer, url) {
  let promise = viewer.dataSources.add(
    Cesium.GeoJsonDataSource.load(url, {
      stroke: Cesium.Color.YELLOW,
      fill: Cesium.Color.YELLOW,
      strokeWidth: 3,
      markerSymbol: '?',
      clampToGround: true //贴地
    })
  );
  promise.then(function(dataSource) {
    var entities = dataSource.entities.values;
    let length = entities.length;
    for (var o = 0; o < length; o++) {
      //这样循环添加的方法,数据打了会慢,没有找到其他什么好的方法,建议对json数据进行优化
      var r = entities[o];
      r.polyline.width = 10; //添加默认样式
      r.polyline.material = new Cesium.PolylineGlowMaterialProperty({
        glowPower: 0.1, //一个数字属性，指定发光强度，占总线宽的百分比。
        color: Cesium.Color.DODGERBLUE.withAlpha(0.9)
      });
    }
  });
  viewer.flyTo(promise);
}

export default addBoundary;
