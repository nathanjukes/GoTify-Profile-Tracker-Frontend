<template>
  <div id="app">
    <h1>activities</h1>
    <user-search-form @search:user="getUserActivity"/>
    <activity-table :activities="activities" />
  </div>
</template>

<script>
import ActivityTable from './components/ActivityTable.vue'
import UserSearchForm from './components/UserSearchForm.vue'

export default {
  name: 'App',
  components: {
    ActivityTable,
    UserSearchForm
  },
  data() {
    return {
      activities: [],
    }
  },
  mounted() {
    this.getActivities()
  },
  methods: {
    async getActivities() {
      try {
          const response = await fetch(`http://localhost:8081/activity`)
          const data = await response.json()
          this.activities = data
          this.getSpotifyURLs()
      } catch (error) {
        console.error(error)
      }
    },
    async getUserActivity(user) {
      try {
          const endpoint = `http://localhost:8081/user/`
          console.log(endpoint.concat(user.user_spotify_uri))
          const response = await fetch(endpoint.concat(user.user_spotify_uri))
          const data = await response.json()
          this.activities = data
          this.getSpotifyURLs()
      } catch (error) {
        console.error(error)
      }
    },
    getSpotifyURLs() {
      for (var i = 0; i < this.activities.length; i++) {
        try{
          let trackID = this.activities[i].track_id
          let artistID = this.activities[i].track.artist_id
          let userID = this.activities[i].user_id
          let albumID = this.activities[i].track.album_id

          this.activities[i].track_url = "https://open.spotify.com/track/".concat(trackID.substring(trackID.indexOf("track") + 6))
          this.activities[i].track.artist_url = "https://open.spotify.com/artist/".concat(artistID.substring(artistID.indexOf("artist") + 7))
          this.activities[i].user.user_url = "https://open.spotify.com/user/".concat(userID.substring(userID.indexOf("user") + 5))
          this.activities[i].track.album.album_url = "https://open.spotify.com/album/".concat(albumID.substring(albumID.indexOf("album") + 6))
        } catch(error) {
          console.error(error)
        }
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
