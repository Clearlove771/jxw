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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff url(./images/jlt.png) -98px;
  background-size: 150px 55px;
  position: fixed;
  z-index: 99999999;
  bottom: 60px;
  right: 25px;
  box-shadow: 10px inset;
}
</style>