<template>
  <section class="dashboard-tools-page bg-white py-2 full-height">
    <h1 class="leading-loose letter-spacing-05 mx-6 text-xl text-black text-bold">
      Search GsocialGo
    </h1>

    <div class="search-cont relative mx-5 mb-6">
      <input
        v-model="searchQuery"
        type="search"
        class="
          appearance-none
          block
          w-full
          bg-grey-lighter
          text-grey-darker
          border
          border-grey-lighter
          rounded-lg
          py-2
          pr-8
          pl-10
          leading-tight
          focus:outline-none
          focus:bg-white
          focus:border-grey-light
        "
        placeholder="Search app"
        autocomplete="off"
        spellcheck="false"
      >
      <button class="absolute pin-y pin-l px-3 flex items-center text-grey">
        <i class="fas fa-search" />
      </button>
      <transition name="search-close-fade">
        <button v-if="searchQuery" class="absolute pin-y pin-r px-3 flex items-center
         text-grey" @click="clearSearch">
          <i class="fas fa-times-circle" />
          <ring-loader class="absolute pin-abs-center" thickness="2px" color="#606f7b"
           width="20px" height="20px" />
        </button>
      </transition>
    </div>

    <section class="results-cont mx-6">
      <h1 class="leading-loose letter-spacing-05 text-xl text-black text-bold">
        Results:
      </h1>

      <label class="block font-bold letter-spacing-05 px-5 py-3
      bg-pale-white text-grey-darker text-grey-darkest text-xs uppercase" for="password">
        Password
      </label>

      <!-- <h2 class="leading-loose letter-spacing-05 mx-6 text-xl text-black text-bold">
        Popular toools
      </h2> -->
      <div class="mx-6">
        <!-- <a
          v-for="(tool, index) in popularTools"
          :key="index + tool.name"
          :href="tool.url"
          class="no-underline block flex items-center l
          eading-normal pt-3 py-2 text-lg border-b border-grey-lighter text-blue"
          target="_blank"
        >
          {{ tool.name }}
          <i class="fas fa-external-link-alt ml-1 text-xs relative" style="top: -1px;" />
        </a> -->
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    ...mapGetters(['request']),
  },
  methods: {
    clearSearch() {
      this.searchQuery = '';
    },
  },
};
</script>

<style lang="scss">
.search-close-fade-enter-active {
  animation: fade 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.search-close-fade-leave-active {
  animation: fade 0.1s ease-out reverse;
}
</style>
