const is = value => typeof value !== 'undefined' && value !== null;

export default {
  props: {
    src: { type: String, required: true },
    placeholder: { type: String },
    blur: { type: Number },
    aspectRatio: { type: Number },
    noRatio: { type: Boolean },
    fallback: { type: String },
    alt: { type: String },
    customClass: { type: String },
  },

  data() {
    return {
      isRendered: false,
      options: { cache: true },
      defaultBlur: 20,
      image: null,
      originalWidth: 0,
      placeholderImage: null,
      aspectRatioDetect: 0.5625,
      isPollingKilled: false,
      isImageCached: false,
      imageError: false,
    };
  },

  watch: {
    src() {
      this.handleImageLoading();
    },
  },

  computed: {
    shouldPlaceholderRender() {
      return !!this.placeholderImage;
    },

    shouldImageRender() {
      return this.isRendered;
    },

    cached() {
      return this.options.cache && this.isImageCached;
    },

    calculatedRatio() {
      return this.aspectRatio || this.aspectRatioDetect;
    },

    wrapperStyle() {
      if (this.noRatio) {
        return {};
      }

      return {
        paddingBottom: `${this.calculatedRatio * 100}%`,
      };
    },

    componentStyle() {
      return {
        maxWidth: this.originalWidth === 0 ? '100%' : `${this.originalWidth}px`,
      };
    },

    blurStyle() {
      const blur = this.defaultBlur;

      if (is(this.blur)) {
        return this.getBlurStyle(this.blur);
      }

      if (is(this.options.blur)) {
        return this.getBlurStyle(this.options.blur);
      }

      return this.getBlurStyle(blur);
    },
  },

  mounted() {
    this.handleImageLoading();
  },

  methods: {
    getBlurStyle(amount) {
      if (amount === 0) {
        return null;
      }

      return {
        filter: `blur(${amount}px)`,
      };
    },

    defineAspectRatio(img) {
      const delay = this.options.timeout || 2500;
      const pollInterval = this.options.pollInterval || 10;

      const poll = setInterval(() => {
        if (!img.naturalWidth) {
          return;
        }

        clearInterval(poll);

        const {
          naturalHeight, naturalWidth, scrollHeight, scrollWidth,
        } = img;

        this.aspectRatioDetect = naturalHeight / naturalWidth;
        this.originalWidth = naturalWidth;

        if (this.$refs.canvas) {
          this.$refs.canvas.height = scrollHeight;
          this.$refs.canvas.width = scrollWidth;
        }
      }, pollInterval);

      setTimeout(() => {
        if (img.naturalWidth) {
          return;
        }

        clearInterval(poll);
        this.isPollingKilled = true;
      }, delay);
    },

    loadImage(target) {
      const elem = target;
      elem.src = elem.dataset.url;

      elem.onload = () => {
        if (!this.aspectRatio) {
          this.defineAspectRatio(elem);
        }

        // next tick to know when the image is rendered
        this.$nextTick(() => {
          // timeout for a custom delay
          setTimeout(() => {
            elem.style.opacity = 1;
            this.isRendered = true;
            // remove placeholder image
            this.placeholderImage = null;
          }, 300);
        });
      };

      elem.onerror = () => {
        elem.src = this.fallback;
      };
    },

    loadPlaceholder() {
      if (!this.placeholder && !this.options.placeholder) {
        return;
      }

      const image = new Image();
      const src = this.placeholder || this.options.placeholder;

      image.src = src;

      image.onload = () => {
        this.placeholderImage = src;

        // Dispatches an event on placeholder image load
        this.$emit('onLoadPlaceholder', src);
      };

      image.onerror = (error) => {
        this.$emit('onPlaceholderError', error);

        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line
          console.warn('[vue-progressive-image] An error occured during the placeholder image loading');
        }
      };
    },

    handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          observer.unobserve(this.$el.querySelector('img'));
        }
      });
    },

    createObserver() {
      const options = {
        // circumstances under which the observer's callback is invoked
        root: null, // defaults to the browser viewport if not specified or if null
        threshold: '0', // the degree of intersection between the target element and its root (0 - 1)
        // threshold of 1.0 means that when 100% of the target is visible within
        // the element specified by the root option, the callback is invoked
      };

      // Whether you're using the viewport or some other element as the root,the API works the same way,
      // executing a callback function you provide whenever the visibility of the target element changes
      // so that it crosses desired amounts of intersection with the root

      const observer = new IntersectionObserver(this.handleIntersect, options);
      // this.$el.querySelector('img').removeAttribute('style');
      observer.observe(this.$el.querySelector('img')); // target element to watch
    },

    handleImageLoading() {
      this.loadPlaceholder();
      if (!window.IntersectionObserver) {
        this.loadImage();
      } else {
        this.createObserver();
      }
    },
  },
};
