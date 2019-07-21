<template>
  <div ref="image" :class="['progressive-image', customClass]" :style="componentStyle">
    <div class="progressive-image-wrapper" :style="wrapperStyle">
      <transition
        enter-class="progressive-image-enter"
        enter-active-class="progressive-image-before-enter"
      >
        <img
          ref="main"
          :class="['progressive-image-main', imageCustomClass]"
          :data-url="src"
          :alt="alt"
        >
      </transition>
      <transition
        enter-class="progressive-image-enter"
        enter-active-class="progressive-image-before-enter"
      >
        <div
          v-if="shouldPlaceholderRender"
          class="progressive-image-placeholder"
          :class="{ 'progressive-image-placeholder-out': shouldImageRender }"
          :style="placeholderStyle"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import ImageMixin from '@/mixins/progressive-image';

export default {
  name: 'ProgressiveImage',
  mixins: [
    ImageMixin,
  ],
  props: {
    imageCustomClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    placeholderStyle() {
      return {
        ...this.blurStyle,
        'background-image': `url(${this.placeholder || this.options.placeholder})`,
      };
    },
  },
};
</script>

<style lang="css">
  .progressive-image {
    position: relative;
    overflow: hidden;
    width: 100%;
    display: inline-block
  }
  .progressive-image-canvas {
    /* visibility: hidden; */
    position: absolute;
    top: 0;
    left: 0;
    /* height: 100%;
    width: 100%; */
  }
  .progressive-image-main {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: auto;
    z-index: 1;
    opacity: 0;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ease-out;
    transform: translateZ(0);
  }
  .progressive-image-before-enter {
    opacity: 1;
  }
  .progressive-image-enter {
    opacity: 0;
  }
  .progressive-image-placeholder {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 0;
    overflow: hidden;
    transition-duration: 300ms;
    transition-property: all;
    transition-timing-function: ease-out;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1.1);
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  .progressive-image-placeholder-out {
    transition-duration: inherit;
    transition-property: all;
    transition-timing-function: ease-out;
    /**
     * the transitioon delay needs to be longer than the
     * .progressive-image-main transition-duration, otherwise it will flick
     * because there won't be a background.
    */
    transition-delay: 0.4s;
    opacity: 0;
  }
  .progressive-image-preloader {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
</style>
