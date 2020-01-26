import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppingCartItems: [],
    totalPrice: 0
  },
  getters: {
    getShoppingCartItems: state => {
      return state.shoppingCartItems;
    },
    getTotoalPrice: state => {
      let totalPrice = 0;
      for(let el of state.shoppingCartItems) {
        totalPrice += el.count * el.price;
      }
      return totalPrice;
    }
  },
  mutations: {
    addShoppingCartItem: (state, item) => {
      for(let el of state.shoppingCartItems) {
        if(el.id === item.id) {
          el.count += item.count;
          return;
        }
      }

      state.shoppingCartItems.push(item);
    },
    deleteShoppingCartItems: (state, id) => {
      const index = state.shoppingCartItems.find(el => el.id === id);
      state.shoppingCartItems.splice(index, 1);
    },
    // updateShoppingCartItemCount: (state, newCount) => {
    //   state.shoppingCartItems.findIndex(el => el.id)
    // }
  },
  actions: {
    addShoppingCartItem: ({ commit }, item) => {
      commit('addShoppingCartItem', item);
    },
    deleteShoppingCartItems: ({ commit }, id) => {
      commit('deleteShoppingCartItems', id);
    }
  },
  modules: {

  }
});
