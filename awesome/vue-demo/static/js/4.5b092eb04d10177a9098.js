webpackJsonp([4],{"5cNb":function(a,t,e){"use strict";function n(a){e("KNAR")}Object.defineProperty(t,"__esModule",{value:!0});var l={name:"salary-tax-calculator",data:function(){return{money:0,shebao:0,gongjijin:0,zhuanxiang:0,taxSum:0,taxs:[],youMoneySum:0,youMoneys:[]}},methods:{calculator:function(a,t,e,n){var l=a-t-e-n-5e3;if(l<=0)return this.$$toast("可怜啊你不用交税"),{taxSum:0,taxs:0,youMoneySum:0,youMoneys:0};for(var r=0,s=[],o=0,i=[],u=1;u<=12;u++){var c=l*u,m=0;c<=36e3?m=.03*c-r:c>36e3&&c<=144e3?m=.1*c-2520-r:c>144e3&&c<=3e5?m=.2*c-16920-r:c>3e5&&c<=42e4?m=.25*c-31920-r:c>42e4&&c<=66e4?m=.3*c-52920-r:c>66e4&&c<=96e4?m=.35*c-85920-r:c>96e4&&(m=.45*c-181920-r),r+=m;var A=a-t-e-m;o+=A,s.push(m),i.push(A)}return{taxSum:r,taxs:s,youMoneySum:o,youMoneys:i}},submit:function(){var a=this.calculator(this.money,this.shebao,this.gongjijin,this.zhuanxiang),t=a.taxSum,e=a.taxs,n=a.youMoneySum,l=a.youMoneys;this.taxSum=t,this.taxs=e,this.youMoneySum=n,this.youMoneys=l}}},r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"salary-tax-calculator"},[e("h3",[a._v("工资(个税)计算器")]),a._v(" "),e("div",{staticClass:"layout-flex-acjc"},[e("div",{staticClass:"lable"},[a._v("\n      税前工资\n    ")]),a._v(" "),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.money,expression:"money"}],attrs:{type:"number"},domProps:{value:a.money},on:{input:function(t){t.target.composing||(a.money=t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"layout-flex-acjc"},[e("div",{staticClass:"lable"},[a._v("\n      社保总额(个人)\n    ")]),a._v(" "),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.shebao,expression:"shebao"}],attrs:{type:"number"},domProps:{value:a.shebao},on:{input:function(t){t.target.composing||(a.shebao=t.target.value)}}})])]),a._v(" "),e("h6",[a._v("社保基数*(养老保险比例2%+医疗保险8%+失业保险0.5%)")]),a._v(" "),e("div",{staticClass:"layout-flex-acjc"},[e("div",{staticClass:"lable"},[a._v("\n      公积金总额(个人)\n    ")]),a._v(" "),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.gongjijin,expression:"gongjijin"}],attrs:{type:"number"},domProps:{value:a.gongjijin},on:{input:function(t){t.target.composing||(a.gongjijin=t.target.value)}}})])]),a._v(" "),e("h6",[a._v("公积金基数*公积金比例(8%-12%)")]),a._v(" "),e("div",{staticClass:"layout-flex-acjc"},[e("div",{staticClass:"lable"},[a._v("\n      专项附加扣除总额\n    ")]),a._v(" "),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.zhuanxiang,expression:"zhuanxiang"}],attrs:{type:"number"},domProps:{value:a.zhuanxiang},on:{input:function(t){t.target.composing||(a.zhuanxiang=t.target.value)}}})])]),a._v(" "),e("h6",[a._v("专项附加扣除(6项，个人所得税申报)")]),a._v(" "),e("div",{staticClass:"submit-wrap"},[e("button",{staticClass:"submit",on:{click:a.submit}},[a._v("计算")])]),a._v(" "),a.youMoneySum?e("div",{staticClass:"result"},[e("h3",[a._v("年度收入总额："+a._s(a._f("fixNumber")(a.youMoneySum,1)))]),a._v(" "),e("h6",[a._v("每月收入列表")]),a._v(" "),e("ul",a._l(a.youMoneys,function(t,n){return e("li",[a._v("第"+a._s(n+1)+"月："+a._s(a._f("fixNumber")(t,1)))])}),0),a._v(" "),e("h3",[a._v("年度交税总额："+a._s(a._f("fixNumber")(a.taxSum,1)))]),a._v(" "),e("h6",[a._v("每月交税列表")]),a._v(" "),e("ul",a._l(a.taxs,function(t,n){return e("li",[a._v("第"+a._s(n+1)+"月："+a._s(a._f("fixNumber")(t,1)))])}),0)]):a._e()])},s=[],o={render:r,staticRenderFns:s},i=o,u=e("VU/8"),c=n,m=u(l,i,!1,c,"data-v-78763e5c",null);t.default=m.exports},KNAR:function(a,t,e){var n=e("j3sm");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e("rjj0")("ab8e5344",n,!0,{})},j3sm:function(a,t,e){t=a.exports=e("FZ+f")(!0),t.push([a.i,"\n.salary-tax-calculator input[data-v-78763e5c] {\n  min-width: 3rem;\n  padding: 0.1rem;\n  border: 1px solid #ddd;\n}\n.salary-tax-calculator h3[data-v-78763e5c], .salary-tax-calculator h6[data-v-78763e5c] {\n  margin-bottom: 0.2rem;\n  text-align: center;\n}\n.salary-tax-calculator .layout-flex-acjc[data-v-78763e5c] {\n  margin-bottom: 0.2rem;\n}\n.salary-tax-calculator .lable[data-v-78763e5c] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-right: 0.2rem;\n  text-align: right;\n}\n.salary-tax-calculator .input[data-v-78763e5c] {\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n}\n.salary-tax-calculator .submit-wrap[data-v-78763e5c] {\n  text-align: center;\n}\n.salary-tax-calculator .submit[data-v-78763e5c] {\n  padding: 0.1rem 0.3rem;\n  font-size: 0.3rem;\n  line-height: 0.5rem;\n  color: #fff;\n  background-color: blue;\n  border-radius: 0.2rem;\n}\n.salary-tax-calculator .result h3[data-v-78763e5c] {\n  margin-top: 0.2rem;\n}\n.salary-tax-calculator .result ul[data-v-78763e5c] {\n  text-align: center;\n  border: 1px solid #ddd;\n}\n.salary-tax-calculator .result ul li[data-v-78763e5c] {\n    padding: 0.1rem;\n}\n","",{version:3,sources:["/Users/zhouyu/Projects/zhouyu/github/vue-demo/src/router/salary-tax-calculator/index.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;CACxB;AACD;EACE,sBAAsB;EACtB,mBAAmB;CACpB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,oBAAoB;EACpB,gBAAgB;MACZ,YAAY;UACR,QAAQ;EAChB,qBAAqB;EACrB,kBAAkB;CACnB;AACD;EACE,oBAAoB;EACpB,gBAAgB;MACZ,YAAY;UACR,QAAQ;CACjB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,uBAAuB;EACvB,kBAAkB;EAClB,oBAAoB;EACpB,YAAY;EACZ,uBAAuB;EACvB,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,uBAAuB;CACxB;AACD;IACI,gBAAgB;CACnB",file:"index.vue",sourcesContent:["\n.salary-tax-calculator input[data-v-78763e5c] {\n  min-width: 3rem;\n  padding: 0.1rem;\n  border: 1px solid #ddd;\n}\n.salary-tax-calculator h3[data-v-78763e5c], .salary-tax-calculator h6[data-v-78763e5c] {\n  margin-bottom: 0.2rem;\n  text-align: center;\n}\n.salary-tax-calculator .layout-flex-acjc[data-v-78763e5c] {\n  margin-bottom: 0.2rem;\n}\n.salary-tax-calculator .lable[data-v-78763e5c] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-right: 0.2rem;\n  text-align: right;\n}\n.salary-tax-calculator .input[data-v-78763e5c] {\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n}\n.salary-tax-calculator .submit-wrap[data-v-78763e5c] {\n  text-align: center;\n}\n.salary-tax-calculator .submit[data-v-78763e5c] {\n  padding: 0.1rem 0.3rem;\n  font-size: 0.3rem;\n  line-height: 0.5rem;\n  color: #fff;\n  background-color: blue;\n  border-radius: 0.2rem;\n}\n.salary-tax-calculator .result h3[data-v-78763e5c] {\n  margin-top: 0.2rem;\n}\n.salary-tax-calculator .result ul[data-v-78763e5c] {\n  text-align: center;\n  border: 1px solid #ddd;\n}\n.salary-tax-calculator .result ul li[data-v-78763e5c] {\n    padding: 0.1rem;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=4.5b092eb04d10177a9098.js.map