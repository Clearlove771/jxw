import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from "vue-lazyload"
import store from "./store"
import "./common/css/reset.css"
import "./common/css/fonts.css"
import 'swiper/dist/css/swiper.css'
import 'lib-flexible'
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
Vue.use(VueLazyload, {
  preload: 1.3,
  attempt: 1,
})