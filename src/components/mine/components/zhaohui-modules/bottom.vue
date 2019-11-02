<template>
    <div class="pLongin">
         <div class="ipt1">
          <i></i>
          <input type="text" placeholder="账号绑定的手机号" />
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
        <div class="btn">
          <a href="javascript:void(0)">修改密码</a>
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
       top: 170px;
       left: 0;
       right: 0;
       margin: 0 auto;
       
    input {
    width: 100%;
    line-height: 80px;
    border: 1px solid #cccccc;
    margin-bottom: 80px;
    border-radius: 10px;
    font-size: 28px;
    outline: none;
    padding-left: 60px;
    box-sizing: border-box;
  }
  .ipt1{
      i{
    position: absolute;
    display: inline-block;
    width: 40px;
    height: 40px;
    background: url(../../images/login.png) -276px -68px;
    top: 20px;
    left: 10px;
      }
  }
  .ipt2{
      input{
          padding-left: 30px;
      }
      img{
         width: 140px;
        height: 80px;
        position: absolute;
        top: 166px;
        right: 80px;
      }
       span {
        position: absolute;
        top: 182px;
        right: 10px;
        display: inline-block;
        width: 50px;
        height: 50px;
        background: url(../../images/ref.png) no-repeat;
      }
  }
  .ipt3{
      input{
          width: 50%;
          padding-left: 30px;
      }
      span{
          display: inline-block;
          width: 30%;
          line-height: 80px;
          background: #de4b45;
          float:right;
          border-radius: 10px;
         text-align: center;
         font-size: 28px;
         color: #fff;
      }
      p{
          position: absolute;
          top:420px;
          left: 160px;
          height: 30px;
          color: red;
          i{ 
            width: 30px;
            height: 30px;
            display: inline-block;
            background: url(../../images/login.png) -404px -68px;
          }
      }

  }
  .btn {
      width: 100%;
      line-height: 70px;
      background: #de4b45;
      border-radius: 10px;
      text-align: center;
      font-size: 32px;
      a {
        color: #fff;
      }
    }
   }
</style>