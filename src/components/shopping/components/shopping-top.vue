
<template>
  <div class="top">
    <div>
      <img tag="li" src="@/components/shopping/img/zuojiantou.png" alt class="left" />
      <em tag="li">购物车</em>
      <img
        tag="li"
        src="@/components/shopping/img/gengduo2.png"
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


<script>
import "../css/fonts.css";
import "@/common/css/fonts.css";
export default {
  data() {
    return {
      isShow:false
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
  background: #fafafa;
  width: 100%;
  height: 80px;
  color: #666;
  font-size: 32px;
  line-height: 80px;
  z-index: 110;
  img {
    height: 50px;
    width: 50px;
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
    margin-left: -50px;
  }
 
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
</style>

