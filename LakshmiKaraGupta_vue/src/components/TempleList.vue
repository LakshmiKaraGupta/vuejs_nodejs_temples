<template>
  <div class="temple-details">
    <div v-if="temple">
      <h3>{{ temple.Temple }}</h3>
      <p><b>Location:</b> {{ temple.Location }}</p>
      <p><b>Period/Year of Construction:</b> {{ temple.Period }}</p>
      <p><b>Primary Diety:</b> {{ temple.Deity }}</p>
      <p><b>Architectural Style:</b> {{ temple.Architecture }}</p>
      <p><b>Historical Significance:</b> {{ temple.Significance }}</p>
    </div>
    <p v-else>Select a temple to view details.</p>
  </div>
</template>

<style scoped>
.temple-details {
  font-family: 'Garamond', serif; /* Consistent font with devotional theme */
  color: #4a4e69; /* Spiritual color */
}

h3 {
  margin-bottom: 1rem;
  color: #9a8c98; /* Harmonious with the theme */
}

p {
  color: #4a4e69; /* Spiritual color */
  line-height: 1.6; /* Enhanced readability */
}

b {
  color: #c9ada7; /* A soft, warm color for emphasis */
}

.temple-details p b {
  font-weight: bold;
}

.temple-details p {
  margin-bottom: 0.5rem;
}
</style>

<script>
export default {
  name: 'TempleList',
  props: {
    temple: {
      type: Object,
      default: null,
    },
  },
};
</script>
