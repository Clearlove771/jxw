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
        height: 82px;
        display: flex;
        a{
            display: block;
            width: 60px;
            height: 80px;
            background: url(../../images/mine.jpg);
            margin-left: 30px;
        }
        span{
            display: block;
            width: 50%;
            height: 82px;
            margin-left: 100px;
            text-align: center;
            font-size: 32px; 
            line-height: 82px; 
            color: #fff;
        }
    }
</style>