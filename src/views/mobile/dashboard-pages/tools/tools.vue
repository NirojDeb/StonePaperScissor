<template>
  <section class="dashboard-tools-page bg-white h-min-screen py-2">
    <h1 class="leading-loose letter-spacing-05 mx-6 text-2xl text-black text-bold">
      Popular tools
    </h1>

    <!-- <h1 class="border-b border-grey-lighter leading-loose letter-spacing-05 mb-3
    mx-6 text-2xl text-black text-bold">
      Popular toools
    </h1> -->

    <div class="search-cont px-5 mb-6">
      <input
        :value="toolsFilter"
        type="text"
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
          px-4
          leading-tight
          focus:outline-none
          focus:bg-white
          focus:border-grey-light
        "
        placeholder="Filter tools"
        autocomplete="off"
        autocorrect="off"
        @input="toolsFilter = $event.target.value"
      >
    </div>

    <!-- <h2 class="leading-loose letter-spacing-05 mx-6 text-xl text-black text-bold">
      Popular toools
    </h2> -->
    <!-- <div class="mx-6">
      <a
        v-for="(tool, index) in popularTools"
        :key="index + tool.name"
        :href="tool.url"
        class="no-underline block flex items-center leading-normal pt-3 py-2
        text-lg border-b border-grey-lighter text-genpact-blue"
        target="_blank"
      >
        {{ tool.name }}
        <i class="fas fa-external-link-alt ml-1 text-xs relative" style="top: -1px;" />
      </a>
    </div> -->

    <div v-for="(tool, index) in popularTools" :key="index + tool.name"
    class="relative mx-6 ml-5 footer-nav-item-cont menu-list-item no-submenu">
      <span class="absolute flex full-height items-center justify-start w-10">
        <img
          :src="tool.image || `/img/icons/genpace.png`"
          :alt="tool.name"
          :style="{ width: tool.name === 'HelpMate' ? '47%' : '',
          width: tool.name === 'Gnome' ? '52%' : '' }"
          :class="{ 'ml-1' : tool.name === 'HelpMate' || tool.name === 'Gnome' }"
          class="category-img"
        >
      </span>
      <a
        v-in-app-links
        :href="tool.url"
        :class="{ 'border-b' : index !== popularTools.length - 1}"
        class="no-underline ml-10 block flex items-center leading-normal
        pt-3 py-2 text-lg border-grey-lighter text-grey-darkest justify-between"
        target="_blank"
      >
        {{ tool.name }}
        <i class="fas fa-external-link-alt ml-1 text-xs relative" style="top: -1px;" />
      </a>
    </div>
  </section>
</template>

<script>
import popularToolsArr from '@/data/popular-tools';
import inAppLinks from '@/directives/inapp-browser-links';

const sortedToolsArr = popularToolsArr.sort((a, b) => {
  if (a.name < b.name) { return -1; }
  if (a.name > b.name) { return 1; }
  return 0;
});

export default {
  name: 'Tools',
  directives: {
    'in-app-links': inAppLinks,
  },
  data() {
    return {
      toolsFilter: '',
    };
  },
  computed: {
    popularTools() {
      // return sortedToolsArr.filter(tool =>
      // tool.name.toLowerCase().includes(this.toolsFilter.toLowerCase()));
    },
  },
};
</script>

<style lang="scss">
.dashboard-tools-page .category-img {
  width: 65%;
}
</style>
