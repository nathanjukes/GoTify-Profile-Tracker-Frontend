<template>
    <div id="activity-table">
      <div v-if="activities.length == 0" class="text-center mt-5 text-lg">No songs currently tracked for this user, please come back later or refresh whenever! 😄</div>
      <div class="space-y-4 pt-5" v-for="a in activities.slice(0, getRange())" :key="a.id">
        <article class="overflow-hidden rounded-lg shadow-lg bg-third">
          <div class="flex flex-row" style="color:white; font-weight:400;">
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
                            <a class="no-underline hover:underline text-black line-clamp-2 overflow-ellipsis" style="color:white; font-weight:600;" :href="a.track_url">
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
            <i class="fas fa-share-square float-right mt-9 m-7" style="font-size:24px"></i> </a>
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
            },
            getRange : function() {
              let len = 0
              if (this.activities.length > 50) {
                len = 50
              }
              
              let prevID = ""

              for (const a of this.activities.slice(0, len)) {
                if (prevID == "") {
                  prevID = a.user_id
                }
                else {
                  if (prevID != a.user_id) {
                    return len
                  }
                }
              }
              return this.activities.length
            }
        }
}
</script>

<style scoped>
 
</style>

