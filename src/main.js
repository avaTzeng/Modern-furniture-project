import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://modern-furniture-project.firebaseio.com/data.json';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

