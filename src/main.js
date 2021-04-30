import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import api from './api'
import util from './util'
import LuckDraw  from 'vue-luck-draw'


// Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(LuckDraw)
// Vue.components('LuckyWheel', LuckyWheel)
// Vue.components('LuckyGrid', LuckyGrid)
// 按需引入

// Vue.config.devtools = process.env.NODE_ENV === 'development'
Vue.prototype.$api = api
Vue.prototype.$util = util


new Vue({
  router,
  store, // 挂在到vue 实例中
  render: h => h(App),
}).$mount('#app')
