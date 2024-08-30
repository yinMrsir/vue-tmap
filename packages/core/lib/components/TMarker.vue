<script setup>
import { inject, watch } from "vue";
import { lazyTMapApiLoaderInstance } from "../services/injectedTMapApiInstance";

defineOptions({
  name: "TMarker",
});

const props = defineProps({
  lngLat: {
    type: Array,
    default: () => [116.40769, 39.89945],
  },
  options: {
    type: Object,
    default: () => ({}),
  },
});

const map = inject("map");
watch(map, (newValue) => {
  newValue && init();
});

let marker;
async function init() {
  await lazyTMapApiLoaderInstance.load();
  marker = new T.Marker(new T.LngLat(...props.lngLat, props.options));
  map.value.addOverLay(marker);
}

watch(
  () => props.lngLat,
  (newValue) => {
    marker && marker.setLngLat(new T.LngLat(...newValue));
  },
);
</script>

<template>
  <div />
</template>
