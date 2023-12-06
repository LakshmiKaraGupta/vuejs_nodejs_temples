<template>
  <div class="temple-tiles">
    <div
      v-for="temple in temples"
      :key="temple._id"
      class="temple-tile"
      @click="handleSelect(temple)"
    >
      <img :src="temple.image_url" alt="Temple Image" class="temple-image" />
      <h4>{{ temple.Temple }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PickList',
  props: {
    temples: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleSelect(temple) {
      this.$emit('select', temple);
    },
  },
};
</script>

<style scoped>
.temple-tiles {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  color: #4a4e69; /* Muted, spiritual color */
}

.temple-tile {
  flex: 0 0 auto;
  width: 120px;
  height: auto;
  background-color: #f2e9e4; /* Soft, warm background */
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.temple-tile:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  background-color: #c9ada7; /* Darker, warm hover color */
}

.temple-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
  margin-bottom: 0.5rem;
}

h4 {
  font-family: 'Garamond', serif; /* Elegant, spiritual font */
  color: #9a8c98; /* Harmonious with the theme */
}
</style>
