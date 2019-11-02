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
  height: 152px;
  background: url("../../images/bg.jpg");
  background-size: 100%;
  .mask {
    width: 83px;
    height: 85px;
    background: url("../../images/me.png");
    background-size: 100%;
    position: absolute;
    top: 18px;
    left: 5%;
    z-index: 2;
    img {
      width: 81%;
      margin: 10% 0 0 11%;
    }
  }
  .center{
    position: absolute;
    top:38px;
    left:33%;
    .id{
      display: inline-block;
      color: #fa281b;
    }
    .huiyuan{
      display: inline-block;
      background: #25282f;
      color: #f1d08a;
      line-height: 16px;
      margin-left: 5px;
      padding: 0 5px;
      border-radius: 2px;
      i{
        margin-left: 5px;
        display: inline-block;
        width: 11px;
        height: 11px;
        background: url("../../images/clubFinger.png");
        background-size: 100%;
      }
    }
    p{
        font-size: 14px;
        color: #000;
      }
  }
  .bottom {
    width: 100%;
    height: 49px;
    position: absolute;
    left: 0;
    bottom: 0;
    color: #fff;
    background-color: rgba(#000, 0.3);
    i {
      display: inline-block;
      width: 18%;
      height: 45px;
      line-height: 30px;
      background: url("../../images/grade.png") no-repeat;
      background-size: 100%;
      margin-left: 26px;
      text-align: center;
      float: left;
    }
    div {
      display: inline-block;
      width: 70%;
      display: flex;
      height: 100%;
      float: right;
      padding: 8px 0;
      box-sizing: border-box;
      a {
        flex: 1;
        text-align: center;
        border-right: 2px solid rgb(#fff,0.6);
        border-radius: 1px 30px;
        b{
          display: block;
          color: #fff;
          font-size: 14px;
          height: 50%;
        }
        span {
          display: block;
          color: #000;
          height: 50%;
          font-size: 14px;
        }
      }
    }
  }
}
</style>