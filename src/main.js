import Vue from 'vue'
import style from './style.less'
import router from './router'
import store from './store'
import App from './App.vue'
import gsap from "gsap/all"

Vue.config.productionTip = false

new Vue({
  gsap,
  style,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
