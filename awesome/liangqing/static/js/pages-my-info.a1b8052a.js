(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-info"],{"53cf":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{userInfo:{},form:{think:"",name:"",wechat:"",age:"",education:"",marriage:"",height:"",income:"",occupation:"",house:"",charm:"",blood:"",place:"",cohabitation:""},think_length:0,ageList:["请选择年龄",18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],ageIndex:0,eduList:["请选择学历","初中及以下","高中及中专","大专","本科","硕士及以上"],eduIndex:0,marriageList:["请选择婚姻情况","未婚","离婚","丧偶"],marriageIndex:0,incomeList:["请选择月收入","2000以下","2000-4000","4000-6000","6000-10000","10000-20000","20000以上"],incomeIndex:0,houseList:["请选择住房情况","已购房屋","与父母同住","租房","其他"],houseIndex:0,charmList:["请选择魅力部位","手","鼻梁","腿","耳朵","眼睛","嘴唇","脸","脚","胸部","腰部"],charmIndex:0,bloodList:["请选择血型","A型","B型","AB型","O型"],bloodIndex:0,placeList:["请选择","愿意","不愿意","看情况"],placeIndex:0,cohabitationList:["请选择","可以","不可以","看情况"],cohabitationIndex:0}},onLoad:function(i){this.userInfo=JSON.parse(i.userinfo),this.form.think=this.userInfo.think,this.think_length=this.userInfo.think.length,this.form.name=this.userInfo.name,this.form.wechat=this.userInfo.wechat,this.form.age=this.userInfo.age;for(var t=0;t<this.ageList.length;t++)this.form.age==this.ageList[t]&&(this.ageIndex=t);this.form.education=this.userInfo.education,this.eduIndex=this.userInfo.education,this.form.marriage=this.userInfo.marriage,this.marriageIndex=this.userInfo.marriage,this.form.height=this.userInfo.height,this.form.income=this.userInfo.income,this.incomeIndex=this.userInfo.income,this.form.occupation=this.userInfo.occupation,this.form.house=this.userInfo.house,this.houseIndex=this.userInfo.house,this.form.charm=this.userInfo.charm,this.charmIndex=this.userInfo.charm,this.form.blood=this.userInfo.blood,this.bloodIndex=this.userInfo.blood,this.form.place=this.userInfo.place,this.placeIndex=this.userInfo.place,this.form.cohabitation=this.userInfo.cohabitation,this.cohabitationIndex=this.userInfo.cohabitation},onReady:function(){uni.hideTabBar()},onNavigationBarButtonTap:function(i){return""==this.form.think?(uni.showToast({title:"请输入您的交友心声",position:"bottom",icon:"none"}),!1):""==this.form.name?(uni.showToast({title:"请输入您的昵称",position:"bottom",icon:"none"}),!1):""==this.form.wechat?(uni.showToast({title:"请输入您的微信",position:"bottom",icon:"none"}),!1):""==this.form.age?(uni.showToast({title:"请选择年龄",position:"bottom",icon:"none"}),!1):""==this.form.education?(uni.showToast({title:"请选择您的学历",position:"bottom",icon:"none"}),!1):""==this.form.marriage?(uni.showToast({title:"请选择您的婚姻情况",position:"bottom",icon:"none"}),!1):""==this.form.height?(uni.showToast({title:"请输入您的身高",position:"bottom",icon:"none"}),!1):""==this.form.income?(uni.showToast({title:"请选择您的月收入",position:"bottom",icon:"none"}),!1):""==this.form.occupation?(uni.showToast({title:"请输入您的职业",position:"bottom",icon:"none"}),!1):""==this.form.house?(uni.showToast({title:"请选择您的住房情况",position:"bottom",icon:"none"}),!1):""==this.form.charm?(uni.showToast({title:"请选择您的魅力部位",position:"bottom",icon:"none"}),!1):""==this.form.blood?(uni.showToast({title:"请选择您的血型",position:"bottom",icon:"none"}),!1):""==this.form.place?(uni.showToast({title:"请选择婚后是否与父母同住",position:"bottom",icon:"none"}),!1):""==this.form.cohabitation?(uni.showToast({title:"请选择婚前是否同居",position:"bottom",icon:"none"}),!1):(uni.showLoading({title:""}),this.form.method="V1.UserInfo",this.form.uid=this.userInfo.id,this.form.token=this.userInfo.token,void this.$api.api.ajaxData(this.form,function(i){uni.hideLoading(),uni.showToast({title:i.msg,position:"bottom",icon:"none"}),i.status&&(uni.$emit("my-page",{type:"update"}),uni.navigateBack({delta:1}))}))},methods:{inputThink:function(i){this.form.think=i.detail.value,this.think_length=this.form.think.length},ageSelector:function(i){this.ageIndex=i.target.value,0!=this.ageIndex&&(this.form.age=this.ageList[this.ageIndex])},eduSelector:function(i){this.eduIndex=i.target.value,0!=this.eduIndex&&(this.form.education=this.eduIndex)},marriageSelector:function(i){this.marriageIndex=i.target.value,0!=this.marriageIndex&&(this.form.marriage=this.marriageIndex)},incomeSelector:function(i){this.incomeIndex=i.target.value,0!=this.incomeIndex&&(this.form.income=this.incomeIndex)},houseSelector:function(i){this.houseIndex=i.target.value,0!=this.houseIndex&&(this.form.house=this.houseIndex)},charmSelector:function(i){this.charmIndex=i.target.value,0!=this.charmIndex&&(this.form.charm=this.charmIndex)},bloodSelector:function(i){this.bloodIndex=i.target.value,0!=this.bloodIndex&&(this.form.blood=this.bloodIndex)},placeSelector:function(i){this.placeIndex=i.target.value,0!=this.placeIndex&&(this.form.place=this.placeIndex)},cohabitationSelector:function(i){this.cohabitationIndex=i.target.value,0!=this.cohabitationIndex&&(this.form.cohabitation=this.cohabitationIndex)}}};t.default=n},"9e2b":function(i,t,e){"use strict";var n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"form-wrap"},[e("v-uni-view",{staticClass:"form-title"},[i._v("交友心声")]),e("v-uni-view",{staticClass:"textarea-item"},[e("v-uni-textarea",{staticClass:"textarea",attrs:{placeholder:"请输入您的交友心声",maxlength:140,value:i.form.think},on:{input:function(t){arguments[0]=t=i.$handleEvent(t),i.inputThink.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"length-wrap"},[e("v-uni-text",[i._v(i._s(i.think_length)+"/140")])],1)],1)],1),e("v-uni-view",{staticClass:"form-wrap"},[e("v-uni-view",{staticClass:"form-title"},[i._v("基本信息")]),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-view",{staticClass:"label"},[i._v("昵称")]),e("v-uni-view",{staticClass:"value"},[e("v-uni-input",{attrs:{type:"text",placeholder:"请输入您的昵称"},model:{value:i.form.name,callback:function(t){i.$set(i.form,"name",t)},expression:"form.name"}})],1)],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-view",{staticClass:"label"},[i._v("微信")]),e("v-uni-view",{staticClass:"value"},[e("v-uni-input",{attrs:{type:"text",placeholder:"请输入您的微信"},model:{value:i.form.wechat,callback:function(t){i.$set(i.form,"wechat",t)},expression:"form.wechat"}})],1)],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-view",{staticClass:"label"},[i._v("年龄")]),e("v-uni-view",{staticClass:"value"},[e("v-uni-picker",{attrs:{value:i.ageIndex,range:i.ageList},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.ageSelector.apply(void 0,arguments)}}},[e("v-uni-view",[i._v(i._s(i.ageList[i.ageIndex]))])],1)],1),e("v-uni-view",{staticClass:"uni-icon uni-icon-arrowright"})],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-view",{staticClass:"label"},[i._v("学历")]),e("v-uni-view",{staticClass:"value"},[e("v-uni-picker",{attrs:{value:i.eduIndex,range:i.eduList},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.eduSelector.apply(void 0,arguments)}}},[e("v-uni-view",[i._v(i._s(i.eduList[i.eduIndex]))])],1)],1),e("v-uni-view",{staticClass:"uni-icon uni-icon-arrowright"})],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-view",{staticClass:"label"},[i._v("婚姻情况")]),e("v-uni-view",{staticClass:"value"},[e("v-uni-picker",{attrs:{value:i.marriageIndex,range:i.marriageList},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.marriageSelector.apply(void 0,arguments)}}},[e("v-uni-view",[i._v(i._s(i.marriageList[i.marriageIndex]))])],1)],1),e("v-uni-view",{staticClass:"uni-icon uni-icon-arrowright"})],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-view",{staticClass:"label"},[i._v("身高")]),e("v-uni-view",{staticClass:"value"},[e("v-uni-input",{attrs:{type:"number",placeholder:"请填写您的身高"},model:{value:i.form.height,callback:function(t){i.$set(i.form,"height",t)},expression:"form.height"}})],1),e("v-uni-view",{staticClass:"uni-icon uni-icon-arrowright"})],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-view",{staticClass:"label"},[i._v("月收入")]),e("v-uni-view",{staticClass:"value"},[e("v-uni-picker",{attrs:{value:i.incomeIndex,range:i.incomeList},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.incomeSelector.apply(void 0,arguments)}}},[e("v-uni-view",[i._v(i._s(i.incomeList[i.incomeIndex]))])],1)],1),e("v-uni-view",{staticClass:"uni-icon uni-icon-arrowright"})],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-view",{staticClass:"label"},[i._v("职业")]),e("v-uni-view",{staticClass:"value"},[e("v-uni-input",{attrs:{type:"text",placeholder:"请输入您的职业"},model:{value:i.form.occupation,callback:function(t){i.$set(i.form,"occupation",t)},expression:"form.occupation"}})],1)],1)],1),e("v-uni-view",{staticClass:"form-wrap"},[e("v-uni-view",{staticClass:"form-title"},[i._v("详细资料")]),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-view",{staticClass:"label"},[i._v("住房情况")]),e("v-uni-view",{staticClass:"value"},[e("v-uni-picker",{attrs:{value:i.houseIndex,range:i.houseList},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.houseSelector.apply(void 0,arguments)}}},[e("v-uni-view",[i._v(i._s(i.houseList[i.houseIndex]))])],1)],1),e("v-uni-view",{staticClass:"uni-icon uni-icon-arrowright"})],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-view",{staticClass:"label"},[i._v("魅力部位")]),e("v-uni-view",{staticClass:"value"},[e("v-uni-picker",{attrs:{value:i.charmIndex,range:i.charmList},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.charmSelector.apply(void 0,arguments)}}},[e("v-uni-view",[i._v(i._s(i.charmList[i.charmIndex]))])],1)],1),e("v-uni-view",{staticClass:"uni-icon uni-icon-arrowright"})],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-view",{staticClass:"label"},[i._v("血型")]),e("v-uni-view",{staticClass:"value"},[e("v-uni-picker",{attrs:{value:i.bloodIndex,range:i.bloodList},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.bloodSelector.apply(void 0,arguments)}}},[e("v-uni-view",[i._v(i._s(i.bloodList[i.bloodIndex]))])],1)],1),e("v-uni-view",{staticClass:"uni-icon uni-icon-arrowright"})],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-view",{staticClass:"label"},[i._v("婚后与父母同居")]),e("v-uni-view",{staticClass:"value"},[e("v-uni-picker",{attrs:{value:i.placeIndex,range:i.placeList},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.placeSelector.apply(void 0,arguments)}}},[e("v-uni-view",[i._v(i._s(i.placeList[i.placeIndex]))])],1)],1),e("v-uni-view",{staticClass:"uni-icon uni-icon-arrowright"})],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-view",{staticClass:"label"},[i._v("婚前同居")]),e("v-uni-view",{staticClass:"value"},[e("v-uni-picker",{attrs:{value:i.cohabitationIndex,range:i.cohabitationList},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.cohabitationSelector.apply(void 0,arguments)}}},[e("v-uni-view",[i._v(i._s(i.cohabitationList[i.cohabitationIndex]))])],1)],1),e("v-uni-view",{staticClass:"uni-icon uni-icon-arrowright"})],1)],1)],1)},o=[];e.d(t,"a",function(){return n}),e.d(t,"b",function(){return o})},a890:function(i,t,e){"use strict";var n=e("f611"),o=e.n(n);o.a},be66:function(i,t,e){t=i.exports=e("2350")(!1),t.push([i.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-758512ec]{background-color:#f5f5f5}.content[data-v-758512ec]{padding-top:%?1?%}.form-wrap[data-v-758512ec]{padding:0 %?20?%;background:#fff;margin-bottom:%?10?%}.form-wrap .form-title[data-v-758512ec]{font-size:%?30?%;color:#333;padding:%?20?% %?30?%;position:relative}.form-wrap .form-title[data-v-758512ec]:before{content:"";display:block;width:%?10?%;height:%?30?%;background-color:#ed4574;position:absolute;left:%?-10?%;top:50%;margin-top:%?-15?%}.form-wrap .textarea[data-v-758512ec]{width:100%;padding:%?10?%;box-sizing:border-box}.form-wrap .length-wrap[data-v-758512ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;padding:%?10?% %?20?%;box-sizing:border-box}.form-wrap .form-item[data-v-758512ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?20?%;border-top:%?1?% solid #efefef}.form-wrap .form-item .label .title[data-v-758512ec]{color:#000;font-size:%?30?%}.form-wrap .form-item .label .tips[data-v-758512ec]{color:#666;font-size:%?24?%}.form-wrap .form-item .value[data-v-758512ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?80?%;color:#888}.form-wrap .form-item .value uni-input[data-v-758512ec]{padding-right:0;text-align:right}.form-wrap .form-item .uni-icon-arrowright[data-v-758512ec]{font-size:%?24?%;color:#999;margin-left:%?10?%}.form-wrap .form-item .sex-picker[data-v-758512ec]{width:100%}.form-wrap .form-item .sex-picker .uni-input[data-v-758512ec]{padding-right:0;text-align:right}body.?%PAGE?%[data-v-758512ec]{background-color:#f5f5f5}',""])},d463:function(i,t,e){"use strict";e.r(t);var n=e("9e2b"),o=e("ebe9");for(var a in o)"default"!==a&&function(i){e.d(t,i,function(){return o[i]})}(a);e("a890");var s=e("f0c5"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"758512ec",null);t["default"]=r.exports},ebe9:function(i,t,e){"use strict";e.r(t);var n=e("53cf"),o=e.n(n);for(var a in n)"default"!==a&&function(i){e.d(t,i,function(){return n[i]})}(a);t["default"]=o.a},f611:function(i,t,e){var n=e("be66");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var o=e("4f06").default;o("77945ae0",n,!0,{sourceMap:!1,shadowMode:!1})}}]);