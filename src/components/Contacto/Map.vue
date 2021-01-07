<template>
  <div id="Map">
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="16"
      style="width: 100%; height: 700px; margin-bottom: 4%; box-shadow: 3px 2px 10px gray;"
    >
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
      center: { lat: 39.0282912, lng: -8.9770612 },
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