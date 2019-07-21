<template>
  <section class="dashboard-work-requests-page py-2">
    <!-- <div
      v-for="job in workHistory"
      :key="job.ASSIGNMENT_END_DATE"
      class="bg-white border-b border-t mb-3 mt-2 pointer px-5 py-4"
    > -->
    <div v-if="request.key === 'getWorkHistory' && request.inProgress" class="text-center m-10">
      <img class="mb-5 block mx-auto" src="/img/loader.gif" width="40" alt="Loader Gif">
      <p class="mx-auto leading-normal text-lg w-1/2">
        Fetching your work history till date...
      </p>
    </div>

    <div v-else-if="!workHistory.length" class="text-center m-10">
      <p class="leading-tight mx-auto text-2xl w-64">
        Unable to fetch details about your work history.
      </p>
    </div>

    <div v-else>
      <!-- <h1 class="leading-loose letter-spacing-05 mx-5 text-2xl text-black text-bold">
        Work History
      </h1> -->
      <div
        v-for="job in workHistory"
        :key="job.ASSIGNMENT_END_DATE"
        class="mx-4 mt-2 mb-3 bg-white overflow-hidden pointer
        rounded-lg shadow pb-5 px-6 py-4 relative"
        @click.prevent="openWorkHistoryModal(job)"
      >
        <p class="text-lg leading-normal mb-1">
          {{ job.JOB }} - <span class="text-base text-grey-darker">{{ job.gradeSi || '-' }}</span>
        </p>
        <!-- <p class="leading-tight text-sm text-grey-darker">
          <span class="text-grey-darkest text-semibold">Business group:&nbsp;</span>
          {{ job.BUSINESS_GROUP_NAME || '-' }}
        </p> -->
        <p class="leading-normal text-sm text-grey-darker">
          <span class="text-grey-darkest text-semibold">
            Tenure:&nbsp;</span>{{ job.duration }} months
        </p>
        <p class="leading-normal text-sm text-grey-darker">
          <span class="text-grey-darkest text-semibold">Timeline:&nbsp;</span>
          {{ job.ASSIGNMENT_START_DATE | dateFormat({ minified: true }) }}
          - {{ job.ASSIGNMENT_END_DATE | dateFormat({ minified: true }) }}
        </p>
        <p class="leading-normal text-sm text-grey-darker">
          <span class="text-grey-darkest text-semibold">
            Business function:&nbsp;</span>{{ job.BUSINESS_FUNCTION || '-' }}
        </p>
        <!-- <p class="leading-normal text-sm text-grey-darker">
          <span class="text-grey-darkest text-semibold">Location:&nbsp;</span>
          {{ job.BASE_LOCATION || '-' }}
        </p>
        <p class="leading-normal text-sm text-grey-darker">
          <span class="text-grey-darkest text-semibold">Process:&nbsp;</span>
          {{ job.PROCESS || '-' }}
        </p> -->
        <!-- <p class="leading-normal text-sm text-grey-darker">
          <span class="text-grey-darkest text-semibold">Supervisor:&nbsp;</span>
          {{ job.SUPERVISOR_NAME || '-' }}
        </p> -->
        <div class="absolute pin-r pin-y flex items-center">
          <i class="fas fa-angle-double-right px-4 text-grey-darker" />
        </div>
      </div>

      <modal ref="work-history-modal-comp" :show-close-btn="true" name="work-history-modal">
        <div class="mb-4 px-4 py-2">
          <h4 class="full-width my-2">
            Work details:
          </h4>
          <ul class="list-reset">
            <li class="border-b py-2 relative">
              <h4 class="mt-1 text-xs text-grey-darker">
                Designation
              </h4>
              <p class="pt-1 text-grey-darkest">
                {{ selectedJob.JOB }}
              </p>
            </li>
            <li class="border-b py-2 relative">
              <h4 class="mt-1 text-xs text-grey-darker">
                Grade
              </h4>
              <p class="pt-1 text-grey-darkest">
                {{ selectedJob.gradeSi || '-' }}
              </p>
            </li>
            <li class="border-b py-2 relative">
              <h4 class="mt-1 text-xs text-grey-darker">
                Tenure
              </h4>
              <p class="pt-1 text-grey-darkest">
                {{ selectedJob.duration }} months
              </p>
            </li>
            <li class="border-b py-2 relative">
              <h4 class="mt-1 text-xs text-grey-darker">
                Timeline
              </h4>
              <p class="pt-1 text-grey-darkest">
                {{ selectedJob.ASSIGNMENT_START_DATE | dateFormat({ minified: true }) }}
                -
                {{ selectedJob.ASSIGNMENT_END_DATE | dateFormat({ minified: true }) }}
              </p>
            </li>
            <li class="border-b py-2 relative">
              <h4 class="mt-1 text-xs text-grey-darker">
                Business Function
              </h4>
              <p class="pt-1 text-grey-darkest">
                {{ selectedJob.BUSINESS_FUNCTION || '-' }}
              </p>
            </li>
            <li class="border-b py-2 relative">
              <h4 class="mt-1 text-xs text-grey-darker">
                Base Location
              </h4>
              <p class="pt-1 text-grey-darkest">
                {{ selectedJob.BASE_LOCATION || '-' }}
              </p>
            </li>
            <li class="border-b py-2 relative">
              <h4 class="mt-1 text-xs text-grey-darker">
                Process
              </h4>
              <p class="pt-1 text-grey-darkest">
                {{ selectedJob.PROCESS || '-' }}
              </p>
            </li>
            <li class="py-2 relative">
              <h4 class="mt-1 text-xs text-grey-darker">
                Supervisor Name
              </h4>
              <p class="pt-1 text-grey-darkest">
                {{ selectedJob.SUPERVISOR_NAME || '-' }}
              </p>
            </li>
          </ul>
        </div>
      </modal>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'WorkHistory',
  components: {
    Modal: () => import('@/components/modal.vue'),
  },
  data() {
    return {
      selectedJob: {},
    };
  },
  computed: {
    ...mapGetters(['workHistory', 'request']),
  },
  beforeMount() {
    this.getWorkHistory();
  },
  methods: {
    ...mapActions(['getWorkHistory']),
    openWorkHistoryModal(job) {
      this.selectedJob = job;
      this.$refs['work-history-modal-comp'].$data.isOpen = true;
    },
  },
};
</script>
