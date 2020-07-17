/*
 * @Author: wangchaoxu
 * @Date: 2020-07-15 18:56:51
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-17 17:34:55
 * @Description:
 */
import Vue from 'vue';
Vue.directive('drag', function(el) {
  el.style.position = 'absolute';
  el.style.zIndex = 9;
  el.style.cursor = 'move';
  el.onmousedown = function(ev) {
    let mx = ev.clientX; //鼠标距离浏览器窗口左侧
    let my = ev.clientY; //鼠标距离浏览器窗口上侧
    let ex = el.offsetLeft; //元素距离浏览器窗口左侧
    let ey = el.offsetTop; //元素距离上侧
    let ew = el.offsetWidth; //元素宽度
    let eh = el.offsetHeight; //元素高度
    let cx = mx - ex; //鼠标距离元素左边距离
    let cy = my - ey; //元素距离元素上面距离
    let bw = document.body.clientWidth; //浏览器宽度
    let bh = document.body.clientHeight; //浏览器高度
    document.onmousemove = function(ev) {
      let nmx = ev.clientX;
      let nmy = ev.clientY;
      let emx = nmx - cx; //元素停止时距离浏览器左边距离
      let emy = nmy - cy; //元素停止时距离浏览器顶部距离
      el.style.left = emx + 'px';
      el.style.top = emy + 'px';
      if (nmx < cx) el.style.left = 0 + 'px';
      if (nmy < cy) el.style.top = 0 + 'px';
      if (nmx > bw - (ew - cx)) el.style.left = bw - ew + 'px';
      if (nmy > bh - (eh - cy)) el.style.top = bh - eh + 'px';
    };
    document.onmouseup = function() {
      // 清除mousemove事件
      document.onmousemove = null;
    };
  };
});
