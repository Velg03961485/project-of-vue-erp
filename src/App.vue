<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input, .el-select-dropdown, .el-textarea, .el-textarea__inner, .el-message-box, .el-message,
.el-dropdown-menu, .el-button, .el-cascader-menu, .el-tooltip__popper, .el-picker-panel, .el-date-picker {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
a {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

a:focus {
  outline :none;
}
a:hover{
  text-decoration: none;
}
ul,li{list-style: none;}

.el-table th{
  background-color: #C3CBD3;
}
.el-table th>.cell{
  text-align: center;
  color:#333;
}
.el-tree-node__content{
  display:inline-block !important;
}
</style>
