<script setup>
import { ref, watch, provide } from "vue";
import { lazyTMapApiLoaderInstance } from "../services/injectedTMapApiInstance";
import CONST from "../utils/constant";

defineOptions({
  name: "TMap",
});

const emit = defineEmits([CONST.INIT]);
const props = defineProps({
  options: {
    type: Object,
    default: () => ({}),
  },
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
  mapStyle: {
    type: [String, undefined],
    default: undefined,
  },
});

const mapRef = ref(null);

let map = ref();
provide("map", map);
// 创建地图
createMap();
async function createMap() {
  await lazyTMapApiLoaderInstance.load();
  map.value = new window.T.Map(mapRef.value, props.options);
  map.value.centerAndZoom(new window.T.LngLat(...props.lngLat), props.zoom);
  emit(CONST.INIT, map.value);
  setDrag(props.drag);
  setMapStyle(props.mapStyle);
}

// 设置缩放
watch(
  () => props.zoom,
  (newZoom) => {
    map.value && map.value.setZoom(newZoom);
  },
);

// 设置拖拽
watch(
  () => props.drag,
  (newDrag) => setDrag(newDrag),
);

function setDrag(newDrag) {
  if (newDrag) {
    map.value && map.value.enableDrag();
  } else {
    map.value && map.value.disableDrag();
  }
}

watch(
  () => props.mapStyle,
  (newMapStyle) => {
    map.value && setMapStyle(newMapStyle);
  },
);
function setMapStyle(newMapStyle) {
  if (newMapStyle) {
    map.value && map.value.setStyle(newMapStyle);
  } else {
    map.value.removeStyle();
  }
}
</script>

<template>
  <div class="vue-t-map-container" style="width: 100%; height: 100%">
    <div class="vue-t-map" ref="mapRef" style="width: 100%; height: 100%"></div>
    <slot></slot>
  </div>
</template>
