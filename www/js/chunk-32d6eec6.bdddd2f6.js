(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32d6eec6"],{"5f45":function(e,t,n){},"71c2":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"light",attrs:{"data-open-state":e.openState}},[n("nav",{staticClass:"header-navigation-cont z-10 headroom flex items-center justify-center",class:{"headroom--unpinned":e.scrolled&&!e.showBack&&!e.menuOpened,"menu-opened":e.menuOpened,"nav-scroll-hide":!e.hideNavScroll},attrs:{role:"navigation","aria-label":"Global Navigation"},on:{scroll:e.handleScroll}},[e.showBack?n("div",{staticClass:"back-cont fixed pin-x pin-t z-10"},[n("button",{staticClass:"back-btn px-3 py-3 text-blue flex items-center leading-normal",on:{click:function(t){return t.preventDefault(),e.$router.back()}}},[n("i",{staticClass:"fa-chevron-left fas text-xl mr-1"}),n("span",[e._v("Account")])])]):e._e(),e.showBack?n("h4",{staticClass:"text-grey-darkest letter-spacing-05 capitalize"},[e._v("\n      "+e._s(e.$route.meta.title||"")+"\n    ")]):e._e(),e.showBack?e._e():n("ul",{staticClass:"nav-bar-cont",class:{"filters-opened":e.filtersOpend,"menu-opened":e.menuOpened,"non-search-page-active":e.nonSearchPageActive}},[e._m(0),n("li",{staticClass:"nav-logo-item main-logo-cont"},[n("router-link",{staticClass:"menu-logo-link",attrs:{to:{name:"Dashboard.Articles",query:{nav:"feed"}}}},[e._v("\n          Stone Paper Scissor\n        ")])],1),n("li",{staticClass:"nav-menu-icon nav-menu-search p-6 pin-r"},[n("label",{staticClass:"absolute search-btn h-full pin-abs-center text-grey text-lg w-full",attrs:{for:"menu-open-toggle","aria-hidden":"true"},on:{click:e.openSearch}})])]),e.showBack?e._e():n("div",{staticClass:"nav-list-cont footer"},[n("transition",{attrs:{name:"search-close-fade"}},[e.searchOpened?n("div",{staticClass:"relative footer-nav-item-cont menu-list-item search-cont no-submenu"},[n("search-input",{staticClass:"mt-4 mb-5",attrs:{id:"article-search-input",text:e.$store.state.search.query,autofocus:!0,"autofocus-time":500,"with-search-button":!0,loading:"fetchSearchResults"===e.request.key&&e.request.inProgress,placeholder:"Search articles"},on:{inputChange:e.searchQueryChange,inputUpdate:e.searchQueryUpdated}}),e._l(e.$store.state.search.results,function(t){return n("div",{key:t.ID,staticClass:"bg-white border mt-2 overflow-hidden pb-2 pointer px-4 py-1 relative rounded-lg mb-3"},[n("router-link",{staticClass:"no-underline block leading-normal py-2 pb-0 text-left",attrs:{to:"/dashboard/article/"+t.Id},nativeOn:{click:function(t){e.menuOpened=!1}}},[n("p",{staticClass:"text-grey-darkest mb-2 serif"},[e._v("\n                "+e._s(t.Title)+"\n              ")]),n("p",{staticClass:"text-sm text-grey-darker mb-1"},[e._v("\n                "+e._s(e._f("dateFormat")(t.Modified))+" : "),n("span",{staticClass:"text-grey-darkest"},[e._v(e._s(e._f("trim")(t.SortStory,130)))])])])],1)})],2):e._e()]),e._l(e.categories,function(t,a){return n("div",{directives:[{name:"show",rawName:"v-show",value:!e.searchOpened,expression:"!searchOpened"}],key:t.slug,staticClass:"relative footer-nav-item-cont menu-list-item no-submenu"},[n("span",{staticClass:"absolute flex full-height items-center justify-start w-12"},[n("img",{staticClass:"category-img",attrs:{src:t.image,alt:t.name}})]),n("router-link",{staticClass:"no-underline ml-12 block flex items-center leading-normal pt-3 py-2 text-lg border-grey-lighter text-grey-darkest justify-between",class:{"border-b":a!==e.categories.length-1},attrs:{to:{name:"Dashboard.Articles",query:{category:t.slug}}},nativeOn:{click:function(t){e.menuOpened=!1}}},[e._v("\n          "+e._s(t.name)+"\n          "),n("button",{staticClass:"border px-2 py-1 relative rounded text-sm flex justify-center items-center",class:[t.selected?"bg-brand-color text-white border-red-light":"text-grey-dark"],on:{click:function(n){return n.preventDefault(),n.stopPropagation(),e.followCategory(t)}}},[e._v("\n            "+e._s(t.selected?"Unfollow":"Follow")+"\n            "),n("i",{staticClass:"fas text-xs ml-1",class:[t.selected?"fa-minus":"fa-plus"]})])])],1)})],2)])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"nav-menu-icon"},[n("label",{staticClass:"nav-menu-icon-label main-menu-toggle",attrs:{for:"menu-open-toggle","aria-hidden":"true"}},[n("span",{staticClass:"nav-menu-icon-bread nav-menu-icon-bread-top"},[n("span",{staticClass:"nav-menu-icon-bread-crust nav-menu-icon-bread-crust-top"})]),n("span",{staticClass:"nav-menu-icon-bread nav-menu-icon-bread-bottom"},[n("span",{staticClass:"nav-menu-icon-bread-crust nav-menu-icon-bread-crust-bottom"})])])])}],r=(n("7f7f"),n("db72")),i=n("f7fe"),o=n.n(i),c=n("2f62"),l={name:"Header",props:{showBack:{type:Boolean,default:!1}},data:function(){return{searchQuery:"",menuOpened:!1,searchOpened:!1,nonSearchPageActive:!0,filtersOpend:!1,limitPosition:350,scrolled:!1,lastPosition:0}},computed:Object(r["a"])({},Object(c["c"])(["categories","request"]),{hideNavScroll:function(){return"Dashboard.Articles"===this.$route.name&&(this.$emit("hideNavScroll",!this.$route.query.category),!this.$route.query.category)},openState:function(){var e=this;return this.$nextTick(function(){e.menuOpened?(document.body.style.overflow="hidden",document.body.style.height="".concat(window.innerHeight,"px")):(document.body.style.overflow="",document.body.style.height="",e.searchOpened=!1)}),this.menuOpened}}),watch:{$route:function(){this.moveNav()}},mounted:function(){this.moveNav()},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:Object(r["a"])({},Object(c["b"])(["addCategoryPreferences","deleteCategoryPreferences","fetchSearchResults"]),{handleScroll:function(){!this.menuOpened&&this.hideNavScroll&&(this.lastPosition<window.scrollY&&this.limitPosition<window.scrollY&&(this.scrolled=!0),this.lastPosition>window.scrollY&&(this.scrolled=!1),this.lastPosition=window.scrollY)},moveNav:function(){var e=this;"Dashboard.Articles"===this.$route.name&&this.$nextTick(function(){var t=e.$refs[e.$route.query.nav?"feed-link":"editor-pick-link"].$el,n=t.scrollWidth,a=t.offsetLeft,s=e.$refs.sliderUnderline;s.style.width="".concat(n,"px"),s.style.left="".concat(a,"px")})},followCategory:function(e){var t=Object(r["a"])({},e);t.selected?this.deleteCategoryPreferences(t):this.addCategoryPreferences(t),this.$root.$emit("categoryFollowEvent")},openSearch:function(){this.searchOpened=!0},searchQueryUpdated:o()(function(e){this.fetchSearchResults(e)},300),searchQueryChange:function(){}})},u=l,d=(n("bfb9"),n("2877")),f=Object(d["a"])(u,a,s,!1,null,"10d68c76",null);t["default"]=f.exports},bfb9:function(e,t,n){"use strict";var a=n("5f45"),s=n.n(a);s.a},f7fe:function(e,t,n){(function(t){var n="Expected a function",a=NaN,s="[object Symbol]",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,f=u||d||Function("return this")(),h=Object.prototype,m=h.toString,p=Math.max,v=Math.min,b=function(){return f.Date.now()};function g(e,t,a){var s,r,i,o,c,l,u=0,d=!1,f=!1,h=!0;if("function"!=typeof e)throw new TypeError(n);function m(t){var n=s,a=r;return s=r=void 0,u=t,o=e.apply(a,n),o}function g(e){return u=e,c=setTimeout(k,t),d?m(e):o}function w(e){var n=e-l,a=e-u,s=t-n;return f?v(s,i-a):s}function x(e){var n=e-l,a=e-u;return void 0===l||n>=t||n<0||f&&a>=i}function k(){var e=b();if(x(e))return O(e);c=setTimeout(k,w(e))}function O(e){return c=void 0,h&&s?m(e):(s=r=void 0,o)}function _(){void 0!==c&&clearTimeout(c),u=0,s=l=r=c=void 0}function S(){return void 0===c?o:O(b())}function $(){var e=b(),n=x(e);if(s=arguments,r=this,l=e,n){if(void 0===c)return g(l);if(f)return c=setTimeout(k,t),m(l)}return void 0===c&&(c=setTimeout(k,t)),o}return t=C(t)||0,y(a)&&(d=!!a.leading,f="maxWait"in a,i=f?p(C(a.maxWait)||0,t):i,h="trailing"in a?!!a.trailing:h),$.cancel=_,$.flush=S,$}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){return!!e&&"object"==typeof e}function x(e){return"symbol"==typeof e||w(e)&&m.call(e)==s}function C(e){if("number"==typeof e)return e;if(x(e))return a;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):i.test(e)?a:+e}e.exports=g}).call(this,n("c8ba"))}}]);
//# sourceMappingURL=chunk-32d6eec6.bdddd2f6.js.map