<template>
  <section>
    <h1>My Approvals</h1>
    {{ approvals }}

    <!-- request approval list -->
    <div v-if="approvals.length">
      <div v-for="(aprov,index) in approvals" :key="index">
        {{ aprov }}
      </div>
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
  name: 'Approvals',
  components: {
  },
  computed: {
    ...mapGetters(['approvals', 'approvedState', 'rejectedState']),
  },
  beforeMount() {
    this.getApprovals();
  },
  methods: {
    ...mapActions(['approveRequest', 'getApprovals', 'rejectRequest']),
  },
};
</script>
