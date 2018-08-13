<template>
    <div class="home" >
      <div class="bg" id="particles-js">
        <div class="table" >
          <div class="container">
            <!--<div class="logo">
              杭州知己科技有限公司
            </div>-->
            <div class="main">
              <login-form></login-form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import LoginForm from '@/views/login/LoginForm'
  export default {
    name: 'home',
    components: {
      LoginForm
    },
    data () {
      return {
      }
    },
    created: function () {
      // 调整窗口尺寸事件
      window.addEventListener('resize', this.handleResize)
      // 设置显示内容
      let pathName = this.$route.name.toLowerCase()
    },
    mounted: function () {
      // 背景粒子效果
      window.particlesJS.load('particles-js', 'static/js/particles/particles.json')

      // 自动设置页面高度
      this.handleResize()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData: function () {
        let pathName = this.$route.name.toLowerCase()
        this.show = pathName

        this.handleResize()
      },
      handleResize () {
        let home = document.querySelector('.home')
        if (home) {
          home.style.height = 0 + 'px'
          // 兼容firefox ie google
          let h = document.body.scrollHeight === 0 ? document.documentElement.scrollHeight : document.body.scrollHeight
          // 自动设置页面高度
          if (window.innerHeight <= 800) {
            home.style.height = (h + 30) + 'px'
          } else {
            home.style.height = h + 'px'
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .home {
    color: black;
    width: 100%;
    height:100%;
    margin-left: 0;
    background-color: #002f44;
    overflow: hidden;
  }
  .home .table {

    position: absolute;
    display: table;
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }
  .home .bg{
    height: 100%;
    z-index: 0;
  }

  .home .container {
    margin: 0 auto;
    margin-top: 20px;
    width: 100%;
    margin-left: 0;
    z-index: 9999;
    display: table-cell;
    vertical-align: middle;
  }

  .home .footer {
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 30px;
  }

  .home .container .language{
    text-align: center;
  }

  .home .main {
    width: 300px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.75);
    margin-top:20px;
    margin-bottom: 20px;
  }

  .home .tip {
    height: 80px;
    font-size: 12px;
    text-align: center;
    color: #ffffff;
    width: 300px;
  }

  .home .tip a {
    display: block;
    height: 20px;
    position: relative;
  }

  .home .language .current {
    width: 120px;
    height: 14px;
    opacity: 0.5;
    font-size: 12px;
    color: #ffffff;
    margin-bottom: 8px;
  }

  .home .language .choose {
    width: 56px;
    height: 19px;
    font-size: 16px;
    color: #ffffff;
  }
</style>
