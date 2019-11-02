<template>
    <div class="reg">
        <div class="content">
        <router-link to="/zhuce" class="one">免费注册</router-link>
        <router-link to="/zhaohui" class="two">找回密码</router-link>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .reg{
        width: 100%;
        position: relative;
        .content{
            width: 84%;
            position: absolute;
            top: 380px;
            left: 0;
            right: 0;
            margin: 0 auto;
            .one{
                display: inline-block;
                float: left;
                font-size: 14px;
                text-decoration: underline;
                color: #666;
            }
            .two{
                display: inline-block;
                float: right;
                font-size: 14px;
                text-decoration: underline;
                color: #666;
                
            }
            
        }
    }
</style>