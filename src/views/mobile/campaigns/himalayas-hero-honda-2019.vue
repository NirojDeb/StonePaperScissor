<template>
  <section class="auth-page with-pattern">
    <h1>Stone Paper Scissors</h1>
    <div class="flex flex-wrap h-screen items-center">
      <section class="flex">
        <div class="h-1/5 flex flex-col border border-gray-600 border-r-0">
        dgf
        </div>
        <div class="h-2/5 flex flex-col border border-gray-600 border-r-0">
        fdggf
        </div>
        <div class="h-3/5 flex flex-col border border-gray-600 border-r-0">
        </div>
        <div class="h-4/5 flex flex-col border border-gray-600 border-r-0">
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HimalayasHeroHondaPage',
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
