<template>
  <section class="auth-page with-pattern">
    <h1>Desktop login</h1>
    <div class="flex flex-wrap h-screen items-center">
      des
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
