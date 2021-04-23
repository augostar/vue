import Vue from 'vue'
import Vuex from 'vuex'

import car from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  // 共享数据
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  modules: {
    car
  }
})
