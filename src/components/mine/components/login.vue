<template>
  <div class="login">
    <div class="loginTwo">
      <span class="user" @click="colorO" :class="{colorOne:isAll1}">账户登录</span>
      <span class="phone" @click="colorT" :class="{colorOne:isAll2}">手机动态密码登录</span>
    </div>
    <div class="content">
      <div class="userCon" v-if="isAll1">
        <div class="ipt1">
          <i></i>
          <input type="text" placeholder="用户名/邮箱/手机号" />
        </div>
        <div class="ipt2">
          <i></i>
          <input type="password" placeholder="密码" />
        </div>
        <div class="ipt3">
          <input type="text" placeholder="验证码" />
          <img src="../images/yan.png" alt="">
          <span></span>
        </div>
        <div class="btn" @click="me">
          <a href="javascript:void(0)">立即登录</a>
        </div>
      </div>
      <div class="phoneCon" v-if="isAll2">
          <pLongin></pLongin>
      </div>
    </div>
  </div>
</template>
<script>
import pLongin from "./pLongin.vue"
export default {
    components:{
       pLongin,
    },
  data() {
    return {
      isAll1: true,
      isAll2: false,
    };
  },
  methods: {
    colorO() {
      this.isAll1 = true;
      this.isAll2 = false;
    },
    colorT() {
      this.isAll1 = false;
      this.isAll2 = true;
    },
    me(){
    window.localStorage.setItem("isLogin", "true")
     this.$router.replace("/me");
    }
  }
};
</script>
<style lang="less" scoped>
.colorOne {
  color: red;
  border-bottom: 4px solid red;
  padding-bottom: 10px;
}
.login {
  margin-top: 40px;
  width: 100%;
  position: relative;
  .loginTwo {
    width: 84%;
    margin: 0 auto;
    font-size: 28px;
    color: gray;
    .user {
      display: inline-block;
      float: left;
    }
    .phone {
      display: inline-block;
      float: right;
    }
  }
}
.content {
  width: 84%;
  height: 700px;
  margin: 0 auto;
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  input {
    width: 100%;
    line-height: 80px;
    border: 2px solid #cccccc;
    margin-bottom: 80px;
    border-radius: 10px;
    font-size: 28px;
    outline: none;
    padding-left: 60px;
    box-sizing: border-box;
  }
  i {
    position: absolute;
    display: inline-block;
    width: 40px;
    height: 40px;
    background: url(../images/login.png);
  }
  .userCon {
    width: 100%;
    height: 100%;
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
    .ipt1 {
      i {
        top: 20px;
        left: 10px;
        background-position: 0 -68px;
      }
    }
    .ipt2 {
      i {
        top: 184px;
        left: 10px;
        background-position: -144px -68px;
      }
    }
    .ipt3 {
        input{
            padding-left: 30px;
        }
        img{
            width: 140px;
            height: 80px;
            position: absolute;
            top: 330px;
            right: 80px;
        }
      span {
        position: absolute;
        top: 350px;
        right: 10px;
        display: inline-block;
        width: 50px;
        height: 50px;
        background: url(../images/ref.png) no-repeat;
      }
    }
  }
  .phoneCon {
    width: 100%;
    height: 100%;
  }
}
</style>