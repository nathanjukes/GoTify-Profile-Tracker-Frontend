<template>
    <div id="activity-table">
      <div class="space-y-4 pt-5" v-for="a in activities" :key="a.id">
        <article class="overflow-hidden rounded-lg shadow-lg">
          <div class="flex flex-row">
              <div>
                <a href="#">
                <img alt="Placeholder" class="object-cover h-48 w-48" :src="a.track.imageUrl">
                </a>
              </div>
              <div class="flex-1">
                <div class="flex flex-col">
                    <div>
                      <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                          <h1 class="text-md">
                            <a class="no-underline hover:underline text-black line-clamp-2 overflow-ellipsis" href="#">
                            {{ a.track.name }} 
                            </a>
                            <br>{{ a.track.artist.name }}
                          </h1>
                          <p class="text-grey-darker text-sm">
                            {{ moment(a.time).format("DD/MM/YYYY HH:mm") }}
                          </p>
                      </header>
                    </div>
                    <div>
                      <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                          <a class="flex items-center no-underline hover:underline text-black" href="#">
                            <img class="inline object-cover w-12 h-12 mr-2 rounded-full" :src="a.user.imageUrl">
                            <p class="text-sm">
                                {{ a.user.name }}
                            </p>
                          </a>
                          <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span class="hidden">Link</span>
                          <i class="fa fa-heart"></i>
                          </a>
                      </footer>
                    </div>
                </div>
              </div>
          </div>
        </article>
      </div> 
    </div>
</template>

<script>
import moment from "moment";

export default {
    name: 'activity-table',
    props: {
        activities: Array,
    },
    methods: {
        getSpotifyUrl() {

        },
    moment: function () {
      return moment();
      }
    }
}
</script>

<style scoped>

</style>>

