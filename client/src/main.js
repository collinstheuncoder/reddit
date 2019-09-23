import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import App from './components/App.vue';

import router from './router';
import store from './store';
import apolloProvider from './provider';

import '@/assets/css/tailwind.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
