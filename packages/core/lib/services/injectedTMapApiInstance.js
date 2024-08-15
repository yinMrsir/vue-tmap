import TMapAPILoader from "./lazyTMapApiLoader";

let lazyTMapApiLoaderInstance = null;

export const initTMapApiLoader = (config) => {
  if (lazyTMapApiLoaderInstance) return;
  if (!lazyTMapApiLoaderInstance) {
    lazyTMapApiLoaderInstance = new TMapAPILoader(config);
  }
  lazyTMapApiLoaderInstance.load();
};
export { lazyTMapApiLoaderInstance };
