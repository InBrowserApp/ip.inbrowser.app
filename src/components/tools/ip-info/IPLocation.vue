<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <OlSourceOSM />
    </ol-tile-layer>

    
  </ol-map>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Map, Layers, Sources } from "vue3-openlayers";

const OlMap = Map.OlMap;
const OlView = Map.OlView;
const OlTileLayer = Layers.OlTileLayer;
const OlSourceOSM = Sources.OlSourceOSM;

const props = defineProps<{
  location: [number, number];
}>();

const center = ref(props.location);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const rotation = ref(0);
</script>
