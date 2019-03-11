import Vue from "vue";
import App from "./App.vue";


//bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//router
import VueRouter from 'vue-router';
import { routes } from './routes';
// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTh, faBars, faHamburger, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// vuelidate
import Vuelidate from 'vuelidate';
// vue modal
import VModal from 'vue-js-modal';

//vue slick
import Slick from "vue-slick";

import VueResource from "vue-resource";

Vue.use(Slick)

Vue.use(VModal)
Vue.use(Vuelidate)
library.add(faTh, faBars, faHamburger, faTimesCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),

}).$mount("#app");
