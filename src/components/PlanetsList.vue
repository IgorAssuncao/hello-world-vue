<template>
  <div class="main-list">
    <ul>
      <li v-for="planetObj in planets" v-bind:key="planetObj.name">
        <Planet :planet="planetObj" />
      </li>
    </ul>
    <button @click="planets">Get All Planets</button>
  </div>
</template>

<script>
import Planet from './PlanetComponent.vue';

export default {
  data() {
    return {
      planets: [],
    };
  },
  computed: {
    planets() {
      return this.$store.getters.filmes;
    }
  },
  components: {
    Planet,
  },
};
</script>
