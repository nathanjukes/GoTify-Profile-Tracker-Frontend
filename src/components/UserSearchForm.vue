<template>
    <div id="user-search-form">
        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="user.user_id"/>
            <label>user id</label>
            <button>Search</button>
        </form>
        <form @submit.prevent="handleRefresh">
            <button>Refresh</button>
        </form>
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
                this.user.user_spotify_uri = "spotify:user:".concat(id.substring(id.indexOf("user") + 5, id.indexOf("?")))
                this.$emit('search:user', this.user)
            } catch(error) {
                console.error(error)
            }
        },
        handleRefresh() {
            this.$emit('search:user', this.user)
        },
    },
}
</script>

<style scoped>
</style>