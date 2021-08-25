<template>
    <div id="activity-table">
      <div class="space-y-4 pt-5" v-for="a in activities" :key="a.id">
        <article class="overflow-hidden rounded-lg shadow-lg">
          <div class="flex flex-row">
              <div>
                <a :href="a.track_url">
                <img alt="Placeholder" class="object-cover h-48 w-48" :src="a.track.imageUrl">
                </a>
              </div>
              <div class="flex-1">
                <div class="flex flex-col h-48 w-64">
                  <div>
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                          <h1 class="text-md">
                            <a class="no-underline hover:underline text-black line-clamp-2 overflow-ellipsis" :href="a.track_url">
                            {{ a.track.name }} 
                            </a>
                            <br>
                            <a class="no-underline hover:underline text-black line-clamp-2 overflow-ellipsis" :href="a.track.artist_url">
                              {{ a.track.artist.name }}
                            </a>
                          </h1>
                      </header>
                      </div>
                      <div class="align-bottom">
                         <footer class="flex items-center justify-between leading-none p-2 md:p-4">
            <a class="flex items-center no-underline hover:underline text-black" :href="a.user.user_url">
              <img class="inline object-cover w-12 h-12 mr-2 rounded-full" :src="a.user.imageUrl">
              <p class="text-sm">
                  {{ a.user.name }}
              </p>
            </a>
          </footer>
                      </div>
                </div> 
              </div>
                <div class="flex flex-col h-48">
                  <div class="h-1/2">
                                 <header class="flex items-center justify-between leading-tight p-1 md:p-2 mt-7">
                          <h1 class="text-md">
                            <span class="no-underline text-black">
                          {{ getHumanDate(a.time) }} </span>
                          </h1>
                      </header>
                        </div>
                        <div>
            <a class="no-underline text-grey-darker hover:text-red-dark" :href="a.track_id">
            <i class="fa fa-play-circle float-right mt-9 m-7" style="font-size:28px"></i> </a>
                        </div>
                </div>
              </div>
        </article>
      </div> 
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'activity-table',
    props: {
        activities: Array,
    },
    methods: {
            getHumanDate : function (date) {
                return moment(date).format('DD/MM/YYYY HH:mma');
            }
        }
}
</script>

<style scoped>

</style>>

