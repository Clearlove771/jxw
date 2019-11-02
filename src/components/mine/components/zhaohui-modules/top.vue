<template>
    <div class="mine">
    <a href="#" @click="back"></a>
    <span>找回密码</span>
    </div>
</template>
<script>
export default {
    methods:{
        back(){
            this.$router.replace("/mine")
        }
    }
}
</script>
<style lang="less" scoped>
    .mine{
        width: 100%;
        background: #de4943;
        height: 41px;
        display: flex;
        a{
            display: block;
            width: 30px;
            height: 40px;
            background: url(../../images/mine.jpg);
            margin-left: 15px;
        }
        span{
            display: block;
            width: 50%;
            height: 41px;
            margin-left: 50px;
            text-align: center;
            font-size: 16px; 
            line-height: 41px; 
            color: #fff;
        }
    }
</style>