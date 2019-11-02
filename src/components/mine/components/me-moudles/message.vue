<template>
  <div class="message">
    <div class="mask">
      <img src="https://misc.jiuxian.com/m_user/images/usercenter/userPhoto.png" alt />
    </div>
    <div class="center">
      <span class="id">jxw42827665</span>
      <span class="huiyuan">立享CLUB会员<i></i></span>
      <p>下载客户端 美酒随时抢 </p>
    </div>
    <div class="bottom">
      <i>Lv1 酒虫</i>
      <div>
        <a href="#">
          <b>0</b>
          <span>待付款</span>
        </a>
        <a href="#">
          <b>0</b>
          <span>待发货</span>
        </a>
        <a href="#">
          <b>0</b>
          <span>待收货</span>
        </a>
        <a href="#">
          <b>0</b>
          <span>已完成</span>
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.message {
  position: relative;
  width: 100%;
  height: 304px;
  background: url("../../images/bg.jpg");
  background-size: 100%;
  .mask {
    width: 166px;
    height: 170px;
    background: url("../../images/me.png");
    background-size: 100%;
    position: absolute;
    top: 36px;
    left: 5%;
    z-index: 2;
    img {
      width: 81%;
      margin: 10% 0 0 11%;
    }
  }
  .center{
    position: absolute;
    top:76px;
    left:33%;
    .id{
      display: inline-block;
      color: #fa281b;
    }
    .huiyuan{
      display: inline-block;
      background: #25282f;
      color: #f1d08a;
      line-height: 32px;
      margin-left: 10px;
      padding: 0 10px;
      border-radius: 4px;
      i{
        margin-left: 10px;
        display: inline-block;
        width: 22px;
        height: 22px;
        background: url("../../images/clubFinger.png");
        background-size: 100%;
      }
    }
    p{
        font-size: 28px;
        color: #000;
      }
  }
  .bottom {
    width: 100%;
    height: 98px;
    position: absolute;
    left: 0;
    bottom: 0;
    color: #fff;
    background-color: rgba(#000, 0.3);
    i {
      display: inline-block;
      width: 18%;
      height: 90px;
      line-height: 60px;
      background: url("../../images/grade.png") no-repeat;
      background-size: 100%;
      margin-left: 52px;
      text-align: center;
      float: left;
    }
    div {
      display: inline-block;
      width: 70%;
      display: flex;
      height: 100%;
      float: right;
      padding: 16px 0;
      box-sizing: border-box;
      a {
        flex: 1;
        text-align: center;
        border-right: 4px solid rgb(#fff,0.6);
        border-radius: 2px 60px;
        b{
          display: block;
          color: #fff;
          font-size: 28px;
          height: 50%;
        }
        span {
          display: block;
          color: #000;
          height: 50%;
          font-size: 28px;
        }
      }
    }
  }
}
</style>