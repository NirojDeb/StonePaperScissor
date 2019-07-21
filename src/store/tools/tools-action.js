export default ({ $http }) => ({
  getAllTools(context) {
    return $http
      .get('/api/v1/articles', {
        requestName: 'getAllTools',
      })
      .then((res) => {
        const response = res.data;
        context.commit('setAllToolsInState', response);
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
  getPopularTools(context) {
    return $http
      .get('/api/v1/articles', {
        requestName: 'getPopularTools',
      })
      .then((res) => {
        const response = res.data;
        context.commit('setPopularToolsInState', response);
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
