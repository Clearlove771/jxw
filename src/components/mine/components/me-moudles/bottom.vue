<template>
    <div class="bottom">
        <ul>
            <li v-for="(item,index) in list" :key="index">
              <img :src="item.img" alt="">
              <span>{{item.span}}</span>
            </li>
        </ul>
        <div class="esc" @click="esc">
             <span>退出登录</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
       return{
           list:[
               {
                   img:"https://misc.jiuxian.com/m_user/images/usercenter/order.png",
                   span:"全部订单"
               },
               {
                   img:"https://misc.jiuxian.com/m_user/images/usercenter/cart.png  ",
                   span:"购物车"
               },
               {
                   img:"https://misc.jiuxian.com/m_user/images/usercenter/unreceived-icon.png ",
                   span:"待领取"
               },
               {
                   img:"https://misc.jiuxian.com/m_user/images/usercenter/exchange.png ",
                   span:"去兑换"
               },
               {
                   img:"https://misc.jiuxian.com/m_user/images/usercenter/coupon.png",
                   span:"我的优惠券"
               },
               {
                   img:"https://misc.jiuxian.com/m_user/images/usercenter/history.png ",
                   span:"浏览历史"
               },{
                   img:"https://misc.jiuxian.com/m_user/images/usercenter/wallet.png ",
                   span:"我的钱包"
               },
               {
                   img:"https://misc.jiuxian.com/m_user/images/usercenter/collect.png ",
                   span:"我的收藏"
               },
               {
                   img:"https://misc.jiuxian.com/m_user/images/usercenter/address.png ",
                   span:"地址管理"
               },
               {
                   img:"https://misc.jiuxian.com/m_user/images/usercenter/safe.png ",
                   span:"帐户安全"
               }
           ]
       } 
    },
    methods:{
        esc(){
             window.localStorage.setItem("isLogin", "flase")
            this.$router.replace("./userlogin")
        }
    }
}
</script>
<style lang="less" scoped>
     .bottom{
         ul{
            display: flex;
            flex-wrap: wrap;
            li{
              width: 33%;
              padding: 20px;
              padding-bottom: 0px;
              box-sizing: border-box;
              text-align: center;
              span{
                display: inline-block;
                padding-top: 5px;
                font-size: 14px;
            }
            }
            
        } 
        .esc{
           width: 85%;
           line-height:30px;
           margin: 50px auto;
           background: #DE4B45;
           border-radius: 5px;
           color: #fff;
           text-align: center;
           font-size: 16px;
        }

     }
</style>