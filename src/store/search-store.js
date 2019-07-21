const initializeState = () => ({
  query: '',
  results: [],
});

export default ({ $http }) => ({
  state: initializeState(),
  mutations: {
    setSearchResultsInState(state, payload) {
      state.query = payload.query || '';
      state.results = payload.results.length ? payload.results : state.results;
    },
    resetSearchStore(state) {
      state.query = '';
      state.results = [];
    },
  },
  actions: {
    fetchSearchResults(context, searchQuery) {
      context.commit('resetSearchStore');
      if (!searchQuery) return '';
      return $http
        .get(`/api/v1/search?query=${searchQuery}`, {
          requestName: 'fetchSearchResults',
        })
        .then((res) => {
          const results = res.data;
          context.commit('setSearchResultsInState', {
            query: searchQuery,
            results,
          });
          return results;
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
  },
});
