import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";

import VueTMap from "vue-tmap";
VueTMap.initTMapApiLoader({
  key: "2b7cf2b51fd59203d696ed50978c32f7",
});

createApp(App).use(VueTMap).mount("#app");
