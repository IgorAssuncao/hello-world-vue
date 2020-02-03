import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    planets: {}
  },
  actions: {
    START_STORE: async ({ commit }) => {
      const result = axios.get('https://swapi.co/api/planets')

      console.log(result.data)
      commit('SET_STORE', response.data.planets)
    }
  },
  mutations: {
    SET_STORE: (state, planets) => {
      state.planets = planets
    },
  },
})
