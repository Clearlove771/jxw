<template>
  <div class="detail">
    <detailTop></detailTop>
    <carousel></carousel>
    <jintie ref="hide"></jintie>
    <lingjuan ref="hide1"></lingjuan>
    <kuaidi></kuaidi>
    <shops></shops>
  </div>
</template>
<script>
import detailTop from "./components/detail-top.vue";
import carousel from "./components/carousel.vue";
import jintie from "./components/jintie.vue";
import lingjuan from "./components/lingjuan.vue";
import kuaidi from "./components/kuaidi.vue";
import shops from "./components/shops.vue"
export default {
  components: {
    detailTop,
    carousel,
    jintie,
    lingjuan,
    kuaidi,
    shops
  },
  mounted() {
    window.onclick = () => {
      var box = document.querySelector(".detail");
      if (this.$refs.hide.isHide||this.$refs.hide1.isHide){
        box.style.height = 667 + "px";
        box.style.overflow = "hidden";
      }else{
           box.style.height="auto"
      }
    };
  },
  destroyed(){
       window.onclick="";
  }
};
</script>

<style lang="less" scoped>

</style>

