import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import * as VueGoogleMaps from "vue2-google-maps";


Vue.use(BootstrapVue) 
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBFnGBsR9pnrCQDowJ8l6pgIgqsy4dPvjo",
    libraries: "places" // necessary for places input
  }
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
