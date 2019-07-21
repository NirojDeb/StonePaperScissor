<template>
  <main class="documents-page flex flex-col">
    <div class="flex flex-wrap">
      <div class="w-full md:w-2/5 mb-4 pr-2">
        <div class="rounded overflow-hidden bg-white content-card flex-1 mb-4">
          <div class="p-6">
            <div class="font-bold text-xl mb-2">
            </div>
            <p class="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        <div class="rounded overflow-hidden bg-white content-card flex-1">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Reimbursements (Cell phone)
            </div>
            <p class="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-3/5 mb-4 pl-2">
        <div class="rounded overflow-hidden bg-white content-card flex-1">
          <div class="p-6">
            <div class="font-bold text-xl mb-2">
              Experiences
            </div>
            <p class="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Experiences',
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
