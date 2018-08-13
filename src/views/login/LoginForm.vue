<template>
    <div class="login-form">

      <el-card>
        <div class="company">八爪管理系统</div>
        <div class="title"></div>
        <el-form :model="loginInfo" :rules="rules" ref="loginForm" label-width="0px">
            <el-form-item prop="username">
              <el-input type="text" v-model="loginInfo.username" auto-complete="off" placeholder="帐号" />
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="loginInfo.password" auto-complete="off" @keyup.enter.native="login" placeholder="密码" />
            </el-form-item>
            <div class="login-btn-box">
              <!--<el-button @click="reset" class="login-btn">重置</el-button>-->
              <el-button type="primary" @click="login" class="login-btn">登录</el-button>
            </div>
        </el-form>
      </el-card>

    </div>
</template>

<script>
  // import userApi from '@/api/user'
  export default {
    name: 'login-form',
    data () {
      return {
        loginInfo: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请填写帐号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
          ]
        }
      }
    },
    created: function () {

    },
    mounted: function () {
    },
    methods: {
      reset() {
        this.$refs.loginForm.resetFields();
      },
      login() {
        this.$router.replace({name: 'test'})   //登录成功之后跳转的页面
        // this.$refs.loginForm.validate((valid) => {
        //   if (valid) {
        //     let qs = require('querystring');
        //     userApi.login(qs.stringify(this.$data.loginInfo)).then((res) => {
        //       if(res.data.errno === 0){
        //         localStorage.setItem('knock_knock', res.data.data.access_token)
        //         localStorage.setItem('username', res.data.data.user.username)
        //
        //       }else{
        //         this.$message.error(res.data.msg);
        //       }
        //     })
        //
        //   } else {
        //     return false
        //   }
        // })
      }
    },
  }

</script>

<style lang="scss" scoped>
  .login-form{
    text-align: center;
    font-size:16px;
    .company{
      line-height:32px;
      color:#333;
    }
    .title{
      margin-bottom:30px;
      line-height:36px;
      font-size:18px;
      font-weight:bold;
      color:#409EFF;
    }
  }
</style>
