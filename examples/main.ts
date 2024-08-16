import "./assets/main.css";
import VueTMap from "vue-tmap";
import { createApp } from "vue";
import App from "./App.vue";

VueTMap.initTMapApiLoader({
  key: "2b7cf2b51fd59203d696ed50978c32f7",
});

createApp(App).use(VueTMap).mount("#app");
