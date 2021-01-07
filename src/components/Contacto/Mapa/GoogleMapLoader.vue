<template>
  <div><GoogleMapLoader
  :mapConfig="mapConfig"
  apiKey="AIzaSyBFnGBsR9pnrCQDowJ8l6pgIgqsy4dPvjo"
>
  <template slot-scope="{ google, map }">
    <GoogleMapMarker
      v-for="marker in markers"
      :key="marker.id"
      :marker="marker"
      :google="google"
      :map="map"
    />
    <GoogleMapLine
      v-for="line in lines"
      :key="line.id"
      :path.sync="line.path"
      :google="google"
      :map="map"
    />
  </template>
</GoogleMapLoader>
  </div>
</template>

<script>
// import GoogleMapsApiLoader from "google-maps-api-loader";
import { mapSettings } from '@/constants/mapSettings';
import GoogleMapLoader from './GoogleMapMarker';
import GoogleMapMarker from './GoogleMapMarker'
import GoogleMapLine from './GoogleMapLine'

export default {
  components: {
    GoogleMapLoader,
    GoogleMapMarker,
    GoogleMapLine
  },

  data () {
    return {
      markers: [
      { id: 'a', position: { lat: 3, lng: 101 } },
      { id: 'b', position: { lat: 5, lng: 99 } },
      { id: 'c', position: { lat: 6, lng: 97 } },
      ],
      lines: [
        { id: '1', path: [{ lat: 3, lng: 101 }, { lat: 5, lng: 99 }] },
        { id: '2', path: [{ lat: 5, lng: 99 }, { lat: 6, lng: 97 }] }
      ],
    }
  },

  computed: {
    mapConfig () {
      return {
        ...mapSettings,
        center: this.mapCenter
      }
    },

    mapCenter () {
      return this.markers[1].position
    }
  },
  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    })
    this.google = googleMapApi
    this.initializeMap()
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig)
    }
  }
};
</script>