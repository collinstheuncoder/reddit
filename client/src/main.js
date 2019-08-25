import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import apolloProvider from './provider';

import '@/assets/css/tailwind.css';

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
