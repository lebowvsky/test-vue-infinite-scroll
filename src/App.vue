<template>
  <h1>Youpi</h1>
  <BeerListComponent />
</template>

<script lang="ts" setup>
import BeerListComponent from "./components/BeerListComponent.vue";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
