<template>
    <body class="bg-gray-100 font-sans leading-normal tracking-normal">
      <div class="flex flex-col">
        <div>
          <div class="relative h-64 m-8 overflow-hidden rounded-lg bg-secondary">
  <div class="absolute z-30 flex w-full h-full">
    <div class="relative z-30 w-5/6 px-12 py-8 md:py-10 md:w-1/2">
      <h2 class="text-4xl">GoTify Profile Tracker</h2>
      <h2 class="text-2xl py-2">A Spotify profile activity tracker written in Go!<br>Part of Nathan Jukes' GoTify package</h2>
         <a class="navbar-brand" href="https://github.com/nathanjukes">
                <img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png" style="width:90px;height:50px" class="embed-responsive-21by9">
            </a>
    </div>
    <div class="absolute top-0 right-0 flex w-full h-full">
      <div class="w-1/3 h-full bg-secondary"></div>
      <div class="relative w-1/3">
        <svg
          fill="currentColor"
          viewBox="0 0 100 100"
          class="absolute inset-y-0 z-20 h-full text-secondary"
        >
          <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
        </svg>
        <svg
          fill="currentColor"
          viewBox="0 0 100 100"
          class="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50"
        >
          <polygon points="0,0 100,0 50,100 0,100"></polygon>
        </svg>
      </div>
    </div>
  </div>
  <div class="absolute top-0 right-0 block w-9/12 h-full">
    <img
      alt="album"
      class="object-cover min-w-full h-full"
      src="https://wallpapercave.com/wp/wp6233356.jpg"
    />
  </div>
</div>
        </div>
        <div>
      <div class="flex flex-row w-full">
        <div class="flex flex-col w-full">
          <div class="text-center">random</div>
        </div>
        <div class="flex flex-col w-full space-y-6">
          <div>
            <user-search-form @search:user="getUserActivity" @get:activities="getActivities"/>
          </div>
          <div>
            <activity-table :activities="activities" />
          </div>
        </div>
        <div class="flex flex-col w-full">
          <div class="text-center">random</div>
        </div>
      </div>
       </div>
    </div>
   </body>
</template>

<script>
import ActivityTable from './ActivityTable.vue'
import UserSearchForm from './UserSearchForm.vue'

export default {
    name: 'home',
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
          const response = await fetch(endpoint.concat(user.user_spotify_uri), {
            method: 'POST',
          })
          const data = await response.json()
          this.activities = data
          this.range = this.activities.length
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
<style scoped>
  @font-face {
    font-family: 'Hina Mincho';
    src: url('https://fonts.googleapis.com/css2?family=Hina+Mincho&display=swap');
  }
</style>