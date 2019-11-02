<template>
  <div class="msg" >
    <div class="jintie">
      <img src="../img/jintie.png" alt />
      <span>每满399减50，领取津贴全平台可用</span>
      <div class="click" @click="lingqu">点击领取</div>
      <img src="../img/jtyjt.png" alt class="yjt" />
    </div>
    <div class="bdcolor" v-if="isHide">
      <div class="jtlq">
        <p class="top">酒仙购物津贴</p>
        <div class="two">
          <p class="jt-price">
            ¥
            <span>50</span>
          </p>
          <p class="jt-condition">
            每满399.00可用1张
            <br />有效期2019.11.05-2019.11.05
          </p>
        </div>
        <img src="../img/cuowu.png" alt @click="hide()" />
      </div>
    </div>
    <div class="">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHide: false
    };
  },
  methods: {
    hide() {
      this.isHide = false;
    },
    lingqu() {
      this.isHide = true;
    }
  }
};
</script>

<style lang="less" scoped>
.msg {
  .jintie {
    height: 84px;
    width: 100%;
    box-sizing: border-box;
    // padding: 24px 20px;
    margin: 20px 0px;
    background-color: #ffd4b5;
    color: #fc5a5a;
    position: relative;
    img {
      width: 114px;
      height: 80px;
      display: inline-block;
    }
    span {
      display: inline-block;
      position: absolute;
      top: 25px;
      font-size: 28px;
    }
    .click {
      position: absolute;
      top: 25px;
      right: 50px;
      text-decoration: underline;
      font-size: 26px;
    }
    .yjt {
      height: 30px;
      width: 30px;
      position: absolute;
      top: 28px;
      right: 15px;
    }
  }
  .bdcolor {
    height: 1250px;
    width: 750px;
    background: rgba(#000, 0.2);
    position: absolute;
    top: 80px;
    left: 0px;
    z-index: 9999;
    // overflow: hidden;
  }
  .jtlq {
    width: 580px;
    height: 436px;
    background: url("../img/jtlq.png");
    background-size: 600px 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -218px;
    margin-left: -290px;
    z-index: 1000;
    overflow: hidden;
    // position: relative;
    img {
      height: 40px;
      width: 40px;
      padding: 5px;
      position: absolute;
      top: 10px;
      right: 20px;
    }
    .top {
      height: 160px;
      width: 100%;
      text-align: center;
      line-height: 160px;
      color: #fff;
      font-size: 40px;
    }
    .two {
      height: 200px;
      width: 100%;
      background: url("../img/jtlq.png") 0 -446px;
      background-size: 600px 700px;
      margin-left: 60px;
      color: #fc5a5a;
      padding: 0 20px;
      
      .jt-price {
        height: 70px;
        width: 100%;
        font-size: 30px;
        span {
          font-size: 60px;
        }
      }
      .jt-condition {
        height: 72px;
        width: 100%;
        margin: 10px 0px;
      }
    }
  }
}
</style>