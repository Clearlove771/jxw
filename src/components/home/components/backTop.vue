<template>
  <div class="backTop" @click="back" v-if="isShow"></div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    back() {
      let timer = setInterval(() => {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 7);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        if (osTop == 0) {
          clearInterval(timer);
        }
      }, 20);
    }
  }
};
</script>
<style lang="less" scoped>
.backTop {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fff url(./images/jlt.png) -196px;
  background-size: 300px 110px;
  position: fixed;
  z-index: 99999999;
  bottom: 120px;
  right: 50px;
  box-shadow: 40px inset;
}
</style>