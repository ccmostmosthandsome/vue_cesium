<!--
 * @Author: wangchaoxu
 * @Date: 2020-05-12 17:17:38
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-15 18:29:50
 * @Description:
 -->
<template>
  <div id="viewer-container" class="viewer-container"></div>
</template>

<script>
export default {
  name: 'Viewer',
  data() {
    return {}
  },
  methods: {
    initViewer() {
      let viewer = new Cesium.Viewer('viewer-container', {
        animation: false,
        fullscreenButton: false,
        vrButton: false,
        geocoder: false,
        selectionIndicator: false,
        timeline: false,
        infoBox: false
      })
      viewer.cesiumWidget._creditContainer.style.display = 'none'
      viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
      viewer.scene.screenSpaceCameraController.maximumZoomDistance = 40489014.0
      viewer.scene.backgroundColor = Cesium.Color.TRANSPARENT
      viewer.scene.debugShowFramesPerSecond = true
      this.$emit('on-viewer-completed', viewer)
    }
  },
  mounted() {
    this.initViewer();
  }
}
</script>

<style lang="less" scoped>
.viewer-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
