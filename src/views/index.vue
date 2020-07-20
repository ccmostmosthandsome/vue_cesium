<!--
 * @Author: wangchaoxu
 * @Date: 2020-05-12 17:17:38
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-20 08:43:49
 * @Description:
-->
<template>
  <div class="index">
    <div class="handle-btn">
      <button @click="handleaddLabel">添加label</button>
      <button>添加billboard</button>
      <button @click="handleGet">获取</button>
      <button>删除Marker</button>
    </div>
    <Wviewer @on-viewer-completed="viewerCompletedHandler">
      <div class="box" style="width:200px;height:200px;background-color:red" v-drag></div>
      <winfo ref="mouseInfo"></winfo>
    </Wviewer>
  </div>
</template>

<script>
import Wviewer from '@/components/Viewer';
import winfo from '@/components/MoveInfo';
import wcesium from '@/wcesium';
export default {
  name: 'Index',
  components: { Wviewer, winfo },
  data() {
    return {
      viewer: ''
    };
  },
  methods: {
    viewerCompletedHandler(viewer) {
      global.viewer = viewer;
      this.$refs.mouseInfo.getInfo(viewer);
    },
    handleaddLabel() {
      console.log(global);
      wcesium.addLabel(global.viewer);
    },
    handleGet(){
      console.log(wcesium.getAllEntitys(global.viewer))
    }
  },
  mounted() {
    this.$loading.open();
    setTimeout(() => {
      this.$loading.close();
    }, 1000);
  }
};
</script>

<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
