webpackJsonp([26],{CIoB:function(i,e,t){e=i.exports=t("FZ+f")(!0),e.push([i.i,"","",{version:3,sources:[],names:[],mappings:"",file:"index.vue",sourceRoot:""}])},WRSf:function(i,e,t){"use strict";function n(i){t("dkPe")}Object.defineProperty(e,"__esModule",{value:!0});var s=t("teIl"),l=t("wG0d"),o={components:{"demo-example":l.a,"demo-header":s.default},data:function(){return{visible1:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!1,title:"支付方式",actions:[{text:"支付宝支付",closeOnClick:!0,callback:function(){alert("支付宝支付")}},{text:"微信支付",closeOnClick:!1,callback:function(){alert("微信支付")}}],visible6:!1}},methods:{open1:function(){this.visible1=!0},open2:function(){this.visible2=!0},open3:function(){this.visible3=!0},open4:function(){this.visible4=!0},open5:function(){this.visible5=!0},open6:function(){this.visible6=!0},mask:function(){alert("mask")},action:function(){alert("action")}},mounted:function(){this.$$showPage()}},c=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"container"},[t("demo-header"),i._v(" "),t("demo-example",{attrs:{title:"1.基础用法",tip:"默认属性"}},[t("rjcv-button",{nativeOn:{click:function(e){i.open1(e)}}},[i._v("🐶点我🐶")]),i._v(" "),t("rjcv-actionsheet",{attrs:{visible:i.visible1},model:{value:i.visible1,callback:function(e){i.visible1=e},expression:"visible1"}})],1),i._v(" "),t("demo-example",{attrs:{title:"2.点击蒙层不自动关闭",tip:"自定义点击事件"}},[t("rjcv-button",{nativeOn:{click:function(e){i.open2(e)}}},[i._v("🐶点我🐶")]),i._v(" "),t("rjcv-actionsheet",{attrs:{visible:i.visible2,closeOnClickMask:!1},on:{mask:i.mask},model:{value:i.visible2,callback:function(e){i.visible2=e},expression:"visible2"}})],1),i._v(" "),t("demo-example",{attrs:{title:"3.不加蒙层",tip:"自定义关闭方法"}},[t("rjcv-button",{nativeOn:{click:function(e){i.open3(e)}}},[i._v("🐶点我🐶")]),i._v(" "),t("rjcv-actionsheet",{attrs:{visible:i.visible3,showMask:!1},model:{value:i.visible3,callback:function(e){i.visible3=e},expression:"visible3"}})],1),i._v(" "),t("demo-example",{attrs:{title:"4.点击底部按钮不自动关闭",tip:"自定义点击事件"}},[t("rjcv-button",{nativeOn:{click:function(e){i.open4(e)}}},[i._v("🐶点我🐶")]),i._v(" "),t("rjcv-actionsheet",{attrs:{visible:i.visible4,closeOnClickAction:!1},on:{action:i.action},model:{value:i.visible4,callback:function(e){i.visible4=e},expression:"visible4"}})],1),i._v(" "),t("demo-example",{attrs:{title:"5.选项数组写法",tip:"加标题"}},[t("rjcv-button",{nativeOn:{click:function(e){i.open5(e)}}},[i._v("🐶点我🐶")]),i._v(" "),t("rjcv-actionsheet",{attrs:{visible:i.visible5,title:i.title,actions:i.actions},model:{value:i.visible5,callback:function(e){i.visible5=e},expression:"visible5"}})],1),i._v(" "),t("demo-example",{attrs:{title:"6.选项slot写法",tip:"不加标题"}},[t("rjcv-button",{nativeOn:{click:function(e){i.open6(e)}}},[i._v("🐶点我🐶")]),i._v(" "),t("rjcv-actionsheet",{attrs:{visible:i.visible6},model:{value:i.visible6,callback:function(e){i.visible6=e},expression:"visible6"}},[t("rjcv-button",{staticClass:"rjcv-actionsheet-btn"},[i._v("支付宝支付")]),i._v(" "),t("rjcv-button",{staticClass:"rjcv-actionsheet-btn"},[i._v("微信支付")])],1)],1)],1)},a=[],v={render:c,staticRenderFns:a},b=v,r=t("VU/8"),u=n,p=r(o,b,!1,u,"data-v-4cc7e671",null);e.default=p.exports},dkPe:function(i,e,t){var n=t("CIoB");"string"==typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);t("rjj0")("57159b25",n,!0)}});
//# sourceMappingURL=26.96f4426f7dc30b36d136.js.map