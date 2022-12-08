<template>
  <h1>List</h1>
  <div class="beers-container" ref="beerList">
    <template v-for="(beer, index) in beers" :key="index">
      <BeerComponent :name="beer.name" :image="beer.image_url" :description="beer.description" />
    </template>
  </div>
</template>
<script lang="ts" async setup>
import { useFetchBeers } from "@/composables/fetch";
import { defineAsyncComponent } from "vue";
import Loading from "@/components/LoadingComponent.vue";
const BeerComponent = defineAsyncComponent({
  loader: () => import("@/components/BeerComponent.vue"),
  loadingComponent: Loading,
});
const { beers } = useFetchBeers();
</script>

<style lang="scss" scoped>
.beers-container {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.yoyo {
  height: 120px;
  margin: 10px;
  background-color: aqua;
}
</style>
