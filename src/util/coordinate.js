/*
 * @Author: wangchaoxu
 * @Date: 2020-06-09 12:00:27
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-20 18:48:45
 * @Description: 屏幕坐标与经纬度坐标转换
 */
Coordinate = function(options) {
  var defaults = {
    Width: 0,
    Height: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
  };

  var _Width = 0.0;
  var _Height = 0.0;

  this._minX = options.minX;
  this._maxX = options.maxX;
  this._minY = options.minY;
  this._maxY = options.maxY;
  _Width = options.Width;
  _Height = options.Height;
  this._scaleX = _Width / (this._maxX - this._minX);
  this._scaleY = _Height / (this._maxY - this._minY);
  // this.PictureBox1.Refresh();
  this._Width = _Width;
  this._Height = _Height;
};
Coordinate.prototype = {
  _Height: 0,
  _Width: 0,
  _scaleX: 0,
  _scaleY: 0,
  _minX: 0.0,
  _maxX: 0.0,
  _minY: 0.0,
  _maxY: 0.0,
  //像素转坐标
  ToCoordinate: function(sX, sY) {
    var pX = sX / this._scaleX + this._minX;
    var pY = this._maxY - sY / this._scaleY;
    var pp = new Object();
    pp.pX = pX;
    pp.pY = pY;
    return pp;
  },
  //坐标转像素
  ToScreen: function(pX, pY) {
    var sX = parseFloat((pX - this._minX) * this._scaleX);
    if (sX < 0) sX = 0;
    if (sX > this._Width) sX = this._Width;
    var sY = parseFloat((this._maxY - pY) * this._scaleY);
    if (sY < 0) sY = 0;
    if (sY > this._Height) sY = this._Height;

    var pp = new Object();
    pp.pX = parseInt(sX);
    pp.pY = parseInt(sY);
    return pp;
  },
  // 判断点是否在区域内
  Contains: function(points, p) {
    var result = false;
    for (var i = 0; i < points.length - 1; i++) {
      if (
        ((points[i + 1].Y <= p.Y && p.Y < points[i].Y) || (points[i].Y <= p.Y && p.Y < points[i + 1].Y)) &&
        p.X < ((points[i].X - points[i + 1].X) * (p.Y - points[i + 1].Y)) / (points[i].Y - points[i + 1].Y) + points[i + 1].X
      ) {
        result = !result;
      }
    }
    return result;
  },
};
