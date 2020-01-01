import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';

const dataMap = new Map();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataMap,
  },
  mutations: {
    'SET_DATA_MAP'(state, data) {
      data.forEach(el => {
        state.dataMap.set(el.category, el.products);
      });
    }
  },
  actions: {
    initData: ({ commit }) => {
      axios.get('')
        .then(response => {
          const data = response.data;
          if (data) {
            commit('SET_DATA_MAP', data);
          }
        })
        .catch(error => console.log(error));
    }
  }
  // ,
  // modules: {

  // }
});
