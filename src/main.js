import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './api/api.js'
// 应用mintui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// element
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './font/fonts.js'
import './font/fonts.css'
// axios
import axios from 'axios'
axios.defaults.headers.post['Content-type'] = 'application/json'
Vue.prototype.$axios = axios
// Vue.use(ElementUI)
Vue.use(Mint)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
