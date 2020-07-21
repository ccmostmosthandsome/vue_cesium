<!--
 * @Author: wangchaoxu
 * @Date: 2020-05-12 17:17:38
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-21 18:53:47
 * @Description:
-->
<template>
  <div class="index">
    <div class="handle-btn">
      <button @click="handleAddLabel">添加label</button>
      <button @click="handleAddBillboard">添加billboard</button>
      <button @click="handleAddMarker">添加Marker</button>
      <button @click="handleGetAllEntities">获取所有实体</button>
      <button @click="handleRemoveByAttr">根据属性获取实体</button>
      <button @click="handleRemoveAllEntities">删除所有实体</button>
      <button @click="handleGetAllLayer">获取所有图层</button>
      <button @click="handleSkyBox">隐藏/显示星空</button>
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
      viewer: '',
      skyBoxIsShow: true,
      event: null
    };
  },
  methods: {
    viewerCompletedHandler(viewer) {
      global.viewer = viewer;
      // this.$refs.mouseInfo.getInfo(viewer);
    },
    handleAddLabel() {
      console.log(global);
      wcesium.addLabel(global.viewer);
    },
    // 添加billboard
    handleAddBillboard() {
      wcesium.addBillboard(global.viewer);
    },
    handleAddMarker() {
      wcesium.addMarker(global.viewer);
    },
    // 获取所有实体
    handleGetAllEntities() {
      console.log(wcesium.getAllEntities(global.viewer));
    },
    // 删除所有实体
    handleRemoveAllEntities() {
      wcesium.removeAllEntities(global.viewer);
    },
    // 根据属性删除Marker
    handleRemoveByAttr() {
      let entities = wcesium.getEntitysByAttr(global.viewer, 'name', 'billboard');
      console.log(entities);
    },
    //获取所有图层
    handleGetAllLayer() {
      let layers = wcesium.getAllLayer(global.viewer);
      console.log(layers);
    },
    // 隐藏/显示星空
    handleSkyBox() {
      this.skyBoxIsShow = !this.skyBoxIsShow;
      global.viewer.scene.skyBox.show = this.skyBoxIsShow;
      console.log(!this.skyBoxIsShow, global.viewer.scene.skyBox.show);
      global.viewer.scene.requestRender(); //重新渲染
      if (!global.viewer.scene.skyBox.show) {
        global.viewer.scene.backgroundColor = Cesium.Color.CORNFLOWERBLUE;
      }
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
