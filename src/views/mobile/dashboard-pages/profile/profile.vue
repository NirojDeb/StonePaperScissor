<template>
  <section class="dashboard-profile-page px-4 bg-white h-min-screen py-2">
    <div v-if="request.key === 'getProfile' && request.inProgress" class="text-center m-10">
      <img class="mb-5 block mx-auto" src="/img/loader.gif" width="40" alt="Loader Gif">
      <p class="mx-auto leading-normal text-lg">
        Fetching your profile information...
      </p>
    </div>

    <div v-else-if="Object.keys(profile).length === 1" class="text-center m-10">
      <p class="leading-tight mx-auto text-2xl w-64">
        Error fetching your profile information.
      </p>
    </div>

    <ul v-else class="list-reset">
      <li class="border-b relative">
        <h4 class="mt-1 text-xs text-grey-darker">
          Name
        </h4>
        <p class="pt-1 text-grey-darkest">
          {{ profile.FullName || '-' }}
        </p>
      </li>
      <li class="border-b py-2 relative">
        <h4 class="mt-1 text-xs text-grey-darker">
          Email Address
        </h4>
        <p class="pt-1 text-grey-darkest">
          {{ profile.EmailAdd || '-' }}
        </p>
        <!-- <button
          class="absolute fa-edit far p-2 pin-r pin-y text-grey-darker"
          @click.prevent="openEditProfileModal('EmailAdd')"
        /> -->
      </li>
      <li class="border-b py-2 relative">
        <h4 class="mt-1 text-xs text-grey-darker">
          Designation
        </h4>
        <p class="pt-1 text-grey-darkest">
          {{ profile.Designation || '-' }}
        </p>
      </li>
      <li class="border-b py-2 relative">
        <h4 class="mt-1 text-xs text-grey-darker">
          Contact number
        </h4>
        <p class="pt-1 text-grey-darkest">
          {{ profile.PhoneNumber || '-' }}
        </p>
        <!-- <button
          class="absolute fa-edit far p-2 pin-r pin-y text-grey-darker"
          @click.prevent="openEditProfileModal('PhoneNumber')"
        /> -->
      </li>
      <li class="border-b py-2 relative">
        <h4 class="mt-1 text-xs text-grey-darker">
          OHR ID
        </h4>
        <p class="pt-1 text-grey-darkest">
          {{ profile.EmployeeId || '-' }}
        </p>
      </li>
      <li class="border-b py-2 relative">
        <h4 class="mt-1 text-xs text-grey-darker">
          Date of joining
        </h4>
        <p class="pt-1 text-grey-darkest">
          <span v-if="profile.OriginalDateOfHire">{{ profile.OriginalDateOfHire | dateFormat }}</span>
          <span v-else>-</span>
        </p>
      </li>
      <li class="border-b py-2 relative">
        <h4 class="mt-1 text-xs text-grey-darker">
          CoE
        </h4>
        <p class="pt-1 text-grey-darkest">
          {{ profile.Custom12 || '-' }}
        </p>
      </li>
      <li class="border-b py-2 relative">
        <h4 class="mt-1 text-xs text-grey-darker">
          SDO
        </h4>
        <p class="pt-1 text-grey-darkest">
          {{ profile.Sdo || '-' }}
        </p>
      </li>
      <li class="border-b py-2 relative">
        <h4 class="mt-1 text-xs text-grey-darker">
          Band
        </h4>
        <p class="pt-1 text-grey-darkest">
          {{ profile.EmpBand || '-' }}
        </p>
      </li>
      <li class="border-b py-2 relative">
        <h4 class="mt-1 text-xs text-grey-darker">
          Supervisor
        </h4>
        <p class="pt-1 text-grey-darkest">
          {{ profile.SupervisorName || '-' }}
        </p>
      </li>
      <li class="border-b py-2 relative">
        <h4 class="mt-1 text-xs text-grey-darker">
          Personal email ID
        </h4>
        <p class="pt-1 text-grey-darkest">
          {{ profile.SecondaryEmailId || '-' }}
        </p>
        <!-- <button
          class="absolute fa-edit far p-2 pin-r pin-y text-grey-darker"
          @click.prevent="openEditProfileModal('SecondaryEmailId')"
        /> -->
      </li>
      <!-- <li class="border-b py-2 relative">
        <h4 class="mt-1 text-xs text-grey-darker">
          Emergency contact number
        </h4>
        <p class="pt-1 text-grey-darkest">
          {{ profile.EmergencyContactNumber || '-' }}
        </p>
        <button
          class="absolute fa-edit far p-2 pin-r pin-y text-grey-darker"
          @click.prevent="openEditProfileModal('EmergencyContactNumber')"
        />
      </li> -->
      <li class="border-b py-2 relative">
        <h4 class="mt-1 text-xs text-grey-darker">
          PF Number
        </h4>
        <p v-if="!profile.PFNumbers.length">
          -
        </p>
        <p
          v-for="(PFNumber, index) in profile.PFNumbers"
          v-else
          :key="index"
          class="pt-1 text-grey-darkest"
        >
          {{ PFNumber.PFNumber || '-' }}
        </p>
      </li>
      <li class="border-b py-2 relative">
        <h4 class="mt-1 text-xs text-grey-darker">
          UAN
        </h4>
        <p v-if="!profile.UANNumbers.length">
          -
        </p>
        <p
          v-for="(uanNumber, index) in profile.UANNumbers"
          v-else
          :key="index"
          class="pt-1 text-grey-darkest"
        >
          {{ uanNumber.UANNumber || '-' }}
        </p>
      </li>
      <li class="border-b py-2 relative">
        <h4 class="mt-1 text-xs text-grey-darker">
          Legal entity
        </h4>
        <p class="pt-1 text-grey-darkest">
          {{ profile.LeCode || '-' }}
        </p>
      </li>
      <li class="border-b py-2 relative">
        <h4 class="mt-1 text-xs text-grey-darker">
          Department
        </h4>
        <p class="pt-1 text-grey-darkest">
          {{ profile.Department || '-' }}
        </p>
      </li>
      <li class="py-2 relative">
        <h4 class="mt-1 text-xs text-grey-darker">
          Current Address
        </h4>
        <p class="pt-1 text-grey-darkest pr-8">
          {{ profile.AddressWheelsSite || '-' }}
        </p>
        <!-- <button
          class="absolute fa-edit far p-2 pin-r pin-y text-grey-darker"
          @click.prevent="openEditProfileModal('AddressWheelsSite')"
        /> -->
      </li>
    </ul>

    <modal ref="edit-profile-modal-comp" name="edit-profile-modal">
      <div class="comments-cta-cont mb-4 px-4 py-2">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 mt-4"
          for="profile-update-input"
        >Update field</label>
        <input
          id="profile-update-input"
          v-model="inputVal"
          type="text"
          class="
            appearance-none
            block
            w-full
            bg-grey-lighter
            text-grey-darker
            border
            border-grey-light
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none
            focus:bg-white
            focus:border-grey
          "
          :disabled="request.key === 'updateProfile' && request.inProgress"
        >
        <div class="cta-cont flex justify-end mt-6">
          <button
            class="button border-2 border-grey-dark font-semibold leading-normal
            mr-2 px-4 py-1 rounded text-grey-darker text-sm w-1/3"
            @click.prevent="closeEditProfileModal"
          >
            Cancel
          </button>
          <button
            :class="{ 'loading': request.key === 'updateProfile' && request.inProgress }"
            :disabled="request.key === 'updateProfile' && request.inProgress"
            class="bg-green button border-2 border-green font-semibold
            leading-normal px-4 py-1 rounded text-sm text-white w-1/3"
            @click.prevent="saveProfile"
          >
            Save
            <ring-loader />
          </button>
        </div>
      </div>
    </modal>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Profile',
  components: {
    Modal: () => import('@/components/modal.vue'),
  },
  data() {
    return {
      inputVal: '',
      dataField: '',
    };
  },
  computed: {
    ...mapGetters(['profile', 'request']),
  },
  beforeMount() {
    this.getProfile();
  },
  methods: {
    ...mapActions(['getProfile', 'updateProfile']),
    openEditProfileModal(field) {
      this.dataField = field;
      this.inputVal = this.profile[field];
      this.$refs['edit-profile-modal-comp'].$data.isOpen = true;
    },
    async saveProfile() {
      const payload = {};
      payload[this.dataField] = this.inputVal;
      try {
        await this.updateProfile(payload);
        this.$refs['edit-profile-modal-comp'].$data.isOpen = false;
      } catch (e) {} // eslint-disable-line
    },
    closeEditProfileModal() {
      this.inputVal = '';
      this.$refs['edit-profile-modal-comp'].$data.isOpen = false;
    },
  },
};
</script>
<style lang="scss" src="@/styles/mobile/auth.scss" />
