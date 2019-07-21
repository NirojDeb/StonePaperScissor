import categoriesActionModule from './categories-action';
import categories from '@/data/categories';

const initializeState = () => ({
  categories,
});

export default ({ $vf }) => ({
  state: initializeState(),
  mutations: {
    setCategoryPreferencesInState(state, payload) {
      const categoriesStr = payload || '';
      const categoryPrefArr = categoriesStr.split(',');
      state.categories = state.categories.map((cat) => {
        const category = cat;
        category.selected = categoryPrefArr.includes(category.name);
        return category;
      });
    },
    updateCategoryPreferencesInState(state, payload) {
      const categoryName = payload.name || '';
      if (categoryName) {
        const index = state.categories.findIndex(category => category.name === categoryName);
        const category = { ...payload };
        state.categories = [
          ...state.categories.slice(0, index),
          category,
          ...state.categories.slice(index + 1, state.categories.length),
        ];
      }
    },
  },
  actions: categoriesActionModule({ $vf }),
  getters: {
    categories: state => state.categories,
  },
});
