import Vue from 'vue';
import Router from 'vue-router';
// import { isMobileOnly } from 'mobile-device-detect';
const isMobileOnly = true;

Vue.use(Router);

// let DashboardRootPage = null;
// let DashboardArticlesPage = null;
// let DashboardArticleDetailPage = null;

/* Auth Pages */
const LoginPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/auth-pages/login.vue');
  }
  return import('@/views/desktop/auth-pages/login.vue');
};

/* Auth Pages */
const DownloadPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/download.vue');
  }
  return import('@/views/mobile/download.vue');
};

// /* Dashboard Pages */
const DashboardRootPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/dashboard.vue');
  }
  return import('@/views/desktop/dashboard-pages/dashboard.vue');
};

const DashboardApprovalPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/approvals/approvals.vue');
  }
  return import('@/views/desktop/dashboard-pages/approvals/approvals.vue');
};
const DashboardSearchPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/search/search.vue');
  }
  return import('@/views/mobile/dashboard-pages/search/search.vue');
};

const DashboardCategoriesPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/categories/categories.vue');
  }
  return import('@/views/desktop/dashboard-pages/approvals/approvals.vue');
};

const DashboardCategoryDetailPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/categories/category-detail.vue');
  }
  return import('@/views/desktop/dashboard-pages/approvals/approvals.vue');
};

const DashboardArticlesPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/articles/articles.vue');
  }
  return import('@/views/desktop/dashboard-pages/articles/articles.vue');
};
const DashboardArticleDetailPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/articles/article-detail.vue');
  }
  return import('@/views/desktop/dashboard-pages/articles/article-detail.vue');
};

const DocumentsPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/documents/documents.vue');
  }
  return import('@/views/desktop/dashboard-pages/documents/documents.vue');
};

const AllCommunitiesPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/communities/all-communities/all-communities.vue');
  }
  return import('@/views/desktop/dashboard-pages/communities/all-communities/all-communities.vue');
};

const PopularCommunitiesPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/communities/popular-communities/popular-communities.vue');
  }
  return import('@/views/desktop/dashboard-pages/communities/popular-communities/popular-communities.vue');
};

const ExperiencesPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/experiences/experiences.vue');
  }
  return import('@/views/desktop/dashboard-pages/experiences/experiences.vue');
};

const PlanetPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/planet/planet.vue');
  }
  return import('@/views/desktop/dashboard-pages/planet/planet.vue');
};

const RewardsPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/rewards/rewards.vue');
  }
  return import('@/views/desktop/dashboard-pages/rewards/rewards.vue');
};

const ProfilePage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/profile/profile.vue');
  }
  return import('@/views/desktop/dashboard-pages/profile/profile.vue');
};

const AccountPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/profile/account.vue');
  }
  return import('@/views/desktop/dashboard-pages/profile/profile.vue');
};

const TeamPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/profile/team/team.vue');
  }
  return import('@/views/desktop/dashboard-pages/profile/team/team.vue');
};

const WorkHistoryPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/profile/work-history/work-history.vue');
  }
  return import('@/views/desktop/dashboard-pages/profile/work-history/work-history.vue');
};

// const RewardsPage = () => {
//   if (isMobileOnly) {
//     return import('@/views/mobile/dashboard-pages/profile/rewards/rewards.vue');
//   }
//   return import('@/views/desktop/dashboard-pages/profile/rewards/rewards.vue');
// };

const ITAssetsPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/profile/it-assets/it-assets.vue');
  }
  return import('@/views/desktop/dashboard-pages/profile/it-assets/it-assets.vue');
};

const AllToolsPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/tools/tools.vue');
  }
  return import('@/views/desktop/dashboard-pages/tools/all-tools/all-tools.vue');
};

const PopularToolsPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/tools/tools.vue');
  }
  return import('@/views/desktop/dashboard-pages/tools/popular-tools/popular-tools.vue');
};

const VolunteeringPage = () => {
  if (isMobileOnly) {
    return import('@/views/mobile/dashboard-pages/volunteering/volunteering.vue');
  }
  return import('@/views/desktop/dashboard-pages/volunteering/volunteering.vue');
};

const routes = [
  /* Root Page */
  {
    path: '/',
    name: 'RootPage',
    redirect: '/dashboard',
  },

  /* Auth Pages */
  {
    path: '/download',
    name: 'DownloadPage',
    component: DownloadPage,
  },

  /* Auth Pages */
  {
    path: '/dashboard',
    name: 'DashboardRootPage',
    component: DashboardRootPage,
    // name: 'Auth.LoginPage',
    // component: LoginPage,
    // meta: {
    //   redirectIfLoggedIn: true,
    // },
    children: [
      {
        path: 'approvals',
        name: 'Dashboard.Approvals',
        component: DashboardApprovalPage,
        meta: {
          showHeader: false,
          showBack: false,
          title: 'Approval Requests',
        },
      },
      {
        path: 'search',
        name: 'Dashboard.Search',
        component: DashboardSearchPage,
      },
      {
        path: 'categories',
        name: 'Dashboard.Categories',
        component: DashboardCategoriesPage,
      },
      {
        path: 'categories/:categorySlug',
        name: 'Dashboard.Category.Detail',
        component: DashboardCategoryDetailPage,
      },
      {
        path: 'articles',
        name: 'Dashboard.Articles',
        component: DashboardArticlesPage,
        meta: {
          saveScrollPos: true,
          showHeader: false,
        },
      },
      {
        path: 'article/:articleId',
        name: 'Dashboard.Article.Detail',
        component: DashboardArticleDetailPage,
        meta: {
          saveScrollPos: true,
          // showHeader: true,
          showBack: true,
        },
      },
      {
        path: '/dashboard/communities',
        name: 'Dashboard.AllCommunities',
        component: AllCommunitiesPage,
      },
      {
        path: '/dashboard/communities/popular',
        name: 'Dashboard.PopularCommunities',
        component: PopularCommunitiesPage,
      },
      {
        path: 'documents',
        name: 'Dashboard.Documents',
        component: DocumentsPage,
      },
      {
        path: '/dashboard/experiences',
        name: 'Dashboard.Experiences',
        component: ExperiencesPage,
        meta: {
          showHeader: true,
          showBack: false,
          title: 'Experiences',
        },
      },
      {
        path: '/dashboard/planet',
        name: 'Dashboard.Planet',
        component: PlanetPage,
        meta: {
          showHeader: true,
          showBack: false,
          title: 'Planet',
        },
      },
      {
        path: '/dashboard/account',
        name: 'Dashboard.Account',
        component: AccountPage,
      },
      {
        path: '/dashboard/account/profile',
        name: 'Dashboard.Profile',
        component: ProfilePage,
        meta: {
          showHeader: true,
          showBack: true,
          title: 'Profile',
        },
      },
      {
        path: '/dashboard/account/team',
        name: 'Dashboard.Team',
        component: TeamPage,
      },
      {
        path: '/dashboard/rewards',
        name: 'Dashboard.Rewards',
        component: RewardsPage,
        meta: {
          showHeader: true,
          showBack: false,
          title: 'Rewards',
        },
      },
      {
        path: '/dashboard/account/work-history',
        name: 'Dashboard.WorkHistory',
        component: WorkHistoryPage,
        meta: {
          showHeader: true,
          showBack: true,
          title: 'Work history',
        },
      },
      {
        path: '/dashboard/account/experiences-history',
        name: 'Dashboard.ExperiencesHistory',
        component: ITAssetsPage,
        meta: {
          showHeader: true,
          showBack: true,
          title: 'Experiences History',
        },
      },
      {
        path: '/dashboard/tools',
        name: 'Dashboard.AllTools',
        component: AllToolsPage,
      },
      {
        path: '/dashboard/tools/popular',
        name: 'Dashboard.PopularTools',
        component: PopularToolsPage,
      },
      {
        path: 'volunteering',
        name: 'Dashboard.Volunteering',
        component: VolunteeringPage,
        meta: {
          showHeader: true,
          showBack: true,
          title: 'Volunteering',
        },
      },
    ],
  },

  /* Root Page */
  {
    path: '/dashboard',
    name: 'DashboardRootPage',
    component: DashboardRootPage,
    // meta: {
    //   requiresAuth: true,
    // },
    children: [
      {
        path: 'approvals',
        name: 'Dashboard.Approvals',
        component: DashboardApprovalPage,
        meta: {
          showHeader: false,
          showBack: false,
          title: 'Approval Requests',
        },
      },
      {
        path: 'search',
        name: 'Dashboard.Search',
        component: DashboardSearchPage,
      },
      {
        path: 'categories',
        name: 'Dashboard.Categories',
        component: DashboardCategoriesPage,
      },
      {
        path: 'categories/:categorySlug',
        name: 'Dashboard.Category.Detail',
        component: DashboardCategoryDetailPage,
      },
      {
        path: 'articles',
        name: 'Dashboard.Articles',
        component: DashboardArticlesPage,
        meta: {
          saveScrollPos: true,
          showHeader: false,
        },
      },
      {
        path: 'article/:articleId',
        name: 'Dashboard.Article.Detail',
        component: DashboardArticleDetailPage,
        meta: {
          saveScrollPos: true,
          // showHeader: true,
          showBack: true,
        },
      },
      {
        path: '/dashboard/communities',
        name: 'Dashboard.AllCommunities',
        component: AllCommunitiesPage,
      },
      {
        path: '/dashboard/communities/popular',
        name: 'Dashboard.PopularCommunities',
        component: PopularCommunitiesPage,
      },
      {
        path: 'documents',
        name: 'Dashboard.Documents',
        component: DocumentsPage,
      },
      {
        path: '/dashboard/experiences',
        name: 'Dashboard.Experiences',
        component: ExperiencesPage,
        meta: {
          showHeader: true,
          showBack: false,
          title: 'Experiences',
        },
      },
      {
        path: '/dashboard/planet',
        name: 'Dashboard.Planet',
        component: PlanetPage,
        meta: {
          showHeader: true,
          showBack: false,
          title: 'Planet',
        },
      },
      {
        path: '/dashboard/account',
        name: 'Dashboard.Account',
        component: AccountPage,
      },
      {
        path: '/dashboard/account/profile',
        name: 'Dashboard.Profile',
        component: ProfilePage,
        meta: {
          showHeader: true,
          showBack: true,
          title: 'Profile',
        },
      },
      {
        path: '/dashboard/account/team',
        name: 'Dashboard.Team',
        component: TeamPage,
      },
      {
        path: '/dashboard/rewards',
        name: 'Dashboard.Rewards',
        component: RewardsPage,
        meta: {
          showHeader: true,
          showBack: false,
          title: 'Rewards',
        },
      },
      {
        path: '/dashboard/account/work-history',
        name: 'Dashboard.WorkHistory',
        component: WorkHistoryPage,
        meta: {
          showHeader: true,
          showBack: true,
          title: 'Work history',
        },
      },
      {
        path: '/dashboard/account/experiences-history',
        name: 'Dashboard.ExperiencesHistory',
        component: ITAssetsPage,
        meta: {
          showHeader: true,
          showBack: true,
          title: 'Experiences History',
        },
      },
      {
        path: '/dashboard/tools',
        name: 'Dashboard.AllTools',
        component: AllToolsPage,
      },
      {
        path: '/dashboard/tools/popular',
        name: 'Dashboard.PopularTools',
        component: PopularToolsPage,
      },
      {
        path: 'volunteering',
        name: 'Dashboard.Volunteering',
        component: VolunteeringPage,
        meta: {
          showHeader: true,
          showBack: true,
          title: 'Volunteering',
        },
      },
    ],
  },

  /* Not Found Page */
  {
    path: '*',
    name: 'PageNotFound',
    redirect: '/',
  },
];

// const routes = [
//   /* Root Page */
//   {
//     path: '/',
//     name: 'RootPage',
//     redirect: '/login',
//   },

//   /* Auth Pages */
//   {
//     path: '/login',
//     name: 'Auth.LoginPage',
//     component: LoginPage,
//     meta: {
//       redirectIfLoggedIn: true,
//     },
//   },

//   /* Root Page */
//   {
//     path: '/dashboard',
//     name: 'DashboardRootPage',
//     component: DashboardRootPage,
//     meta: {
//       requiresAuth: true,
//     },
//     children: [
//       {
//         path: 'articles',
//         name: 'Dashboard.Articles',
//         component: DashboardArticlesPage,
//       },
//       {
//         path: 'article/:articleId',
//         name: 'Dashboard.Article.Detail',
//         component: DashboardArticleDetailPage,
//       },
//     ],
//   },

//   /* Not Found Page */
//   {
//     path: '*',
//     name: 'PageNotFound',
//     redirect: '/',
//   },
// ];

export default function createRouter(store) {
  const router = new Router({
    fallback: false,
    scrollBehavior(to, from, savedPosition) {
      if (from.meta.saveScrollPos) {
        store.dispatch('setViewScrollPos', {
          name: from.name,
          coordinates: {
            x: window.scrollX,
            y: window.scrollY,
          },
        });
      }
      if (savedPosition) {
        return savedPosition;
      }
      return { x: 0, y: 0 };
    },
    routes,
  });

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.getters.isLoggedIn) {
        next({
          name: 'Auth.LoginPage',
        });
      } else {
        next();
      }
    } else if (to.matched.some(record => record.meta.redirectIfLoggedIn)) {
      if (store.getters.isLoggedIn) {
        next({
          name: 'Dashboard.Articles',
        });
      } else {
        next();
      }
    } else {
      next();
    }
  });

  router.afterEach(() => {
    // store.dispatch('clearViewScrollPos', to.name);
    if (store.state.router.next) store.dispatch('clearNextRoute');
  });

  return router;
}
