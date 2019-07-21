export default ({ $http }) => ({
  getAllDocuments(context) {
    return $http
      .get('/api/v1/articles', {
        requestName: 'getAllDocuments',
      })
      .then((res) => {
        const response = res.data;
        context.commit('setAllDocumentsInState', response);
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
