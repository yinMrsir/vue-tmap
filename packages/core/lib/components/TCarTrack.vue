<script setup>
import { inject, watch, ref } from "vue";
import { lazyTMapApiLoaderInstance } from "../services/injectedTMapApiInstance";
import CONST from "../utils/constant";

defineOptions({
  name: "TCarTrack",
});

const emit = defineEmits([CONST.INIT]);
const props = defineProps({
  options: {
    type: Object,
    default: () => {
      return {
        interval: 5,
        speed: 10,
        dynamicLine: true,
        polylinestyle: { color: "#2C64A7", weight: 5, opacity: 0.9 },
      };
    },
  },
  data: {
    type: Array,
    default: () => [],
  },
});

const map = inject("map");
let carTrack;
async function init() {
  await lazyTMapApiLoaderInstance.load();
  carTrack = new window.T.CarTrack(map.value, {
    ...props.options,
    Datas: props.data.map((obj) => {
      return new T.LngLat(obj.lng, obj.lat);
    }),
  });
  emit(CONST.INIT, carTrack);
}

watch(map, (newValue) => {
  newValue && init();
});
</script>

<template>
  <template />
</template>
