<template>
  <section class="article-scroll-comp">
    <div v-if="$route.query.nav === 'feed' && !selectedCatsArr.length" class="text-center m-10">
      <p class="leading-tight mx-auto text-2xl w-64">
        You have not followed any category yet.
      </p>
    </div>

    <div v-else-if="products.length > 0">
      <!-- <article-card
        v-for="article in articles"
        :key="article.Id"
        class="mb-6"
        :screen-img-width="screenImgWidth"
        :article="article"
        :open-comment-modal="openCommentsModal"
        @likeEvent="articleLike"
        @unlikeEvent="unlikeArticle"
      /> -->
      <product-card
        v-for="product in products"
        :key="product.id"
        class="mb-6"
        :screen-img-width="800"
        :product="product"
      >
      </product-card>  
      <h1 v-if="categoryFullName" class="letter-spacing-05 mb-5 mt-1 text-xl text-black font-normal">
        Category: {{ categoryFullName }}
      </h1>
      <!-- <product-card
        v-for="product in products"
        :key="product.id"
        class="mb-6"
        :screen-img-width="800"
        :product="product"
      >
      </product-card> -->
    </div>

    <div v-else-if="!products.length && categoryFullName && !(request.key === 'fetchAllArticles' && request.inProgress)" class="text-center m-10">
      <p class="leading-tight mx-auto text-2xl w-64">
        There are no products in {{ categoryFullName }} category.
      </p>
    </div>

    <div v-else-if="products.length == 0 && totalProductsCount > 0" class="text-center m-10">
      <p class="leading-tight mx-auto text-2xl w-64">
        There are no products.
      </p>
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

<!-- product -->
    <mugen-scroll
      v-if="productSkipQuery"
      :handler="fetchData"
      :should-handle="!(request.key === 'fetchAllArticles' && request.inProgress)"
      class="flex items-center justify-center mb-4 mt-8 rotating-cube-spinner"
    >
      <!-- <img src="/img/loader.gif" width="40" alt="Loader Gif"> -->

<!-- Article -->

    <!-- <mugen-scroll
      v-if="articleSkipQuery"
      :handler="fetchData"
      :should-handle="!(request.key === 'fetchAllArticles' && request.inProgress)"
      class="flex items-center justify-center mb-4 mt-8 rotating-cube-spinner"
    >
      <img src="/img/loader.gif" width="40" alt="Loader Gif"> -->
    </mugen-scroll>

    <modal ref="comments-modal-comp" name="comments-modal">
      <div v-if="request.key === 'fetchArticleComments' && request.inProgress" class="text-center m-10">
        <img class="mb-5 block mx-auto" src="/img/loader.gif" width="30" alt="Loader Gif">
        <p class="mx-auto leading-normal text-lg w-1/2">
          Fetching comments for article...
        </p>
      </div>
      <div v-else class="py-3">
        <!-- <div v-for="comment in article.comments" :key="comment.Id" class="flex flex-col">
          <div
            class="bg-orange-lightest w-3/4 inline-block mx-4 my-2"
            :class="[user.ohrId === comment.CommentBy ? 'comment-bubble-right ml-auto' : 'comment-bubble-left']"
          >
            <div class="px-4 py-2">
              <p class="text-lg leading-normal mb-1">
                {{ comment.CommentText }}
              </p>
              <p class="leading-tight text-sm text-grey-darker italic">
                {{ comment.CommentBy }} on {{ comment.Modified | dateFormat }} at {{ comment.Modified | dateFormat({ timestampMini: true }) }}
              </p>
            </div>
          </div>
        </div> -->
      </div>

      <div
        v-if="!(request.key === 'fetchArticleComments' && request.inProgress) || request.key === 'commentOnArticle' && request.inProgress"
        class="comments-cta-cont mb-4 px-4 py-2"
      >
        <textarea
          v-model="newCommentTxt"
          :class="{ 'opacity-75 shadow-none' : request.key === 'commentOnArticle' && request.inProgress}"
          :disabled="request.key === 'commentOnArticle' && request.inProgress"
          class="
            appearance-none
            block
            w-full
            bg-grey-lighter
            text-grey-darker
            border
            border-grey-lighter
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none
            focus:bg-white
            focus:border-grey shadow
          "
          placeholder="Enter your comment..."
          autofocus
        />
        <div class="cta-cont flex justify-end mt-4">
          <button
            :class="{ 'loading opacity-50': request.key === 'commentOnArticle' && request.inProgress }"
            :disabled="request.key === 'commentOnArticle' && request.inProgress"
            class="bg-green button border-2 border-green font-semibold leading-normal px-4 py-1 rounded text-sm text-white"
            @click.prevent="postCommentOnArticle"
          >
            Post comment
            <ring-loader />
          </button>
        </div>
      </div>
    </modal>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { ContentLoader } from 'vue-content-loader';
import MugenScroll from 'vue-mugen-scroll';

export default {
  name: 'ArticlesScroll',
  components: {
    // ArticleCard: () => import('@/components/article-card.vue'),
    Modal: () => import('@/components/modal.vue'),
    ContentLoader,
    MugenScroll,
    ProductCard: () => import('@/components/product-card.vue'),
  },
  props: {
    fetchData: {
      type: Function,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    productSkipQuery: {
      type: String,
      required: true,
    },
    totalProductsCount: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      newCommentTxt: '',
      selectedArticleId: null,
    };
  },
  computed: {
    ...mapGetters(['request', 'screenImgWidth', 'user', 'categories']),
    categoryFullName() {
      const categoryObj = this.categories.find(category => category.slug === this.$route.query.category) || {};
      return categoryObj.name || '';
    },
    selectedCatsArr() {
      const selectedCat = this.categories.filter(category => category.selected);
      return selectedCat;
    },
  },
  methods: {
    ...mapActions(['fetchArticleComments', 'articleLike', 'unlikeArticle', 'commentOnArticle']),
    // openCommentsModal(article) {
    //   this.selectedArticleId = article.Id;
    //   this.fetchArticleComments(article.Id);
    //   this.$refs['comments-modal-comp'].$data.isOpen = true;
    // },
    async postCommentOnArticle() {
      try {
        await this.commentOnArticle({
          articleId: this.selectedArticleId,
          comment: this.newCommentTxt,
        });
        this.newCommentTxt = '';
      } catch (e) {} // eslint-disable-line
    },
  },
};
</script>
