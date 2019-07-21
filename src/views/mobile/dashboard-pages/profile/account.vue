<template>
  <section class="dashboard-accounts-page pb-2">

    <div class="bg-white text-center py-8 pb-10">
      <h1 class="bg-grey flex h-16 items-center justify-center
      leading-normal mx-auto rounded-full text-3xl text-white w-16">
        {{ userInitials }}
      </h1>
      <p class="text-2xl mt-3 capitalize">
        {{ user.fullName | lowercase }}
      </p>
      <p class="leading-normal text-grey-darker text-sm">
        {{ user.login }}
      </p>
    </div>

    <h2 class="font-normal letter-spacing-05 mx-5 my-3 text-xs uppercase">
      Account
    </h2>
    <div class="pr-6 bg-white">
      <div v-for="(nav, index) in accountNavArr" :key="nav.slug" class="relative">
        <span v-if="nav.slug !== 'financials' && nav.slug !== 'documents'"
        class="absolute full-height w-12">
          <i :class="nav.icon" class="relative text-grey-darker text-base pin-abs-center" />
        </span>
        <router-link
          v-if="nav.slug !== 'financials' && nav.slug !== 'documents'"
          :to="nav.route"
          :class="{ 'border-b' : index !== accountNavArr.length - 1}"
          class="no-underline ml-12 block flex items-center leading-normal pt-3 py-2
          text-lg border-grey-lighter text-grey-darkest justify-between"
        >
          {{ nav.name }}
          <i class="fa-chevron-right fas relative text-base text-grey-darker" style="top: -1px;" />
        </router-link>
      </div>
    </div>

    <h2 class="font-normal letter-spacing-05 mx-5 my-3 text-xs uppercase">
      Important links
    </h2>
    <div class="pr-6 bg-white">
      <div v-for="(nav, index) in navArr" :key="nav.slug" class="relative">
        <span v-if="nav.slug !== 'account' && nav.slug !== 'my-team'" class="absolute full-height w-12">
          <i :class="nav.icon" class="relative text-grey-darker text-base pin-abs-center" />
        </span>
        <router-link
          v-if="nav.slug !== 'account' && nav.slug !== 'my-team'"
          :to="nav.route"
          :class="{ 'border-b' : index !== navArr.length - 1}"
          class="no-underline ml-12 block flex items-center leading-normal pt-3 py-2 text-lg border-grey-lighter text-grey-darkest justify-between"
        >
          {{ nav.name }}
          <i class="fa-chevron-right fas relative text-base text-grey-darker" style="top: -1px;" />
        </router-link>
      </div>
    </div>

    <div class="pr-6 bg-white mt-8">
      <div class="relative">
        <span class="absolute full-height w-12">
          <i class="fas fa-sign-out-alt relative text-red text-base pin-abs-center" />
        </span>
        <button
          class="no-underline ml-12 block flex items-center leading-normal pt-3 py-2 text-lg border-grey-lighter text-red justify-between"
          @click.prevent="logout"
        >
          Logout
        </button>
      </div>
    </div>

    <p class="font-normal letter-spacing-05 mx-5 my-3 mt-6 text-sm text-grey">
      Version: {{ version }}
    </p>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import navigation from '@/data/navigation';

const navArr = navigation.filter(
  obj => obj.slug === 'account' || obj.slug === 'my-team' || obj.slug === 'approvals' || obj.slug === 'volunteering',
);

const accountNavObj = navigation.find(obj => obj.slug === 'account') || {};
const accountNavArr = accountNavObj.subNav || [];

export default {
  name: 'Tools',
  data() {
    return {
      navArr,
      accountNavArr,
    };
  },
  computed: {
    ...mapGetters(['user', 'version']),
    userInitials() {
      const getInitials = (name) => {
        const parts = name.split(' ');
        let initials = '';
        for (let i = 0; i < parts.length; i += 1) {
          if (parts[i].length > 0 && parts[i] !== '') {
            initials += parts[i][0];
          }
        }
        return initials || '';
      };

      return getInitials(this.user.fullName).slice(0, 2);
    },
  },
  methods: {
    ...mapActions(['logout']),
  },
};
</script>

<style>

</style>
