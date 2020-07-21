<!--
 * @Author: wangchaoxu
 * @Date: 2020-07-08 14:41:21
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-21 16:46:17
 * @Description: 弹窗外部容器
-->
<template>
  <div class="cesium-info-window">
    <a href="javascript:;" class="tooltip-close" @click="infoWindow">×</a>
    <div class="info-window-content">
      <slot></slot>
    </div>
    <div class="info-window-triangle"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    promptClose() {
      this.$emit('infoWindow');
    }
  },
  created() {},
  mounted() {},
  computed: {}
};
</script>

<style scoped lang="less">
.cesium-info-window {
  padding: 10px;
  // 关闭
  .info-window-close {
    position: absolute;
    right: 6%;
    top: 8%;
    font: bold 16px/14px Tahoma, Verdana, sans-serif;
  }
  // 三角形
  .info-window-triangle {
    position: absolute;
    bottom: 0px;
    left: 45%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: rgba(58, 72, 234, 0.8) transparent transparent transparent;
  }
}
</style>
