<template>
    <div class="warn">
        <img src="../img/warn.png">
        <span>自营商品实付满100元免运费，偏远地区满500免运费</span>
    </div>
</template>

<style lang="less" scoped>
.warn{
    height: 60px;
    width: 100%;
    position: absolute;
    top: 80px;
    background: #FFF4E2;
    border: 1px solid #FFE8C6;
    box-sizing: border-box;
    margin-bottom: 20px;
    img{
        height: 32px;
        width: 32px;
        display: inline-block;
        position: absolute;
        left: 10px;
        top: 10px;
    }
    span{
        line-height: 48px;
        margin-left: 50px;
        color: #FF0000;
    }
}
</style>