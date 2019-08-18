<template>
  <section :data-category-name="categoryName" class="dashboard-articles-page p-5 mt-20">
    <article-scroll-comp
      v-if="!noCategoryPref"
      :products="products"
      :product-skip-query="productSkipQuery"
      :total-products-count="totalProductsCount"
      :fetch-data="fetchData"
    />
    <!-- <article-scroll-comp
      :articles="articles"
      :article-skip-query="articleSkipQuery"
      :total-articles-count="totalArticlesCount"
      :fetch-data="fetchData"
    /> -->

    <!-- <div v-else class="text-center my-4 mx-3">
      <i class="fa-frown-open far mb-3 text-5xl text-grey-dark" />  
      <h2 class="font-normal leading-loose letter-spacing-05 mx-6 text-black text-xl">
        No categories being followed.
      </h2>
      <p class="leading-normal mx-3 text-grey-darker">
        Please follow your favorite categories to follow from left menu.
      </p>
    </div> -->
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Articles',
  components: {
    ArticleScrollComp: () => import('@/components/article-scroll-comp.vue'),
  },
  data() {
    return {
      noCategoryPref: false,
    };
  },
  computed: {
    ...mapGetters(['articles', 'articleSkipQuery', 'totalArticlesCount', 'categories', 'products', 'productSkipQuery', 'totalProductsCount']),
    categoryName() {
      return (this.$route.query.category && this.$route.query.category.replace('-', ' ')) || '';
    },
  },
  watch: {
    $route(to, from) {
      if (this.$route.name === 'Dashboard.Articles' && to.name === from.name) {
        this.$store.commit('resetArticleStore');
        this.$store.commit('resetProductStore');
        this.fetchData();
      }
    },
  },
  mounted() {
    // console.log('products mounted', products);
    this.fetchData();
    this.$root.$on('categoryFollowEvent', () => {
      // this.$store.commit('resetArticleStore');
      this.$store.commit('resetProductStore');
      this.$router.push({ name: 'Dashboard.Articles', query: { nav: 'feed' } });
      this.fetchData();
    });
  },
  methods: {
    ...mapActions(['fetchAllArticles', 'fetchArticleComments', 'articleLike', 'unlikeArticle', 'commentOnArticle', 'fetchAllProducts']),
    fetchData() {
      if (this.$route.name !== 'Dashboard.Articles') return;
      this.noCategoryPref = false;
      const getFilterStr = () => {
        const selectedCat = this.categories.filter(category => category.selected);
        if (!selectedCat.length) {
          this.noCategoryPref = true;
          return '';
        }
        let filterString = '';
        selectedCat.forEach((category, index) => {
          filterString += `${!index ? '' : ' or '}substringof('${category.keywords}',ArticleCategory)`;
        });
        return filterString;
      };

      if (!this.articleSkipQuery) {
        console.log('article skip wuery');
        this.fetchAllProducts();
        if (this.$route.query.nav === 'feed') {
          if (!getFilterStr().length) return;
          // this.fetchAllArticles({
          //   $filter: getFilterStr(),
          // });
        } else if (this.categoryName) {
          // this.fetchAllArticles({
          //   $filter: `substringof('${this.categoryName}',ArticleCategory)`,
          // });
        } else {
          // this.fetchAllArticles();
        }
      } else {
        console.log('article not skip wuery');
        // this.fetchAllProducts();
        const obj = {
          $skiptoken: this.articleSkipQuery,
        };
        if (this.$route.query.nav === 'feed') {
          obj.$filter = getFilterStr();
        }
        if (this.categoryName) obj.$filter = `substringof('${this.categoryName}',ArticleCategory)`;
        // this.fetchAllArticles(obj);
                this.fetchAllProducts();

      }
    },
  },
};
</script>

<style lang="scss">
.header-colapsed {
  .dashboard-articles-page {
    margin-top: 4rem !important;
  }
}
</style>
