<template>
  <section class="dashboard-categories-page py-3 bg-white h-min-screen">
    <h1 class="border-b border-grey-lighter leading-loose letter-spacing-05 mb-3 mx-6 text-2xl text-black text-bold">
      Categories
    </h1>

    <section class="categories-cont px-6 py-2 pb-6">
      <router-link
        v-for="category in categories"
        :key="category.slug"
        :to="`/dashboard/categories/${category.slug}`"
        class="category-card border border-grey-light p-2 rounded shadow text-center relative no-underline"
      >
        <img :src="category.image" :alt="category.slug">
        <p class="text-sm text-grey-darker font-semibold">
          {{ category.name }}
        </p>
        <button class="mark-fav-btn absolute bg-white border border-grey-dark fa-star far rounded-full text-sm z-10 text-genpact-pink" />
      </router-link>
    </section>
  </section>
</template>

<script>
import categories from '@/data/categories';

export default {
  name: 'Categories',
  data() {
    return {
      categories,
    };
  },
};
</script>

<style lang="scss">
.categories-cont {
  display: grid;
  grid-gap: 14px;
  grid-auto-rows: minmax(100px, auto);
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));

  img {
    filter: invert(0.65);
    width: 70%;
  }
}

.mark-fav-btn {
  top: -9px;
  right: -8px;
  padding: 3px 4px 4px 4px;
  width: 25px;
  height: 25px;
  border-color: #ff545e;
}
</style>
