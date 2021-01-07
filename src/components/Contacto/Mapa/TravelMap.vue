<template>
<div>
  <GoogleMapLoader
  :mapConfig="mapConfig"
  apiKey="AIzaSyBFnGBsR9pnrCQDowJ8l6pgIgqsy4dPvjo"
>
  <template slot-scope="{ google, map }">
  	{{ map }}
  	{{ google }}
  </template>
</GoogleMapLoader>

</div>
  
</template>
<script>
import GoogleMapLoader from './GoogleMapLoader'
import { mapSettings } from '@/constants/mapSettings'

export default {
  components: {
    GoogleMapLoader
  },

  computed: {
    mapConfig () {
      return {
        ...mapSettings,
        center: { lat: 0, lng: 0 }
      }
    },
  },
}
</script>