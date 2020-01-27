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
    getTotalPrice: state => {
      let totalPrice = 0;
      for(let el of state.shoppingCartItems) {
        totalPrice += el.count * el.price;
      }
      return Math.floor(totalPrice * 100) / 100;
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
      const index = state.shoppingCartItems.findIndex(el => el.id === id);
      state.shoppingCartItems.splice(index, 1);
    },
    increaseShoppingCartItemCount: (state, id) => {
      const index = state.shoppingCartItems.findIndex(el => el.id === id);
      state.shoppingCartItems[index].count++;
    },
    decreaseShoppingCartItemCount: (state, id) => {
      const index = state.shoppingCartItems.findIndex(el => el.id === id);
      if(state.shoppingCartItems[index].count > 1)
        state.shoppingCartItems[index].count--;
      else {
        state.shoppingCartItems.splice(index, 1);
      }
    },
    checkOut: (state) => {
      state.shoppingCartItems = [];
    }
  },
  actions: {
    addShoppingCartItem: ({ commit }, item) => {
      commit('addShoppingCartItem', item);
    },
    deleteShoppingCartItems: ({ commit }, id) => {
      commit('deleteShoppingCartItems', id);
    },
    increaseShoppingCartItemCount: ({ commit }, id) => {
      commit('increaseShoppingCartItemCount', id);
    },
    decreaseShoppingCartItemCount: ({ commit }, id) => {
      commit('decreaseShoppingCartItemCount', id);
    },
    checkOut: ({ commit }) => {
      commit('checkOut');
    }
  },
  modules: {

  }
});
