let lazyTMapApiLoaderInstance = null;
import TMapAPILoader from './lazyTMapApiLoader';
export const initTMapApiLoader = (config) => {
  if (lazyTMapApiLoaderInstance) return;
  if (!lazyTMapApiLoaderInstance) lazyTMapApiLoaderInstance = new TMapAPILoader(config);
  return lazyTMapApiLoaderInstance.load();
};
export { lazyTMapApiLoaderInstance };
