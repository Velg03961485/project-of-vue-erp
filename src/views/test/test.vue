<template>
  <div class="guest-list-page">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <v-touch @swipeleft="prev" @swiperight="next">
      <div ref="img" class="img">
        <div class="dots">
          <div v-for="i,key in imgs" class="dot-base" :class="{'cur-dot':key==cur_img_index}"></div>
        </div>
      </div>
    </v-touch>
  </div>
</template>

<script>
  // import VueTouch from '@/assets/js/vue-touch'
  // var VueTouch = require('vue-touch')
  // Vue.use(VueTouch, {name: 'v-touch'})
    export default {
        name: "test",
      data(){
          return{
            cur_img_index: 0,
            imgs: [
              'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=423921803,865481119&fm=27&gp=0.jpg',
              'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=519016328,2903928941&fm=27&gp=0.jpg',
              'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1321439853,1436775495&fm=27&gp=0.jpg'
            ]
          }
        },
      watch:{
        cur_img_index() {
          this.refresh()
        }
      },
      methods:{
        refresh() {
          this.$refs.img.style.background = `url('${this.imgs[this.cur_img_index]}')`
          this.$refs.img.style.backgroundSize = 'cover'
        },
        next() {
          this.cur_img_index = (this.cur_img_index + 1) % this.imgs.length
          console.log('next');
        },
        prev() {
          this.cur_img_index = (this.cur_img_index + this.imgs.length - 1) % this.imgs.length
          console.log('prev');
        },

      },
      mounted(){
        this.refresh()
      }
    }

</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .img {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;
    justify-items: center;
    align-items: center;
  }

  .dots{
    display: flex;
    flex-direction: row;
  }
  .dot-base {
    width: 15px;
    height: 15px;
    background: gray;
    margin: 10px;
    border-radius:50%;
  }

  .cur-dot {
    background: lightskyblue;
  }
</style>
