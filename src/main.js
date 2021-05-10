import Vue from 'vue';
import App from './App.vue';
import './style/main.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(ElementUI)

import router from './router';



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

