(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"07e32":function(t,e,n){"use strict";var a=n("def0"),i=n.n(a);i.a},6417:function(t,e,n){},"6fdf":function(t,e,n){"use strict";var a=n("6417"),i=n.n(a);i.a},8930:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Setting"},[t._v("\n  Setting\n")])},i=[],s={name:"Setting"},r=s,o=n("2877"),c=Object(o["a"])(r,a,i,!1,null,"680387e7",null);e["default"]=c.exports},"8aaa":function(t,e,n){},a55b:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("h1",[t._v("login")]),n("el-input",{staticClass:"login-input",attrs:{placeholder:"输入：1正确，0错误"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),n("el-button",{staticClass:"login-button",on:{click:t.login}},[t._v("登录")])],1)},i=[],s=(n("a481"),n("386d"),{name:"Login",data:function(){return{input:""}},methods:{login:function(){if("1"===this.input){this.$$jsCookie.set("userId","1"),this.$$jsCookie.set("userToken",Date.now());var t=!0,e=t?"/awesome/cms-admin/#":"",n=window.location.search,a=this.$$queryString.parse(n),i=a.referer,s=i?decodeURIComponent(i):"".concat(e,"/orderList");window.location.replace(s)}else this.$alert("login fail")}}}),r=s,o=(n("b921"),n("2877")),c=Object(o["a"])(r,a,i,!1,null,"3496f7eb",null);e["default"]=c.exports},b921:function(t,e,n){"use strict";var a=n("8aaa"),i=n.n(a);i.a},dda8:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error"},[n("h1",[t._v("404")])])}],s={name:"Error"},r=s,o=(n("07e32"),n("2877")),c=Object(o["a"])(r,a,i,!1,null,"553d635a",null);e["default"]=c.exports},def0:function(t,e,n){},f820:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],s={name:"About"},r=s,o=(n("6fdf"),n("2877")),c=Object(o["a"])(r,a,i,!1,null,"708316d4",null);e["default"]=c.exports}}]);
//# sourceMappingURL=about.c2d93620.js.map