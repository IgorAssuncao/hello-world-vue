<template>
  <div class="main-list">
    <ul>
      <li v-for="planetObj in planetsComputed()" v-bind:key="planetObj.name">
        <Planet :planet="planetObj" />
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';

import Planet from './PlanetComponent.vue';

export default {
  created() {
    this.$store.dispatch('getPlanets');
  },
  methods: {
    planetsComputed() {
      return this.$store.getters.planets;
    },
  },
  components: {
    Planet,
  },
};
</script>
