<template>
  <section class="auth-page with-pattern">
    <h1>Mobile login</h1>
    <div class="flex flex-wrap h-screen items-center">
      desi
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TravelPangotPage',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapGetters(['request']),
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
