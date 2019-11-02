<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <a href="#"><img :src="slide" alt=""></a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import{getbanner} from "@/api/index.js"
  export default {
    name: 'carrousel',
     async created(){
       this.swiperSlides=await getbanner()
     },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
            autoplay: true
        },
        swiperSlides: []
      }
    }
  }
</script>

<style lang="less" scoped >
.swiper-pagination{
  text-align: right;
}
.swiper-pagination-bullet{
    width: 6px;
    height: 6px;
}
.swiper-pagination-bullet-active{
   background: #fff;
}
</style>