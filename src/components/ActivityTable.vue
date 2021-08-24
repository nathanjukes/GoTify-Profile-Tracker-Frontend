<template>
    <div id="activity-table">
      <div class="space-y-4 pt-5" v-for="a in activities" :key="a.id">
        <article class="overflow-hidden rounded-lg shadow-lg">
        <a href="#">
        <img alt="Placeholder" class="block h-auto w-full" :src="a.track.imageUrl">
        </a>
        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 class="text-lg">
              <a class="no-underline hover:underline text-black" href="#">
               {{ a.track.name }} <br>{{ a.track.artist.name }}
              </a>
            </h1>
            <p class="text-grey-darker text-sm">
              {{ a.time }}
            </p>
        </header>
        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
            <a class="flex items-center no-underline hover:underline text-black" href="#">
              <img alt="Placeholder" class="block rounded-full" :src="a.user.imageUrl">
              <p class="ml-2 text-sm">
                  {{ a.user.name }}
              </p>
            </a>
            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
            <span class="hidden">Link</span>
            <i class="fa fa-heart"></i>
            </a>
          </footer>
        </article>
      </div> 
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

