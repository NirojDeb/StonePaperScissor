<template>
  <section>
    <h1>My Rewards</h1>
    {{ rewards }}

    <!-- badges list -->
    <div v-if="rewards.earnedBadges">
      <div v-if="rewards.earnedBadges.length">
        <div v-for="(reward,index) in rewards.earnedBadges" :key="index">
          {{ reward }}
        </div>
      </div>
    </div>

    <div v-if="rewards.pointsEarned">
      {{ rewards.pointsEarned }}
    </div>

    <div v-if="rewards.totalPoints">
      {{ rewards.totalPoints }}
    </div>

    <!-- loader -->
    <div v-else>
      No data found !!!!
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Rewards',
  components: {

  },
  computed: {
    ...mapGetters(['rewards']),
  },
  beforeMount() {
    this.getRewards();
  },
  methods: {
    ...mapActions(['getRewards']),
  },
};
</script>

<style>

</style>
