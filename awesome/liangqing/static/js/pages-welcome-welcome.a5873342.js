(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-welcome-welcome"],{"05f8":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".welcome-wrap[data-v-5fb7467b]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.welcome[data-v-5fb7467b]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background-color:rgba(0,0,0,.3);position:absolute;left:0;right:0;top:0;bottom:0}.logo-wrap[data-v-5fb7467b]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?200?%}.logo[data-v-5fb7467b]{width:%?160?%;height:%?160?%;margin-bottom:%?20?%}.appname[data-v-5fb7467b]{font-size:%?30?%;color:#fff}.welcome-content[data-v-5fb7467b]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?50?%}.login-wrap[data-v-5fb7467b]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?150?%}.login-item[data-v-5fb7467b]{width:%?80?%;height:%?80?%}.agreement-wrap[data-v-5fb7467b]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.agreement-text[data-v-5fb7467b]{font-size:%?24?%;color:#fff}.agreement-link[data-v-5fb7467b]{font-size:%?24?%;color:#ff76a8}",""])},"10f5":function(e,t,i){"use strict";i.r(t);var n=i("49b4b"),a=i("31cd");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("1c7f");var c=i("f0c5"),r=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"5fb7467b",null);t["default"]=r.exports},"1c7f":function(e,t,i){"use strict";var n=i("7ba9"),a=i.n(n);a.a},"31cd":function(e,t,i){"use strict";i.r(t);var n=i("903c"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"49b4b":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"welcome-wrap"},[i("v-uni-image",{staticClass:"bg",style:{width:e.screenWidth+"px",height:e.screenHeight+"px"},attrs:{src:"http://love-storage.uxiao.xin/start_bg.png",mode:"aspectFill"}}),i("v-uni-view",{staticClass:"welcome"},[i("v-uni-view",{staticClass:"logo-wrap"},[i("v-uni-image",{staticClass:"logo",attrs:{src:"/static/lqlogo.png",mode:""}}),i("v-uni-text",{staticClass:"appname"},[e._v(e._s(e.appname))])],1),i("v-uni-view",{staticClass:"welcome-content"},[i("v-uni-view",{staticClass:"login-wrap"},[i("v-uni-image",{staticClass:"login-item",attrs:{src:"/static/img/weixin_login.png",mode:"aspectFill"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openWeixin.apply(void 0,arguments)}}}),i("v-uni-image",{staticClass:"login-item",attrs:{src:"/static/img/phone_login.png",mode:"aspectFill"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openLogin.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"agreement-wrap"},[i("v-uni-text",{staticClass:"agreement-text"},[e._v("注册或登录即代表你同意")]),i("v-uni-text",{staticClass:"agreement-link",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openProtocol.apply(void 0,arguments)}}},[e._v("《用户协议》")])],1)],1)],1)],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"7ba9":function(e,t,i){var n=i("05f8");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("6d689877",n,!0,{sourceMap:!1,shadowMode:!1})},"903c":function(e,t,i){"use strict";(function(e){var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("1b2e")),o={data:function(){return{appname:"",device_code:"",screenWidth:0,screenHeight:0}},onLoad:function(){try{var t=uni.getSystemInfoSync();t&&(this.screenWidth=t.screenWidth+1,this.screenHeight=t.screenHeight+1)}catch(i){e.log(i)}},onReady:function(){try{var t=uni.getStorageSync("device_code");t?this.device_code=t:this.getDeviceInfo()}catch(i){e.log(i)}},methods:{getDeviceInfo:function(){},createDevice:function(t){var i=this;try{var n=uni.getSystemInfoSync(),o=0;"android"==n.platform&&(o=1),"ios"==n.platform&&(o=2),a.default.api.ajaxData({method:"V1.CreateDevice",device_code:t,type:o,modelname:n.model,version:n.version,app_version:plus.runtime.version,app_list:"",address_list:""},function(t){t.status&&(i.device_code=t.data.device_code,uni.setStorage({key:"device_code",data:t.data.device_code,success:function(){e.log("device_code已存储")}}))})}catch(c){e.log(c),setTimeout(function(){i.createDevice(t)},2e3)}},openLogin:function(){uni.navigateTo({url:"../login/login"})},openWeixin:function(){var t=this;if(""==this.device_code)return!1;uni.showLoading({title:""}),uni.login({provider:"weixin",success:function(i){uni.getUserInfo({provider:"weixin",success:function(i){e.log("微信信息",i),a.default.api.ajaxData({method:"V1.WeChatLogin",openid:i.userInfo.openId,name:i.userInfo.nickName,sex:i.userInfo.gender+"",city:i.userInfo.city,headimgurl:i.userInfo.avatarUrl,tuid:"0",channel:"0",device_code:t.device_code},function(t){if(uni.hideLoading(),t.status){var i={id:t.data.id,lid:t.data.lid,name:t.data.name,avatar:t.data.avatar,tel:t.data.tel+"",sex:t.data.sex,age:t.data.age,type:t.data.type,vip:t.data.vip,tuid:t.data.tuid,channel:t.data.channel,token:t.data.token,UserSig:t.data.UserSig,UserSigTwo:t.data.UserSigTwo};uni.setStorage({key:"user_info",data:i,success:function(){e.log("user_info已存储")}}),uni.$emit("main",{type:"loginIM",data:{id:t.data.id,UserSig:t.data.UserSig}})}})}})},fail:function(e){uni.hideLoading(),uni.showToast({title:e.errMsg,position:"bottom",icon:"none"})}})},openProtocol:function(){uni.navigateTo({url:"protocol"})}}};t.default=o}).call(this,i("5a52")["default"])}}]);