<template>
  <section class="dashboard-article-detail-page">
    <div v-if="article.Title">
      <img src="https://bsmedia.business-standard.com/_media/bs/img/misc/2018-12/18/full/google-1545123087-72182440.jpg" alt="Article Image">
      <p class="text-sm mt-3 mb-2 px-4 text-grey-darker flex items-center">
        Latest news | Important alerts
      </p>
      <div class="mb-5 px-4">
        <h1 class="font-bold mb-2 text-xl">
          {{ article.Title }}
        </h1>
        <p class="text-grey-darkest article-long-desc">
          {{ article.LongStory | sanitizeText }}
        </p>
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
import { mapGetters } from 'vuex';
import { ContentLoader } from 'vue-content-loader';

export default {
  name: 'ArticleDetail',
  components: {
    ContentLoader,
  },
  computed: {
    ...mapGetters(['articles']),
    articleId() {
      return this.$route.params.articleId;
    },
    article() {
      return this.articles.find(article => article.Id === parseInt(this.articleId, 10)) || {};
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
</style>
