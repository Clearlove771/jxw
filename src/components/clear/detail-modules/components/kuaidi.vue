<template>
    <div class="kuaidi">
        <div class="number">
            <span>数量</span>
            <div class="num">
                <a class="publicIcon minus on" @click="sub()">-</a>
                <input class="inpVal" type="text" />
                <a class="publicIcon plus" @click="add()" >+</a>
            </div>
        </div>
        <div class="songzhi">
            <span>送至</span>
            <i>河南省</i>
            <em>有货</em>
            <img src="../img/jtyjt.png" alt="">
        </div>
        <div class="yunfei">
            <em>运费</em>
            <span>店铺单笔订单不满100元，在线支付运费10元</span>
        </div>
        <div class="tishi">
            <em>提示</em>
            <span>此商品无原厂手提袋</span>
        </div>
        <div class="shouhou">
            <img src="../img/dianpu.png">
            <span>店铺发货&收获</span>
            <img src="../img/7.png">
            <span>7天退货</span>
        </div>
        <div class="pingjia">
            <em>商品评价</em>
            <p>暂无评论</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            num:1
        }
    },
    mounted(){
        document.querySelector(".inpVal").value=this.num;
    },
    methods:{
        sub(){
            this.num--;
            if(this.num<0){
                this.num=0;
            }
            document.querySelector(".inpVal").value=this.num;
        },
        add(){
            this.num++;
            document.querySelector(".inpVal").value=this.num;
        }
    }
}
</script>

<style lang="less" scoped>
.kuaidi{
    height: 364px;
    width: 100%;
    background-color: #fff;
    padding: 20px 20px 10px;
    box-sizing: border-box;
    margin-top: 130px;
    margin-bottom: 300px;
    position: relative;
    .number{
        height:60px;
        font-size: 14px;
        .num {
            margin-top: 5px;
            height: 40px;
            width: 150px;
            position: relative;
            position: absolute;
            top: 20px;
            left:100px;
            .publicIcon {
                height: 40px;
                width: 40px;
                border: 1px solid #ccc;
                display: inline-block;
                text-align: center;
                font-size: 16px;
                z-index: 100;
            }
            input {
                border: 1px solid #ccc;
                height: 40px;
                width: 150px;
                text-align: center;
            }
            .on {
                position: absolute;
                top: 0;
                left: 0px;
            }
            .plus {
                position: absolute;
                top: 0;
                right: 0px;
            }
        }
    }
    .songzhi{
        height:100px;
        width: 100%;
        margin: 20px 0px;
        box-sizing: border-box;
        font-size: 24px;
        line-height: 100px;
        position: relative;
        i{
            margin-left: 30px;
        }
        em{
            position: absolute;
            top:35px;
            left:80px;
            color: #fc5a5a;
        }
        img{
            height:30px;
            width: 24px;
            position: absolute;
            right:20px;
            top:40px;
        }
    }
    .yunfei{
        height:60px;
        width: 100%;
        font-size: 28px;
        em{
            margin-right: 30px;
        }
    }
    .tishi{
        height:60px;
        width: 100%;
        line-height: 60px;
        font-size:28px;
        margin-bottom: 20px;
        em{
            margin-right: 30px;
        }
    }
    .shouhou{
        height:40px;
        width: 750px;
        background-color: #F9F9F9;
        padding:20px 0px;
        margin-left: -20px;
        font-size: 24px;
        img{
            height:30px;
            width: 30px;
            margin-left: 30px;
            display: inline-block;
        }
    }
    .pingjia{
        width: 750px;
        margin-top: 20px;
        height:200px;
        background-color: #fff;
        padding:20px 0px;
        box-sizing: border-box;
        margin-left: -20px;
        margin-bottom: 20px;
        em{
            height:90px;
            font-size: 28px;
            margin-left: 30px;
            color: #333;
            line-height: 90px;
            display: block;
        }
        p{
            height:68px;
            line-height: 68px;
            width: 750px;
            font-size: 24px;
            color: #999;
            display: block;
            padding-left: 30px;
            box-sizing: border-box;
            border-top: 2px solid #ccc;
        }

    }
}

</style>