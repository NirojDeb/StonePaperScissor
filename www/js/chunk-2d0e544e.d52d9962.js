(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e544e"],{9485:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"dashboard-work-requests-page py-2"},["getWorkHistory"===t.request.key&&t.request.inProgress?s("div",{staticClass:"text-center m-10"},[s("img",{staticClass:"mb-5 block mx-auto",attrs:{src:"/img/loader.gif",width:"40",alt:"Loader Gif"}}),s("p",{staticClass:"mx-auto leading-normal text-lg w-1/2"},[t._v("\n      Fetching your work history till date...\n    ")])]):t.workHistory.length?s("div",[t._l(t.workHistory,function(e){return s("div",{key:e.ASSIGNMENT_END_DATE,staticClass:"mx-4 mt-2 mb-3 bg-white overflow-hidden pointer\n      rounded-lg shadow pb-5 px-6 py-4 relative",on:{click:function(s){return s.preventDefault(),t.openWorkHistoryModal(e)}}},[s("p",{staticClass:"text-lg leading-normal mb-1"},[t._v("\n        "+t._s(e.JOB)+" - "),s("span",{staticClass:"text-base text-grey-darker"},[t._v(t._s(e.gradeSi||"-"))])]),s("p",{staticClass:"leading-normal text-sm text-grey-darker"},[s("span",{staticClass:"text-grey-darkest text-semibold"},[t._v("\n          Tenure: ")]),t._v(t._s(e.duration)+" months\n      ")]),s("p",{staticClass:"leading-normal text-sm text-grey-darker"},[s("span",{staticClass:"text-grey-darkest text-semibold"},[t._v("Timeline: ")]),t._v("\n        "+t._s(t._f("dateFormat")(e.ASSIGNMENT_START_DATE,{minified:!0}))+"\n        - "+t._s(t._f("dateFormat")(e.ASSIGNMENT_END_DATE,{minified:!0}))+"\n      ")]),s("p",{staticClass:"leading-normal text-sm text-grey-darker"},[s("span",{staticClass:"text-grey-darkest text-semibold"},[t._v("\n          Business function: ")]),t._v(t._s(e.BUSINESS_FUNCTION||"-")+"\n      ")]),t._m(0,!0)])}),s("modal",{ref:"work-history-modal-comp",attrs:{"show-close-btn":!0,name:"work-history-modal"}},[s("div",{staticClass:"mb-4 px-4 py-2"},[s("h4",{staticClass:"full-width my-2"},[t._v("\n          Work details:\n        ")]),s("ul",{staticClass:"list-reset"},[s("li",{staticClass:"border-b py-2 relative"},[s("h4",{staticClass:"mt-1 text-xs text-grey-darker"},[t._v("\n              Designation\n            ")]),s("p",{staticClass:"pt-1 text-grey-darkest"},[t._v("\n              "+t._s(t.selectedJob.JOB)+"\n            ")])]),s("li",{staticClass:"border-b py-2 relative"},[s("h4",{staticClass:"mt-1 text-xs text-grey-darker"},[t._v("\n              Grade\n            ")]),s("p",{staticClass:"pt-1 text-grey-darkest"},[t._v("\n              "+t._s(t.selectedJob.gradeSi||"-")+"\n            ")])]),s("li",{staticClass:"border-b py-2 relative"},[s("h4",{staticClass:"mt-1 text-xs text-grey-darker"},[t._v("\n              Tenure\n            ")]),s("p",{staticClass:"pt-1 text-grey-darkest"},[t._v("\n              "+t._s(t.selectedJob.duration)+" months\n            ")])]),s("li",{staticClass:"border-b py-2 relative"},[s("h4",{staticClass:"mt-1 text-xs text-grey-darker"},[t._v("\n              Timeline\n            ")]),s("p",{staticClass:"pt-1 text-grey-darkest"},[t._v("\n              "+t._s(t._f("dateFormat")(t.selectedJob.ASSIGNMENT_START_DATE,{minified:!0}))+"\n              -\n              "+t._s(t._f("dateFormat")(t.selectedJob.ASSIGNMENT_END_DATE,{minified:!0}))+"\n            ")])]),s("li",{staticClass:"border-b py-2 relative"},[s("h4",{staticClass:"mt-1 text-xs text-grey-darker"},[t._v("\n              Business Function\n            ")]),s("p",{staticClass:"pt-1 text-grey-darkest"},[t._v("\n              "+t._s(t.selectedJob.BUSINESS_FUNCTION||"-")+"\n            ")])]),s("li",{staticClass:"border-b py-2 relative"},[s("h4",{staticClass:"mt-1 text-xs text-grey-darker"},[t._v("\n              Base Location\n            ")]),s("p",{staticClass:"pt-1 text-grey-darkest"},[t._v("\n              "+t._s(t.selectedJob.BASE_LOCATION||"-")+"\n            ")])]),s("li",{staticClass:"border-b py-2 relative"},[s("h4",{staticClass:"mt-1 text-xs text-grey-darker"},[t._v("\n              Process\n            ")]),s("p",{staticClass:"pt-1 text-grey-darkest"},[t._v("\n              "+t._s(t.selectedJob.PROCESS||"-")+"\n            ")])]),s("li",{staticClass:"py-2 relative"},[s("h4",{staticClass:"mt-1 text-xs text-grey-darker"},[t._v("\n              Supervisor Name\n            ")]),s("p",{staticClass:"pt-1 text-grey-darkest"},[t._v("\n              "+t._s(t.selectedJob.SUPERVISOR_NAME||"-")+"\n            ")])])])])])],2):s("div",{staticClass:"text-center m-10"},[s("p",{staticClass:"leading-tight mx-auto text-2xl w-64"},[t._v("\n      Unable to fetch details about your work history.\n    ")])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"absolute pin-r pin-y flex items-center"},[s("i",{staticClass:"fas fa-angle-double-right px-4 text-grey-darker"})])}],i=s("db72"),n=s("2f62"),l={name:"WorkHistory",components:{Modal:function(){return s.e("chunk-3131cf5f").then(s.bind(null,"aff5"))}},data:function(){return{selectedJob:{}}},computed:Object(i["a"])({},Object(n["c"])(["workHistory","request"])),beforeMount:function(){this.getWorkHistory()},methods:Object(i["a"])({},Object(n["b"])(["getWorkHistory"]),{openWorkHistoryModal:function(t){this.selectedJob=t,this.$refs["work-history-modal-comp"].$data.isOpen=!0}})},o=l,d=s("2877"),c=Object(d["a"])(o,a,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0e544e.d52d9962.js.map