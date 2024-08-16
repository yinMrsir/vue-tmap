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
## 参数
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| lngLat | 地图中心点经纬度 | [number, number] | [116.40769, 39.89945] |
| zoom | 地图缩放级别 | number | 12 |
| drag | 是否可拖拽 | boolean | true |

## 预览示例

下载项目到本地：`git clone https://github.com/yinMrsir/vue-tmap`

```sh
cd vue-tmap
pnpm install
pnpm dev
```

