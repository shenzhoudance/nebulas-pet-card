webpackJsonp([5],{342:function(t,e,a){"use strict";function r(t){c||a(355)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(349),n=a(356),c=!1,i=a(140),o=r,l=i(s.a,n.a,!1,o,"data-v-a83bd3b0",null);l.options.__file="src/views/index.vue",e.default=l.exports},349:function(t,e,a){"use strict";e.a={data:function(){return{petCardId:""}},methods:{handleSearchClick:function(){var t=this.petCardId;this.$router.push("/search/"+t)}}}},355:function(t,e){},356:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index"},[r("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[r("Col",{attrs:{span:"24"}},[r("h1",[r("img",{attrs:{src:a(143)}})]),t._v(" "),r("h2",[r("p",[t._v("\n                    为你的爱宠创建专属「身份证」\n                    "),r("router-link",{attrs:{to:"/create"}},[r("Button",{attrs:{type:"primary",size:"large",icon:"social-octocat"}},[r("span",[t._v("创建宠物卡")])])],1)],1)])]),t._v(" "),r("Col",{attrs:{span:"12"}},[r("Input",{staticClass:"pet-card-search",attrs:{placeholder:"输入宠物卡 ID 查找宠物身份信息..."},model:{value:t.petCardId,callback:function(e){t.petCardId=e},expression:"petCardId"}},[r("Button",{attrs:{slot:"append",icon:"ios-search"},on:{click:t.handleSearchClick},slot:"append"})],1)],1),t._v(" "),r("Col",{staticClass:"pet-card-help",attrs:{span:"24"}},[r("p",[t._v("「宠物卡」是基于星云3.0公链的宠物身份存证系统，所有的宠物信息都会被存储于星云链上，数据全部真实有效且无法篡改和撤销。")]),t._v(" "),r("p",[t._v("除了可以使用宠物卡为你的爱宠创建独一无二的专属「身份证」外，还可以对其他宠物进行「留言」以及「赞赏」，这些数据同样会被记录在星云链中。")]),t._v(" "),r("p",[t._v("你创建的宠物卡被赞赏后所得到的 NAS 全都可以提取到你的个人钱包（需扣除1%的提取费用）")])])],1)],1)},s=[];r._withStripped=!0;var n={render:r,staticRenderFns:s};e.a=n}});