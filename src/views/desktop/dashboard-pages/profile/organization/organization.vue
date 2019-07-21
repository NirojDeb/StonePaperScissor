<template>
  <section>
    <h1>Organization</h1>
    {{ profile }}

    <!-- profile detail -->
    <div v-if="profile" />

    <!-- loader -->
    <div v-else>
      No data found !!!!
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'OrganizatioDetails',
  components: {

  },
  computed: {
    ...mapGetters(['profile']),
  },
  beforeMount() {
    this.getApprovals();
  },
  methods: {
    ...mapActions(['getProfile']),
  },
};
</script>

<style>

</style>
