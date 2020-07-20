<!--
 * @Author: wangchaoxu
 * @Date: 2020-07-16 18:27:28
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-20 19:21:56
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
      <el-col :span="6">{{ info }}</el-col>
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
      lng: 113.254786,
      lat: 36.3547211,
      height: 100,
      timer: null
    };
  },
  methods: {
    getInfo(viewer) {
      wcesium.moveGetInfo(viewer, (cityLng, cityLat, height) => {
        this.lng = cityLng;
        this.lat = cityLat;
        this.height = height;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.getCityInfo(this.lng, this.lat);
        }, 500);
      });
    },
    getCityInfo(lng, lat) {
      api.getCityMsg({ lng, lat }).then(res => {
        let a = res.regeocode.addressComponent;
        this.info = a.province + a.city + a.district + a.township;
      });
    }
  },
  created() {},
  mounted() {},
  computed: {}
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
