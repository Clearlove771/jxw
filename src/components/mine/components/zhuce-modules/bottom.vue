<template>
    <div class="pLongin">
         <div class="ipt1">
          <i></i>
          <input type="text" placeholder="请输入手机号，新用户将自动注册" />
        </div>
        <div class="ipt2">
           <img src="../../images/yan.png" alt="">
          <input type="text" placeholder="验证码" />
          <span></span>
        </div>
        <div class="ipt3">
          <input type="text"  @focus="ipt" @blur="over" placeholder="请输入校验码" />
          <span>获取校验码</span>
          <p v-if="isAll"><i></i>请输入校验码</p>
        </div>
        <div class="ipt4">
          <i></i>
          <input type="text" placeholder="请输入密码" />
        </div>
        <div class="ipt5">
          <i></i>
          <input @blur="overOne" type="text" placeholder="再次输入密码" />
         <p v-if="mima"><b></b><span>两次密码输入不一致</span></p>
        </div>
        <div class="btn">
          <a href="javascript:void(0)">确认注册</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
  return{
      isAll:true,
      mima:false
  }
    },
    methods:{
        ipt(){
           this.isAll=false
        },
        over(){
           var con=document.querySelector(".ipt3 input").value.trim()
           if(con==""){
            this.isAll=true
           } 
        },
        overOne(){
            var num1=document.querySelector(".ipt4 input").value
            var num2=document.querySelector(".ipt5 input").value
            if(num1!=num2){
               this.mima=true;
            }
            else{
                this.mima=false;
            }
        }
    }
}
</script>
<style lang="less" scoped>
   .pLongin{
       width: 80%;
       position: relative;
       position: absolute;
       top: 70px;
       left: 0;
       right: 0;
       margin: 0 auto;
       
    input {
    width: 100%;
    line-height: 40px;
    border: 1px solid #cccccc;
    margin-bottom: 40px;
    border-radius: 5px;
    font-size: 14px;
    outline: none;
    padding-left: 30px;
    box-sizing: border-box;
  }
  .ipt1{
      i{
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(../../images/login.png) -138px -34px;
    top: 10px;
    left: 5px;
      }
  }
  .ipt4{
      i{
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(../../images/login.png) -72px -34px;
    top: 256px;
    left: 5px;
      }
  }
  .ipt5{
      i{
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(../../images/login.png) -72px -34px;
    top: 337px;
    left: 5px;
      }
       p{
          position: absolute;
          top:370px;
          left: 165px;
          height: 15px;
          color: red;
          b{ 
            width: 15px;
            height: 15px;
            display: inline-block;
            background: url(../../images/login.png) -202px -34px;
          }
      }
  }
  .ipt2{
      input{
          padding-left: 15px;
      }
      img{
         width: 70px;
        height: 40px;
        position: absolute;
        top: 83px;
        right: 40px;
      }
       span {
        position: absolute;
        top: 91px;
        right: 5px;
        display: inline-block;
        width: 25px;
        height: 25px;
        background: url(../../images/ref.png) no-repeat;
      }
  }
  .ipt3{
      input{
          width: 50%;
          padding-left: 15px;
      }
      span{
          display: inline-block;
          width: 30%;
          line-height: 40px;
          background: #de4b45;
          float:right;
          border-radius: 5px;
         text-align: center;
         font-size: 14px;
         color: #fff;
      }
      p{
          position: absolute;
          top:210px;
          left: 80px;
          height: 15px;
          color: red;
          i{ 
            width: 15px;
            height: 15px;
            display: inline-block;
            background: url(../../images/login.png) -202px -34px;
          }
      }

  }
  .btn {
      width: 100%;
      line-height: 35px;
      background: #de4b45;
      border-radius: 5px;
      text-align: center;
      font-size: 16px;
      a {
        color: #fff;
      }
    }
   }
</style>