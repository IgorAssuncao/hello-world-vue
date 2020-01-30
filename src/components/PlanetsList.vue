<template>
  <div class="main-list">
    <ul>
      <li v-for="planetObj in planets" v-bind:key="planetObj.name">
        <Planet :planet="planetObj" />
      </li>
    </ul>
    <button @click="getAllPlanets">Get All Planets</button>
  </div>
</template>

<script>
import axios from 'axios';
import Planet from './PlanetComponent.vue';

const url = 'https://swapi.co/api/planets';

async function getAllPlanets() {
  return axios.get(url);
}

export default {
  data() {
    return {
      planets: [],
    };
  },
  methods: {
    async getAllPlanets() {
      const response = await getAllPlanets();

      this.planets = response.data.results;

      return this.planets;
    },
  },
  components: {
    Planet,
  },
};
</script>
