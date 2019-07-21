import financialsActionModule from './financials-action';

const initializeState = () => ({
  financials: [],
});

export default ({ $http }) => ({
  state: initializeState(),
  mutations: {
    setAllFinacialsInState(state, payload) {
      state.financials = payload.financials ? payload.financials : [];
    },
  },
  actions: financialsActionModule({ $http }),
  getters: {
    financials: state => state.financials,
  },
});
