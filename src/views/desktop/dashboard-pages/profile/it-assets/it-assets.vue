<template>
  <section>
    <h1>IT Assets</h1>
    {{ itAssets }}

    <!-- it assets list -->
    <div v-if="itAssets.length">
      <div v-for="(itAsset,index) in itAssets" :key="index">
        {{ itAsset }}
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
  name: 'ITAssets',
  components: {

  },
  computed: {
    ...mapGetters(['itAssets']),
  },
  beforeMount() {
    this.getITAssets();
  },
  methods: {
    ...mapActions(['getITAssets']),
  },
};
</script>

<style>

</style>
