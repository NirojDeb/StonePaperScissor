export default ({ $http }) => ({
  getAllCommunities(context) {
    return $http
      .get('/api/v1/articles', {
        requestName: 'getAllCommunities',
      })
      .then((res) => {
        const response = res.data;
        context.commit('setAllCommunitiesState', response);
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
  getPopularCommunities(context) {
    return $http
      .get('/api/v1/articles', {
        requestName: 'getPopularCommunities',
      })
      .then((res) => {
        const response = res.data;
        context.commit('setPopularCommunitiesState', response);
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
