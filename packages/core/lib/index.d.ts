export declare interface VueTMap {
  install: (app: App) => void;
  initTMapApiLoader: (config: { key: string }) => void;
}

export declare class TMap {
  constructor();
  setZoom(size: number): void;
  enableDrag(): void;
  disableDrag(): void;
  centerAndZoom(lnglat: LngLat, zoom: Number): void;
  isDrag(): boolean;
}

declare class LngLat {
  constructor(lng: number, lat: number);
  /**
   * 获取地理坐标点的经度。
   */
  getLng(): number;
  /**
   * 获取地理坐标点的纬度。
   */
  getLat(): number;
  /**
   * 计算当前地理坐标点与给定坐标点之间的距离。
   * @param other 经纬度坐标
   */
  distanceTo(other: LngLat): number;
  /**
   * 判断坐标点是否相等，当且仅当两点的经度和纬度均相等时返回true。
   * @param other 地理坐标
   */
  equals(other: LngLat): number;
}

declare global {
  interface Window {
    T: {
      Map(container: String | HTMLElement): TMap;
      LngLat(lnglat: any): LngLat;
    };
  }
}
