import documentsActionModule from './documents-action';

const initializeState = () => ({
  documents: [],
});

export default ({ $http }) => ({
  state: initializeState(),
  mutations: {
    setAllDocumentsInState(state, payload) {
      state.documents = payload.documents;
    },
  },
  actions: documentsActionModule({ $http }),
  getters: {
    documents: state => state.documents,
  },
});
