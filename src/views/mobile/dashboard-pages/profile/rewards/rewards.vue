<template>
  <section class="dashboard-rewards-page py-2">
    <div v-if="request.key === 'getRewards' && request.inProgress" class="text-center m-10">
      <img class="mb-5 block mx-auto" src="/img/loader.gif" width="40" alt="Loader Gif">
      <p class="mx-auto leading-normal text-lg w-1/2">
        Fetching your reward details...
      </p>
    </div>

    <div v-else>
      <div class="mx-4 mt-2 mb-3 bg-white shadow rounded-lg overflow-hidden">
        <div class="bg bg-brand-color p-6 text-center text-white">
          <i class="fas fa-trophy text-xl mb-3" />
          <h1 class="text-4xl font-light">
            {{ rewards.totalPoints }}
          </h1>
          <p>
            Total cheers points
          </p>
          <a
            v-in-app-links
            href="https://cheersg5.performnet.com/biwv1auth/Shibboleth.sso/Login?entityID=http://www.okta.com/exk23u0bc6Phkn8Cv0i7"
            class="no-underline block mx-auto w-1/3 bg-white leading-normal px-4 mt-4 mb-1 py-1 rounded mt-3 text-black"
            target="_blank"
          >
            Redeem
          </a>
        </div>
      </div>

      <h1 class="leading-loose letter-spacing-05 mx-5 text-lg text-black">
        Badges earned
      </h1>
      <div class="mx-4 mb-3 bg-white shadow rounded-lg overflow-hidden">
        <!-- <h3 class="border-b border-grey-light font-normal mx-4 pt-3 py-2 text-base text-grey-darkest uppercase">
          Badges earned
        </h3> -->
        <div v-if="!rewards.earnedBadges.length" class="px-5 text-center p-8 text-base">
          No badges earned yet
        </div>
        <ul v-else class="list-reset py-1">
          <li v-for="(badge, index) in rewards.earnedBadges" :key="index + 1"
          class="flex items-center m-4">
            <i class="fa-award fas mr-2 text-xl" style="color: #FFD700;" />{{ badge }}
          </li>
        </ul>
      </div>

      <h1 class="leading-loose letter-spacing-05 mx-5 text-lg text-black">
        Cheers history
      </h1>
      <div class="mx-4 mb-3">
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div v-if="!rewards.pointsEarned.length" class="px-5 text-center p-8 text-base">
            No cheers received yet
          </div>
          <div
            v-for="(cheer, index) in rewards.pointsEarned"
            v-else
            :key="index + 2"
            :class="{ 'border-b' : index !== rewards.pointsEarned.length }"
            class="px-5 py-3 "
          >
            <!-- <p class="flex justify-between mb-1 text-lg">
              <span>{{ cheer.promotionName }}</span>
              <span class="font-bold letter-spacing-05 text-red-light text-sm">
                {{ cheer.points }} pts.</span>
            </p> -->
            <!-- <p class="leading-tight text-sm text-grey-darker">
              <span class="text-grey-darkest text-semibold">By:&nbsp;</span>
              {{ cheer.giverName }} ({{ cheer.giverOhrid }})
            </p> -->
            <!-- <p class="leading-normal text-sm text-grey-darker">
              <span class="text-grey-darkest text-semibold">
                Dated:&nbsp;</span>{{ cheer.awardDate }}
            </p> -->
            <!-- <p class="leading-normal text-sm text-grey-darker">
              <span class="text-grey-darkest text-semibold">Citation:&nbsp;</span>
              {{ cheer.citation | sanitizeText }}
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import inAppLinks from '@/directives/inapp-browser-links';

export default {
  name: 'Rewards',
  directives: {
    'in-app-links': inAppLinks,
  },
  computed: {
    ...mapGetters(['rewards', 'request']),
  },
  beforeMount() {
    this.getRewards();
  },
  methods: {
    ...mapActions(['getRewards']),
  },
};
</script>
