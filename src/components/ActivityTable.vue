<template>
    <div id="activity-table">
        <h1>Hello</h1>
        <table>
      <thead>
        <tr>
          <th>username</th>
          <th>track</th>
          <th>artist</th>
          <th>album</th>
          <th>time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in activities" :key="a.id">
            <td><a :href="a.user.user_url">{{ a.user.name }}</a></td>
            <td><a :href="a.track_url">{{ a.track.name }}</a></td>
            <td><a :href="a.track.artist_url">{{ a.track.artist.name }}</a></td>
            <td><a :href="a.track.album.album_url">{{ a.track.album.name }}</a></td>
            <td>{{ a.time }}</td>
        </tr>
      </tbody>
    </table>
    </div>
</template>

<script>
export default {
    name: 'activity-table',
    props: {
        activities: Array,
    },
    methods: {
        getSpotifyUrl() {

        }
    }
}
</script>

<style scoped>

</style>>

