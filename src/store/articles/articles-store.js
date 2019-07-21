import uniqby from 'lodash.uniqby';
import articlesActionModule from './articles-action';

const initializeState = () => ({
  articles: [],
  article: {
    comments: [],
  },
  totalArticles: 0,
  $skiptoken: '',
});

export default ({ $http }) => ({
  state: initializeState(),
  mutations: {
    setArticlesInState(state, payload) {
      state.totalArticles = payload.count || payload.articles.length;
      state.$skiptoken = payload.$skiptoken || '';
      state.articles = payload.articles.length ? uniqby([...state.articles, ...payload.articles], 'ID') : state.articles;
    },
    setArticleInState(state, payload) {
      state.article = Object.keys(payload).length ? { ...payload, comments: [] } : { comments: [] };
    },
    setArticleCommentsInState(state, payload) {
      state.article = Object.keys(payload).length ? { ...state.article, comments: payload } : { ...state.article, comments: [] };
    },
    setNewCommentForArticleInState(state, payload) {
      const articleId = payload.ArticleIdId;
      if (articleId) {
        const comments = [...state.article.comments, payload];
        const index = state.articles.findIndex(article => parseInt(article.Id, 10) === parseInt(articleId, 10));
        const article = { ...state.articles[index] };
        article.TotalCommentsId += 1;

        state.articles = [
          ...state.articles.slice(0, index),
          article,
          ...state.articles.slice(index + 1, state.articles.length),
        ];

        state.article = Object.keys(payload).length ? { ...state.article, comments } : { ...state.article };
      }
    },
    deleteLikeArticleFromState(state, articleId) {
      if (articleId) {
        const index = state.articles.findIndex(article => parseInt(article.Id, 10) === parseInt(articleId, 10));
        const article = { ...state.articles[index] };
        article.isLiked = false;
        article.TotalLikesId -= 1;
        state.articles = [
          ...state.articles.slice(0, index),
          article,
          ...state.articles.slice(index + 1, state.articles.length),
        ];
      }
    },
    setLikeArticleInState(state, articleId) {
      if (articleId) {
        const index = state.articles.findIndex(article => parseInt(article.Id, 10) === parseInt(articleId, 10));
        const article = { ...state.articles[index] };
        article.isLiked = true;
        article.TotalLikesId += 1;
        state.articles = [
          ...state.articles.slice(0, index),
          article,
          ...state.articles.slice(index + 1, state.articles.length),
        ];
      }
    },
    resetArticleStore(state) {
      state.articles = [];
      state.article = {
        comments: [],
      };
      state.totalArticles = 0;
      state.$skiptoken = '';
    },
  },
  actions: articlesActionModule({ $http }),
  getters: {
    articles: state => state.articles,
    article: state => state.article,
    articleSkipQuery: state => state.$skiptoken,
    totalArticlesCount: state => state.totalArticles,
  },
});
