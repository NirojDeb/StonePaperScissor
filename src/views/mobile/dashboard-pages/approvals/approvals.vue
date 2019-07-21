<template>
  <section class="dashboard-approval-requests-page py-2">
    <!-- <swipe-list
      ref="list"
      class="card"
      :disabled="!enabled"
      :items="mockSwipeList"
      item-key="id"
      @swipeout:click="itemClick"
    >
      <template v-slot="{ item, index, revealLeft, revealRight, close }">
        <div class="border-b py-2 relative">
          <h4 class="mt-1 text-xs text-grey-darker">
            Printer Access or Revocation
          </h4>
          <p class="pt-1 text-grey-darkest">
            Kakoli Mazumdar
          </p>
        </div>
      </template>

      <template v-slot:right="{ item }">
        <div @click="fbClick" class="swipeout-action blue">
          <i class="fa fa-heart" />
        </div>
        <div class="swipeout-action green">
          <i class="fa fa-heart" />
        </div>
      </template>
      <template v-slot:empty>
        <div>
          list is empty ( filtered or just empty )
        </div>
      </template>
    </swipe-list> -->

    <div v-if="request.key === 'getApprovalRequests' && request.inProgress" class="text-center m-10">
      <img class="mb-5 block mx-auto" src="/img/loader.gif" width="40" alt="Loader Gif">
      <p class="mx-auto leading-normal text-lg">
        Fetching your requests for approval...
      </p>
    </div>

    <div v-else-if="!approvalRequests.length" class="text-center m-10">
      <p class="leading-tight mx-auto text-2xl w-64">
        There are no requests pending for approval.
      </p>
    </div>

    <div v-else>
      <!-- <h1 class="leading-loose letter-spacing-05 mx-5 mb-2 text-2xl text-black text-bold">
        Approvals Requests
      </h1> -->
      <transition-group tag="section" :css="false" @leave="leave">
        <div
          v-for="approval in approvalRequests"
          :key="approval.Request_ID"
          class="approval-card mx-4 mb-3 bg-white overflow-hidden pointer relative rounded-lg shadow pb-5 px-6 py-4"
          @click.prevent="openApprovalRequestModal(approval)"
        >
          <p class="text-lg leading-normal mb-1">
            {{ approval.Summary__c }}
          </p>
          <p class="leading-tight text-sm text-grey-darker">
            <span class="text-grey-darkest text-semibold">By:&nbsp;</span>{{ approval.Customer_Full_Name__c }} ({{ approval.Requested_By_Login_ID__c }})
          </p>
          <p class="leading-normal text-sm text-grey-darker">
            <span class="text-grey-darkest text-semibold">Dated:&nbsp;</span>
            {{ approval.Submit_Date__c | dateFormat }} at {{ approval.Submit_Date__c | dateFormat({ timestampMini: true }) }}
          </p>
          <div class="absolute pin-r pin-y flex items-center">
            <i class="fas fa-angle-double-right px-4 text-grey-darker" />
          </div>
        </div>
      </transition-group>

      <modal ref="approval-request-modal-comp" :show-close-btn="true" name="approval-request-modal">
        <div class="mb-4 px-4 py-2">
          <h4 class="full-width my-2">
            Request Details:
          </h4>
          <ul class="list-reset">
            <li class="border-b py-2 relative">
              <h4 class="mt-1 text-xs text-grey-darker">
                Request ID
              </h4>
              <p class="pt-1 text-grey-darkest">
                {{ approvalObj.Request_ID }}
              </p>
            </li>
            <li class="border-b py-2 relative">
              <h4 class="mt-1 text-xs text-grey-darker">
                Request Title
              </h4>
              <p class="pt-1 text-grey-darkest">
                {{ approvalObj.Summary__c }}
              </p>
            </li>
            <li class="border-b py-2 relative">
              <h4 class="mt-1 text-xs text-grey-darker">
                Requested By
              </h4>
              <p class="pt-1 text-grey-darkest">
                {{ approvalObj.Customer_Full_Name__c }} ({{ approvalObj.Requested_By_Login_ID__c }})
              </p>
            </li>
            <li class="border-b py-2 relative">
              <h4 class="mt-1 text-xs text-grey-darker">
                Request Date
              </h4>
              <p class="pt-1 text-grey-darkest">
                {{ approvalObj.Submit_Date__c | dateFormat }} at {{ approvalObj.Submit_Date__c | dateFormat({ timestampMini: true }) }}
              </p>
            </li>
            <li class="border-b py-2 relative">
              <h4 class="mt-1 text-xs text-grey-darker">
                Site
              </h4>
              <p class="pt-1 text-grey-darkest">
                {{ approvalObj.Site__c }}
              </p>
            </li>
            <li class="border-b py-2 relative">
              <h4 class="mt-1 text-xs text-grey-darker">
                Summary
              </h4>
              <p class="pt-1 text-grey-darkest">
                {{ approvalObj.Details__c }}
              </p>
            </li>
          </ul>
          <div class="cta-cont flex flex-wrap mb-2 mt-4">
            <h4 class="full-width my-4">
              Do you want to approve this request?
            </h4>
            <button
              :class="{ 'loading': request.key === 'updateApprovalRequests' && request.inProgress && reqStatus === 'Rejected' }"
              :disabled="request.key === 'updateApprovalRequests' && request.inProgress && reqStatus === 'Rejected'"
              class="button border-2 border-grey-dark font-semibold leading-normal mr-2 px-4 py-1 rounded text-grey-darker text-sm w-1/3"
              @click.prevent="reqStatus = 'Rejected';updateApproval(false)"
            >
              Reject
              <ring-loader thickness="2px" color="#8795a1" width="20px" height="20px" />
            </button>
            <button
              :class="{ 'loading': request.key === 'updateApprovalRequests' && request.inProgress && reqStatus === 'Approved' }"
              :disabled="request.key === 'updateApprovalRequests' && request.inProgress && reqStatus === 'Approved'"
              class="bg-green button border-2 border-green font-semibold leading-normal px-4 py-1 rounded text-sm text-white w-1/3"
              @click.prevent="reqStatus = 'Approved';updateApproval(true)"
            >
              Approve
              <ring-loader />
            </button>
          </div>
        </div>
      </modal>
    </div>
  </section>
</template>

<script>
// import { SwipeList, SwipeOut } from 'vue-swipe-actions';
import { mapGetters, mapActions } from 'vuex';
// import { setTimeout } from 'timers';

export default {
  name: 'Approvals',
  components: {
    Modal: () => import('@/components/modal.vue'),
  },
  // components: {
  //   SwipeOut,
  //   SwipeList,
  // },
  // data() {
  //   return {
  //     enabled: true,
  //     mockSwipeList: [
  //       {
  //         id: 0,
  //         title: 'Some title',
  //         description: 'some description',
  //       },
  //       {
  //         id: 1,
  //         title: 'Some title',
  //         description: 'some description',
  //       },
  //       {
  //         id: 2,
  //         title: 'Some title',
  //         description: 'some description',
  //       },
  //     ],
  //   };
  // },
  data() {
    return {
      approvalObj: {},
      reqStatus: '',
    };
  },
  computed: {
    ...mapGetters(['approvalRequests', 'request']),
  },
  beforeMount() {
    this.getApprovalRequests();
  },
  methods: {
    ...mapActions(['getApprovalRequests', 'updateApprovalRequests']),
    openApprovalRequestModal(approval) {
      this.approvalObj = { ...approval } || {};
      this.$refs['approval-request-modal-comp'].$data.isOpen = true;
    },
    async updateApproval(status) {
      const payload = {
        ...this.approvalObj,
        Approval_Status: status ? 'Approved' : 'Rejected',
      };
      try {
        await this.updateApprovalRequests(payload);
        this.$refs['approval-request-modal-comp'].$data.isOpen = false;
      } catch (e) {} // eslint-disable-line
    },
    leave(element, done) {
      const elem = element;
      const { height } = getComputedStyle(elem);
      elem.style.height = height;
      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(elem).height; // eslint-disable-line
      setTimeout(() => {
        elem.style.height = 0;
        elem.style.paddingTop = 0;
        elem.style.paddingBottom = 0;
        elem.style.marginTop = 0;
        elem.style.marginBottom = 0;
        elem.style.background = '#ff5959';

        setTimeout(() => {
          elem.style.transform = 'scaleX(1.1)';
        }, 150);
        setTimeout(done, 700);
      }, 0);
    },
    // closeApprovalRequestModal() {
    //   this.$refs['approval-request-modal-comp'].$data.isOpen = false;
    // },
    // revealFirstRight() {
    //   this.$refs.list.revealRight(0);
    // },
    // revealFirstLeft() {
    //   this.$refs.list.revealLeft(0);
    // },
    // closeFirst() {
    //   this.$refs.list.closeActions(0);
    // },
    // closeAll() {
    //   this.$refs.list.closeActions();
    // },
    // remove(item) {
    //   this.mockSwipeList = this.mockSwipeList.filter(i => i !== item);
    //   // console.log(e, 'remove');
    // },
    // itemClick(e) {
    //   console.log(e, 'item click');
    //   this.closeAll();
    // },
    // fbClick(e) {
    //   console.log(e, 'First Button Click');
    // },
    // sbClick(e) {
    //   console.log(e, 'Second Button Click');
    // },
  },
};
</script>

<style lang="scss">
.approval-card {
  transition: all 0.5s cubic-bezier(0.7, 0, 0.3, 1);
}
</style>
