<template>
  <section class="auth-page with-pattern">
    <h1>Desktop login</h1>
    <div class="flex flex-wrap h-screen items-center">
      <form class="w-4/5 ml-auto mr-auto" method="post" name="validation" role="form" @submit.prevent="login(user)">
        <div class="text-center mb-6">
          <img src="/img/logos/gsocial_go_logo_main.png" alt="Genpact Logo">
        </div>

        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="ohrid">
            OHR Id
          </label>
          <input
            id="ohrid"
            v-model="user.username"
            class="appearance-none border-2 focus:outline-none focus:shadow-outline leading-tight px-3 py-2 rounded text-grey-darker w-full"
            type="number"
            placeholder="OHR Id"
          >
        </div>

        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            id="password"
            v-model="user.password"
            class="appearance-none border-2 rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="******************"
          >
          <!-- <p class="text-red text-xs italic">Please choose a password.</p> -->
        </div>

        <button
          :class="{ 'loading': request.key === 'login' && request.inProgress }"
          :disabled="request.key === 'login' && request.inProgress"
          class="button bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded w-full h-10 mb-12"
        >
          Sign In
          <ring-loader />
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'LoginPage',
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
