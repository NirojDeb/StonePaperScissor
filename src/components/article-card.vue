<template>
  <article :class="{ 'recently-published' : isSameDate }" class="article-card relative max-w-sm rounded overflow-hidden bg-white shadow-md">
    <!-- <img v-if="article.ImageUrl" :src="article.ImageUrl" :alt="heading" class="block w-full"> -->
    <router-link :to="`/dashboard/article/${article.Id}`" class="no-underline block">
      <progressive-image
        v-if="article.ImageUrl"
        :src="`${article.ImageUrl}&width=${screenImgWidth}`"
        :alt="article.Title"
        class="block w-full"
        placeholder="https://picsum.photos/g/320/240/?image=354&blur=true"
        fallback="https://via.placeholder.com/620x480/e2e2e2/777?text=Image%20not%20found"
      />
    </router-link>
    <p class="text-sm mt-2 mb-1 px-6 text-genpact-pink flex flex-wrap items-center">
      <span v-for="(category, index) in article.ArticleCategory" :key="index">
        {{ category | capitalize }}<span v-if="index !== article.ArticleCategory.length - 1">&nbsp;|&nbsp;</span>
      </span>
    </p>
    <router-link :to="`/dashboard/article/${article.Id}`" class="no-underline border-b border-grey-lighter pb-3 px-6 block">
      <h1 class="mb-2 serif text-grey-darkest">
        {{ article.Title }}
      </h1>
      <p class="text-grey-darker article-short-desc">
        {{ article.SortStory }}
      </p>
      <p class="text-grey-dark article-short-desc text-sm mt-2">
        {{ article.ArticleDate | dateFormat }}
      </p>
    </router-link>
    <div class="px-3 text-grey-dark">
      <button
        class="p-3"
        :class="[article.isLiked ? 'text-genpact-pink' : 'text-grey-dark']"
        @click.prevent="getLikeState(article)"
      >
        <i class="far fa-thumbs-up mr-2" :class="{ 'fas' : article.isLiked }" />
        {{ article.TotalLikesId }}
      </button>
      <button class="ml-2 p-3 text-grey-dark" @click.prevent="openCommentModal(article)">
        <i class="far fa-comment-dots mr-2 align-top" />{{ article.TotalCommentsId }}
      </button>
    </div>
  </article>
</template>

<script>
import dayJs from 'dayjs';
import ProgressiveImage from '@/components/progressive-image.vue';

export default {
  name: 'Article',
  components: {
    ProgressiveImage,
  },
  props: {
    openCommentModal: {
      type: Function,
      required: true,
    },
    article: {
      type: Object,
      required: true,
    },
    screenImgWidth: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isSameDate() {
      try {
        return dayJs(this.article.ArticleDate).isSame(new Date(), 'day');
      } catch (e) {
        return false;
      }
    },
  },
  methods: {
    getLikeState(article) {
      if (!article.isLiked) {
        this.$emit('likeEvent', article);
      } else {
        this.$emit('unlikeEvent', article);
      }
    },
  },
};
</script>

<style lang="scss">
  .article-card {
    cursor: pointer;
    line-height: 1.4rem;
    margin: 0 auto;
    width: 100%;

    h1 {
      font-size: 1.1rem;
      line-height: 1.55;
    }

    &.recently-published {
      &:before {
        content: 'New';
        position: absolute;
        top: -2px;
        right: -21px;
        background: #FF545E;
        color: #fff;
        padding: 10px 20px 4px 20px;
        font-weight: bold;
        font-size: 0.7rem;
        transform: rotate(45deg);
        line-height: 1;
        z-index: 2;
      }
    }
  }
  .mobile-wrapper {
    .article-card {
      margin-bottom: 20px;
    }
  }
</style>
