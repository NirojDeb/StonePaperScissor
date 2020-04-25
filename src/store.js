import Vue from 'vue';
import Vuex from 'vuex';
import accountsModule from '@/store/accounts/accounts-store';
import articlesModule from '@/store/articles/articles-store';
import categoriesModule from '@/store/categories/categories-store';
import communitiesModule from '@/store/communities/communities-store';
import documentsModule from '@/store/documents/documents-store';
import financialsModule from '@/store/financials/financials-store';
import campaignsModule from '@/store/campaigns/campaigns-store';
import toolsModule from '@/store/tools/tools-store';
import deviceModule from '@/store/device-store';
import navigationModule from '@/store/navigation-store';
import notificationsModule from '@/store/notifications-store';
import requestModule from '@/store/requests-store';
import routerModule from '@/store/router-store';
import searchModule from '@/store/search-store';

Vue.use(Vuex);

const injectionObj = {
  $http: Vue.prototype.$http,
  $vf: Vue.prototype.$vf,
};

export default new Vuex.Store({
  strict: true,
  modules: {
    accounts: accountsModule(injectionObj),
    articles: articlesModule(injectionObj),
    campaigns: campaignsModule(injectionObj),
    categories: categoriesModule(injectionObj),
    communities: communitiesModule(injectionObj),
    device: deviceModule(),
    documents: documentsModule(injectionObj),
    financials: financialsModule(injectionObj),
    tools: toolsModule(injectionObj),
    navigation: navigationModule(),
    notifications: notificationsModule(),
    request: requestModule(),
    router: routerModule(),
    search: searchModule(injectionObj),
  },
});
