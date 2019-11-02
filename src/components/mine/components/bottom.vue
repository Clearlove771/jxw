<template>
  <div class="bottom">
    <div class="content">
       <i class="left"></i>
       <span>合作伙伴登录</span>
       <i class="right"></i>
       <div class="qq">

       </div>
       <div class="zfb">

       </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.bottom {
    width: 100%;
    position: relative;
  .content {
    width: 84%;
    position: absolute;
    top: 840px;
    left: 0;
    right: 0;
    margin: 0 auto;
    .left{
       display: inline-block;
       height: 2px;
       width: 200px;
       background: #cccccc; 
       float: left;
    }
    span{
        display: inline-block;
        font-size: 28px;
        color:#878686 ;
        position: absolute;
        top: -20px;
        left: 230px;
    }
    .right{
     display: inline-block;
       height: 2px;
       width: 200px;
       background: #cccccc; 
       float: right;
    }
    .qq{
    display: inline-block;
    width: 90px;
    height: 90px;
    background: url(../images/login.png) -156px -198px;
    border-radius: 50%;
    position: absolute;
        top: 100px;
        left: 140px;
    }
    .zfb{
    display: inline-block;
    width: 90px;
    height: 90px;
    background: url(../images/login.png) -312px -198px;
    border-radius: 50%;
    position: absolute;
        top: 100px;
        right: 140px;
    }
  }
}
</style>