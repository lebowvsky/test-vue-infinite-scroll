<template>
  <div class="beer-container">
    <h2>{{ name }}</h2>
    <img :src="image" />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
});
</script>
<style lang="scss" scoped>
.beer-container {
  height: 200px;
  width: 500px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  background-color: rgb(225, 246, 225);
  border-radius: 8px;
  margin: 10px;

  h2 {
    width: 50%;
  }

  img {
    flex: 1;
    object-fit: contain;
  }
}
</style>
