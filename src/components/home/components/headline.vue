<template>
  <div>
    <div class="headline">
      <img src="https://img07.jiuxian.com/bill/2018/0703/23e12867518b4a779bd6530e694e817f.jpg" alt />
      <div class="right">
        <ul ref="oUl">
          <li v-for="(item,index) in list " :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <p>掌上秒拍</p>
      <h6>距结束</h6>
      <span>{{leftTime.hours}}</span>
      <i>:</i>
      <span>{{leftTime.minutes}}</span>
      <i>:</i>
      <span class="s-last">{{leftTime.seconds}}</span>
      <h5> <a href="">更多商品的你来抢！<i>></i></a> </h5>
    </div>
  </div>
</template>
<script>
import calcTime from "./time.js"
export default {
  data() {
    return {
      list: [
        "1元拼1499茅台飞天抽奖券中奖名单",
        "国台限时特惠 买一送一",
        "爆品腰斩日  限时24小时",
        "温馨提示 谨防上当受骗 造成财产损失"
      ],
      timer: null,
      leftTime: {
        hours: "",
        minutes: "",
        seconds: ""
      },
      endtime: "2019/11/11 17:30",
      timer1:""
    };
  },
  created() {
      this.timer = setInterval(() => {
      var time = calcTime(this.endtime);
      // console.log(time);
      this.leftTime.hours = time.hours;
      this.leftTime.minutes = time.minutes;
      this.leftTime.seconds = time.seconds;
    }, 1000);
    let a = 0;
     this.timer1=setInterval(() => {
      a += 16;
      this.$refs.oUl.style.marginTop = -a + "px";  //bug....................
      if (a > 45) {
        a = 0;
      }
    }, 3000);
  },
  destroyed(){
   clearInterval(this.timer1);
   clearInterval(this.timer)
  }
};
</script>
<style lang="less" scoped>
.headline {
  display: flex;
  margin-top: 20px;
  img {
    display: inline-block;
    width: 20%;
    height: 32px;
    margin-left: 20px;
  }
  .right {
    margin-left: 30px;
    width: 60%;
    height: 32px;
    overflow: hidden;
    line-height: 32px;
  }
}
.bottom {
  margin-top: 20px;

  p {
    display: inline-block;
    font-size: 28px;
    font-weight: bold;
    margin-left: 10px;
  }
  h6 {
    margin-left: 10px;
    display: inline-block;
  }
  span {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: gray;
    margin-left: 6px;
    border-radius: 4px;
    line-height: 32px;
    text-align: center;
    color: #fff;
  }
  i {
    display: inline-block;
    margin-left: 6px;
  }
  h5{
      display: inline-block;
      margin-left: 140px;
    i{
        display: inline-block;
        width: 30px;
        height: 30px;
        background: gray;
        border-radius: 100%;
        line-height: 30px;
        text-align: center;
        color: #fff;
        font-size: 28px;
    }
  }
}
</style>