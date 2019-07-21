import toolsActionModule from './tools-action';

const initializeState = () => ({
  allTools: [],
  popularTools: [],
});

export default ({ $http }) => ({
  state: initializeState(),
  mutations: {
    setAllToolsInState(state, payload) {
      state.allTools = payload.allTools;
    },
    setPopularToolsInState(state, payload) {
      state.popularTools = payload.popularTools;
    },
  },
  actions: toolsActionModule({ $http }),
  getters: {
    allTools: state => state.allTools,
    popularTools: state => state.popularTools,
  },
});
