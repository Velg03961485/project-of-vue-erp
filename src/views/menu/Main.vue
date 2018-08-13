<template>
  <div class="main-box">
    <div class="header-wrap">
      <div class="company">八爪管理系统</div>
      <div class="top-menu" style="float:left;">
          <!--<el-menu :default-active="horizontalIndex"-->
                <!--class="el-menu-demo"-->
                <!--mode="horizontal"-->
                <!--@select="handleSelect"-->
                <!--background-color="#545c64"-->
                <!--text-color="#fff"-->
                <!--active-text-color="#409EFF">-->
              <!--<el-menu-item index="1">我的工作台1</el-menu-item>-->
              <!--<el-menu-item index="2">我的工作台2</el-menu-item>-->
              <!--<el-menu-item index="3">我的工作台3</el-menu-item>-->
              <!--<el-menu-item index="4">我的工作台4</el-menu-item>-->
          <!--</el-menu>-->
      </div>
      <div class="user">
        <el-dropdown trigger="hover" >
                    <span class="el-dropdown-link" style="color:#fff;">
                      您好，{{userName}}
                      <i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
          <el-dropdown-menu slot="dropdown" split-button style="text-align:center;">
            <el-dropdown-item divided>个人中心</el-dropdown-item>
            <!--<el-dropdown-item divided @click.native="notice">通知</el-dropdown-item>-->
            <el-dropdown-item divided @click.native="logout" >退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="left-menu-wrap">
      <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false" v-if="isCollapse">展开</el-radio-button>
        <el-radio-button :label="true" v-if="!isCollapse">收起</el-radio-button>
      </el-radio-group>
      <Menu1 v-if="leftMenu.leftMenu1" :isCollapse="isCollapse" :isShow="leftMenu.leftMenu1"></Menu1>
    </div>
    <div class="content-wrap" ref="content" :style="isCollapse ? 'margin-left:70px;' : 'margin-left:160px;'">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Menu1 from './Menu1'
    export default {
        name: "main-box",
      components: {
        Menu1:Menu1
      },
      data () {
        return {
          userName:'xxxxx',
          horizontalIndex: '1',
          isCollapse: false,
          leftMenu: {
            leftMenu1:true,
            leftMenu2:false,
            leftMenu3:false,
            leftMenu4:false
          }
        }
      },
      created: function(){
        // this.$data.userName = localStorage.getItem('username')
        this.$data.userName = '刘大旭'
      },
      methods: {
        handleSelect(key, keyPath) {
          var nowKey = "leftMenu"+key;
          for(var i in this.$data.leftMenu){
            var nowI = i;
            this.$data.leftMenu[nowI] = false;
            if(nowKey == nowI){
              this.$data.leftMenu[nowI] = true;
            }
          }

        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        logout() {
          this.$router.replace({name:'Login'})
        }
      }
    }
</script>

<style lang="scss" scoped>
  .main-box{
    width: 100%;
    height: 100%;
    color: #333;
    .header-wrap{
      position: fixed;
      top: 0;
      left: 0;
      z-index:99;
      height: 60px;
      width: 100%;
      // min-width: 1204px;
      background: #545c64;
      .company{
        float:left;
        margin-right:30px;
        width:160px;
        line-height:60px;
        font-size:18px;
        text-align:center;
        color:#fff;
      }
      .user{
        position: absolute;
        right:50px;
        line-height:60px;
      }
    }
    .left-menu-wrap{
      position:fixed;
      left:0;
      top:60px;
      z-index:999;
      height: 100%;
      background: #545c64;
      overflow-x:hidden;
      overflow-y:auto;
      // -ms-overflow-style:none;
      // overflow:-moz-scrollbars-none;
      .left-menu{
      }
    }
    .left-menu-wrap::-webkit-scrollbar {
      // display: none;
    }
    /*.left-menu-wrap::-moz-scrollbar {*/
      /*// display: none;*/
    /*}*/

    .content-wrap{
      padding:90px 30px 30px;

    }
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 160px;

  }
  .el-menu{
    border:0;
  }


</style>
