<template>
  <section class="dashboard-root-container flex view flex-col">
    <Header />
    <Sidebar />
    <transition name="fade" mode="out-in">
      <router-view class="view main-cont w-full p-8 flex-1" />
    </transition>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DashboardRoot',
  components: {
    Header: () => import('@/components/desktop/header.vue'),
    Sidebar: () => import('@/components/desktop/sidebar.vue'),
  },
  computed: {
    ...mapGetters(['articles']),
  },
  beforeMount() {
    if (this.$route.name === 'DashboardRootPage') this.$router.replace({ name: 'Dashboard.Articles' });
  },
};
</script>

<style>
  .main-cont {
    background: url('/img/backgrounds/bg_genpact_pattern_light.png') center center;
    background-size: contain;
  }
  .dashboard-root-container {
    min-height: 100vh;
    padding: 50px 0 0 250px;
  }
</style>
