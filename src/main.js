import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'; //引入rem自适应
import router from '@/config/RouterConfig.js' //引入路由配置
import store from '@/store/store.js' //引入路由配置
import '@/assets/css/reset.css' //引入重置浏览器样式

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')