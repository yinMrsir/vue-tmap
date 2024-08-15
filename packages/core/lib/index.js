// 初始化接口
import { initTMapApiLoader } from "./services/injectedTMapApiInstance.js";
// 组建
import TMap from "./components/TMap.vue";

let VueTMap = {
  initTMapApiLoader,
};

VueTMap.install = (Vue) => {
  Vue.component(TMap.name, TMap);
};

export default VueTMap;
export { lazyTMapApiLoaderInstance } from "./services/injectedTMapApiInstance.js";
