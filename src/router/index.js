import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/home/home.vue"
import Catalogue from "../components/catalogue/catalogue.vue"
import Clear from "../components/clear/clear.vue"
import Shopping from "../components/shopping/shopping.vue"
import Mine from "../components/mine/mine.vue"
import Details from "../components/clear/detail-modules/details.vue"
import zhaohui from "../components/mine/components/zhaohui.vue"
import zhuce from "../components/mine/components/zhuce.vue"
import me from "../components/mine/components/me.vue"
import userlogin from "../components/mine/components/userlogin.vue"
Vue.use(VueRouter);
let routes=[
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        component:Home,
        meta:{
            title:"首页"
            // title:"酒仙网-白酒、红酒、洋酒、保健酒、黄酒、酒具官方旗舰店"
        }
    },
    {
        path:"/catalogue",
        component:Catalogue,
         meta:{
             title:"选酒"
         }
    },
    {
        path:"/clear",
        component:Clear,
        meta:{
            title:'裸价清仓'
        }
    },
    {
        path:"/details",
        component:Details,
        meta:{
            title:'裸价清仓'
            // title:"劲爆清仓"
        }
    },
    {
        path:"/shopping",
        component:Shopping,
        meta:{
            title:'购物车'
            // title:"购物车"   
        }
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            title :"我的酒仙"
         }
    },
    {
        path:"/zhaohui",
        component:zhaohui,
        meta:{
            title:"我的酒仙"
        }
    },
    {
        path:"/zhuce",
        component:zhuce,
        meta:{
            title:"我的酒仙"
        }
    },
    {
        path:"/me",
        component:me,
        meta:{
            title:"个人中心"
        }
    },
    {
        path:"/userlogin",
        component:userlogin,
        meta:{
            title:"用户登录"
        }
    },
    {
        path:"*",
        redirect:"/home"
    }
]
let router =new VueRouter({
    routes
})

export default router;

