<template>
  <section>
    <h1>Notifications</h1>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Notifications',
  components: {

  },
  computed: {
    ...mapGetters(['approvedState', 'rejectedState']),
  },
  methods: {
    ...mapActions(['approveRequest', 'rejectRequest']),
  },
};
</script>

<style>

</style>
