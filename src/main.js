import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from "vue-lazyload"
import "./common/css/reset.css"
import "./common/css/fonts.css"
import 'swiper/dist/css/swiper.css'


router.beforeEach((to,from,naxt)=>{
  document.title=to.meta.title
  naxt();
})


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

Vue.use(VueLazyload, {
  preload: 1.3,
  error: "./assets/error.jfif",
  loading: "./assets/loading.gif",
  attempt: 1
})

