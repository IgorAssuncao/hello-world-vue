<template>
  <div class="planet">
    <h3>Name: {{ planet.name }}</h3>
    <p>Climate: {{ planet.climate }}</p>
  </div>
</template>

<script>
export default {
  name: 'Planet',
  props: {
    planet: Object,
  },
};
</script>
