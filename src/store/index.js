import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    planets: [],
  },
  getters: {
    planets: state => {
      return state.planets;
    },
  },
  actions: {
    async getPlanets({ commit }) {
      const result = await Vue.axios.get('https://swapi.co/api/planets');

      commit('SAVE_PLANETS', result.data.results);
    },
  },
  mutations: {
    SAVE_PLANETS: (state, planets) => {
      state.planets = planets;
    },
  },
});
