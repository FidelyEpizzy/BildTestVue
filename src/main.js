import Vue from "vue";
import App from "./App.vue";
import VueRouter from'vue-router';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {routes} from './routes'; 
// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTh,faBars,faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// vuelidate
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
library.add(faTh,faBars,faHamburger)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter ({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
  
}).$mount("#app");
