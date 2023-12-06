<template>
  <div id="app">
    <h1>Heritage Temples of India</h1>
    <PickList :temples="temples" @select="selectTemple" />
    <TempleList :temple="selectedTemple" />
  </div>
</template>

<!-- Add updated styles to App.vue -->
<style scoped>
#app {
  font-family: "Roboto", sans-serif;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f1f3f5;
}

h1 {
  margin-bottom: 2rem;
  color: #4a4a4a;
}
</style>



<script>
import PickList from './components/PickList.vue';
import TempleList from './components/TempleList.vue';

export default {
  name: 'App',
  components: {
    PickList,
    TempleList,
  },
  data() {
    return {
      temples: [],
      selectedTemple: null,
    };
  },
  async created() {
    await this.fetchTemples();
  },
  methods: {
    async fetchTemples() {
      const apiUrl = 'https://nodejs-temples.onrender.com/api';

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        this.temples = data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    selectTemple(temple) {
      this.selectedTemple = temple;
    },
  },
};
</script>
