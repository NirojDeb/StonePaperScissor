<template>
	<section class="bg-grey-lighter w-full min-h-screen">
		<Head />
		<section @click="closeRightMenu()">
			<div class="flex md:flex-row flex-col md:justify-end justify-center my-8 sm:mx-16 mx-6">
        <div class="md:w-1/2 w-full mb-3 md:mb-0 flex items-center">
          <button
            @click="sortBy = !sortBy"
            class="rounded border border-grey bg-white flex focus:outline-none font-bold items-center justify-between pl-3 px-2 text-grey-darker text-sm mr-2 md:w-1/2 w-full relative"
			:class="{ 'bg-blue-700 text-white': sortBy }"
          >
            <p class="pt-px ">
              Sort By: <span class="mr-5 font-bold text-base">{{ sortByDefault }}</span>
            </p>
            <div class="border-grey border-l flex h-8 items-center">
              <img src="../assets/dropdown.svg" class="h-2 ml-2" :class="{ 'rotate-180': sortBy }" />
            </div>
            <div v-show="sortBy" class="absolute bg-white border flex flex-col left-0 mt-10 rounded-b-lg text-left top-0 w-full z-10">
              <p @click="sortByDefault = 'File Type'" class="py-2 pl-3 hover:bg-blue-700 hover:text-gray-100">
                File Type
              </p>
              <p @click="sortByDefault = 'File Name (A-Z)'" class="py-2 pl-3 hover:bg-blue-700 hover:text-gray-100">
                File Name (A-Z)
              </p>
              <p @click="sortByDefault = 'Date Uploaded'" class="py-2 pl-3 rounded-b-lg hover:bg-blue-700 hover:text-gray-100">
                Date Uploaded
              </p>
            </div>
          </button>
          <button
            @click="sortBy = !sortBy"
           class="rounded border border-grey bg-white flex focus:outline-none font-bold items-center justify-between pl-3 px-2 ml-2 text-grey-darker text-sm md:w-1/2 w-full"
            :class="{ 'bg-blue-700 text-white': sortBy }"
          >
            <p class="pt-px ">
              Filter By: <span class="mr-5 font-medium">{{ sortByDefault }}</span>
            </p>
            <div class="border-grey border-l flex h-8 items-center">
              <img src="../assets/dropdown.svg" class="h-2 ml-2" :class="{ 'rotate-180': sortBy }" />
            </div>
          </button>
			</div>
          <div class="border border-grey bg-white flex items-center md:ml-5 rounded px-2 relative text-lg md:w-1/2 w-full">
        <button class="focus:outline-none mr-3 pt-1">
          <img src="../assets/search-bar.svg" >
        </button>
        <input id="search-file" placeholder="Search files or User" class="focus:outline-none placeholder-black w-full bg-white text-grey-darker ">
      </div>
        </div>
        <section class="px-4 text-justify flex flex-wrap justify-around">
          <div v-for="article in articles" :key="article.id" class="lg:w-1/4 sm:w-2/5 w-4/5 cursor-pointer mx-2 mb-6 relative border-2 rounded border-grey shadow-md overflow-hidden card-height bg-white"> 
          
          <div class="h-32 w-full rounded-t-lg">
					<img class="h-32 w-full mx-auto block relative" src="@/assets/products/1.png">
          <p class="bg-grey-dark text-grey-lighter px-2 py-1 rounded rounded-r-none top-0 right-0 mt-5 text-xs absolute">{{$date(article.date).format('MMM DD')}}</p>
          </div>
          <h1 class="text-lg font-bold p-2 border-t border-b border-grey-light font-serif">
            {{article.title}}
          </h1>
          <p v-html="article.description" class="text-sm p-2 mb-12 break-words card-desc-height">
          </p>
          <div class="h-10 text-xs absolute bg-white bottom-0 rounded-b-lg flex w-full items-center border-t border-grey-light justify-between px-3">
            <!-- <div class="flex items-center w-2/3">
              <p class="mx-4 text-green">
                <i class="fa-thumbs-up far text-sm"></i>
                like
              </p>
              <p class="text-green">
                <i class="fa-share-alt fa text-sm"></i>
                share
              </p>
            </div> -->
            <!-- <p class="w-1/3 text-green-light">
            <i class="fa-eye far text-sm"></i>
              {{article.views}}
            </p> -->
            <router-link :to="{ name: 'FullBlogPage', params: {id:article.id}}" class="px-3 py-1 gradient rounded border border-grey-dark text-white">Read More</router-link> <p class="font-semibold text-sm text-grey-darker font-sans">By <span class="">{{article.author}}</span></p>
          </div> 
          </div>
        </section>
        <section>
          <div class="gradient py-2 px-16 flex items-center border-t border-grey-dark">
            <p class="text-sm mx-auto text-white font-thin">&copy; Copyright 2020, Stone Paper Scissors. All Rights Reserved</p>
          </div>
        </section>
		</section>
	</section>
</template>

<script>
import dayjs from 'dayjs';
import Head from './mobile/campaigns/head.vue';
import allarticles from './all-articles/articles.json';

export default {
  name: 'BlogPage',
  components: { Head },
  data() {
    return {
      sortBy: false,
      sortByDefault: 'Default',
      articles: allarticles,
    };
  },
  methods: {

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
.card-height {
  max-height: 330px;
}

.card-desc-height {
  max-height: 90px;
}
</style>
