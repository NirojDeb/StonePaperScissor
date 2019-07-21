<template>
  <section>
    <h1>Work History</h1>
    {{ workHistory }}

    <!-- request approval list -->
    <div v-if="workHistory.length">
      <div v-for="(assignment,index) in workHistory" :key="index">
        {{ assignment }}
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
  name: 'WorkHistory',
  components: {

  },
  computed: {
    ...mapGetters(['workHistory']),
  },
  beforeMount() {
    this.getWorkHistory();
  },
  methods: {
    ...mapActions(['getWorkHistory']),
  },
};
</script>

<style>

</style>
