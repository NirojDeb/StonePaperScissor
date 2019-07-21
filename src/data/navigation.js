export default [{
  name: 'News',
  slug: 'news',
  route: '/dashboard/articles',
  icon: 'fas fa-newspaper',
  external: false,
  auth: false,
  subNav: [],
}, {
  name: 'Account',
  slug: 'account',
  route: '',
  icon: 'fas fa-building',
  external: false,
  auth: false,
  subNav: [{
    name: 'Profile',
    slug: 'profile',
    route: '/dashboard/account/profile',
    icon: 'fas fa-user',
    external: false,
    auth: false,
    subNav: [],
  }, {
    name: 'Work History',
    slug: 'work-history',
    route: '/dashboard/account/work-history',
    icon: 'fas fa-code-branch',
    external: false,
    auth: false,
    subNav: [],
  }, {
    name: 'IT Assets',
    slug: 'it-assets',
    route: '/dashboard/account/it-assets',
    icon: 'fas fa-cube',
    external: false,
    auth: false,
    subNav: [],
  }, {
    name: 'Rewards',
    slug: 'rewards',
    route: '/dashboard/account/rewards',
    icon: 'fas fa-award',
    external: false,
    auth: false,
    subNav: [],
  }, {
    name: 'Documents',
    slug: 'documents',
    route: '/dashboard/documents',
    icon: 'fas fa-file-alt',
    external: false,
    auth: false,
    subNav: [],
  }, {
    name: 'Financials',
    slug: 'financials',
    route: '/dashboard/financials',
    icon: 'fas fa-money-bill-alt',
    external: false,
    auth: false,
    subNav: [],
  }],
}, {
  name: 'My Team',
  slug: 'my-team',
  route: '/dashboard/account/team',
  icon: 'fas fa-users',
  external: false,
  auth: false,
  subNav: [],
}, {
  name: 'Approvals',
  slug: 'approvals',
  route: '/dashboard/approvals',
  icon: 'fas fa-check-double',
  external: false,
  auth: false,
  subNav: [],
}, {
  name: 'Volunteering',
  slug: 'volunteering',
  route: '/dashboard/volunteering',
  icon: 'fas fa-hands-helping',
  external: false,
  auth: false,
  subNav: [],
}, {
  name: 'Tools',
  slug: 'tools',
  route: '',
  icon: 'fas fa-tools',
  external: false,
  auth: false,
  subNav: [{
    name: 'Popular Tools',
    slug: 'popular-tools',
    route: '/dashboard/tools/popular',
    icon: 'fas fa-wrench',
    external: false,
    auth: false,
    subNav: [],
  }, {
    name: 'All Tools',
    slug: 'all-tools',
    route: '/dashboard/tools',
    icon: 'fas fa-tools',
    external: false,
    auth: false,
    subNav: [],
  }],
}, {
  name: 'Communities',
  slug: 'communities',
  route: '',
  icon: 'fas fa-sitemap',
  external: false,
  auth: false,
  subNav: [{
    name: 'Popular Communities',
    slug: 'popular-communities',
    route: '/dashboard/communities/popular',
    icon: 'fas fa-fire',
    external: false,
    auth: false,
    subNav: [],
  }, {
    name: 'All Communities',
    slug: 'all-communities',
    route: '/dashboard/communities',
    icon: 'fas fa-globe-americas',
    external: false,
    auth: false,
    subNav: [],
  }],
}, {
  name: 'Genome',
  slug: 'genome',
  route: '/dashboard/genome',
  icon: 'fas fa-graduation-cap',
  external: false,
  auth: false,
  subNav: [],
}, {
  name: 'Gknowledge',
  slug: 'gknowledge',
  route: '/dashboard/gknowledge',
  icon: 'fas fa-chart-area',
  external: false,
  auth: false,
  subNav: [],
}, {
  name: 'Rewards',
  slug: 'rewards',
  route: '/dashboard/rewards',
  icon: 'fas fa-shield-alt',
  external: false,
  auth: false,
  subNav: [],
}];
