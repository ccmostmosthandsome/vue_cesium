<!--
 * @Author: wangchaoxu
 * @Date: 2020-05-12 17:17:38
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-15 19:24:41
 * @Description:
-->
<template>
  <div class="index">
    <viewer @on-viewer-completed="viewerCompletedHandler">
      <div class="box" style="width:200px;height:200px;background-color:red" v-drag></div>
    </viewer>
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
  },
  mounted() {
    this.$loading.open()
    setTimeout(() => {
      this.$loading.close()
    }, 1000)
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
