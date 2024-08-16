# vue-tmap

vue3天地图，当前仍在开发中，当然这并不影响你使用天地图的所有功能。

## 安装

```shell
pnpm install vue-tmap
```

## main.ts引入使用
```ts
import VueTMap from 'vue-tmap'

const app = createApp(App)

VueTMap.initTMapApiLoader({
  key: '你的key'
})
app.use(VueTMap)
```

## 示例
```vue
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
</template>
```



## 预览示例

下载项目到本地：`git clone https://github.com/yinMrsir/vue-tmap`

```sh
cd vue-tmap
pnpm install
pnpm dev
```

