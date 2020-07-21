<!--
 * @Author: wangchaoxu
 * @Date: 2020-07-21 14:34:25
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-21 14:34:52
 * @Description:
-->
<template>
  <div class="container">
    <div id="popup" class="ol-popup">
      详细信息
      <a href="#" id="popup-closer" class="ol-popup-closer"></a>
      <div id="popup-content" style="width:300px; height:260px; text-align: left;">
        <el-table :data="tableData3" height="250" border style="width: 100%">
          <el-table-column prop="name" label="名称" width="160"> </el-table-column>
          <el-table-column prop="value" label="值"> </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  computed: {}
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  .ol-popup {
    position: absolute;
    color: white;
    background-color: #112959;
    -webkit-filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
    filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
    padding: 20px;
    border-radius: 10px;
    /*border: 1px solid #cccccc;*/
    bottom: 12px;
    height: 300px;
    /*right: -550px;*/
    display: none;
  }
  .ol-popup:after,
  .ol-popup:before {
    top: 100%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  .ol-popup:after {
    border-top-color: #112959;
    border-width: 10px;
    left: 48px;
    margin-left: -10px;
  }
  .ol-popup:before {
    border-top-color: #cccccc;
    border-width: 11px;
    left: 48px;
    margin-left: -11px;
  }
  .ol-popup-closer {
    text-decoration: none;
    position: absolute;
    top: 2px;
    right: 8px;
    color: white;
  }
  .ol-popup-closer:after {
    content: '✖';
  }
}
</style>
