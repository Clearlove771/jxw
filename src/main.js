import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "./common/css/reset.css"
import "./common/css/fonts.css"
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
