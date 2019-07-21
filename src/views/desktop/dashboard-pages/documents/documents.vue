<template>
  <main class="documents-page flex flex-col">
    <div class="rounded overflow-hidden bg-white content-card flex-1">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
          Documents
        </div>
        <p class="text-grey-darker text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Documents',
  components: {

  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
  },
};
</script>
