import { ref, onMounted, onUnmounted } from "vue";
import axios from "axios";

export const useFetchBeers = () => {
  const beers = ref<any[]>([]);
  const pageIndex = ref<number>(1);

  const getBeers = async (offset: number) => {
    const result = await axios.get(`beers?page=${offset}&per_page=10`);
    beers.value.push(...result.data);
  };

  const loadMorePost = () => {
    getBeers(pageIndex.value);
    pageIndex.value++;
  };

  onMounted(() => {
    getBeers(pageIndex.value);
    pageIndex.value++;
  });
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  const beerList = ref();

  const handleScroll = () => {
    if (beerList.value.getBoundingClientRect().bottom < window.innerHeight) {
      loadMorePost();
    }
  };

  return { beers, beerList };
};
