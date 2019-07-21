<template>
  <section class="dashboard-articles-page p-5 flex-1">
    <div v-if="articles.length" class="dashboard-articles-cont">
      <article-card
        v-for="article in articles"
        :key="article.Id"
        class="mb-6"
        :article-id="article.Id"
        :heading="article.Title"
        :short-desc="article.SortStory"
        :url="article.url"
        :image-url="article.urlToImage || `https://picsum.photos/620/480/?image=${article.Id}`"
      />
    </div>

    <content-loader
      v-else
      :height="300"
      :width="320"
      :speed="2"
      primary-color="#f3f3f3"
      secondary-color="#ecebeb"
      class="article-card max-w-sm rounded overflow-hidden bg-white shadow-md"
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

    <mugen-scroll :handler="fetchData" :should-handle="!(request.key === 'fetchAllArticles' && request.inProgress)">
      loading
    </mugen-scroll>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { ContentLoader } from 'vue-content-loader';
import MugenScroll from 'vue-mugen-scroll';

export default {
  name: 'Articles',
  components: {
    ArticleCard: () => import('@/components/article-card.vue'),
    ContentLoader,
    MugenScroll,
  },
  computed: {
    ...mapGetters(['articles', 'articleSkipQuery', 'request']),
  },
  methods: {
    ...mapActions(['fetchAllArticles']),
    fetchData() {
      if (!this.articleSkipQuery) {
        this.fetchAllArticles();
      } else {
        this.fetchAllArticles({
          $skiptoken: this.articleSkipQuery,
        });
      }
    },
  },
};
</script>
