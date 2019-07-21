<template>
  <section class="dashboard-article-detail-page bg-white h-min-screen relative">
    <div class="back-cont fixed pin-x pin-t z-10" :class="{'bg-white shadow': scrolled}" @scroll="handleScroll">
      <button
        class="back-btn fa-arrow-left fas px-4 py-3 text-2xl text-grey-darker"
        :class="{'text-white': !scrolled && article.Title}"
        @click.prevent="$router.back()"
      />
    </div>
    <div v-if="article.Title">
      <div class="img-wrapper relative">
        <img
          v-if="article.ImageUrl"
          ref="article-image"
          :src="`${article.ImageUrl}&width=${800}`"
          class="full-width"
          alt="article.Title"
          @load="setLimitPos"
        >
      </div>
      <p class="text-sm pt-3 mb-2 px-5 text-red-dark flex items-center">
        <span v-for="(category, index) in article.ArticleCategory" :key="index">
          {{ category | capitalize }}<span v-if="index !== article.ArticleCategory.length - 1">&nbsp;|&nbsp;</span>
        </span>
      </p>
      <div class="pb-5 px-5">
        <h1 class="font-bold serif text-grey-darkest mb-2 text-xl">
          {{ article.Title }}
        </h1>
        <!-- eslint-disable-next-line -->
        <p class="text-grey-darker article-long-desc" v-html="article.LongStory" />
      </div>
    </div>
    <!-- <h1 v-else class="font-bold m-3 mt-10 text-center text-xl">Loading data...</h1> -->
    <div v-else>
      <content-loader
        :height="300"
        :width="320"
        :speed="2"
        primary-color="#f3f3f3"
        secondary-color="#ecebeb"
        class="article-card max-w-sm rounded overflow-hidden bg-white"
      >
        <!-- eslint-disable -->
        <rect x="0" y="0" rx="0" ry="0" width="320" height="156" />
        <rect x="24" y="168" rx="4" ry="4" width="50" height="8" />
        <rect x="24" y="188" rx="4" ry="4" width="272" height="18" />
        <rect x="24" y="220" rx="4" ry="4" width="250" height="8" />
        <rect x="24" y="240" rx="4" ry="4" width="210" height="8" />
        <rect x="24" y="260" rx="4" ry="4" width="170" height="8" />
        <!-- eslint-enable -->
      </content-loader>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { ContentLoader } from 'vue-content-loader';

export default {
  name: 'ArticleDetail',
  components: {
    ContentLoader,
  },
  data() {
    return {
      limitPosition: 100,
      scrolled: false,
      lastPosition: 0,
    };
  },
  computed: {
    ...mapGetters(['articles', 'article', 'screenImgWidth']),
    articleId() {
      return this.$route.params.articleId;
    },
  },
  watch: {
    $route() {
      if (!this.articles.length && this.$route.params.articleId) this.fetchArticle(this.$route.params.articleId);
      else this.$store.commit('setArticleInState', this.articles.find(article => parseInt(article.Id, 10) === parseInt(this.articleId, 10)) || {});
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  beforeMount() {
    if (!this.articles.length) this.fetchArticle(this.$route.params.articleId);
    else this.$store.commit('setArticleInState', this.articles.find(article => parseInt(article.Id, 10) === parseInt(this.articleId, 10)) || {});
  },
  methods: {
    ...mapActions(['fetchArticle']),
    handleScroll() {
      if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
        this.scrolled = true;
      }
      if (this.lastPosition > window.scrollY) {
        this.scrolled = false;
      }
      this.lastPosition = window.scrollY;
    },
    setLimitPos(e) {
      const { target } = e;
      const height = target.scrollHeight - 50;
      this.limitPosition = height;
    },
  },
};
</script>

<style scoped>
  h1 {
    line-height: 1.75rem;
  }
  .article-long-desc {
    line-height: 1.5rem;
  }
  .img-wrapper {
    min-height: 150px;
  }
  .img-wrapper:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 6px);
    content: '';
    background-image: linear-gradient(to bottom right, #00000087, #ffffff00);
  }
</style>
