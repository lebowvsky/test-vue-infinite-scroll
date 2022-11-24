<template>
  <div class="beer-container">
    <div class="bc-text-wrapper">
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
    </div>
    <img :src="image" />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});
</script>
<style lang="scss" scoped>
.beer-container {
  height: auto;
  width: 500px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  background-color: rgb(225, 246, 225);
  border-radius: 8px;
  margin: 10px;

  .bc-text-wrapper {
    width: 50%;
  }

  img {
    align-self: center;
    max-height: 200px;
    flex: 1;
    object-fit: contain;
  }
}
</style>
