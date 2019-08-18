<template>
  <section
    :data-route-name="routeName"
    class="dashboard-root-container"
    :class="{ 'full-view': $route.name === 'Dashboard.Article.Detail', ' h-screen' : $route.name === 'Dashboard.Search', 'header-colapsed' : !hideNavScroll }"
  >
    <transition name="fade">
      <Header v-if="$route.meta.showHeader" :show-back="$route.meta.showBack || false" @hideNavScroll="hideNavScrollFunc" />
    </transition>
    <transition v-if="renderReady" name="fade">
      <keep-alive>
        <router-view class="view main-cont" :class="{ 'mt-12 pt-3' : $route.meta.showHeader && $route.meta.showBack }" />
      </keep-alive>
    </transition>
    <footer class="bottom-nav light pin-b pin-x flex fixed z-10">
      <router-link
        :to="{ name: 'Dashboard.Articles', query: cachedQuery}"
        class="no-underline flex-1 justify-center flex items-center text-xs flex-col leading-loose"
        :class="{ 'router-link-active' : $route.name === 'Dashboard.Article.Detail' }"
      >
        <i class="fas fa-newspaper text-lg mt-2" />
        Products
      </router-link>
      <router-link to="/dashboard/experiences" class="no-underline flex-1 justify-center flex items-center text-xs flex-col leading-loose">
        <i class="fas fa-search text-lg mt-2" />
        Experiences
      </router-link>
      <router-link to="/dashboard/planet" class="no-underline flex-1 justify-center flex items-center text-xs flex-col leading-loose">
        <i class="fas fa-globe text-lg mt-2" />
        Planet
      </router-link>
      <router-link to="/dashboard/rewards" class="no-underline flex-1 justify-center flex items-center text-xs flex-col leading-loose">
        <i class="fas fa-award text-lg mt-2" />
        Rewards
      </router-link>
      <router-link
        to="/dashboard/account"
        :class="{ 'router-link-active' : $route.name === 'Dashboard.Volunteering' || $route.name === 'Dashboard.Approvals' }"
        class="no-underline flex-1 justify-center flex items-center text-xs flex-col leading-loose"
      >
        <i class="fas fa-user text-lg mt-2" />
        Profile
      </router-link>
    </footer>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'DashboardRoot',
  components: {
    Header: () => import('@/components/header.vue'),
  },
  data() {
    return {
      hideNavScroll: false,
      cachedQuery: {},
      renderReady: false,
    };
  },
  computed: {
    ...mapGetters(['viewScrollPos']),
    routeName() {
      if (this.$route.meta.saveScrollPos && this.viewScrollPos[this.$route.name]) {
        // eslint-disable-next-line
        setTimeout(() => {
          window.scrollTo(this.viewScrollPos[this.$route.name].x, this.viewScrollPos[this.$route.name].y);
        }, 0);
      }
      return this.$route.name;
    },
  },
  watch: {
    $route(to, from) {
      if (from.name === 'Dashboard.Articles' && to.name !== from.name) this.cachedQuery = from.query;
    },
  },
  async beforeMount() {
    console.log('dashboard');
    if (this.$route.name === 'DashboardRootPage') this.$router.replace({ name: 'Dashboard.Articles' });
    // await this.fetchUserPreferences();
    this.renderReady = true;
  },
  methods: {
    ...mapActions(['fetchUserPreferences']),
    hideNavScrollFunc(e) {
      this.hideNavScroll = e;
    },
  },
};
</script>

<style lang="scss">
@import '../../../styles/common/_variables.scss';

.dashboard-root-container {
  background: $pale-white;
  padding: 0 0 48px 0;
  min-height: 100vh;
  // padding-top: constant(safe-area-inset-top);
  // padding-top: env(safe-area-inset-top);
}

.bottom-nav {
  text-rendering: optimizeLegibility;
  direction: ltr;
  text-align: left;
  margin: 0;
  height: 48px;
  max-height: 48px;
  background: rgba(0, 0, 0, .8);
  user-select: none;
  backdrop-filter: saturate(180%) blur(20px);

  a {
    color: #fff;
  }

  &.light {
    background: $white_90;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);

    a {
      color: #8795a1;

      &.router-link-active {
        color: rgb(53, 170, 53);
      }
    }
  }
}

.ios .bottom-nav {
  &.light {
    background: $white_85;
  }
}
</style>
