<template>
  <main id="main-wrapper" :class="rootAppClass">
    <transition mode="out-in" name="fade">
      <router-view class="view all-wrapper" />
    </transition>
    <store-router-comp v-if="nextRouteLink" :next-route="nextRouteLink" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Desktop',
  components: {
    StoreRouterComp: () => import('@/components/store-router.vue'),
  },
  computed: {
    ...mapGetters(['nextRouteLink']),
    rootAppClass() {
      const routeName = this.$store.state.route.name || '';
      if (routeName.includes('Auth.')) {
        return 'no-header';
      }
      return '';
    },
  },
};
</script>

<style lang="scss" src="@/styles/desktop/app.scss" />
