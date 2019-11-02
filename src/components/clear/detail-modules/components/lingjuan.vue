<template>
  <div class="lingjuan">
    <div class="lj">
      <span>领劵</span>
      <p class="left">
        <img src="../img/lingjuan1.png" alt class="img1" />
        <span>满1299减110</span>
        <img src="../img/lingjuan2.png" alt class="img2" />
      </p>
      <p class="right">
        <img src="../img/lingjuan1.png" alt class="img1" />
        <span>满899减80</span>
        <img src="../img/lingjuan2.png" alt class="img2" />
      </p>
      <p class="jt">
        <img src="../img/jtyjt.png" @click="lingjuan"/>
      </p>
    </div>
    <div class="jb">
      <i>金币</i>
      <span>赠送</span>
      <em>64</em>
      <span>个金币</span>
    </div>
    <div class="yhj" v-if="isHide">
      <div class="top">
        <p>优惠券</p>
        <img src="../img/cuowu.png" alt   @click="hide"/>
      </div>
      <p class="two">可领优惠券</p>
      <ul class="juan">
        <li v-for="(item,index) in 2" :key="index">
          <img src="../img/yhj.png" alt/>
          <div class="left">
            <em>￥</em>
            <span>110</span>
            <p>满1299元可用</p>
          </div>
          <div class="right">
            <em>满减</em>
            <span>全场满1299元减110元</span>
            <p class="time">2019.11.04-2019.11.14</p>
            <p class="lq">立即领取</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      isHide:false
    }
  },
  methods:{
    hide(){
      this.isHide=false;
    },
    lingjuan(){
      this.isHide=true;
    }
  }
};
</script>
<style lang="less" scoped>
.lingjuan {
  height: 84px;
  width: 100%;
  background: #fff;
  line-height: 84px;
  .lj {
    position: relative;
    span {
      margin-left: 20px;
      font-size: 28px;
    }
    p {
      border: 1px solid #ff4b4c;
      border-left: none;
      border-right: none;
      position: relative;
      display: inline;
      padding: 0 20px;
      font-size: 24px;
      background: #fff1f1;
      color: #fc5a5a;
      img {
        height: 32px;
        width: 8px;
      }
      .img1 {
        position: absolute;
        left: 0;
        top: 0;
      }
      .img2 {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    .left {
      margin-left: 30px;
    }
    .right {
      margin-left: 30px;
    }
    .jt {
      position: absolute;
      top: 28px;
      right: 5px;
      border: none;
      background: none;
      img {
        height: 30px;
        width: 30px;
      }
    }
  }
}
.jb{
  height: 90px;
  width: 100%;
  background: #fff;
  color:#666;
  font-size: 28px;
  padding: 20px;
  margin: 20px auto;
  box-sizing: border-box;
  line-height: 60px;
  i{
    padding-right: 40px;
  }
  em{
    color: #ff4b4c;
  }

}
.yhj {
  height: 1066px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  background: #fff;
  z-index: 1000;
  color: #666;
  .top {
    height: 120px;
    width: 100%;
    padding: 20px 0px;
    position: relative;
    box-sizing: border-box;
    p {
      font-size: 34px;
      text-align: center;
    }
    img {
      height: 40px;
      width: 40px;
      padding: 5px;
      position: absolute;
      top: 20px;
      right: 30px;
    }
  }
  .two {
    font-size: 28px;
    margin-left: 20px;
    height: 40px;
    line-height: 40px;
  }
  ul {
    height: 420px;
    width: 100%;
    color: #666;
    font-size: 24px;
    li {
      height: 200px;
      margin: 20px;
      border: 2px solid #e8e8e8;
      border-radius: 30px;
      position: relative;
      box-sizing: border-box;
      img {
        height: 198px;
        width: 226px;
      }
      .left {
        height: 198px;
        width: 226px;
        position: absolute;
        top: 0;
        font-size: 24px;
        color: #fff;
        em {
          position: absolute;
          left: 40%;
          top: 40px;
        }
        span {
          position: absolute;
          left: 50%;
          top: 40px;
          font-size: 52px;
        }
        p {
          margin-left: 40px;
          margin-top: 100px;
        }
      }
      .right{
        width: 440px;
        height:100%;
        margin-left: 250px;
        margin-top: -200px;
        font-size: 24px;
        color:#666;
        em{
          background-color: #70A6F1;
          color:#fff;
          padding:3px;
        }
        span{
          margin-left: 20px;
        }
        .time{
          margin-top: 35px;
          display: inline-block;
        }
        .lq{
          height: 44px;
          width: 120px;
          color:#70A6F1;
          border:2px solid #70A6F1;
          border-radius:30px;
          line-height: 44px;
          text-align: center;
          display: inline-block;
          margin-left: 40px;
          
        }
      }
    }
  }
}
</style>