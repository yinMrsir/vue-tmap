<script setup lang="ts">
const map = ref(null);
function init(e) {
  map.value = e;
}
</script>

<template>
  <div style="width: 50vw; height: 50vh">
    <t-map
      :drag="true"
      :zoom="12"
      :lngLat="[116.40769, 39.89945]"
      @init="init"
    />
  </div>
  <input type="button" id="button1" @click="map.zoomIn()" value="放大地图" />
  <input type="button" id="button2" @click="map.zoomOut()" value="缩小地图" />
  <div style="width: 50vw; height: 50vh">
    <t-map :zoom="5" :drag="false" />
  </div>
</template>

<style scoped></style>
