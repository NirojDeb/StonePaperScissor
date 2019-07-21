import communitiesActionModule from './communities-action';

const initializeState = () => ({
  allCommunities: [],
  popularCommunities: [],
});

export default ({ $http }) => ({
  state: initializeState(),
  mutations: {
    setAllCommunitiesState(state, payload) {
      state.allCommunities = payload.allCommunities ? payload.allCommunities : [];
    },
    setPopularCommunitiesState(state, payload) {
      state.popularCommunities = payload.popularCommunities ? payload.popularCommunities : [];
    },
  },
  actions: communitiesActionModule({ $http }),
  getters: {
    allCommunities: state => state.allCommunities,
    popularCommunities: state => state.popularCommunities,
  },
});
