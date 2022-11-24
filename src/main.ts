import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.baseURL = "https://api.punkapi.com/v2/";
createApp(App).use(VueAxios, axios).mount("#app");
