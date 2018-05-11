webpackJsonp([3],{347:function(t,e,a){"use strict";function s(t){i||a(365)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(354),r=a(366),i=!1,o=a(140),l=s,c=o(n.a,r.a,!1,l,"data-v-5e365a83",null);c.options.__file="src/views/account.vue",e.default=c.exports},348:function(t,e,a){t.exports=a.p+"d36b382ab87824a77ba0d1d7f30b78de.png"},354:function(t,e,a){"use strict";var s=a(141),n=a(66),r=a(142),i=(a.n(r),a(67)),o=a.n(i),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=new n.a;e.a={data:function(){return{address:"",account:null,petCards:[],loading:!0,interval:null,noData:!1,exCount:0,rewardValue:"",userReward:"",transferLimit:"",transferFee:"",transferAmount:""}},created:function(){var t=this;this.interval=setInterval(function(){t.exCount>5&&(clearInterval(t.interval),t.showError()),t.exCount++,t.initAccount()},1e3)},filters:{dateFmt:function(t){if(t){var e="object"!==(void 0===t?"undefined":l(t))?new Date(t):t,a={year:e.getFullYear(),month:e.getMonth()<9?"0"+(e.getMonth()+1):e.getMonth()+1,day:e.getDate()<10?"0"+e.getDate():e.getDate(),hour:e.getHours()<10?"0"+e.getHours():e.getHours(),min:e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),sec:e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds()};return a.year+"年"+a.month+"月"+a.day+"日"}return"未知"},nasFromBasic:function(t){return t?r.Unit.fromBasic(t):0}},methods:{initAccount:function(){var t=localStorage.getItem("nasAddress");t&&(this.address=t,clearInterval(this.interval),this.account=r.Account.fromAddress(t),this.getPetCardsByOwner(),this.getUserReward(),this.getTransferLimit(),this.getTransferFee())},showError:function(){this.$Modal.warning({title:"请先安装浏览器钱包插件",content:'<p>检测到你还没安装浏览器钱包插件，请先<a href="https://github.com/ChengOrangeJu/WebExtensionWallet" target="_blank">安装 NAS 钱包插件</a></p><br>\n                          <p>如果你还没有创建 NAS 钱包，可以参考官方教程进行创建「<a href="https://blog.nebulas.io/2018/04/12/creating-a-nas-wallet/" target="_blank">星云Web钱包教程1：创建NAS钱包</a>」</p><br>\n                          <p>确认导入钱包并解锁后，请刷新页面重新进行操作 :)</p>'})},getPetCardsByIds:function(t){var e=this,a=s.a.getContractAddress(),n=s.a.toSting([t]);c.simulateCall(a,"0","getPetCardsByIds",n,{listener:function(t){e.petCards=s.a.parse(t.result),e.loading=!1}})},getPetCardsByOwner:function(){var t=this;if(!this.account)return void this.showError();var e=s.a.getContractAddress(),a=s.a.toSting([this.address]);c.simulateCall(e,"0","getPetCardsByOwner",a,{listener:function(e){var a=s.a.parse(e.result);a&&a.length?t.getPetCardsByIds(a):(t.noData=!0,t.loading=!1)}})},getTransferLimit:function(){var t=this,e=s.a.getContractAddress();c.simulateCall(e,"0","getTransferLimit","[]",{listener:function(e){t.transferLimit=s.a.parse(e.result)}})},getTransferFee:function(){var t=this,e=s.a.getContractAddress();c.simulateCall(e,"0","getTransferFee","[]",{listener:function(e){var a=s.a.parse(e.result);t.transferFee=(100*a).toFixed(0)}})},getUserReward:function(){var t=this,e=s.a.getContractAddress();c.simulateCall(e,"0","getUserReward","[]",{listener:function(e){var a=s.a.parse(e.result);t.userReward=a?a.balance:0}})},handleTransferClick:function(){var t=this,e=s.a.getContractAddress(),a=this.transferAmount,n=this.transferLimit,i=this.userReward,l=s.a.toSting([a]);return a&&r.Unit.toBasic(a).gt(n)?r.Unit.toBasic(a).gt(i)?void this.$Modal.error({title:"数额错误",content:"转出数额不能大于余额 "+i+" Wei（"+r.Unit.fromBasic(i)+" NAS）"}):(this.loading=!0,void c.simulateCall(e,"0","transfer",l,{listener:function(e){e.execute_err?t.$Modal.error({title:"转出失败",content:"余额不足，无法转出"}):(i=new o.a(i),t.userReward=i.minus(r.Unit.toBasic(a)),t.$Modal.success({title:"转出成功",content:"代币已转出，请稍候查看钱包交易记录"})),t.loading=!1}})):void this.$Modal.warning({title:"数额错误",content:"转出数额必须大于 "+n+" Wei（"+r.Unit.fromBasic(n)+" NAS）"})},handleLikeCallback:function(t){"string"!=typeof t?this.$Modal.success({title:"赞赏成功",content:"感谢您的赞赏 :)"}):this.$Modal.error({title:"交易取消",content:"赞赏失败 :("}),this.loading=!1},handleLikeClick:function(t){var e=this;this.$Modal.confirm({render:function(t){return t("div",[t("p","* 赞赏单位为 NAS（1 NAS = 1EWei = 10^18 Wei）"),t("Input",{props:{value:e.rewardValue,autofocus:!0,placeholder:"请输入赞赏数额..."},on:{input:function(t){e.rewardValue=t}}})])},onOk:function(){e.loading=!0;var a=s.a.toSting([t]);c.call(s.a.getContractAddress(),e.rewardValue,"giveItReward",a,{listener:e.handleLikeCallback})}})}}}},365:function(t,e){},366:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index pet-mb-160"},[s("Tabs",[s("TabPane",{attrs:{label:"我的宠物卡",icon:"social-octocat"}},[s("Row",{attrs:{type:"flex",align:"middle"}},t._l(t.petCards,function(e){return s("Col",{key:e.id,staticStyle:{"text-align":"center"},attrs:{span:"4"}},[s("Card",{staticClass:"pet-mb-32 pet-mr-8"},[s("Row",{staticClass:"pet-pt-16 pet-pb-16",attrs:{type:"flex",justify:"center",align:"middle"}},[s("Col",{attrs:{span:"24"}},[s("img",{staticClass:"pet-avatar",attrs:{src:e.photo,alt:""}})]),t._v(" "),s("Col",{attrs:{span:"24"}},[s("Button",{attrs:{type:"error",shape:"circle",icon:"heart",size:"large"},on:{click:function(a){t.handleLikeClick(e.id)}}},[t._v("赞赏")]),t._v(" "),s("router-link",{attrs:{to:"/detail/"+e.id}},[s("Button",{attrs:{type:"ghost",shape:"circle",icon:"chatbubble-working",size:"large"}},[t._v("评论")])],1)],1)],1),t._v(" "),s("Row",{staticClass:"pet-pt-16 pet-pb-16",attrs:{type:"flex",justify:"center",align:"top"}},[s("Col",{attrs:{span:"24"}},[s("div",[s("Row",{attrs:{type:"flex",justify:"center",align:"top"}},[s("Col",{attrs:{span:"8"}},[s("p",{staticClass:"text-right"},[s("Icon",{attrs:{type:"at"}}),t._v(" ID")],1)]),t._v(" "),s("Col",{attrs:{span:"16"}},[s("p",{staticClass:"text-left"},[t._v(t._s(e.id))])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("p",{staticClass:"text-right"},[s("Icon",{attrs:{type:"social-octocat"}}),t._v("名称")],1)]),t._v(" "),s("Col",{attrs:{span:"16"}},[s("p",{staticClass:"text-left"},[t._v(t._s(e.name))])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("p",{staticClass:"text-right"},[s("Icon",{attrs:{type:"ios-paw"}}),t._v("生日")],1)]),t._v(" "),s("Col",{attrs:{span:"16"}},[s("p",{staticClass:"text-left"},[t._v(t._s(t._f("dateFmt")(e.birthday)))])])],1)],1)])],1)],1)],1)})),t._v(" "),t.noData?s("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[s("Col",{attrs:{span:"12"}},[s("div",{staticStyle:{"text-align":"center"}},[s("h1",[s("img",{attrs:{src:a(348),alt:""}})]),t._v(" "),s("h2",{staticClass:"pet-mb-32"},[t._v("\n                        你还没有任何宠物卡哦~\n                        "),s("p",[t._v("\n                            为你的爱宠创建一张专属「身份证」吧！\n                            "),s("router-link",{attrs:{to:"/create"}},[s("Button",{attrs:{type:"primary",size:"large",icon:"social-octocat"}},[s("span",[t._v("创建宠物卡")])])],1)],1)])])])],1):t._e()],1),t._v(" "),s("TabPane",{attrs:{label:"转移代币",icon:"social-usd"}},[s("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[s("Col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[s("h2",[s("span",{staticClass:"pet-mr-32"},[s("Icon",{attrs:{type:"ios-infinite"}}),t._v("NAS 余额: "+t._s(t.userReward)+" Wei（"+t._s(t._f("nasFromBasic")(t.userReward))+" NAS）\n                        ")],1),t._v(" "),s("span",[s("Icon",{attrs:{type:"cash"}}),t._v("钱包地址："+t._s(t.address))],1)]),t._v(" "),s("hr")])],1),t._v(" "),s("p",{staticClass:"pet-mb-32",staticStyle:{"text-align":"center"}},[t._v("\n                * 转出代币的数值应大于 "+t._s(t.transferLimit)+" Wei（"+t._s(t._f("nasFromBasic")(t.transferLimit))+" NAS），转出将扣除转出数额的 "+t._s(t.transferFee)+"% 作为手续费\n            ")]),t._v(" "),s("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[s("Col",{staticStyle:{"text-align":"center"},attrs:{span:"8"}},[s("Input",{attrs:{size:"large",placeholder:"请输入要转出的代币数量..."},model:{value:t.transferAmount,callback:function(e){t.transferAmount=e},expression:"transferAmount"}},[s("span",{attrs:{slot:"prepend"},slot:"prepend"},[s("Icon",{attrs:{type:"ios-nutrition"}})],1),t._v(" "),s("span",{attrs:{slot:"append"},slot:"append"},[t._v("NAS")])]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.transferAmount>0,expression:"transferAmount > 0"}]},[t._v("\n                        "+t._s(t.transferAmount)+" Wei ≈ "+t._s(t._f("nasFromBasic")(t.transferAmount))+" NAS\n                    ")]),t._v(" "),s("Button",{staticClass:"pet-mt-16",attrs:{type:"primary",size:"large"},on:{click:t.handleTransferClick}},[t._v("转出")])],1)],1)],1)],1),t._v(" "),t.loading?s("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},n=[];s._withStripped=!0;var r={render:s,staticRenderFns:n};e.a=r}});