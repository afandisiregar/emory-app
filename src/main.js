import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import VeeValidate from "vee-validate";
import Paginate from 'vuejs-paginate'

import './index.css'
import './assets/css/main.css';

Vue.config.productionTip = false

// eslint-disable-next-line vue/multi-word-component-names
Vue.component('paginate', Paginate)

Vue.use(VeeValidate)

// const rulesPlugin = ({ Validator }) => {
//   Validator.localize('id', id);
// };

// VeeValidate.use(rulesPlugin);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
