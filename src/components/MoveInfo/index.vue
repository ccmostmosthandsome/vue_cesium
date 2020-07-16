<!--
 * @Author: wangchaoxu
 * @Date: 2020-07-16 18:27:28
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-16 19:24:20
 * @Description:
-->
<template>
  <div class="info-container">
    <el-row :gutter="10" type="flex" justify="center" align="center">
      <el-col :span="1">经度:</el-col>
      <el-col :span="4">{{ lng }}</el-col>
      <el-col :span="1">纬度:</el-col>
      <el-col :span="4">{{ lat }}</el-col>
      <el-col :span="1">视角高:</el-col>
      <el-col :span="4">{{ height }}千米</el-col>
      <el-col :span="1">当前位置:</el-col>
      <el-col :span="4">{{ info }}千米</el-col>
    </el-row>
  </div>
</template>

<script>
import wcesium from '@/wcesium';
import * as api from '@/api';
import { throttle, debounce } from '@/util/common.js';
export default {
  components: {},
  data() {
    return {
      info: null,
      lng: null,
      lat: null,
      height: null,
      mouseTimer: null
    };
  },
  methods: {
    getInfo(viewer) {
      wcesium.mouseMove(viewer, (cityLng, cityLat, height) => {
        // console.log(cityLng, cityLat, height);
        this.lng = cityLng;
        this.lat = cityLat;
        this.height = height;
        // this.getCityInfo(this.lng, this.lat);
      });
    },
    getCityInfo(lng, lat) {
      clearTimeout(this.mouseTimer);
      this.mouseTimer = setTimeout(function() {
        api.getCityMsg({ lng: lng, lat: lat }).then(res => {
          let a = res.regeocode.addressComponent;
          this.info = a.province + a.city + a.district + a.township;
          console.log(this.info);
        });
      }, 800);
    }
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style scoped lang="less">
.info-container {
  width: 100%;
  height: 5%;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
  color: #fff;
  .el-row {
    width: 100%;
    height: 100%;
    .el-col {
      text-align: left;
      display: flex;
      align-items: center;
    }
  }
}
</style>
