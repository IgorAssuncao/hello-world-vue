import { axios } from 'vue';

const getters = {
  planets: state => state.planets,
};

const actions = {
  async getPlanets({ commit }) {
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
