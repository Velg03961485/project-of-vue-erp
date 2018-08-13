<template>
  <div class="left-menu1">
    <el-menu :default-active="currentMenu"
             class="el-menu-vertical-demo"
             :collapse="isCollapse && isShow"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#409EFF">
      <router-link :to="{name: 'test'}">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">黎光计划</span>
        </el-menu-item>
      </router-link>
      <router-link :to="{name: 'cancel'}">
        <el-menu-item index="2">
          <i class="el-icon-delete"></i>
          <span slot="title">星火计划</span>
        </el-menu-item>
      </router-link>

      <!--微信菜单管理-->
      <!--<el-submenu index="8-1" style="padding-bottom:200px;">-->
        <!--<template slot="title">-->
          <!--<i class="el-icon-mobile-phone"></i>-->
          <!--<span slot="title">微信管理</span>-->
        <!--</template>-->
        <!--<router-link :to="{name: 'menuSetting'}">-->
          <!--<el-menu-item index="/menuSetting">菜单设置</el-menu-item>-->
        <!--</router-link>-->
        <!--<router-link :to="{name: 'imageTextNews'}">-->
          <!--<el-menu-item index="/imageTextNews">图文管理</el-menu-item>-->
        <!--</router-link>-->
      <!--</el-submenu>-->
    </el-menu>
  </div>
</template>

<script>
    export default {
        name: "menu1",
      props:{
        isCollapse: Boolean,
        isShow: Boolean,
      },
      data(){
        return{
          currentMenu:'/'
        }
      },
      created(){
        this.getUrl();
      },
      methods:{
        getUrl(){
          let self = this;
          let currentUrl = window.location.href;
          self.currentMenu = currentUrl.split('#')[1];
        }
      }
    }
</script>

<style >
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 160px;
  }
  .el-menu{
    border:0;
  }
</style>
