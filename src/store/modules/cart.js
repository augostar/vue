// 购物车 vuex storef
export default {
  namespaced: true,
  state: () => ({
    total: 0.0,
    number: 0,
    goods: []

  }),
  mutations: {
    increment (state, parameter) {
      // console.log(parameter)
    },
    decrement (state, parameter) {
      state[parameter.name] -= parameter.n
      if (state[parameter.name] < 0) {
        state[parameter.name] = 0
      }
      if (parameter.name === 'total') {
        state[parameter.name].toFixed(2)
      }
    },
    addGood (state, parameter) {
      state.number++
      state.total = Math.round((state.total + parameter.price) * 100) / 100
      var isexist = true
      state.goods.forEach((item, index) => {
        if (item.id === parameter.id) {
          state.goods[index].num += 1
          isexist = false
        }
      })
      if (isexist) {
        parameter.num = 1
        state.goods.push(parameter)
      }
    },
    addGoodNum (state, parameter) {
      state.goods.forEach((item, index) => {
        if (item.id === parameter.item.id) {
          state.goods[index].num = parameter.num
          state.total = Math.round((state.total + parameter.item.price) * 100) / 100
          state.number += 1
        }
      })
    },
    deletecar (state) {
      state.total = 0
      state.number = 0
      state.goods = []
    }
  },
  actions: {
    // 异步函数
    add () {

    }
  },
  getters: {
    gettotal (state) {
      return state.total
    },
    getnumber (state) {
      return state.number
    },
    getgoods: state => {
      return state.goods
    }
  }
}
