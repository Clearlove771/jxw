<template>
    <div>
        <!-- 头部 -->
        <user-top></user-top>
        <!-- 登录表单 -->
        <login ></login>
        <!-- 注册 找回密码 -->
        <reg></reg>
        <!-- 下方 -->
        <bottom></bottom>
    </div>
</template>
<script>
import userTop from "./userTop.vue"
import login from "./login.vue"
import reg from "./router/reg.vue"
import bottom from "./bottom.vue"
export default {
     components:{
          userTop,
          login,
          bottom,
          reg
    }
}
</script>