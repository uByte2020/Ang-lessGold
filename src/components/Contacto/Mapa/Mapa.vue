<template>
  <div>
    <button @click="drawMarkers">Draw Markers</button>
    <button @click="drawDirection">Draw Direction</button>
    <button @click="clearMap">Clear Map</button>
    <GmapMap
      :center="center"
      :zoom="17"
      map-type-id="terrain"
      style="width: 900px; height: 500px; margin: 2% auto"
    >
      <GmapMarler
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
      <gmap-polygon :paths="paths"> </gmap-polygon>
    </GmapMap>
  </div>
</template>

<script>
const home = { lat: 39.02834934173182, lng: -8.975129809635439 };
const work = { lat: 53.464144, lng: -2.249828 };
export default {
  name: "googleMap",
  data() {
    return {
      markers: [],
      center: home,
      paths:[]
    };
  },
  methods: {
    drawMarkers() {
      this.markers = [
        {
          position: home,
        },
        {
          position: work,
        },
      ];
    },
    drawDirection() {
        this.paths= [home, work]
    },
    clearMap() {
        this.paths=[]
    },
  },
};
</script>

<style scoped>
</style>