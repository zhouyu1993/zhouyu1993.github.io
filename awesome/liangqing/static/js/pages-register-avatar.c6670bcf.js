(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-avatar"],{"2d61":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-726dd1d1]{background:#f5f5f5}.steps-wrap[data-v-726dd1d1]{padding:%?80?% %?200?%}.steps-wrap .steps-list[data-v-726dd1d1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.steps-wrap .steps-list .steps-item[data-v-726dd1d1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?60?%;height:%?60?%;background:#cbcbcb;border-radius:%?60?%;position:relative;margin:0 %?78?%}.steps-wrap .steps-list .steps-item.active[data-v-726dd1d1]{background:#ff76a8}.steps-wrap .steps-list .steps-item.active[data-v-726dd1d1]:before{background:#ff76a8}.steps-wrap .steps-list .steps-item.active[data-v-726dd1d1]:after{background:#ff76a8}.steps-wrap .steps-list .steps-item uni-text[data-v-726dd1d1]{font-size:%?20?%;color:#fff}.steps-wrap .steps-list .steps-item[data-v-726dd1d1]:before{content:"";width:%?80?%;height:%?20?%;background:#cbcbcb;position:absolute;left:%?-78?%;top:50%;margin-top:%?-10?%}.steps-wrap .steps-list .steps-item[data-v-726dd1d1]:after{content:"";width:%?80?%;height:%?20?%;background:#cbcbcb;position:absolute;right:%?-78?%;top:50%;margin-top:%?-10?%}.steps-wrap .steps-list .steps-item[data-v-726dd1d1]:first-child{margin-left:0}.steps-wrap .steps-list .steps-item[data-v-726dd1d1]:first-child:before{display:none}.steps-wrap .steps-list .steps-item[data-v-726dd1d1]:last-child{margin-right:0}.steps-wrap .steps-list .steps-item[data-v-726dd1d1]:last-child:after{display:none}.upload-wrap[data-v-726dd1d1]{background-color:#fff;padding-top:%?50?%}.avatar-wrap[data-v-726dd1d1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.avatar-wrap .avatar[data-v-726dd1d1]{width:%?360?%;height:%?360?%;border-radius:%?10?%;background-color:#cbcbcb}.btn-wrap[data-v-726dd1d1]{padding:%?50?% %?100?%}.btn-wrap uni-button[data-v-726dd1d1]{border-radius:%?100?%}.btn-wrap uni-button+uni-button[data-v-726dd1d1]{margin-top:%?20?%}.btn-wrap uni-button.camera[data-v-726dd1d1]{border:%?1?% solid #ff76a8;color:#ff76a8}.pass-wrap[data-v-726dd1d1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?100?%}.pass-wrap uni-text[data-v-726dd1d1]{color:#ff76a8;font-size:%?30?%}body.?%PAGE?%[data-v-726dd1d1]{background:#f5f5f5}',""])},"5dad":function(t,e,i){"use strict";(function(t){var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("f499"));i("28a5");var o=n(i("9f05")),s={data:function(){return{form:{file:""},avatar:"/static/img/auth.png",qiniuToken:"",domain:"",progress:0}},onLoad:function(t){},onReady:function(){this.getQiniuToken()},onNavigationBarButtonTap:function(t){var e=this;if(""==this.form.file)return uni.showToast({title:"请上传头像",position:"bottom",icon:"none"}),!1;uni.showLoading({title:""}),uni.getStorage({key:"user_info",success:function(t){e.$api.api.ajaxData({method:"V1.UserUpload",uid:t.data.id,token:t.data.token,type:"3",file:e.form.file},function(t){uni.hideLoading(),uni.showToast({title:t.msg,position:"bottom",icon:"none"}),t.status&&uni.switchTab({url:"../dating/dating"})})}})},methods:{getQiniuToken:function(){var t=this;uni.getStorage({key:"user_info",success:function(e){t.$api.api.ajaxData({method:"V1.QiniuToken",uid:e.data.id,token:e.data.token},function(e){e.status&&(t.qiniuToken=e.data.token,t.domain=e.data.domain)})}})},upload:function(e){var i=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:[e],success:function(e){var n=e.tempFilePaths[0].split("/");uni.showLoading({title:i.progress+"%"}),o.default.upload(e.tempFilePaths[0],function(t){uni.hideLoading(),i.avatar=e.tempFilePaths[0],i.form.file=t.key},function(e){t.log("err: "+(0,a.default)(e))},{region:"SCN",domain:i.domain,key:n[n.length-1],uptoken:i.qiniuToken},function(t){i.progress=t.progress},function(){},function(){},function(){})}})},previewImage:function(){""!=this.avatar&&uni.previewImage({current:0,urls:[this.avatar],indicator:"none",loop:!1})}}};e.default=s}).call(this,i("5a52")["default"])},"9f05":function(t,e,i){"use strict";(function(e){i("28a5"),function(){var i={qiniuRegion:"",qiniuImageURLPrefix:"",qiniuUploadToken:"",qiniuUploadTokenURL:"",qiniuUploadTokenFunction:null,qiniuShouldUseQiniuFileName:!1};function n(t){i={qiniuRegion:"",qiniuImageURLPrefix:"",qiniuUploadToken:"",qiniuUploadTokenURL:"",qiniuUploadTokenFunction:null,qiniuShouldUseQiniuFileName:!1},a(t)}function a(t){t.region?i.qiniuRegion=t.region:e.error("qiniu uploader need your bucket region"),t.uptoken?i.qiniuUploadToken=t.uptoken:t.uptokenURL?i.qiniuUploadTokenURL=t.uptokenURL:t.uptokenFunc&&(i.qiniuUploadTokenFunction=t.uptokenFunc),t.domain&&(i.qiniuImageURLPrefix=t.domain),i.qiniuShouldUseQiniuFileName=t.shouldUseQiniuFileName}function o(t,n,o,r,d,c,p,l){if(null!=t)if(r&&a(r),i.qiniuUploadToken)s(t,n,o,r,d,c,p,l);else if(i.qiniuUploadTokenURL)u(function(){s(t,n,o,r,d,c,p,l)});else{if(!i.qiniuUploadTokenFunction)return void e.error("qiniu uploader need one of [uptoken, uptokenURL, uptokenFunc]");if(i.qiniuUploadToken=i.qiniuUploadTokenFunction(),null==i.qiniuUploadToken&&i.qiniuUploadToken.length>0)return void e.error("qiniu UploadTokenFunction result is null, please check the return value");s(t,n,o,r,d,c,p,l)}else e.error("qiniu uploader need filePath to upload")}function s(t,n,a,o,s,u,d,c){if(null==i.qiniuUploadToken&&i.qiniuUploadToken.length>0)e.error("qiniu UploadToken is null, please check the init config or networking");else{var p=r(i.qiniuRegion),l=t.split("//")[1];o&&o.key&&(l=o.key);var f={token:i.qiniuUploadToken};i.qiniuShouldUseQiniuFileName||(f["key"]=l),d&&d();var k=wx.uploadFile({url:p,filePath:t,name:"file",formData:f,success:function(t){var o=t.data;try{var s=JSON.parse(o),u=i.qiniuImageURLPrefix+"/"+s.key;s.fileUrl=u,s.imageURL=u,n&&n(s)}catch(r){e.log(r),e.log("parse JSON failed, origin String is: "+o),a&&a(r)}},fail:function(t){e.error(t),a&&a(t)},complete:function(t){c&&c(t)}});k.onProgressUpdate(function(t){s&&s(t)}),u&&u(function(){k.abort()})}}function u(t){wx.request({url:i.qiniuUploadTokenURL,success:function(n){var a=n.data.uptoken;a&&a.length>0?(i.qiniuUploadToken=a,t&&t()):e.error("qiniuUploader cannot get your token, please check the uptokenURL or server")},fail:function(t){e.error("qiniu UploadToken is null, please check the init config or networking: "+t)}})}function r(t){var i=null;switch(t){case"ECN":i="http://up.qiniup.com";break;case"NCN":i="https://up-z1.qiniup.com";break;case"SCN":i="https://up-z2.qiniup.com";break;case"NA":i="https://up-na0.qiniup.com";break;case"ASG":i="https://up-as0.qiniup.com";break;default:e.error("please make the region is with one of [ECN, SCN, NCN, NA, ASG]")}return i}t.exports={init:n,upload:o}}()}).call(this,i("5a52")["default"])},a47e:function(t,e,i){"use strict";i.r(e);var n=i("5dad"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},c1f4:function(t,e,i){var n=i("2d61");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("534d0026",n,!0,{sourceMap:!1,shadowMode:!1})},d1b9:function(t,e,i){"use strict";var n=i("c1f4"),a=i.n(n);a.a},ee56:function(t,e,i){"use strict";i.r(e);var n=i("fa5c"),a=i("a47e");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("d1b9");var s=i("f0c5"),u=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"726dd1d1",null);e["default"]=u.exports},fa5c:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"steps-wrap"},[i("v-uni-view",{staticClass:"steps-list"},[i("v-uni-view",{staticClass:"steps-item active"},[i("v-uni-text",[t._v("1")])],1),i("v-uni-view",{staticClass:"steps-item active"},[i("v-uni-text",[t._v("2")])],1)],1)],1),i("v-uni-view",{staticClass:"upload-wrap"},[i("v-uni-view",{staticClass:"avatar-wrap"},[i("v-uni-image",{staticClass:"avatar",attrs:{src:t.avatar,mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"btn-wrap"},[i("v-uni-button",{staticClass:"album",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload("album")}}},[t._v("本地上传")]),i("v-uni-button",{staticClass:"camera",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload("camera")}}},[t._v("拍照上传")])],1)],1),i("v-uni-view",{staticClass:"pass-wrap"},[i("v-uni-navigator",{attrs:{url:"../home/home","open-type":"switchTab"}},[i("v-uni-text",[t._v("跳过")])],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})}}]);