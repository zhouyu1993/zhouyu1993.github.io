(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35ed56e4"],{"0b62":function(e,t,a){"use strict";var r=a("60d9"),o=a.n(r);o.a},"2be1":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"orderDetail"},[a("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{name:"OrderList"}}},[e._v("订单列表")]),a("el-breadcrumb-item",[e._v("订单详情")])],1),a("el-form",{staticClass:"app-form",attrs:{disabled:"",model:e.formData,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"产品名称："}},[a("el-input",{model:{value:e.formData.productName,callback:function(t){e.$set(e.formData,"productName",t)},expression:"formData.productName"}})],1),a("el-form-item",{attrs:{label:"用户名称："}},[a("el-input",{model:{value:e.formData.userName,callback:function(t){e.$set(e.formData,"userName",t)},expression:"formData.userName"}})],1)],1)],1)},o=[],s=a("cebc"),i=a("2f62"),l={name:"OrderDetail",computed:Object(s["a"])({},Object(i["d"])(["orderDetail"]),{formData:function(){return this.orderDetail}}),methods:Object(s["a"])({},Object(i["b"])(["getOrderDetail"]),{toOrderList:function(){this.$router.push({name:"OrderList"})}}),created:function(){var e=this.$route.query,t=e.orderId;t&&this.getOrderDetail({orderId:t})}},c=l,d=(a("0b62"),a("2877")),u=Object(d["a"])(c,r,o,!1,null,"38619baa",null);t["default"]=u.exports},"60d9":function(e,t,a){}}]);
//# sourceMappingURL=chunk-35ed56e4.e5b1ab57.js.map