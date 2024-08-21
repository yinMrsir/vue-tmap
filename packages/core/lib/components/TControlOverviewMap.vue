<script setup>
import { inject } from "vue";
import { lazyTMapApiLoaderInstance } from "../services/injectedTMapApiInstance";
import { ControlZoomPotion } from "../utils/constant.js";

defineOptions({
  name: "TControlOverviewMap",
});

const props = defineProps({
  options: {
    type: Object,
    default: () => {
      return {
        anchor: window[ControlZoomPotion.RT],
        isOpen: true,
        size: [150, 150],
      };
    },
  },
  position: {
    type: [String, undefined],
    default: undefined,
  },
  borderColor: {
    type: [String, undefined],
    default: undefined,
  },
  rectBorderColor: {
    type: [String, undefined],
    default: undefined,
  },
  rectBackColor: {
    type: [String, undefined],
    default: undefined,
  },
});

const map = inject("map");
let miniMap = undefined;
async function init() {
  await lazyTMapApiLoaderInstance.load();
  const _P = props.position && ControlZoomPotion[props.position];
  const config = _P
    ? {
        ...props.options,
        size: new window.T.Point(...props.options.size),
        anchor: window[_P],
      }
    : {
        ...props.options,
        size: new window.T.Point(...props.options.size),
      };
  miniMap = new T.Control.OverviewMap(config);
  map.value.addControl(miniMap);
  props.borderColor && miniMap.setBorderColor(props.borderColor);
  props.rectBorderColor && miniMap.setRectBorderColor(props.rectBorderColor);
  props.rectBackColor && miniMap.setRectBackColor(props.rectBackColor);
}

watch(map, (newValue) => {
  newValue && init();
});

watch(
  () => props.borderColor,
  (newValue) => {
    newValue && miniMap && miniMap.setBorderColor(newValue);
  },
);
watch(
  () => props.rectBorderColor,
  (newValue) => {
    newValue && miniMap && miniMap.setRectBorderColor(newValue);
  },
);
watch(
  () => props.rectBackColor,
  (newValue) => {
    newValue && miniMap && miniMap.setRectBackColor(newValue);
  },
);
</script>

<template>
  <template />
</template>
