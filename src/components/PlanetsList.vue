<template>
  <div class="main-list">
    <ul>
      <li v-for="planetObj in getPlanets" v-bind:key="planetObj.name">
        <Planet :planet="planetObj" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Planet from './PlanetComponent.vue';

export default {
  components: {
    Planet,
  },
  methods: {
    ...mapActions(['fetchPlanets']),
  },
  computed: mapGetters(['getPlanets']),
  created() {
    this.fetchPlanets();
  },
};
</script>
