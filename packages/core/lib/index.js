// 初始化接口
import { initTMapApiLoader } from "./services/injectedTMapApiInstance.js";
// 组建
import TMap from "./components/TMap.vue";
import TControlZoom from "./components/TControlZoom.vue";
import TControlScale from "./components/TControlScale.vue";
import TControlOverviewMap from "./components/TControlOverviewMap.vue";

let components = [TMap, TControlZoom, TControlScale, TControlOverviewMap];

let VueTMap = {
  initTMapApiLoader,
};

VueTMap.install = (Vue) => {
  components.map((_component) => {
    Vue.component(_component.name, _component);
  });
};

export default VueTMap;
export { lazyTMapApiLoaderInstance } from "./services/injectedTMapApiInstance.js";
