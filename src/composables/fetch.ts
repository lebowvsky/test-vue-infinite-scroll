import { ref, onMounted, onUnmounted } from "vue";
import axios from "axios";

export const useFetchBeers = () => {
  const beers = ref<any[]>([]);
  const pageIndex = ref<number>(1);
  const show = ref<boolean>(true);

  const getBeers = async (offset: number) => {
    show.value = false;
    const result = await axios.get(`beers?page=${offset}&per_page=8`);
    beers.value.push(...result.data);
    console.log(beers.value);
    show.value = true;
  };

  const loadMorePost = async () => {
    show.value = false;
    await getBeers(pageIndex.value);
    pageIndex.value++;
    show.value = true;
  };

  onMounted(async () => {
    await getBeers(pageIndex.value);
    pageIndex.value++;
  });

  const getNextBeer = () => {
    window.onscroll = () => {
      const bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        console.log(pageIndex.value);
        loadMorePost();
      }
    };
  };

  onMounted(() => getNextBeer());

  return { beers, show, loadMorePost, pageIndex };
};
