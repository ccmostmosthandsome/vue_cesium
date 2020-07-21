<!--
 * @Author: wangchaoxu
 * @Date: 2020-05-12 17:17:38
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-21 18:59:03
 * @Description:
 -->
<template>
  <div id="cesiumContainer" class="viewer-container">
    <slot></slot>
  </div>
</template>

<script>
import wcesium from '@/wcesium';

export default {
  name: 'Viewer',
  data() {
    return {
      url: require('@/assets/data/410324.json')
    };
  },
  methods: {
    initViewer() {
      const viewer = wcesium.initViewer();
      wcesium.addNav(viewer);
      wcesium.addLayer(viewer);
      wcesium.addBoundary(viewer, this.url);
      wcesium.clickGetEntitties(viewer, function(res) {
        console.log(res);
      });
      this.$emit('on-viewer-completed', viewer); //调用父组件
    }
  },
  mounted() {
    this.initViewer();
  }
};
</script>

<style lang="less" scoped>
.viewer-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
