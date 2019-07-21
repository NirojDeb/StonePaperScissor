function removeFromArr(array, element) {
  const index = array.indexOf(element);

  if (index !== -1) {
    array.splice(index, 1);
  }
}

export default ({ $vf }) => ({
  async addCategoryPreferences(context, categoryObj) {
    const category = categoryObj;
    const categoryPref = await $vf.getItem('categoryPref') || '';
    $vf.setItem('categoryPref', `${categoryPref ? `${categoryPref},` : ''}${category.name}`);
    category.selected = true;
    context.commit('updateCategoryPreferencesInState', category);
  },

  async deleteCategoryPreferences(context, categoryObj) {
    const category = categoryObj;
    let categoryPref = await $vf.getItem('categoryPref') || '';
    const categoryArr = categoryPref.split(',');
    removeFromArr(categoryArr, category.name);
    categoryPref = categoryArr.join(',');
    $vf.setItem('categoryPref', categoryPref);
    category.selected = false;
    context.commit('updateCategoryPreferencesInState', category);
  },
});
