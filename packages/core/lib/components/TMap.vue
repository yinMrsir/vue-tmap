<script setup>
import { ref, watch } from "vue";
import { lazyTMapApiLoaderInstance } from "../services/injectedTMapApiInstance";
import CONST from "../utils/constant";

defineOptions({
  name: "TMap",
});
const emit = defineEmits([CONST.INIT]);
const props = defineProps({
  zoom: {
    type: Number,
    default: 12,
  },
  lngLat: {
    type: Array,
    default: () => [116.40769, 39.89945],
  },
  drag: {
    type: Boolean,
    default: true,
  },
});

const mapRef = ref(null);
const _loadPromise = lazyTMapApiLoaderInstance.load();

let map = null;
// 创建地图
createMap();
function createMap() {
  _loadPromise.then(() => {
    map = new window.T.Map(mapRef.value);
    map.centerAndZoom(new window.T.LngLat(...props.lngLat), props.zoom);
    emit(CONST.INIT, map);
    setDrag(props.drag);
  });
}

// 设置缩放
watch(
  () => props.zoom,
  (newZoom) => {
    map && map.setZoom(newZoom);
  },
);

watch(
  () => props.drag,
  (newDrag) => setDrag(newDrag),
);

// 设置拖拽
function setDrag(newDrag) {
  if (newDrag) {
    map && map.enableDrag();
  } else {
    map && map.disableDrag();
  }
}
</script>

<template>
  <div class="vue-t-map-container">
    <div class="vue-t-map" ref="mapRef"></div>
    <slot></slot>
  </div>
</template>

<style>
.vue-t-map-container {
  height: 100%;
  width: 100%;
  .vue-t-map {
    height: 100%;
    width: 100%;
  }
}
</style>
