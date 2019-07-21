<template>
  <section class="auth-page bg-white h-screen">
    <div class="flex flex-wrap h-screen items-center">
      <!-- <form class="max-w-xs mt-auto mx-auto p-6 w-full" method="post" name="validation" role="form" @submit.prevent="login(user)"> -->
      <form class="max-w-xs mt-auto mx-auto p-6 w-full" method="post" name="validation" role="form">
        <div class="mb-8 text-center">
          <img src="../../../assets/logo.png" width="140" alt="Stone Paper Scissor Logo">
        </div>

        <div class="my-5 relative">
          <label class="block font-bold letter-spacing-05 mb-1 ml-1 text-grey-darker text-grey-darkest text-xs uppercase" for="ohrid">
            Email Id
          </label>
          <input
            id="ohrid"
            v-model="user.username"
            class="
              appearance-none
              bg-grey-lighter
              block
              border
              focus:bg-white
              focus:border-grey-light
              focus:outline-none
              leading-tight
              px-4
              py-2
              rounded
              text-grey-darker
              w-full
            "
            type="tel"
            placeholder="user@email.com"
          >
          <button
            v-if="$store.state.device.biometricAvailable"
            class="absolute fa-fingerprint fas p-2 pin-b pin-r px-3 text text-grey-darker text-xl"
            @click.prevent="biometricLogin"
          />
        </div>

        <div class="my-5">
          <label class="block font-bold letter-spacing-05 mb-1 ml-1 text-grey-darker text-grey-darkest text-xs uppercase" for="password">
            Password
          </label>
          <input
            id="password"
            v-model="user.password"
            class="
              appearance-none
              bg-grey-lighter
              block
              border
              focus:bg-white
              focus:border-grey-light
              focus:outline-none
              leading-tight
              px-4
              py-2
              rounded
              text-grey-darker
              w-full
            "
            type="password"
          >
        </div>

        <!-- <button
          :class="{ 'loading': request.key === 'login' && request.inProgress }"
          :disabled="request.key === 'login' && request.inProgress"
          class="bg-brand-color button font-bold hover:bg-red-light leading-normal letter-spacing-1 mb-12 mt-2 py-3 rounded text-white uppercase w-full"
        >
          Sign In
          <ring-loader />
        </button> -->
        <button
          class="bg-brand-color button font-bold hover:bg-red-light leading-normal letter-spacing-1 mb-12 mt-2 py-3 rounded text-white uppercase w-full"
        >
          Sign In
          <ring-loader />
        </button>
      </form>
      <div class="mb-3 mt-auto mx-auto w-full">
        <p class="py-3 w-4/5 text-center rounded text-grey text-sm flex justify-center align-center mx-auto">
          Version: {{ version }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Login',
  // components: {
  //   NumericInput: () => import('@/components/numeric-input.vue'),
  // },
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapGetters(['request', 'version']),
  },
  methods: {
    ...mapActions(['login', 'biometricLogin']),
  },
};
</script>

<style lang="scss" src="@/styles/mobile/auth.scss" />
