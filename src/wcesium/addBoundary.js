/*
 * @Author: wangchaoxu
 * @Date: 2020-07-16 17:00:16
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-17 19:20:25
 * @Description:添加边界线
 */
function addBoundary(viewer, url) {
  let promise = Cesium.GeoJsonDataSource.load(url, {
    clampToGround: true //贴地
  });
  promise.then(function(dataSource) {
    viewer.dataSources.add(dataSource);
    var entities = dataSource.entities.values;
    let length = entities.length;
    for (var o = 0; o < length; o++) {
      //这样循环添加的方法,实在是特别慢,没有找到其他什么好的方法,建议对json数据进行优化
      var r = entities[o];
      r.polyline.width = 10; //添加默认样式
      (r.polyline.strokeWidth = 3),
        ((r.polyline.material = new Cesium.PolylineGlowMaterialProperty({
          glowPower: 0.1, //一个数字属性，指定发光强度，占总线宽的百分比。
          color: Cesium.Color.DODGERBLUE.withAlpha(0.9)
        })),
        10);
    }
  });
  viewer.flyTo(promise);
}

export default addBoundary;
