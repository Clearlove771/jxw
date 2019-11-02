<template>
<div class="nav">
    <ul>
        <router-link tag="li" to="/home"><i class="iconfont icon-shouyebuxuanzhong"></i>首页</router-link>
        <router-link tag="li" to="/catalogue"><i class="iconfont icon-leimupinleifenleileibie-copy"></i>分类 </router-link>
        <router-link tag="li" to="/clear"> <img src="@/components/images/clear.png" alt=""></router-link>
        <router-link tag="li" to="/shopping"> <i class="iconfont icon-qicheqianlian-"></i>购物车</router-link>
        <router-link tag="li" to="/mine"> <i class="iconfont icon-Icon_wode"></i>我的酒仙</router-link>
    </ul>
</div>
</template>
<style lang="less" scoped>
  .nav ul {
  position: fixed;
  bottom: 0px;
  left: 0;
  z-index: 999;
  display: flex;
  width: 100%;
  border-top: 2px solid #ddd;
  background: #eee;
}
.nav li i {
  display: block;
  font-size: 40px;
  margin-bottom: -10px;
}
.nav ul li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-weight: 800;
  font-size: 24px;
  img{
      width: 84px;
      height: 84px;
  }
}
</style> 