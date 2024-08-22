<script setup>
import { inject, watch } from "vue";
import { lazyTMapApiLoaderInstance } from "../services/injectedTMapApiInstance";
import { ControlZoomPotion } from "../utils/constant.js";

defineOptions({
  name: "TControlScale",
});

const props = defineProps({
  position: {
    type: String,
    default: "LB",
  },
  color: {
    type: String,
    default: "#000000",
  },
});

const map = inject("map");
let scale = undefined;
async function init() {
  await lazyTMapApiLoaderInstance.load();
  const _P = ControlZoomPotion[props.position];
  //创建缩放平移控件对象
  scale = new T.Control.Scale({ position: window[_P] });
  scale.setColor(props.color);
  //添加缩放平移控件
  map.value.addControl(scale);
}

watch(map, (newValue) => {
  newValue && init();
});

watch(
  () => props.color,
  (newValue) => {
    scale && scale.setColor(newValue);
  },
);
</script>

<template>
  <template />
</template>
