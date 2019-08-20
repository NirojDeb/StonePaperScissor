import uniqby from 'lodash.uniqby';
import { strictEqual } from 'assert';
import articlesActionModule from './articles-action';

const initializeState = () => ({
  articles: [],
  article: {
    comments: [],
  },
  totalArticles: 0,
  $skiptoken: '',
  products: [],
  product: {
    feedbacks: [],
  },
  totalProducts: 0,
});

export default ({ $http }) => ({
  state: initializeState(),
  mutations: {
    setArticlesInState(state, payload) {
    },
    setArticleInState(state, payload) {
      // state.article = Object.keys(payload).length ? { ...payload, comments: [] } : { comments: [] };
    },
    setArticleCommentsInState(state, payload) {
      // state.article = Object.keys(payload).length ? { ...state.article, comments: payload } : { ...state.article, comments: [] };
    },
    setNewCommentForArticleInState(state, payload) {
      // const articleId = payload.ArticleIdId;
      // if (articleId) {
      //   const comments = [...state.article.comments, payload];
      //   const index = state.articles.findIndex(article => parseInt(article.Id, 10) === parseInt(articleId, 10));
      //   const article = { ...state.articles[index] };
      //   article.TotalCommentsId += 1;

      //   state.articles = [
      //     ...state.articles.slice(0, index),
      //     article,
      //     ...state.articles.slice(index + 1, state.articles.length),
      //   ];

      //   state.article = Object.keys(payload).length ? { ...state.article, comments } : { ...state.article };
      // }
    },
    deleteLikeArticleFromState(state, articleId) {
      // if (articleId) {
      //   const index = state.articles.findIndex(article => parseInt(article.Id, 10) === parseInt(articleId, 10));
      //   const article = { ...state.articles[index] };
      //   article.isLiked = false;
      //   article.TotalLikesId -= 1;
      //   state.articles = [
      //     ...state.articles.slice(0, index),
      //     article,
      //     ...state.articles.slice(index + 1, state.articles.length),
      //   ];
      // }
    },
    setLikeArticleInState(state, articleId) {
      // if (articleId) {
      //   const index = state.articles.findIndex(article => parseInt(article.Id, 10) === parseInt(articleId, 10));
      //   const article = { ...state.articles[index] };
      //   article.isLiked = true;
      //   article.TotalLikesId += 1;
      //   state.articles = [
      //     ...state.articles.slice(0, index),
      //     article,
      //     ...state.articles.slice(index + 1, state.articles.length),
      //   ];
      // }
    },
    resetArticleStore(state) {
      // state.articles = [];
      // state.article = {
      //   comments: [],
      // };
      // state.totalArticles = 0;
      // state.$skiptoken = '';
      // initialize products
      state.products = [];
      state.product = {
        feedbacks: [],
      };
      state.totalProducts = 0;
    },
    // methods for products only
    resetProductStore(state) {
      // initialize products
      state.products = [];
      state.product = {
        feedbacks: [],
      };
      state.totalProducts = 0;
    },
    setProductsInState(state, payload) {
      console.log('length is: ', payload.products.length);
      state.totalProducts = payload.count || payload.products.length;
      state.$skiptoken = payload.$skiptoken || '';
      state.products = payload.products.length ? uniqby([...state.products, ...payload.products], 'id') : state.products;
      console.log('products are: ', state.products);
    },
    setProductInState(state, payload) {
      state.product = Object.keys(payload).length ? { ...payload, feedbacks: [] } : { feedbacks: [] };
    },
    setProductFeedbacksInState(state, payload) {
      state.product = Object.keys(payload).length ? { ...state.product, feedbacks: payload } : { ...state.product, feedbacks: [] };
    },
  },
  actions: articlesActionModule({ $http }),
  getters: {
    articles: state => state.articles,
    article: state => state.article,
    articleSkipQuery: state => state.$skiptoken,
    totalArticlesCount: state => state.totalArticles,
    products: state => state.products,
    product: state => state.product,
    totalProducts: state => state.totalProducts,
    productSkipQuery: state => state.$skiptoken,
    totalProductsCount: state => state.totalArticles,
  },
});
