webpackJsonp([4],{"5cNb":function(a,t,n){"use strict";function e(a){n("TORG")}Object.defineProperty(t,"__esModule",{value:!0});var l={name:"salary-tax-calculator",data:function(){return{money:0,shebao:0,gongjijin:0,zhuanxiang:0,taxSum:0,taxs:[],youMoneySum:0,youMoneys:[]}},methods:{calculator:function(a,t,n,e){var l=a-t-n-e-5e3;if(l<=0)return this.$$toast("可怜啊你不用交税"),{taxSum:0,taxs:0,youMoneySum:0,youMoneys:0};for(var r=0,s=[],o=0,i=[],u=1;u<=12;u++){var c=l*u,d=0;c<=36e3?d=.03*c-r:c>36e3&&c<=144e3?d=.1*c-2520-r:c>144e3&&c<=3e5?d=.2*c-16920-r:c>3e5&&c<=42e4?d=.25*c-31920-r:c>42e4&&c<=66e4?d=.3*c-52920-r:c>66e4&&c<=96e4?d=.35*c-85920-r:c>96e4&&(d=.45*c-181920-r),r+=d;var m=a-t-n-d;o+=m,s.push(d),i.push(m)}return{taxSum:r,taxs:s,youMoneySum:o,youMoneys:i}},submit:function(){var a=this.calculator(this.money,this.shebao,this.gongjijin,this.zhuanxiang),t=a.taxSum,n=a.taxs,e=a.youMoneySum,l=a.youMoneys;this.taxSum=t,this.taxs=n,this.youMoneySum=e,this.youMoneys=l}}},r=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"salary-tax-calculator"},[n("h3",[a._v("工资(个税)计算器")]),a._v(" "),n("div",{staticClass:"layout-flex-acjc"},[n("div",{staticClass:"lable"},[a._v("\n      税前工资\n    ")]),a._v(" "),n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.money,expression:"money"}],attrs:{type:"number"},domProps:{value:a.money},on:{input:function(t){t.target.composing||(a.money=t.target.value)}}})])]),a._v(" "),n("div",{staticClass:"layout-flex-acjc"},[n("div",{staticClass:"lable"},[a._v("\n      社保总额\n    ")]),a._v(" "),n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.shebao,expression:"shebao"}],attrs:{type:"number"},domProps:{value:a.shebao},on:{input:function(t){t.target.composing||(a.shebao=t.target.value)}}})])]),a._v(" "),n("h6",[a._v("社保基数*(养老保险比例20%+医疗保险8%+失业保险0.5%)")]),a._v(" "),n("div",{staticClass:"layout-flex-acjc"},[n("div",{staticClass:"lable"},[a._v("\n      公积金总额\n    ")]),a._v(" "),n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.gongjijin,expression:"gongjijin"}],attrs:{type:"number"},domProps:{value:a.gongjijin},on:{input:function(t){t.target.composing||(a.gongjijin=t.target.value)}}})])]),a._v(" "),n("h6",[a._v("公积金基数*公积金比例(8%-12%)")]),a._v(" "),n("div",{staticClass:"layout-flex-acjc"},[n("div",{staticClass:"lable"},[a._v("\n      专项附加扣除总额\n    ")]),a._v(" "),n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.zhuanxiang,expression:"zhuanxiang"}],attrs:{type:"number"},domProps:{value:a.zhuanxiang},on:{input:function(t){t.target.composing||(a.zhuanxiang=t.target.value)}}})])]),a._v(" "),n("h6",[a._v("专项附加扣除(6项，个人所得税申报)")]),a._v(" "),n("div",{staticClass:"submit-wrap"},[n("button",{staticClass:"submit",on:{click:a.submit}},[a._v("计算")])]),a._v(" "),a.youMoneySum?n("div",{staticClass:"result"},[n("h3",[a._v("年度收入总额："+a._s(a._f("fixNumber")(a.youMoneySum,1)))]),a._v(" "),n("h6",[a._v("每月收入列表")]),a._v(" "),n("ul",a._l(a.youMoneys,function(t,e){return n("li",[a._v("第"+a._s(e+1)+"月："+a._s(a._f("fixNumber")(t,1)))])}),0),a._v(" "),n("h3",[a._v("年度交税总额："+a._s(a._f("fixNumber")(a.taxSum,1)))]),a._v(" "),n("h6",[a._v("每月交税列表")]),a._v(" "),n("ul",a._l(a.taxs,function(t,e){return n("li",[a._v("第"+a._s(e+1)+"月："+a._s(a._f("fixNumber")(t,1)))])}),0)]):a._e()])},s=[],o={render:r,staticRenderFns:s},i=o,u=n("VU/8"),c=e,d=u(l,i,!1,c,"data-v-2f86a4d0",null);t.default=d.exports},TORG:function(a,t,n){var e=n("rsBX");"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);n("rjj0")("e667c722",e,!0,{})},rsBX:function(a,t,n){t=a.exports=n("FZ+f")(!0),t.push([a.i,"\n.salary-tax-calculator input[data-v-2f86a4d0] {\n  min-width: 3rem;\n  padding: 0.1rem;\n  border: 1px solid #ddd;\n}\n.salary-tax-calculator h3[data-v-2f86a4d0], .salary-tax-calculator h6[data-v-2f86a4d0] {\n  margin-bottom: 0.2rem;\n  text-align: center;\n}\n.salary-tax-calculator .layout-flex-acjc[data-v-2f86a4d0] {\n  margin-bottom: 0.2rem;\n}\n.salary-tax-calculator .lable[data-v-2f86a4d0] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-right: 0.2rem;\n  text-align: right;\n}\n.salary-tax-calculator .input[data-v-2f86a4d0] {\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n}\n.salary-tax-calculator .submit-wrap[data-v-2f86a4d0] {\n  text-align: center;\n}\n.salary-tax-calculator .submit[data-v-2f86a4d0] {\n  padding: 0.1rem 0.3rem;\n  font-size: 0.3rem;\n  line-height: 0.5rem;\n  color: #fff;\n  background-color: blue;\n  border-radius: 0.2rem;\n}\n.salary-tax-calculator .result h3[data-v-2f86a4d0] {\n  margin-top: 0.2rem;\n}\n.salary-tax-calculator .result ul[data-v-2f86a4d0] {\n  text-align: center;\n  border: 1px solid #ddd;\n}\n.salary-tax-calculator .result ul li[data-v-2f86a4d0] {\n    padding: 0.1rem;\n}\n","",{version:3,sources:["/Users/zhouyu/Projects/zhouyu/github/vue-demo/src/router/salary-tax-calculator/index.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;CACxB;AACD;EACE,sBAAsB;EACtB,mBAAmB;CACpB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,oBAAoB;EACpB,gBAAgB;MACZ,YAAY;UACR,QAAQ;EAChB,qBAAqB;EACrB,kBAAkB;CACnB;AACD;EACE,oBAAoB;EACpB,gBAAgB;MACZ,YAAY;UACR,QAAQ;CACjB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,uBAAuB;EACvB,kBAAkB;EAClB,oBAAoB;EACpB,YAAY;EACZ,uBAAuB;EACvB,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,uBAAuB;CACxB;AACD;IACI,gBAAgB;CACnB",file:"index.vue",sourcesContent:["\n.salary-tax-calculator input[data-v-2f86a4d0] {\n  min-width: 3rem;\n  padding: 0.1rem;\n  border: 1px solid #ddd;\n}\n.salary-tax-calculator h3[data-v-2f86a4d0], .salary-tax-calculator h6[data-v-2f86a4d0] {\n  margin-bottom: 0.2rem;\n  text-align: center;\n}\n.salary-tax-calculator .layout-flex-acjc[data-v-2f86a4d0] {\n  margin-bottom: 0.2rem;\n}\n.salary-tax-calculator .lable[data-v-2f86a4d0] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-right: 0.2rem;\n  text-align: right;\n}\n.salary-tax-calculator .input[data-v-2f86a4d0] {\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n}\n.salary-tax-calculator .submit-wrap[data-v-2f86a4d0] {\n  text-align: center;\n}\n.salary-tax-calculator .submit[data-v-2f86a4d0] {\n  padding: 0.1rem 0.3rem;\n  font-size: 0.3rem;\n  line-height: 0.5rem;\n  color: #fff;\n  background-color: blue;\n  border-radius: 0.2rem;\n}\n.salary-tax-calculator .result h3[data-v-2f86a4d0] {\n  margin-top: 0.2rem;\n}\n.salary-tax-calculator .result ul[data-v-2f86a4d0] {\n  text-align: center;\n  border: 1px solid #ddd;\n}\n.salary-tax-calculator .result ul li[data-v-2f86a4d0] {\n    padding: 0.1rem;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=4.da9c5066edce887ab10a.js.map