import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/home/home.vue"
import Catalogue from "../components/catalogue/catalogue.vue"
import Clear from "../components/clear/clear.vue"
import Shopping from "../components/shopping/shopping.vue"
import Mine from "../components/mine/mine.vue"
import Details from "../components/clear/detail-modules/details.vue"
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
        }
    },
    {
        path:"/catalogue",
        component:Catalogue,
        meta:{
            title :"分类"
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
        }
    },
    {
        path:"/shopping",
        component:Shopping,
        meta:{
            title:'购物车'
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
        path:"*",
        redirect:"/home"
    }
]
let router =new VueRouter({
    routes
})

export default router;

