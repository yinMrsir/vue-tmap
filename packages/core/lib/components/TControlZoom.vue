<script setup>
import { inject, watch } from "vue";
import { lazyTMapApiLoaderInstance } from "../services/injectedTMapApiInstance";
import { ControlZoomPotion } from "../utils/constant.js";

defineOptions({
  name: "TControlZoom",
});

const props = defineProps({
  options: {
    type: Object,
    default: () => ({}),
  },
  position: {
    type: String,
    default: "LT",
  },
});

const map = inject("map");
let control = undefined;
async function init() {
  await lazyTMapApiLoaderInstance.load();
  //创建缩放平移控件对象
  control = new T.Control.Zoom(props.options);
  const _P = ControlZoomPotion[props.position];
  control.setPosition(window[_P]);
  //添加缩放平移控件
  map.value.addControl(control);
}

watch(map, (newValue) => {
  newValue && init();
});

watch(
  () => props.position,
  (newValue) => {
    control && control.setPosition(window[ControlZoomPotion[newValue]]);
  },
);
</script>

<template>
  <template />
</template>
