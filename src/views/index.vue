<!--
 * @Author: wangchaoxu
 * @Date: 2020-05-12 17:17:38
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-15 17:11:57
 * @Description:
-->
<template>
  <div class="index">
    <viewer @on-viewer-completed="viewerCompletedHandler"></viewer>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  methods: {
    viewerCompletedHandler(viewer) {
      global.viewer = viewer
      viewer.imageryLayers.removeAll()
      let options = {
        style: 'dark'
      }
      viewer.imageryLayers.addImageryProvider(new Cesium.BaiduImageryProvider(options))
    }
  }
}
</script>

<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
