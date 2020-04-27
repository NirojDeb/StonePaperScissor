<template>
  <section class="bg-grey-lighter relative w-full min-h-screen">
    <Head />
    <div @click="closeRightMenu()" class="md:mx-auto pt-10 py-16 md:w-2/3 mx-12">
      <div class="w-full border-b border-grey-dark pb-2">
        <h1 @click="run()" class="text-blue-darker text-center">
          {{article[id].title}}
        </h1>
        <div class="border-b border-grey pb-2 pt-1 text-blue-darker text-center text-xs">
          <span>
            {{article[id].date}}
          </span>
          <div class="relative inline-block px-1">
            <a href="/dashboard/good-read/profile">
              <b class="text-brand-400">{{article[id].author}}</b>
            </a>
          </div>
        </div>
        <div v-html="article[id].description" class="break-words pt-1 text-lg whitespace-pre-line">
        <!-- {{$route.params.description}} -->
        </div>
      </div>
    </div>
    <section>
      <div class="absolute border-grey-dark border-t bottom-0 flex gradient items-center
        px-16 py-2 w-full">
        <p class="text-sm mx-auto text-white font-thin">
          &copy; Copyright 2020, Stone Paper Scissors. All Rights Reserved
        </p>
      </div>
    </section>
  </section>
</template>
<script>
import dayjs from 'dayjs';
import Head from './mobile/campaigns/head.vue';
import allarticles from './all-articles/articles.json';

export default {
  name: 'FullBlogPage',
  components: { Head },
  computed: {
    getDateFromMon(date) {
      if (date) {
        console.log(`date found is: ${date}`);
        return dayjs(date).format('dddd, MMMM D YYYY');
      }
      return date;
    },
  },
  data() {
    return {
      article: allarticles,
      id: this.$route.params.id - 1,
    };
  },
  methods: {
    run() {
      console.log(this.$route.params.id);
    },
    closeRightMenu() {
      document.getElementById('rightMenu').setAttribute('style', 'right: -250px; top:0px;');
    },
  },
};
</script>
<style>
.gradient {
  background: linear-gradient(90deg, #33d574 0%, #28b0c5 100%);
}
</style>
