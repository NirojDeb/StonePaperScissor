<template>
  <section class="dashboard-work-requests-page pt-2">
    <div v-if="request.key === 'getITAssets' && request.inProgress" class="text-center m-10">
      <img class="mb-5 block mx-auto" src="/img/loader.gif" width="40" alt="Loader Gif">
      <p class="mx-auto leading-normal text-lg w-1/2">
        Fetching your work IT assets...
      </p>
    </div>

    <div v-else-if="!itAssets.length" class="text-center m-10">
      <p class="leading-tight mx-auto text-2xl w-64">
        Unable to fetch details about your IT assets.
      </p>
    </div>

    <div v-else>
      <!-- <h1 class="leading-loose letter-spacing-05 mx-5 text-2xl text-black text-bold">
        IT Assets
      </h1> -->
      <div
        v-for="asset in itAssets"
        :key="asset.ASSIGNMENT_END_DATE"
        class="bg-white border-b border-t mb-3 mt-2 pointer px-5 py-2"
        @click.prevent="openWorkHistoryModal(job)"
      >
        <div class="border-b py-2 relative">
          <h4 class="mt-1 text-xs text-grey-darker">
            Ticket Number
          </h4>
          <p class="pt-1 text-grey-darkest">
            {{ asset.TICKET_NUMBER || '-' }}
          </p>
        </div>
        <div class="border-b py-2 relative">
          <h4 class="mt-1 text-xs text-grey-darker">
            Transaction Date
          </h4>
          <p class="pt-1 text-grey-darkest">
            {{ asset.TRANSACTION_DATE || '-' }}
          </p>
        </div>
        <div class="border-b py-2 relative">
          <h4 class="mt-1 text-xs text-grey-darker">
            Serial Number
          </h4>
          <p class="pt-1 text-grey-darkest">
            {{ asset.SERIAL_NUMBER || '-' }}
          </p>
        </div>
        <div class="border-b py-2 relative">
          <h4 class="mt-1 text-xs text-grey-darker">
            Description
          </h4>
          <p class="pt-1 text-grey-darkest">
            {{ asset.ITEM_DESCRIPTION || '-' }}
          </p>
        </div>
        <div class="py-2 relative">
          <h4 class="mt-1 text-xs text-grey-darker">
            Remarks
          </h4>
          <p class="pt-1 text-grey-darkest">
            {{ asset.REMARKS || '-' }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ItAssets',
  computed: {
    ...mapGetters(['itAssets', 'request']),
  },
  beforeMount() {
    this.getITAssets();
  },
  methods: {
    ...mapActions(['getITAssets']),
  },
};
</script>
