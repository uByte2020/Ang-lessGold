<template>
  <div id="Map">
    <gmap-map
      :center="center"
      :zoom="16"
      style="
        width: 100%;
        height: 700px;
        margin-bottom: 4%;
        box-shadow: 3px 2px 10px gray;
      "
    >
      <area shape="circle" coords="2580,,25" href="another.htm" />
      <area shape="default" />
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :title="m.title"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      >
      </gmap-marker>
    </gmap-map>
  </div>
</template>
<script>
export default {
  name: "Map",
  data() {
    return {
      center: { lat: 39.02834934173182, lng: -8.975129809635439 },
      markers: [
        {
          positiom: { lat: this.latitude, lng: this.longitude },
          title: this.title,
        },
      ],
    };
  },
  props: {
    latitude: Number,
    longitude: Number,
    title: String,
  },
};
</script>
<style scoped>
.mapa {
  box-shadow: 1px 1px 4px gray;
}
</style>