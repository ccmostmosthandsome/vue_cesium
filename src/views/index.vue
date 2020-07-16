<!--
 * @Author: wangchaoxu
 * @Date: 2020-05-12 17:17:38
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-16 18:43:05
 * @Description:
-->
<template>
  <div class="index">
    <viewer @on-viewer-completed="viewerCompletedHandler">
      <div class="box" style="width:200px;height:200px;background-color:red" v-drag></div>
      <winfo ref="moseInfo"></winfo>
    </viewer>
  </div>
</template>

<script>
import viewer from '@/components/Viewer';
import winfo from '@/components/MoveInfo';
import wcesium from '@/wcesium';
export default {
  name: 'Index',
  components: { viewer, winfo },
  data() {
    return {
      viewer: ''
    };
  },
  methods: {
    viewerCompletedHandler(viewer) {
      global.viewer = viewer;
      this.$refs.moseInfo.getInfo(viewer);
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
