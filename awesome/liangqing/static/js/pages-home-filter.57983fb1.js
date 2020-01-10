(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-filter"],{"07a2":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"form-wrap"},[a("v-uni-view",{staticClass:"form-title"},[e._v("筛选条件")]),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-view",{staticClass:"label"},[e._v("所在地")]),a("v-uni-view",{staticClass:"value"},[a("v-uni-picker",{attrs:{value:e.cityIndex,range:e.cityList,"range-key":"label"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.citySelector.apply(void 0,arguments)}}},[a("v-uni-view",[e._v(e._s(e.cityList[e.cityIndex].label))])],1)],1),a("v-uni-view",{staticClass:"uni-icon uni-icon-arrowright"})],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-view",{staticClass:"label"},[e._v("年龄范围")]),a("v-uni-view",{staticClass:"value"},[a("v-uni-picker",{attrs:{mode:"multiSelector",value:e.ageIndex,range:e.ageList},on:{columnchange:function(t){arguments[0]=t=e.$handleEvent(t),e.ageColumnChange.apply(void 0,arguments)}}},[0!=e.ageIndex[0]&&0!=e.ageIndex[1]?a("v-uni-view",[e._v(e._s(e.ageList[0][e.ageIndex[0]])+"~"+e._s(e.ageList[1][e.ageIndex[1]]))]):a("v-uni-view",[e._v("请选择年龄范围")])],1)],1),a("v-uni-view",{staticClass:"uni-icon uni-icon-arrowright"})],1)],1)],1)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},3531:function(e,t,a){"use strict";a.r(t);var i=a("ae30"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);t["default"]=n.a},5817:function(e,t,a){var i=a("b07e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("08096f4f",i,!0,{sourceMap:!1,shadowMode:!1})},ae30:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{userInfo:{},form:{pcode:"",min_age:"",max_age:"",min_height:"",max_height:"",education:"",income:""},cityList:[{label:"请选择所在地",value:""},{label:"全国",value:"100000"},{label:"北京市",value:"110000"},{label:"天津市",value:"120000"},{label:"上海市",value:"310000"},{label:"重庆市",value:"500000"},{label:"河北省",value:"130000"},{label:"山西省",value:"140000"},{label:"辽宁省",value:"210000"},{label:"吉林省",value:"220000"},{label:"黑龙江省",value:"230000"},{label:"江苏省",value:"320000"},{label:"浙江省",value:"330000"},{label:"安徽省",value:"340000"},{label:"福建省",value:"350000"},{label:"江西省",value:"360000"},{label:"山东省",value:"370000"},{label:"河南省",value:"410000"},{label:"湖北省",value:"420000"},{label:"湖南省",value:"430000"},{label:"广东省",value:"440000"},{label:"海南省",value:"460000"},{label:"四川省",value:"510000"},{label:"贵州省",value:"520000"},{label:"云南省",value:"530000"},{label:"陕西省",value:"610000"},{label:"甘肃省",value:"620000"},{label:"青海省",value:"630000"},{label:"内蒙古自治区",value:"150000"},{label:"广西壮族自治区",value:"450000"},{label:"西藏自治区",value:"540000"},{label:"宁夏回族自治区",value:"640000"},{label:"新疆维吾尔自治区",value:"650000"}],cityIndex:0,ageList:[["最小年龄",18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70],["最大年龄",18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70]],ageIndex:[0,0]}},onLoad:function(t){try{var a=uni.getStorageSync("user_info");if(a&&(this.userInfo=a,this.userInfo.is_request)){this.form.pcode=this.userInfo.is_request.pcode;for(var i=0;i<this.cityList.length;i++)this.form.pcode==this.cityList[i].value&&(this.cityIndex=i);this.form.min_age=this.userInfo.is_request.min_age,this.form.max_age=this.userInfo.is_request.max_age;for(var n=0;n<this.ageList[0].length;n++)this.form.min_age==this.ageList[0][n]&&(this.ageIndex[0]=n),this.form.max_age==this.ageList[1][n]&&(this.ageIndex[1]=n)}}catch(s){e.warn(s)}},onReady:function(){uni.hideTabBar()},onNavigationBarButtonTap:function(t){var a=this;return""==this.form.pcode?(uni.showToast({title:"请选择所在地",position:"bottom",icon:"none"}),!1):""==this.form.min_age||"最小年龄"==this.form.min_age||""==this.form.max_age||"最大年龄"==this.form.min_age?(uni.showToast({title:"请选择年龄范围",position:"bottom",icon:"none"}),!1):(uni.showLoading({title:""}),this.form.method="V1.UserRequirement",this.form.uid=this.userInfo.id,this.form.token=this.userInfo.token,void this.$api.api.ajaxData(this.form,function(t){uni.hideLoading(),uni.showToast({title:t.msg,position:"bottom",icon:"none"}),t.status&&(uni.setStorage({key:"user_info",data:a.userInfo,success:function(){e.log("user_info.is_request已更新")}}),uni.$emit("home-page",{type:"filter",filter:a.cityList[a.cityIndex].label}),uni.navigateBack({delta:1}))}))},methods:{citySelector:function(e){this.cityIndex=e.target.value,this.form.pcode=this.cityList[this.cityIndex].value,this.userInfo.is_request?this.userInfo.is_request.pcode=this.form.pcode:this.userInfo.is_request={pcode:this.form.pcode}},ageColumnChange:function(e){switch(this.ageIndex.splice(e.detail.column,1,e.detail.value),e.detail.column){case 0:this.ageIndex[0]>this.ageIndex[1]&&this.ageIndex.splice(1,1,e.detail.value);break;case 1:this.ageIndex[1]<this.ageIndex[0]&&this.ageIndex.splice(0,1,e.detail.value);break}this.form.min_age=this.ageList[0][this.ageIndex[0]],this.form.max_age=this.ageList[1][this.ageIndex[1]],this.userInfo.is_request?(this.userInfo.is_request.min_age=this.form.min_age,this.userInfo.is_request.max_age=this.form.max_age):this.userInfo.is_request={min_age:this.form.min_age,max_age:this.form.max_age}}}};t.default=a}).call(this,a("5a52")["default"])},b07e:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-ac07a444]{background-color:#f5f5f5}.content[data-v-ac07a444]{margin-top:%?1?%}.form-wrap[data-v-ac07a444]{padding:0 %?20?%;background:#fff;margin-bottom:%?10?%}.form-wrap .form-title[data-v-ac07a444]{font-size:%?30?%;color:#333;padding:%?20?% %?30?%;position:relative}.form-wrap .form-title[data-v-ac07a444]:before{content:"";display:block;width:%?10?%;height:%?30?%;background-color:#ed4574;position:absolute;left:%?-10?%;top:50%;margin-top:%?-15?%}.form-wrap .form-item[data-v-ac07a444]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?20?%;border-top:%?1?% solid #efefef}.form-wrap .form-item .label .title[data-v-ac07a444]{color:#000;font-size:%?30?%}.form-wrap .form-item .label .tips[data-v-ac07a444]{color:#666;font-size:%?24?%}.form-wrap .form-item .value[data-v-ac07a444]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?80?%;color:#888}.form-wrap .form-item .value uni-input[data-v-ac07a444]{padding-right:0;text-align:right}.form-wrap .form-item .uni-icon-arrowright[data-v-ac07a444]{font-size:%?24?%;color:#999;margin-left:%?10?%}body.?%PAGE?%[data-v-ac07a444]{background-color:#f5f5f5}',""])},d4cf:function(e,t,a){"use strict";a.r(t);var i=a("07a2"),n=a("3531");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);a("e4f5");var o=a("f0c5"),l=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"ac07a444",null);t["default"]=l.exports},e4f5:function(e,t,a){"use strict";var i=a("5817"),n=a.n(i);n.a}}]);