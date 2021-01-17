import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css/animate.min.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import * as VueGoogleMaps from "vue2-google-maps";
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(BootstrapVue) 
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBFnGBsR9pnrCQDowJ8l6pgIgqsy4dPvjo",
  }
});

new Vue({
  created(){
    AOS.init({duration: 1200,})
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
