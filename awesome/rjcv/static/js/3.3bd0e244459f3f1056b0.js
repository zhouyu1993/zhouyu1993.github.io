webpackJsonp([3],{CCjA:function(t,e,n){var i=n("jTlO");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("cbb23314",i,!0)},jTlO:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"index.vue",sourceRoot:""}])},siM4:function(t,e,n){"use strict";function i(t){n("CCjA")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("teIl"),o=n("wG0d"),c={components:{"demo-example":o.a,"demo-header":a.default},data:function(){return{tabs:[{iconName:"flower",info:1,text:"选型一"},{iconName:"kefu",info:0,text:"选型二"},{iconName:"store",info:"2",text:"选型三"}],tabs2:[{iconName:"",info:"0",text:"选型一"},{iconName:"",info:0,text:"选型二"},{iconName:"",info:"",text:"选型三"},{iconName:"",info:"",text:"选型四"},{iconName:"",info:"",text:"选型五"},{iconName:"",info:"",text:"选型六"},{iconName:"",info:"",text:"选型七"}]}},methods:{handleTabClick:function(t){console.log(t)}},mounted:function(){this.$$showPage()}},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("demo-header"),t._v(" "),n("demo-example",{attrs:{title:"1.基础用法",tip:"数组；设置默认显示第3个(序列为2)；图标、信息（数字等）、显示文本、禁止、点击回调"}},[n("rjcv-tab",{attrs:{defaultIndex:2},on:{tabClick:t.handleTabClick}},t._l(t.tabs,function(t,e){return n("rjcv-tabitem",{key:e,attrs:{index:e,name:t.iconName,info:t.info,text:t.text,disabled:1===e}})}))],1),t._v(" "),n("demo-example",{attrs:{title:"2.slot",tip:"定义其他内容，如链接"}},[n("rjcv-tab",{on:{tabClick:t.handleTabClick}},t._l(t.tabs,function(e,i){return n("rjcv-tabitem",{key:i,attrs:{index:i}},[n("span",[t._v(t._s(e.text))])])}))],1),t._v(" "),n("demo-example",{attrs:{title:"3.sticky",tip:"如果启用 sticky = true: 对于旧浏览器（不支持 position: sticky）的，开发者需要自己用 js 实现；如果支持，可以修改 css（top/bottom）来改变固定的位置"}},[n("rjcv-tab",{attrs:{sticky:!0},on:{tabClick:t.handleTabClick}},t._l(t.tabs,function(t,e){return n("rjcv-tabitem",{key:e,attrs:{index:e,name:t.iconName,info:t.info,text:t.text,disabled:1===e}})})),t._v(" "),n("div",{staticStyle:{height:"600px"}},[t._v("\n      空白区域\n    ")])],1),t._v(" "),n("demo-example",{attrs:{title:"4.另一种样式",tip:""}},[n("rjcv-tab",{attrs:{useStyle:1},on:{tabClick:t.handleTabClick}},t._l(t.tabs,function(t,e){return n("rjcv-tabitem",{key:e,attrs:{index:e,name:t.iconName,info:t.info,text:t.text,disabled:1===e}})}))],1),t._v(" "),n("demo-example",{attrs:{title:"5.可滚动",tip:"先看一下不可滚动的，太多就导致换。如果启用scroll = true: 如果要实现点击后当前item可滑动定位，开发者需要自己用 css+js 实现"}},[n("rjcv-tab",{on:{tabClick:t.handleTabClick}},t._l(t.tabs2,function(t,e){return n("rjcv-tabitem",{key:e,attrs:{index:e,name:t.iconName,info:t.info,text:t.text}})})),t._v(" "),n("br"),t._v(" "),n("rjcv-tab",{attrs:{scroll:!0},on:{tabClick:t.handleTabClick}},t._l(t.tabs2,function(t,e){return n("rjcv-tabitem",{key:e,attrs:{index:e,name:t.iconName,info:t.info,text:t.text}})}))],1)],1)},r=[],l={render:s,staticRenderFns:r},m=l,d=n("VU/8"),f=i,b=d(c,m,!1,f,"data-v-4f477e62",null);e.default=b.exports}});
//# sourceMappingURL=3.3bd0e244459f3f1056b0.js.map