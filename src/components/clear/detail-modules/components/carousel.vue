<template>
<div class="banner">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" class="big">
      <img :src="slide" alt />
    </swiper-slide>
    <div class="swiper-pagination dian" slot="pagination"></div>
  </swiper>
  <div class="con">
       <span>美国    原装进口洋酒鸡尾酒基酒40度麦克美朗姆酒750ml</span>
        <p>￥128.00</p>
  </div>

  </div>
</template>

<script>
import { getDetailBanner } from "@/api/index.js";
export default {
  name: "carousel",

  async created() {
    this.swiperSlides = await getDetailBanner();
  },

  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: false
      },
      swiperSlides: []
    };
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.banner{
  background-color: #fff;

.big {
    height: 640px;
    width: 100%;
    margin-top:80px; 
  img {
    height: 100%;
    width: 640px;
    display: block;
    margin: 0 auto;
  }
  .dian{
      height: 80px;
      width: 80px;
      font-size: 40px;
  }
}
.con{
    height: 200px;
    width: 100%;
    span{
        font-size: 30px;
        color: #252525;
        padding: 10px;
        box-sizing: border-box;
    }
    p{
      color: #f00;
      font-size: 40px;
      box-sizing: border-box;
      padding: 20px;
      
    }
  }
}
</style>