import * as da from '../../assets/json/products.json';

export default ({ $http }) => ({

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

});
