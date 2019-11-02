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
    top: 420px;
    left: 0;
    right: 0;
    margin: 0 auto;
    .left{
       display: inline-block;
       height: 1px;
       width: 100px;
       background: #cccccc; 
       float: left;
    }
    span{
        display: inline-block;
        font-size: 14px;
        color:#878686 ;
        position: absolute;
        top: -10px;
        left: 115px;
    }
    .right{
     display: inline-block;
       height: 1px;
       width: 100px;
       background: #cccccc; 
       float: right;
    }
    .qq{
    display: inline-block;
    width: 45px;
    height: 45px;
    background: url(../images/login.png) -78px -99px;
    border-radius: 50%;
    position: absolute;
        top: 50px;
        left: 70px;
    }
    .zfb{
    display: inline-block;
    width: 45px;
    height: 45px;
    background: url(../images/login.png) -156px -99px;
    border-radius: 50%;
    position: absolute;
        top: 50px;
        right: 70px;
    }
  }
}
</style>