<template>
    <div id="user-search-form">
        <div class="p-8">
  <div class="bg-white flex items-center rounded-full shadow-xl" id="user-search-form">
    <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Spotify User URL" v-model="user.user_id">
    <div class="p-4">
      <button v-on:click="handleSubmit" class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"><i class="fas fa-search"></i></button>
      </div>
    </div>
  </div>
   <button v-on:click="handleRefresh" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded float-right">
  Refresh
</button>
    <button v-on:click="handleHome" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded float-left">
  Home
</button>
</div>
</template>

<script>
export default {
    name: "user-search-form",
    data() {
        return {
            user: {
                user_id: '',
                user_spotify_uri: ''
            },
        }
    },
    methods: {
        handleSubmit() {
                try {
                let id = this.user.user_id

                if (id.indexOf("?") != -1) {
                    this.user.user_spotify_uri = "spotify:user:".concat(id.substring(id.indexOf("user") + 5, id.indexOf("?")))
                }
                else {
                    this.user.user_spotify_uri = "spotify:user:".concat(id.substring(id.indexOf("user") + 5))
                }
                console.log(id)
                this.$emit('search:user', this.user)
            } catch(error) {
                console.error(error)
            }
        },
        handleRefresh() {
            this.$emit('search:user', this.user)
        },
        handleHome() {
            this.$emit('get:activities')
        },
    },
}
</script>

<style scoped>
</style>