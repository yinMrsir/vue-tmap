# vue-tmap

基于天地图封装适用于Vue3.x的地图组件库

## 安装

```shell
pnpm install vue-tmap
```

## main.ts引入使用
```ts
import VueTMap from 'vue-tmap'

const app = createApp(App)

VueTMap.initTMapApiLoader({
  key: '你的key',
  plugins: ["carTrack"],
})
app.use(VueTMap)
```

## 示例
```vue
<script setup lang="ts">
  import { ref } from "vue";

  const map = ref(null);

  const carTrack = ref();
  const data = [
    { lng: 116.26802, lat: 39.90623 },
    { lng: 116.28896, lat: 39.90622 },
    { lng: 116.30421, lat: 39.90625 },
    { lng: 116.3155, lat: 39.90618 },
    { lng: 116.3313, lat: 39.90611 },
    { lng: 116.34643, lat: 39.90583 },
    { lng: 116.35033, lat: 39.90582 },
  ];
  const carTrack1 = ref();
  const data1 = [
    { lng: 116.31955, lat: 39.931 },
    { lng: 116.33292, lat: 39.93697 },
    { lng: 116.34936, lat: 39.93913 },
    { lng: 116.36172, lat: 39.93923 },
    { lng: 116.36651, lat: 39.93924 },
    { lng: 116.36673, lat: 39.93235 },
    { lng: 116.36755, lat: 39.91449 },
  ];
</script>

<template>
  <div style="width: 50vw; height: 50vh">
    <t-map
        :drag="true"
        :zoom="12"
        :lngLat="[116.40769, 39.89945]"
        @init="(e) => (map = e)"
    >
      <t-control-zoom />
      <t-control-scale />
      <t-control-overview-map />
      <t-car-track
          @init="(e) => (carTrack = e)"
          :data="data"
          :options="{
          interval: 5,
          speed: 20,
          dynamicLine: false,
        }"
      />
      <t-car-track @init="(e) => (carTrack1 = e)" :data="data1" />
      <t-marker />
    </t-map>
  </div>
  <input type="button" id="button1" @click="map.zoomIn()" value="放大地图" />
  <input type="button" id="button2" @click="map.zoomOut()" value="缩小地图" />
  <div>
    <input type="button" value="开始" @click="carTrack.start()" />
    <input type="button" value="暂停" @click="carTrack.pause()" />
    <input type="button" value="结束" @click="carTrack.stop()" />
  </div>
  <div>
    <input type="button" value="1 开始" @click="carTrack1.start()" />
    <input type="button" value="1 暂停" @click="carTrack1.pause()" />
    <input type="button" value="1 结束" @click="carTrack1.stop()" />
  </div>
  <div style="width: 50vw; height: 50vh">
    <t-map :zoom="5" :drag="false" />
  </div>
</template>
```
## 参数
| 参数 | 说明 | 类型 | 默认值                  |
| --- | --- | --- |----------------------|
| lngLat | 地图中心点经纬度 | [number, number] | [116.40769, 39.89945] |
| zoom | 地图缩放级别 | number | 12                   |
| drag | 是否可拖拽 | boolean | true                 |

## 组件
| 组件                     | 说明                |
|------------------------|-------------------|
| t-map                  | 地图组件              |
| t-control-zoom         | 缩放组件              |
| t-control-scale        | 比例尺组件             |
| t-control-overview-map | 鹰眼组件              |
| t-car-track            | 车辆轨迹组件，使用时需要先引入插件 |
| t-marker               | 标记点组件             |

## 预览示例

下载项目到本地：`git clone https://github.com/yinMrsir/vue-tmap`

```sh
cd vue-tmap
pnpm install
pnpm dev
```

