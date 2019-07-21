<template>
  <section>
    <h1>My Profile</h1>
    {{ profileDetail }}

    <!-- request approval list -->
    <div v-if="profileDetail">
      {{ profileDetail }}
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
  name: 'Profile',
  components: {

  },
  computed: {
    ...mapGetters(['profileDetail']),
  },
  beforeMount() {
    this.getProfile();
  },
  methods: {
    ...mapActions(['getProfile']),
  },
};
</script>

<style>

</style>
