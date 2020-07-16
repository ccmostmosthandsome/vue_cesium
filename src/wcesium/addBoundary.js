/*
 * @Author: wangchaoxu
 * @Date: 2020-07-16 17:00:16
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-16 17:09:58
 * @Description:添加边界线
 */
function addBoundary(viewer) {
  let promise = Cesium.GeoJsonDataSource.load('./data/410324.json');
  promise.then(function(dataSource) {
    viewer.dataSources.add(dataSource);
    var entities = dataSource.entities.values;
    var colorHash = {};
    //可对单个实体进行设置
    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i];
      var name = entity.name;
      var color = colorHash[name];
      if (!color) {
        color = Cesium.Color.fromRandom({ alpha: 1.0 });
        colorHash[name] = color;
      }
      // entity.billboard.color = Cesium.Color.WHITE;
      // entity.billboard.image = '../data/kml/img.jpg';
      entity.polygon.material = color; //面材质
      entity.polygon.outline = false; //面边框线
      entity.polygon.extrudedHeight = 5000.0;
    }
  });
  viewer.flyTo(promise);
}

export default addBoundary;
