import axios from 'axios';

const getters = {
  getPlanets: state => state.planets,
};

const actions = {
  async fetchPlanets({ commit }) {
    const result = await axios.get('https://swapi.co/api/planets');

    commit('SAVE_PLANETS', result.data.results);
  },
};

const mutations = {
  SAVE_PLANETS: (state, planets) => {
    state.planets = planets;
  },
};

const state = {
  planets: [],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
