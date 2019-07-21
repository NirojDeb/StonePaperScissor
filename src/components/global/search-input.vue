<template>
  <div class="search-cont relative flex">
    <input
      :id="id"
      :ref="id"
      v-model="searchQuery"
      :class="[
        withSearchButton ? 'border-r-0 rounded-r-none pl-4 pr-8' : 'pl-10 pr-4',
        inputClass ? inputClass : `
          appearance-none
          block
          w-full
          border
          rounded
          py-2
          leading-tight
          focus:outline-none
          bg-grey-lighter
          text-grey-darker
          focus:bg-white
          focus:border-grey
          rounded-lg
      `]"
      type="search"
      :placeholder="placeholder"
      autocomplete="off"
      spellcheck="false"
      @input="$emit('inputUpdate', searchQuery)"
      @change="$emit('inputChange', searchQuery)"
    >
    <button v-if="!withSearchButton" class="absolute pin-l pin-y px-3 flex items-center text-grey-dark">
      <i class="fas fa-search" />
    </button>
    <transition name="search-close-fade">
      <button
        v-if="searchQuery"
        class="absolute flex items-center pin-r pin-y px-3 text-grey-dark"
        :class="{ 'mr-10' : withSearchButton}"
        @click="clearSearch"
      >
        <i class="fas fa-times-circle" />
        <transition name="search-close-fade">
          <ring-loader
            v-show="loading"
            class="absolute pin-abs-center"
            thickness="2px"
            color="#606f7b"
            width="20px"
            height="20px"
          />
        </transition>
      </button>
    </transition>
    <button
      v-if="withSearchButton"
      class="px-3 flex items-center text-white bg-brand-color border-red-light border rounded-r-lg"
      @click.prevent="$emit('inputChange', searchQuery)"
    >
      <i class="fas fa-search" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    withSearchButton: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    autofocusTime: {
      type: Number,
      default: 0,
    },
    inputClass: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Quick search',
    },
    id: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  mounted() {
    this.searchQuery = this.text;
    setTimeout(() => {
      if (this.autofocus) this.$refs[this.id].focus();
    }, this.autofocusTime);
  },
  methods: {
    clearSearch() {
      this.searchQuery = '';
      if (this.autofocus) this.$refs[this.id].focus();
    },
  },
};
</script>

<style lang="scss" scoped>
.search-close-fade-enter-active {
  animation: fade 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.search-close-fade-leave-active {
  animation: fade 0.1s ease-out reverse;
}
</style>
