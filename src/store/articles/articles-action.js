import * as da from '../../assets/json/products.json';

export default ({ $http }) => ({
  fetchAllArticles(context, obj) {
    const data = obj || {};
    const payload = {
      $select: 'Title,Id,Modified,VideoURL,VideoURLAzure,SortStory,LongStory,ArticleCategory,ArticleLocation,TotalCommentsId,TotalLikesId,ArticleDate',
      ...data,
    };
    return $http
      .post('/api/v1/articles', payload, {
        requestName: 'fetchAllArticles',
      })
      .then((res) => {
        const response = res.data;
        context.commit('setArticlesInState', {
          articles: response.value,
          count: response.itemsCount || response.value.length || 0,
          $skiptoken: response.$skiptoken || '',
        });
        return response;
      })
      .catch((err) => {
        context.dispatch('addToastNotifications', {
          text: (err.response && err.response.data && err.response.data.message) || err.message,
          timer: 4000,
          type: 'error',
        });
        throw (err.response && err.response.data && err.response.data.message) || err;
      });
  },

  articleLike(context, article) {
    return $http
      .put(`/api/v1/articles/${article.Id}/like`, {
        requestName: 'articleLike',
      })
      .then((res) => {
        const response = res.data;
        context.commit('setLikeArticleInState', article.Id);
        return response;
      })
      .catch((err) => {
        context.dispatch('addToastNotifications', {
          text: (err.response && err.response.data && err.response.data.message) || err.message,
          timer: 4000,
          type: 'error',
        });
        throw (err.response && err.response.data && err.response.data.message) || err;
      });
  },

  commentOnArticle(context, payload) {
    return $http
      .post(`/api/v1/articles/${payload.articleId}/comments`, { CommentText: payload.comment }, {
        requestName: 'commentOnArticle',
      })
      .then((res) => {
        const response = res.data;
        context.commit('setNewCommentForArticleInState', response);
        return response;
      })
      .catch((err) => {
        context.dispatch('addToastNotifications', {
          text: (err.response && err.response.data && err.response.data.message) || err.message,
          timer: 4000,
          type: 'error',
        });
        throw (err.response && err.response.data && err.response.data.message) || err;
      });
  },

  unlikeArticle(context, article) {
    return $http
      .delete(`/api/v1/articles/${article.Id}/like`, {
        requestName: 'articleLike',
      })
      .then((res) => {
        const response = res.data;
        context.commit('deleteLikeArticleFromState', article.Id);
        return response;
      })
      .catch((err) => {
        context.dispatch('addToastNotifications', {
          text: (err.response && err.response.data && err.response.data.message) || err.message,
          timer: 4000,
          type: 'error',
        });
        throw (err.response && err.response.data && err.response.data.message) || err;
      });
  },

  fetchArticle(context, articleId) {
    return $http
      .get(`/api/v1/articles/${articleId}`, {
        requestName: 'fetchArticle',
      })
      .then((res) => {
        const response = res.data;
        context.commit('setArticleInState', response);
        return response;
      })
      .catch((err) => {
        context.dispatch('addToastNotifications', {
          text: (err.response && err.response.data && err.response.data.message) || err.message,
          timer: 4000,
          type: 'error',
        });
        throw (err.response && err.response.data && err.response.data.message) || err;
      });
  },

  fetchArticleComments(context, articleId) {
    return $http
      .get(`/api/v1/articles/${articleId}/comments`, {
        requestName: 'fetchArticleComments',
      })
      .then((res) => {
        const response = res.data;
        context.commit('setArticleCommentsInState', response);
        return response;
      })
      .catch((err) => {
        context.dispatch('addToastNotifications', {
          text: (err.response && err.response.data && err.response.data.message) || err.message,
          timer: 4000,
          type: 'error',
        });
        throw (err.response && err.response.data && err.response.data.message) || err;
      });
  },

  // product detail

  fetchAllProducts(context, obj) {
    const data = obj || {};
    const payload = {
      $select: 'Title,Id,Modified,VideoURL,VideoURLAzure,SortStory,LongStory,ArticleCategory,ArticleLocation,TotalCommentsId,TotalLikesId,ArticleDate',
      ...data,
    };
    // return $http
    //   .get('../../assets/json/products.json', {
    //     requestName: 'fetchAllProducts',
    //   })
    //   .then((res) => {
    //     const response = res.data;
    //     context.commit('setProductsInState', {
    //       products: response.value,
    //       count: response.itemsCount || response.value.length || 0,
    //       $skiptoken: response.$skiptoken || '',
    //     });
    //     return response;
    //   })
    //   .catch((err) => {
    //     context.dispatch('addToastNotifications', {
    //       text: (err.response && err.response.data && err.response.data.message) || err.message,
    //       timer: 4000,
    //       type: 'error',
    //     });
    //     throw (err.response && err.response.data && err.response.data.message) || err;
    //   });
    // console.log(`data is: ${da}`);
    context.commit('setProductsInState', {
      products: da.products,
      count: da.itemsCount || da.products.length || 0,
      $skiptoken: 'yes',
      articleSkipQuery: 'yes',
      productSkipQuery: 'yes',
      // $skiptoken: response.$skiptoken || '',
    });
    return da;
  },

});
