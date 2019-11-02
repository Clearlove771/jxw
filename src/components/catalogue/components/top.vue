<template>
  <div>
    <!-- 顶部"选酒" -->
    <div class="top">
      <img src="./images/headBack.jpg" alt class="back" />
      <h2>选酒</h2>
      <a href="javascript:;" class="nav"></a>
  <div class="top">
    <div>
      <img tag="li" src="@/components/catalogue/img/zuojiantou.png" alt class="left" />
      <em tag="li">选酒</em>
      <img
        tag="li"
        src="@/components/catalogue/img/gengduo2.png"
        alt
        class="right"
        v-on:click="show()"
      />
    </div>
    <!-- <navlistTop></navlistTop> -->
    <div v-if="isShow">
      <ul>
        <router-link tag="li" to="/home">
          <i class="iconfont icon-shouyebuxuanzhong"></i>首页
        </router-link>
        <router-link tag="li" to="/catalogue">
          <i class="iconfont icon-leimupinleifenleileibie-copy"></i>分类
        </router-link>
        <router-link tag="li" to="/shopping">
          <i class="iconfont icon-qicheqianlian-"></i>购物车
        </router-link>
        <router-link tag="li" to="/mine">
          <i class="iconfont icon-Icon_wode"></i>我的酒仙
        </router-link>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 顶部"选酒"
#cata {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
}
.top {
  position: fixed;
  width: 100%;
  height: 40px;
  left: 0;
  top: 0;
  background: #de4943;
  z-index: 1000;
  color: #fff;
  overflow: hidden;
  .back {
    position: absolute;
    height: 40px;
    width: 30px;
    left: 10px;
  }
  h2 {
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    font-weight: 500;
    position: absolute;
    top: 0px;
    left: 50%;
    margin-left: -16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .nav {
    background: url(./images/headIcon.png);
    display: inline-block;

    background-position: -150px 6px;
    right: 10px;
    width: 30px;
    height: 40px;
    position: absolute;
    top: 0;
    display: block;
  }
}
</style>

<script>
import "../css/fonts.css";
import "@/common/css/fonts.css";
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
    }
  }
};
</script>


<style lang="less" scoped>
.top {
  position: fixed;
  top: 0;
  left: 0;
  background: #f53a33;
  width: 100%;
  height: 80px;
  color: #f0eeee;
  font-size: 32px;
  line-height: 80px;
  z-index: 110;
  img {
    height: 60px;
    width: 60px;
  }
  .left {
    float: left;
    margin: 10px 10px;
  }
  .right {
    float: right;
    margin: 10px 10px;
  }
  em {
    text-align: center;
    position: absolute;
    left: 50%;
    margin-left: -16px;
  }
  ul {
    position: fixed;
    top: 80px;
    left: 0px;
    width: 100%;
    display: flex;
    background: #eee;
    z-index: 100;
    color: #838c94;
    height: 100px;
    letter-spacing: 2px;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      font-weight: 800;
      font-size: 24px;
      i {
        display: block;
        font-size: 40px;
        margin-bottom: -40px;
      }
    }
    img {
      width: 84px;
      height: 84px;
    }
  }
}
</style>

