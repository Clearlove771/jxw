import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/home/home.vue"
import Catalogue from "../components/catalogue/catalogue.vue"
import Clear from "../components/clear/clear.vue"
import Shopping from "../components/shopping/shopping.vue"
import Mine from "../components/mine/mine.vue"
Vue.use(VueRouter);
let routes=[
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:"/catalogue",
        component:Catalogue,
    },
    {
        path:"/clear",
        component:Clear
    },
    {
        path:"/shopping",
        component:Shopping,
    },
    {
        path:"/mine",
        component:Mine,
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