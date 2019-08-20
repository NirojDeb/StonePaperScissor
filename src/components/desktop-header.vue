<template>
  <header class="light" :data-open-state="openState">
    <!-- <input id="menu-open-toggle" ref="menu-open-toggle" v-model="menuOpened" class="menu-open-toggle" type="checkbox"> -->
    <nav
      class="header-navigation-cont z-10 headroom flex items-center justify-center"
      role="navigation"
      @scroll="handleScroll"
    >
      <!-- <div v-if="showBack" class="back-cont fixed pin-x pin-t z-10">
        <button
          class="back-btn px-3 py-3 text-blue flex items-center leading-normal"
          @click.prevent="$router.back()"
        >
          <i class="fa-chevron-left fas text-xl mr-1" />
          <span>Account</span>
        </button>
      </div> -->

      <h4 v-if="showBack" class="text-grey-darkest letter-spacing-05 capitalize">
        {{ $route.meta.title || '' }}
      </h4>

      <ul
        v-if="!showBack"
        :class="{ 'filters-opened' : filtersOpend, 'menu-opened' : menuOpened, 'non-search-page-active' : nonSearchPageActive }"
        class="nav-bar-cont"
      >
        <li class="nav-menu-icon">
          <label class="nav-menu-icon-label main-menu-toggle" for="menu-open-toggle" aria-hidden="true">
            <span class="nav-menu-icon-bread nav-menu-icon-bread-top">
              <span class="nav-menu-icon-bread-crust nav-menu-icon-bread-crust-top" />
            </span>
            <span class="nav-menu-icon-bread nav-menu-icon-bread-bottom">
              <span class="nav-menu-icon-bread-crust nav-menu-icon-bread-crust-bottom" />
            </span>
          </label>
        </li>
        <li class="nav-logo-item main-logo-cont">
          <router-link :to="{ name: 'Dashboard.Articles', query: { nav: 'feed' } }" class="menu-logo-link">
            Stone Paper Scissor
          </router-link>
        </li>
        <li class="nav-menu-icon nav-menu-search p-6 pin-r">
          <label
            class="absolute search-btn h-full pin-abs-center text-grey text-lg w-full"
            for="menu-open-toggle"
            aria-hidden="true"
            @click="openSearch"
          />
        </li>
      </ul>

      <div v-if="!showBack" class="nav-list-cont footer">
        <transition name="search-close-fade">
          <div v-if="searchOpened" class="relative footer-nav-item-cont menu-list-item search-cont no-submenu">
            <search-input
              id="article-search-input"
              :text="$store.state.search.query"
              :autofocus="true"
              :autofocus-time="500"
              :with-search-button="true"
              :loading="request.key === 'fetchSearchResults' && request.inProgress"
              placeholder="Search articles"
              class="mt-4 mb-5"
              @inputChange="searchQueryChange"
              @inputUpdate="searchQueryUpdated"
            />

            <div
              v-for="article in $store.state.search.results"
              :key="article.ID"
              class="bg-white border mt-2 overflow-hidden pb-2 pointer px-4 py-1 relative rounded-lg mb-3"
            >
              <router-link
                :to="`/dashboard/article/${article.Id}`"
                class="no-underline block leading-normal py-2 pb-0 text-left"
                @click.native="menuOpened = false"
              >
                <p class="text-grey-darkest mb-2 serif">
                  {{ article.Title }}
                </p>
                <p class="text-sm text-grey-darker mb-1">
                  {{ article.Modified | dateFormat }} : <span class="text-grey-darkest">{{ article.SortStory | trim(130) }}</span>
                </p>
              </router-link>
            </div>
          </div>
        </transition>

        <div
          v-for="(category, index) in categories"
          v-show="!searchOpened"
          :key="category.slug"
          class="relative footer-nav-item-cont menu-list-item no-submenu"
        >
          <span class="absolute flex full-height items-center justify-start w-12">
            <img :src="category.image" :alt="category.name" class="category-img">
          </span>
          <router-link
            :to="{ name: 'Dashboard.Articles', query: { category: category.slug }}"
            :class="{ 'border-b' : index !== categories.length - 1}"
            class="no-underline ml-12 block flex items-center leading-normal pt-3 py-2 text-lg border-grey-lighter text-grey-darkest justify-between"
            @click.native="menuOpened = false"
          >
            {{ category.name }}
            <button
              class="border px-2 py-1 relative rounded text-sm flex justify-center items-center"
              :class="[category.selected ? 'bg-brand-color text-white border-red-light' : 'text-grey-dark' ]"
              @click.prevent.stop="followCategory(category)"
            >
              {{ category.selected ? 'Unfollow' : 'Follow' }}
              <i class="fas text-xs ml-1" :class="[category.selected ? 'fa-minus' : 'fa-plus' ]" />
            </button>
          </router-link>
        </div>
      </div>

      <!-- <transition v-if="!showBack" name="nav-scroll-anim">
        <div v-show="hideNavScroll" class="absolute pin-b pin-x mt-1 sliding-links-cont text-center flex">
          <router-link
            ref="editor-pick-link"
            :to="{ name: 'Dashboard.Articles', query: {}}"
            replace
            class="font-semibold pb-3 text-sm flex-1 px-2 mx-1 whitespace-no-wrap no-underline text-grey-dark"
          >
            Editor's pick
          </router-link>
          <router-link
            ref="feed-link"
            :to="{ name: 'Dashboard.Articles', query: { nav: 'feed' }}"
            replace
            class="font-semibold pb-3 text-sm flex-1 px-2 mx-1 whitespace-no-wrap no-underline text-grey-dark"
          >
            My Feed
          </router-link>
          <span id="slide-line" ref="sliderUnderline" class="absolute pin-b" />
        </div>
      </transition> -->
    </nav>
  </header>
</template>

<script>
import debounce from 'lodash.debounce';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'DesktopHeader',
  props: {
    showBack: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      searchQuery: '',
      menuOpened: false,
      searchOpened: false,
      nonSearchPageActive: true,
      filtersOpend: false,
      limitPosition: 350,
      scrolled: false,
      lastPosition: 0,
    };
  },
  computed: {
    ...mapGetters(['categories', 'request']),
    hideNavScroll() {
      if (this.$route.name === 'Dashboard.Articles') {
        this.$emit('hideNavScroll', !this.$route.query.category);
        return !this.$route.query.category;
      }
      return false;
    },
    openState() {
      this.$nextTick(() => {
        if (this.menuOpened) {
          document.body.style.overflow = 'hidden';
          document.body.style.height = `${window.innerHeight}px`;
        } else {
          document.body.style.overflow = '';
          document.body.style.height = '';
          // TODO: REMOVE THIS LINE
          // eslint-disable-next-line
          this.searchOpened = false;
        }
      });
      return this.menuOpened;
    },
  },
  watch: {
    $route() {
      this.moveNav();
    },
  },
  mounted() {
    this.moveNav();
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    ...mapActions(['addCategoryPreferences', 'deleteCategoryPreferences', 'fetchSearchResults']),
    handleScroll() {
      if (!this.menuOpened && this.hideNavScroll) {
        if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
          this.scrolled = true;
        }
        if (this.lastPosition > window.scrollY) {
          this.scrolled = false;
        }
        this.lastPosition = window.scrollY;
      }
    },
    moveNav() {
      if (this.$route.name === 'Dashboard.Articles') {
        this.$nextTick(() => {
          const ref = this.$refs[!this.$route.query.nav ? 'editor-pick-link' : 'feed-link'];
          const target = ref ? ref.$el : '';
          if (target != '') {
            const width = target.scrollWidth;
            const posLeft = target.offsetLeft;
            const slider = this.$refs.sliderUnderline;
            slider.style.width = `${width}px`;
            slider.style.left = `${posLeft}px`;
          }
        });
      }
    },
    followCategory(cat) {
      const category = { ...cat };
      // category.selected = true;
      if (category.selected) this.deleteCategoryPreferences(category);
      else this.addCategoryPreferences(category);
      this.$root.$emit('categoryFollowEvent');
    },
    openSearch() {
      this.searchOpened = true;
    },
    // eslint-disable-next-line
    searchQueryUpdated: debounce(function (val) {
      this.fetchSearchResults(val);
    }, 300),
    searchQueryChange() {
      // console.log(val);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-close-fade-enter-active {
  animation: fade 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}
// .search-close-fade-leave-active {
//   animation: fade 0.1s ease-out reverse;
// }
</style>
