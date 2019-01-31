---
title: JavaScript数据类型

categories:
  - web

tags:
  - js

date: 2018/08/14
---

JavaScript 中七种数据类型(内置类型)，分为两大类型：基本类型和对象(object)可分为两大类，即原始类型和引用类型。

六种原始类型：null，undefined，boolean，number，string，symbol

一种引用类型：对象(object)。这里的 object 是广泛上的一切对像，即一切引用类型。

<!-- more -->

# JavaScript 变量

JavaScript 中变量、函数名、运算符以及其他一切东西都是区分大小写的。

变量是弱类型的。

变量名需要遵守两条简单的规则：
  - 第一个字符必须是字母、下划线(`_`)或美元符号(`$`)
  - 余下的字符可以是下划线、美元符号或任何字母或数字字符

著名的变量命名规则：
  - Camel 标记法，首字母是小写的，接下来的字母都以大写字符开头：var myTestValue = 0
  - Pascal 标记法，首字母是大写的，接下来的字母都以大写字符开头：var MyTestValue = 0
  - 匈牙利类型标记法，在以 Pascal 标记法命名的变量前附加一个小写字母(或小写字母序列)，说明该变量的类型：var iMyTestValue = 0

# JavaScript 数据类型

- JavaScript 数据类型(内置类型)
  - 原始类型(primitive type, 基本类型)
    - null
    - undefined
    - boolean
    - number
      - NaN
    - string
    - symbol
  - 引用类型，类(class)，对象
    - 本地对象(native object)
      - Object
      - Array
      - Boolean
      - Number
      - String
      - Function
      - Date
      - RegExp
      - Error
        - EvalError
        - RangeError
        - ReferenceError
        - SyntaxError
        - TypeError
        - URIError
    - 内置对象(built-in object)
      - Global 对象
      - Math 对象
    - 宿主对象(host objec)
      - BOM
      - DOM

## Number

js 的数字类型是浮点类型的，没有整型。并且浮点类型基于 `IEEE 754` 双精度标准(64位)实现，在使用中会遇到某些 Bug。

### 最大数、最小数、正负无穷

js 中可表示的最大的数为 `Number.MAX_VALUE`，近似值为 `1.7976931348623157e+308`。

``` js
Number.MAX_VALUE // 1.7976931348623157e+308

Number.MAX_VALUE + 1 // 1.7976931348623157e+308

Number.MAX_VALUE === Number.MAX_VALUE + 1 // true
```

js 中可表示的最大的数为 `Number.MIN_VALUE`，接近 0，但不是负数，近似值为 `5e-324`。

``` js
Number.MIN_VALUE // 5e-324

Number.MIN_VALUE === 1 - Number.MIN_VALUE // true
```

正无穷 `Infinity`，负无穷 `-Infinity`。溢出时返回。

``` js
Number.MAX_VALUE * (1 + Number.MIN_VALUE) === Number.MAX_VALUE // true

Number.MAX_VALUE * 1.1 // Infinity

Number.MAX_VALUE * -1.1 // -Infinity
```

### 最大安全整数、最小安全整数

js 最大安全整数是 `Number.MAX_SAFE_INTEGER`，最小安全整数是 `Number.MIN_SAFE_INTEGER`，

``` js
Number.MAX_SAFE_INTEGER // 9007199254740991

Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1 // true

Number.MIN_SAFE_INTEGER // -9007199254740991

Number.MIN_SAFE_INTEGER === 1 - Math.pow(2, 53) // true
```

### 2 的 53 次方

js 安全整数的范围是 (Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER) 即 -2^53~2^53 (不包含边界) 。

安全整数，意思是说能够 one-by-one 表示的整数，也就是说在(-2^53, 2^53)范围内，双精度数表示和整数是一对一的，反过来说，在这个范围以内，所有的整数都有唯一的浮点数表示，这叫做安全整数。超过这个范围，会有两个或更多整数的双精度表示是相同的；反过来说，超过这个范围，有的整数是无法精确表示的，只能round到与它相近的浮点数(说到底就是科学计数法)表示，这种情况下叫做不安全整数。

``` js
Math.pow(2, 53) // 9007199254740992

Math.pow(2, 53) === Math.pow(2, 53) + 1 // true

Math.pow(2, 53) + 1 // 9007199254740992

Math.pow(2, 53) + 2 // 9007199254740994

Math.pow(2, 53) + 3 // 9007199254740996

Math.pow(2, 53) + 4 // 9007199254740996

Math.pow(2,53)+ 5 // 9007199254740996
```

当运算数与运算结果都处于安全整数的范围内时，才能保证 js 运算结果正确。

请求接口中返回一个整数，例如订单号，是个不安全整数，就会导致前端处理异常！

``` js
201808221019001777 // 被处理成 201808221019001800
```

js 安全整数的范围为啥是 (Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER) 即 -2^53~2^53 (不包含边界) ？

js 里数字类型只有一种，Number 类型，是双精度浮点型，都是 64-bit (1bit 的符号位，11bits 的指数部分，以及 52bits 的小数部分) 的双精度浮点数(double)！

js 里的整型 int 是 双精度浮点型 double 的一个子集，而不是一个独立的数据类型。

由于浮点数不是精确的值，所以涉及小数的比较和运算要特别小心！引申问题[0.1 + 0.2 为什么不等于 0.3](https://u3xyz.com/detail/28)。

[IEEE 754 双精度浮点数](https://en.wikipedia.org/wiki/IEEE_754)。

[参考1](https://www.zhihu.com/question/29010688)

[参考3](http://2ality.com/2013/10/safe-integers.html)

[参考2](http://steve.hollasch.net/cgindex/coding/ieeefloat.html)

### [0.1 + 0.2 为什么不等于 0.3](https://yuchengkai.cn/docs/zh/frontend/#%E4%B8%BA%E4%BB%80%E4%B9%88-0-1-0-2-0-3)

``` js
0.1 + 0.2 != 0.3 // true

parseFloat((0.1 + 0.2).toFixed(10)) === 0.3 // true
```

`toFixed(num)` 可把 `Number` 四舍五入为指定小数位数的数字。有效数字姑且看作最多有 10 位小数。`num` 是小数位数，规定是 `0-20`，有些实现可以支持更大的数值范围，例如 `chrome` 可以是 `0-100`。

### NaN

`NaN` 也属于 `number` 类型，并且 `NaN` 不等于自身。`NaN` 是除对象外，唯一一个不等于自身的值。

``` js
typeof NaN // 'number'

!NaN // true

NaN != NaN // true
```

* 一个表达式中如果有减号 `-`、乘号 `*` 或 除号 `/` 等运算符时，js 引擎会在计算之前试图将运算符两边的变量转化为 number 类型，如果转化失败，表达式将返回 NaN。
* 直接使用 Number, parseInt 或 parseFloat 将一个非数字的值转化为数字时，表达式返回 NaN。

``` js
'abc' - 1 // NaN
Number('abc') // NaN
parseInt('abc') // NaN
parseFloat('abc') // NaN
```

如何判断 `NaN`？必须是 `Number.isNaN()`。

``` js
isNaN(NaN) // true
Number.isNaN(NaN) // true

isNaN('abc') // true
isNaN('abc' - 1) // true
isNaN(true) // false

Number.isNaN('abc') // false
Number.isNaN('abc' - 1) // true
Number.isNaN(true) // false
```

我们注意看 `isNaN('abc')` 返回 `true`，而 `Number.isNaN('abc')` 返回 `false`。显然 `Number.isNaN` 更符合我们的要求。

`isNaN()` 函数用于检查其参数是否是非数字值。如果参数值为 NaN 或字符串、对象、undefined 等非数字值，则返回 true, 否则返回 false。会先强制转化为数字形式。也就是说：

``` bash
isNaN(param) -> isNaN(Number(param))
```

`Number.isNaN()` 和全局函数 `isNaN()` 相比，该方法不会强制将参数转换成数字，只有在参数是真正的数字类型，且值为 NaN 的时候才会返回 true。

Polyfill

``` js
Number.isNaN = Number.isNaN || function (value) {
  return typeof value === "number" && isNaN(value)
}
```

在数字计算或转化中，true 就是 1，false 就是 0。

`NaN` 为啥不等于自身？`NaN` 即 Not a Number , 不是一个数字。我们可以看到 'abc' - 1 的结果是 NaN，'abc' + 1 的结果也是 NaN，显然 'abc' - 1 不等于 'abc' + 1。NaN 可以代表一切 Not a Number 的数。

### 比较

NaN 不等于任何一个变量，包括它自己！

``` js
0 == false // true

1 == true // true
```

在数字计算中，true 就是 1，false 就是 0。

## Boolean

``` js
true - 1 // -1
Number(true) // 1

parseInt(true) // NaN
parseFloat(true) // NaN
```

在数字计算中，true 就是 1，false 就是 0。

parseInt 和 parseFloat 接受参数是 string 类型，非 string 类型的需要先转化为 string 类型。

``` bash
parseInt(true) -> parseInt(String(true)) -> parseInt('true') -> NaN
```

## null

null 可以等于 null 或者 undefined。

``` js
null == null // true
null == undefined // true
```

null 是变量值为 null，undefined 是变量本身 undefined。

null 和 undefined 都表示“值的空缺”，你可以认为 undefined 是表示系统级的、出乎意料的或类似错误的值的空缺，而 null 是表示程序级的、正常的或在意料之中的值的空缺。

undefined 是访问一个未初始化的变量时返回的值，而 null是访问一个尚未存在的对象时所返回的值。因此，可以把 undefined 看作是空的变量，而 null 看作是空的对象。

``` js
// foo现在已经是知存在的，但是它没有类型或者是值：
var foo = null;
foo;
// null

// foo不存在，它从来没有被定义过或者是初始化过：
foo;
// "ReferenceError: foo is not defined"
```

``` js
typeof null // 'object'

null instanceof Object // false
```

# Typeof

`typeof` 对于基本类型，除了 `null` 都可以显示正确的类型！

``` js
typeof undefined // 'undefined'
typeof bbbbbb // bbbbbb 没有声明，但是还会显示 undefined

typeof true // 'boolean'

typeof 1 // 'number'
typeof NaN // 'number'

typeof '1' // 'string'

typeof Symbol() // 'symbol'
```

`typeof` 对于对象，除了函数都会显示 `object`

``` js
typeof [] // 'object'
typeof {} // 'object'

typeof Array // 'function'
typeof Object // 'function'
typeof setTimeout // 'function'
```

对于 `null` 来说，虽然它是基本类型，但是会显示 `object`，这是一个存在很久了的 Bug。

``` js
typeof null // 'object'
```

PS：为什么会出现这种情况呢？因为在 js 的最初版本中，使用的是 32 位系统，为了性能考虑使用低位存储了变量的类型信息，`000` 开头代表是对象，然而 `null` 表示为全零，所以将它错误的判断为 `object`。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。

如何判断 `null` ？

``` js
null === null // true

null == undefined // true
```

# instanceof

`instanceof` 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 `prototype`。

``` js
var a = {}

var b = []

var c = function () {}

a instanceof Object // true
b instanceof Array // true
c instanceof Function // true

null instanceof Object // false
```

试着实现一下 `instanceof`

``` js
function _instanceof (left, right) {
  // 获得类型的原型
  let prototype = right.prototype
  // 获得对象的原型
  left = left.__proto__
  // 判断对象的类型是否等于类型的原型
  while (true) {
  	if (left === null)
  		return false
  	if (prototype === left)
  		return true
  	left = left.__proto__
  }
}

var a = {}

var b = []

var c = function () {}

_instanceof(a, Object)

_instanceof(b, Array)

_instanceof(c, Function)
```

# Object.prototype.toString.call(value)

想获得一个变量的正确类型，可以通过 `Object.prototype.toString.call(value)`，可以获得类似 [Object Type] 的字符串。

``` js
var a = {}

var b = []

var c = function () {}

var d = new Date()

function E () {}
var e = new E()

Object.prototype.toString.call(a) // [object Object]
Object.prototype.toString.call(b) // [object Array]
Object.prototype.toString.call(c) // [object Function]
Object.prototype.toString.call(d) // [object Date]

Object.prototype.toString.call(e) // [object Object]

Object.prototype.toString.call(null) // [object Null]
Object.prototype.toString.call(undefined) // [object Undefined]
Object.prototype.toString.call(true) // [object Boolean]
Object.prototype.toString.call(1) // [object Number]
Object.prototype.toString.call(NaN) // [object Number]
Object.prototype.toString.call('a') // [object String]
Object.prototype.toString.call(Symbol()) // [object Symbol]
```

Polyfill

``` js
Number.isNaN = Number.isNaN || function (value) {
  return typeof value === "number" && isNaN(value)
}
```

# 变量的值

变量可以存在两种类型的值，即原始值和引用值。

原始类型的值，就是原始值。

引用类型的值，就是引用值。

原始值，存储在栈(stack)中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。栈区包括了变量的标识符和变量的值。

引用值，存储在堆(heap)中的对象，也就是说，存储在变量处的值是一个指针(point)，指向存储对象的内存处。

## 原始类型

原始值，存储在栈(stack)中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。栈区包括了变量的标识符和变量的值。

### 按值传递(call by value)

``` js
var a, b // undefined, undefined

a = 0 // 0

b = a // 0

a = '1' // '1'

console.log(a, b, typeof a, typeof b) // '1' 0 string number
```

上面 a 的改变没有改变 b，说明原始类型是按值传递的。赋值时创建了一块新的内存空间。

按值传递是最常用的求值策略，传递的是值的拷贝，也就是说传递后就互不相关了。

``` js
var num = 0

function foo (param) {
  // b 是形参
  param += 1

  console.log(num, param) // 0, 1
}

foo(num) // a 是实参
```

函数的形参是被调用时所传实参的副本。修改形参的值并不会影响实参。

### 不可变(immutable)性质

基本类型，其值是不可修改的，也不能为其添加属性和方法。

``` js
var str = 'abc'
str[0] // 'a'
str[0] = 'd'

console.log(str[0], str) // 'a', 'abc'

str.age = 24

console.log(str.age, str) // undefined, 'abc

str.method = function () {}

console.log(str.method, str) // undefined, 'abc
```

## 引用类型

引用值，存储在堆(heap)中的对象，也就是说，存储在变量处的值是一个指针(point)，指向存储对象的内存处。

引用类型的存储空间将从堆(heap)中分配。由于引用值的大小会改变，所以不能把它放在栈(stack)中，否则会降低变量查寻的速度。

相反，放在变量的栈(stack)空间中的值是该对象存储在堆(heap)中的地址。

地址的大小是固定的，所以把它存储在栈(stack)中对变量性能无任何负面影响。

### 对象的属性

`constructor`，对创建对象的函数的引用(指针)，指回原构造函数。对于 object 对象，该指针指向原始的 Object() 函数。

`__proto__`，隐式原型，是每个对象都有的一个属性。一个对象的隐式原型指向构造该对象的构造函数的原型，这也保证了实例能够访问在构造函数原型中定义的属性和方法。

`prototype`，原型属性，是 Function 函数对象(除了内置函数对象)才具有的属性，是通过调用构造函数而创建的那个对象实例的原型对象，是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法(我们把这个对象叫做原型对象)。在原型对象里有共有的方法，所有构造函数声明的实例都可以共享这个方法。

![__proto__ 与 prototype](https://cmspic-10004025.image.myqcloud.com/3c3eae80-a4ef-11e8-9774-f1d87802945e_size_520x586)

每个函数都有 `prototype` 属性，除了 `Function.prototype.bind()`，该属性指向原型。

每个对象都有 `__proto__` 属性，指向了创建该对象的构造函数的原型。其实这个属性指向了 `[[prototype]]`，但是 `[[prototype]]` 是内部属性，我们并不能访问到，所以使用 `_proto_` 来访问。

对象可以通过 `__proto__` 来寻找不属于该对象的属性，`__proto__` 将对象连接起来组成了原型链。

如果你想更进一步的了解原型，可以仔细阅读[深度解析原型中的各个难点](https://github.com/KieSun/Blog/issues/2)。

``` js
var func = function () {}
var obj = {}

func.constructor // ƒ Function() { [native code] } Function 构造函数
func.constructor === Function // true
obj.constructor // ƒ Object() { [native code] } Object 构造函数
obj.constructor === Object

func.__proto__ // ƒ () { [native code] } Function 构造函数的原型
obj.__proto__ // { constructor: f Object(), ... } Object 构造函数的原型

func.prototype // { constructor: func (), ... }

func.__proto__ === Function.prototype // true
obj.__proto__ === Object.prototype // true

func.__proto__.__proto__ === obj.__proto__ // true

Function.constructor // ƒ Function() { [native code] }
Object.constructor // ƒ Function() { [native code] }

Function.__proto__ // ƒ () { [native code] }
Object.__proto__ // ƒ () { [native code] }

Function.prototype // ƒ () { [native code] }
Object.prototype // { constructor: f Object(), ... }

Function.__proto__ === Function.prototype // true
Function.prototype === Object.__proto__ // true
Function.__proto__ === Object.__proto__ // true

Function.__proto__.__proto__ === Object.__proto__.__proto__ // true
Function.__proto__.__proto__ === Object.prototype // true
```

函数不是对象吗？为什么 func 和 obj 的 constructor 和 `_proto_` 不一样？

func 是函数对象，是特殊的对象，`func._proto_` 指向了构造该函数对象的构造函数的原型！构造该函数对象的构造函数是 func.constructor，即 Function，其原型是 `Function.prototype`！所以 `func.__proto__ === func.constructor.prototype === Function.prototype` 成立！

obj 是一般对象，`obj._proto_` 指向了构造该函数对象的构造函数的原型！构造该函数对象的构造函数是 obj.constructor，即 Object，其原型是 `Object.prototype`！所以 `obj.__proto__ === obj.constructor.prototype === Object.prototype` 成立！

* `Object` 是所有对象的爸爸，所有对象都可以通过 `__proto__` 找到它
* `Function` 是所有函数的爸爸，所有函数都可以通过 `__proto__` 找到它
* `Function.prototype` 和 `Object.prototype` 是两个特殊的对象，他们由引擎来创建
* 除了以上两个特殊对象，其他对象都是通过构造器 new 出来的
* 函数的 `prototype` 是一个对象，也就是原型
* 对象的 `__proto__` 指向原型， `__proto__` 将对象和原型连接起来组成了原型链

一脸懵逼！！！！！

调用对象的 `Object.getPrototypeOf()` 方法读取 `[[Prototype]]` 属性的值，代替 `__proto__`。

``` js
var func = function () {}
var obj = {}

Object.getPrototypeOf(func) === func.__proto__ // true
Object.getPrototypeOf(obj) === obj.__proto__ // true
```

### 对象的方法

#### hasOwnProperty(property) 判断指定属性是否为自有属性。

``` js
var obj = {
  a: 1
}

obj.hasOwnProperty('a') // true，a 是自有属性
obj.hasOwnProperty('toString') // false，toString 不是自有属性，是原型属性

'a' in obj // true
'toString' in obj // true
```

``` js
function hasPrototypeProperty (obj, property) {
  return !obj.hasOwnProperty(property) && property in obj
}
```

#### isPrototypeOf(object) 判断该对象是否为另一个对象的原型。

``` js
var obj = {
  a: 1
}

obj.isPrototypeOf(obj) // false

obj.__proto__.isPrototypeOf(obj) // true

Object.isPrototypeOf(obj) // false

Object.__proto__.isPrototypeOf(obj)  // false

Object.prototype.isPrototypeOf(obj) // true
```

# 面向对象编程

对象、类、实例

## 对象

ECMA-262 把对象(object)定义为“属性的无序集合，每个属性存放一个原始值、对象或函数”。严格来说，这意味着对象是无特定顺序的值的数组。

对象是无特定顺序的值的数组，这就是为什么 `for...in` 不能保证顺序的原因吧。

尽管 ECMAScript 如此定义对象，但它更通用的定义是基于代码的名词(人、地点或事物)的表示。

对象由特性(attribute)构成，特性可以是原始值，也可以是引用值。如果特性存放的是函数，它将被看作对象的方法(method)，否则该特性被看作对象的属性(property)。

## 类

每个对象都由类定义，可以把类看做对象的配方。

类不仅要定义对象的接口(interface)(开发者访问的属性和方法)，还要定义对象的内部工作(使属性和方法发挥作用的代码)。编译器和解释程序都根据类的说明构建对象。

## 实例

程序使用类创建对象时，生成的对象叫作类的实例(instance)。

对类生成的对象的个数的唯一限制来自于运行代码的机器的物理内存。每个实例的行为相同，但实例处理一组独立的数据。

由类创建对象实例的过程叫做实例化(instantiation)。

## 四种基本能力

- 封装 - 把相关的信息(无论数据或方法)存储在对象中的能力
- 聚集 - 把一个对象存储在另一个对象内的能力
- 继承 - 由另一个类(或多个类)得来类的属性和方法的能力
- 多态 - 编写能以多种方法运行的函数或方法的能力

## 对象作用域

作用域指的是变量的适用范围。

### 公用、私有和受保护作用域

在传统的面向对象程序设计中，主要关注于公用和私有作用域。公用作用域中的对象属性可以从对象外部访问，即开发者创建对象的实例后，就可使用它的公用属性。而私有作用域中的属性只能在对象内部访问，即对于外部世界来说，这些属性并不存在。这意味着如果类定义了私有属性和方法，则它的子类也不能访问这些属性和方法。

受保护作用域也是用于定义私有的属性和方法，只是这些属性和方法还能被其子类访问。

#### ECMAScript 只有公用作用域

对 ECMAScript 讨论上面这些作用域几乎毫无意义，因为 ECMAScript 中只存在一种作用域 - 公用作用域。ECMAScript 中的所有对象的所有属性和方法都是公用的。因此，定义自己的类和对象时，必须格外小心。记住，所有属性和方法默认都是公用的！

由于缺少私有作用域，开发者确定了一个规约，说明哪些属性和方法应该被看做私有的。这种规约规定在属性前后加下划线：

``` js
obj._color_ = 'blue' // 属性 color 被看作是私有的。注意，下划线并不改变属性是公用属性的事实，只是作为提示
```

### 静态作用域

静态作用域定义的属性和方法任何时候都能从同一位置访问。

在 Java 中，类可具有属性和方法，无需实例化该类的对象，即可访问这些属性和方法，例如 java.net.URLEncoder 类，它的函数 encode() 就是静态方法。

#### ECMAScript 没有静态作用域

严格来说，ECMAScript 并没有静态作用域。不过，它可以给构造函数提供属性和方法。

构造函数只是函数。函数是对象，对象可以有属性和方法。

``` js
function sayHello() {
  console.log('hello')
}

sayHello.alternate = function () {
  console.log('hi')
}

sayHello() // 'hello'

sayHello.alternate() // 'hi'
```

方法 alternate() 实际上是函数 sayHello 的方法。可以像调用常规函数一样调用 sayHello() 输出 "hello"，也可以调用 sayHello.alternate() 输出 "hi"。即使如此，alternate() 也是 sayHello() 公用作用域中的方法，而不是静态方法。

### 关键字 this，指向调用该方法的对象

``` js
var oCar = new Object()
oCar.color = 'red'
oCar.showColor = function () {
  console.log(this.color, this) // this 指向调用该方法的对象
}

oCar.showColor() // 'red'
```

为什么要使用 this ？在实例化对象时，总是不能确定开发者会使用什么样的变量名。使用 this，即可在任何多个地方重用同一个函数。

``` js
function showColor () {
  console.log(this.color, this) // this 指向调用该方法的对象
}

var oCar = new Object()
oCar.color = 'red'
oCar.showColor = showColor

var oBike = new Object()
oBike.color = 'blue'
oBike.showColor = showColor

oCar.showColor() // 'red'

oBike.showColor() // 'blue'
```

#### 注意，引用对象的属性时，必须使用 this 关键字

``` js
function showColor () {
  console.log(color)
}
```

如果不用对象或 this 关键字引用变量，ECMAScript 就会把它看作局部变量或全局变量。然后该函数将查找名为 color 的局部或全局变量。

``` js
var color = 'red'

function showColor () {
  var color = 'blue'

  console.log(color) // 局部查找，发现 color
}

showColor() // 'blue'
console.log(color) // 'red'
```

``` js
var color = 'red'

function showColor () {
  color = 'blue' // 这里 color 被调用进行赋值运算，但是局部查找没有，在全局查找到了

  console.log(color)
}

showColor() // 'blue'
console.log(color) // 'blue'
```

## 定义类或对象

- 工厂方式，原始的方式
- 构造函数方式
- 原型方式
- 混合的构造函数/原型方式
- 动态原型方法
- 混合工厂方式

### 工厂方式，原始的方式

能创建并返回特定类型的对象的工厂函数(factory function)。

``` js
function showColor () {
  console.log(this.color);
}

function createCar (sColor, iDoors, iMpg) {
  var oTempCar = new object;
  oTempCar.color = sColor;
  oTempCar.doors = iDoors;
  oTempCar.mpg = iMpg;
  oTempCar.showColor = showColor; // 从功能上讲，这样解决了重复创建函数对象的问题；但是从语义上讲，该函数不太像是对象的方法
  return oTempCar;
}

var oCar1 = createCar("red", 4, 23);
var oCar2 = createCar("blue", 3, 25);

oCar1.showColor();		//输出 "red"
oCar2.showColor();		//输出 "blue"
```

### 构造函数方式

第一步选择类名，即构造函数的名字。根据惯例，这个名字的首字母大写，以使它与首字母通常是小写的变量名分开。

``` js
function showColor () {
  console.log(this.color);
}

function Car (sColor, iDoors, iMpg) {
  this.color = sColor;
  this.doors = iDoors;
  this.mpg = iMpg;
  this.showColor = showColor; // 从功能上讲，这样解决了重复创建函数对象的问题；但是从语义上讲，该函数不太像是对象的方法
}

var oCar1 = new Car("red", 4, 23);
var oCar2 = new Car("blue", 3, 25);

oCar1.showColor();		//输出 "red"
oCar2.showColor();		//输出 "blue"
```

首先在构造函数内没有创建对象，而是使用 this 关键字。使用 new 运算符构造函数时，在执行第一行代码前先创建一个对象，只有用 this 才能访问该对象。然后可以直接赋予 this 属性，默认情况下是构造函数的返回值(不必明确使用 return 运算符)。

### 原型方式

该方式利用了函数对象的 prototype 属性，可以把它看成创建新对象所依赖的原型。

这里，首先用空构造函数来设置类名。然后所有的属性和方法都被直接赋予 prototype 属性。

``` js
function Car () {}

Car.prototype.color = "blue";
Car.prototype.doors = 4;
Car.prototype.mpg = 25;
Car.prototype.showColor = function () {
  console.log(this.color);
}; // 从语义上讲，该函数确实是对象的方法

var oCar1 = new Car();
var oCar2 = new Car();

oCar1.showColor();		//输出 "red"
oCar2.showColor();		//输出 "blue"
```

首先定义构造函数(Car)，其中无任何代码。接下来的几行代码，通过给 Car 的 prototype 属性添加属性去定义 Car 对象的属性。调用 new Car() 时，原型的所有属性都被立即赋予要创建的对象，意味着所有 Car 实例存放的都是指向 showColor() 函数的指针。从语义上讲，所有属性看起来都属于一个对象，因此解决了前面两种方式存在的问题。

此外，使用这种方式，还能用 instanceof 运算符检查给定变量指向的对象的类型。

``` js
oCar1 instanceof Car // true
```

但是，使用原型方式，不能通过给构造函数传递参数来初始化属性的值！

因为 Car1 和 Car2 的 color 属性都等于 "blue"，doors 属性都等于 4，mpg 属性都等于 25。这意味着必须在对象创建后才能改变属性的默认值，这点很令人讨厌，但还没完。真正的问题出现在属性指向的是对象，而不是函数时。函数共享不会造成问题，但对象却很少被多个实例共享。

### 混合的构造函数/原型方式

``` js
function showColor () {
  console.log(this.color);
}

function Car (sColor, iDoors, iMpg) {
  this.color = sColor;
  this.doors = iDoors;
  this.mpg = iMpg;
}

Car.prototype.showColor = showColor

var oCar1 = new Car("red", 4, 23);
var oCar2 = new Car("blue", 3, 25);

oCar1.showColor();		//输出 "red"
oCar2.showColor();		//输出 "blue"
```

所有的非函数属性都在构造函数中创建，意味着又能够用构造函数的参数赋予属性默认值了。因为只创建 showColor() 函数的一个实例，所以没有内存浪费。因为使用了原型方式，所以仍然能利用 instanceof 运算符来判断对象的类型。

这种方式是 ECMAScript 采用的主要方式，最常用！它具有其他方式的特性，却没有他们的副作用。但还是不够完美。

### 动态原型方法

动态原型方法的基本想法与混合的构造函数/原型方式相同，即在构造函数内定义非函数属性，而函数属性则利用原型属性定义。唯一的区别是赋予对象方法的位置。

``` js
function Car(sColor, iDoors, iMpg) {
  this.color = sColor
  this.doors = iDoors
  this.mpg = iMpg
  this.drivers = new Array('Mike', 'John')

  if (typeof Car._initialized == 'undefined') {
    Car.prototype.showColor = function () {
      console.log(this.color)
    }

    Car._initialized = true
  }
}
```

直到检查 `typeof Car._initialized` 是否等于 `"undefined"` 之前，这个构造函数都未发生变化。这行代码是动态原型方法中最重要的部分。如果这个值未定义，构造函数将用原型方式继续定义对象的方法，然后把 `Car._initialized` 设置为 `true`。如果这个值定义了(它的值为 `true` 时，`typeof` 的值为 `Boolean`)，那么就不再创建该方法。简而言之，该方法使用标志(`_initialized`)来判断是否已给原型赋予了任何方法。该方法只创建并赋值一次，传统的 `OOP` 开发者会高兴地发现，这段代码看起来更像其他语言中的类定义了。

### 混合工厂方式

``` js
function Car () {
  var oTempCar = new Object
  oTempCar.color = 'blue'
  oTempCar.doors = 4
  oTempCar.mpg = 25
  oTempCar.showColor = function() {
    console.log(this.color)
  }

  return oTempCar
}
```

与经典方式不同，这种方式使用 `new` 运算符，使它看起来像真正的构造函数。

由于在 `Car()` 构造函数内部调用了 `new` 运算符，所以将忽略第二个 `new` 运算符(位于构造函数之外)，在构造函数内部创建的对象被传递回变量 `car`。

这种方式在对象方法的内部管理方面与经典方式有着相同的问题。强烈建议：除非万不得已，还是避免使用这种方式。

## 修改对象

通过使用 ECMAScript，不仅可以创建对象，还可以修改已有对象的行为。

prototype 属性不仅可以定义构造函数的属性和方法，还可以为本地对象添加属性和方法。

### 创建新方法

把数字对象直接转换为十六进制字符串：

``` js
Number.prototype.toHexString = function () {
  return this.toString(16)
}

var iNum = 15
console.log(iNum.toHexString()) // f
```

### 重命名已有方法

可以给 Array 类添加两个方法 enqueue() 和 dequeue()，只让它们反复调用已有的 push() 和 shift() 方法即可：

``` js
Array.prototype.enqueue = function (vItem) {
  this.push(vItem)
}

Array.prototype.dequeue = function () {
  return this.shift()
}
```

Function 的 toString() 方法通常输出的是函数的源代码。覆盖该方法，可以返回另一个字符串(在这个例子中，可以返回 "Function code hidden")。不过，toString() 指向的原始函数怎么了呢？它将被无用存储单元回收程序回收，因为它被完全废弃了。没有能够恢复原始函数的方法，所以在覆盖原始方法前，比较安全的做法是存储它的指针，以便以后的使用。

``` js
Function.prototype.originalToString = Function.prototype.toString

Function.prototype.toString = function () {
  if (this.originalToString().length > 100) {
    return 'Function too long to display.'
  } else {
    return this.originalToString()
  }
}
```

### 极晚绑定(Very Late Binding)

从技术上讲，根本不存在极晚绑定。本书采用该术语描述 ECMAScript 中的一种现象，即能够在对象实例化后再定义它的方法。例如：

``` js
var o = new Object()

Object.prototype.sayHi = function () {
  console.log('hi')
}

o.sayHi()
```

在大多数程序设计语言中，必须在实例化对象之前定义对象的方法。这里，方法 sayHi() 是在创建 Object 类的一个实例之后来添加进来的。在传统语言中不仅没听说过这种操作，也没听说过该方法还会自动赋予 Object 对象的实例并能立即使用（接下来的一行）。

注意：不建议使用极晚绑定方法，因为很难对其跟踪和记录。不过，还是应该了解这种可能。

## ES6 之 class

ES6 提供了更接近传统语言的写法，引入了 `Class（类）`这个概念，作为对象的模板。通过 `class` 关键字，可以定义类。

基本上，ES6 的 `class` 可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的 `class` 写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

``` js
function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')'
}

//定义类
class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  toString () {
    return '(' + this.x + ', ' + this.y + ')'
  }
}
```

上面代码定义了一个“类”，可以看到里面有一个 `constructor` 方法，这就是构造方法，而 `this` 关键字则代表实例对象。也就是说，ES5 的构造函数 `Point`，对应 ES6 的 `Point` 类的构造方法。

`Point` 类除了构造方法，还定义了一个 `toString` 方法。注意，定义“类”的方法的时候，前面不需要加上 `function` 这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。

ES6 的类，完全可以看作构造函数的另一种写法。

``` js
class Point {
  // ...
}

typeof Point // "function"
Point === Point.prototype.constructor // true
```

上面代码表明，类的数据类型就是函数，类本身就指向构造函数。

使用的时候，也是直接对类使用new命令，跟构造函数的用法完全一致。

构造函数的 `prototype` 属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的 `prototype` 属性上面。

``` js
class Point {
  constructor () {
    // ...
  }

  toString () {
    // ...
  }

  valueOf () {
    // ...
  }
}

// 等同于

Point.prototype = {
  constructor () {},
  toString () {},
  valueOf () {},
}
```

在类的实例上面调用方法，其实就是调用原型上的方法。

``` js
class B {}
let b = new B();

b.constructor === B.prototype.constructor // true
```

上面代码中，b 是 B 类的实例，它的 constructor 方法就是 B 类原型的 constructor 方法。

由于类的方法都定义在 prototype 对象上面，所以类的新方法可以添加在 prototype 对象上面。`Object.assign` 方法可以很方便地一次向类添加多个方法。

``` js
class Point {
  constructor(){
    // ...
  }
}

Object.assign(Point.prototype, {
  toString () {},
  valueOf () {},
})
```

`prototype` 对象的 `constructor` 属性，直接指向“类”的本身，这与 ES5 的行为是一致的。

``` js
Point.prototype.constructor === Point // true
```

另外，类的内部所有定义的方法，都是不可枚举的（non-enumerable）。

``` js
class Point {
  constructor (x, y) {
    // ...
  }

  toString () {
    // ...
  }
}

Object.keys(Point.prototype) // []
Object.getOwnPropertyNames(Point.prototype) // ["constructor", "toString"]
```

上面代码中，`toString` 方法是 `Point` 类内部定义的方法，它是不可枚举的。`这一点与 ES5 的行为不一致。`

``` js
var Point = function (x, y) {
  // ...
}

Point.prototype.toString = function () {
  // ...
}

Object.keys(Point.prototype) // ["toString"]
Object.getOwnPropertyNames(Point.prototype) // ["constructor", "toString"]
```

class 的简介大致就这些，想学习更多 class 的知识，敬请期待后面对 class 的深入探究。

迫不及待想学习，可以阅读 [ES6 之 Class 的基本语法](http://es6.ruanyifeng.com/#docs/class)

# 类型转换

## 转 Boolean

在条件判断时，除了 `undefined`， `null`， `false`， `NaN`， `''`， `0`，` -0`，其他所有值都转为 `true`，包括所有对象，甚至是 `[]`、`{}`。

``` js
const arr = [undefined, null, false, NaN, '', 0, -0, [], {}]

arr.forEach(item => {
  if (item) {
    console.log(true)
  } else {
    console.log(false)
  }

  console.log(`${item}转Boolean为${!!item}`)
})
```

转 Boolean，有 `!! + 变量` 或 `Boolean(变量)`

条件判断有：`if`，`三目运算`，`for`，`while`，`do...while`、`switch` 等。

## 对象转基本类型

对象在转换基本类型时，有 `toString`，`valueOf`，`Symbol.toPrimitive`。默认调用 `toString`。三个方法都可以重写，而且越后面优先级越大。

``` js
var obj = {}

obj.toString() // '[object Object]'
obj.valueOf() // {}

1 + obj // '1[object Object]'

'a' + obj // 'a[object Object]'

var obj = {
  toString () {
    return 'a'
  },
}

1 + obj // ‘1a’
'a' + obj // 'aa'

var obj = {
  valueOf () {
  	return 1
  },
}

1 + obj // 2
'a' + obj // 'a1'

var obj = {
  toString () {
    return 'a'
  },
  valueOf () {
  	return 1
  },
}

1 + obj // 2
'a' + obj // 'a1'

var obj = {
  toString () {
    return 'a'
  },
  valueOf () {
    return 1
  },
  [Symbol.toPrimitive] () {
    return 2
  },
}

1 + obj // 3
'a' + obj // 'a2'
```

转字符串，有 `'' + 变量` 或 `String(变量)`

转数字，有 `+ 变量` 或 `Number(变量)`

## 四则运算符

只有当加法运算时，其中一方是字符串类型，就会把另一个也转为字符串类型。并且加法运算会触发三种类型转换：将值转换为原始值，转换为数字，转换为字符串。

其他运算只要其中一方是数字，那么另一方就转为数字。

加法运算的结果不一定是数字。其他运算的结果一定是数字。

``` js
1 + '1' // '11'

2 * '2' // 4

[1, 2] + [2, 1] // '1,22,1'

// [1, 2].toString() -> '1,2'
// [2, 1].toString() -> '2,1'
// '1,2' + '2,1' = '1,22,1'

1 + '' // '1'，可以实现数字转字符串！

'1' - 0 // 1，可以实现字符串转数字！

+ '1' // 1，可以实现字符串转数字！
```

对于加号需要注意这个表达式 `'a' + + 'b'`。在加法运算中，一般在变量前加 '+'，可以保证变量转化为数字。

``` js
'a' + + 'b' // -> "aNaN"
// 因为 + 'b' -> NaN
// 你也许在一些代码中看到过 + '1' -> 1
```

## == 操作符

![== 操作符](https://cmspic-10004025.image.myqcloud.com/8b46e0f0-ab58-11e8-a714-437600d65b55_size_1078x908)

上图中的 `toPrimitive` 就是对象转基本类型。

在 == 比较中，需要将【布尔值/字符串/】转化为【数值】，需要将【对象】转化为【基本类型】。

``` js
null == NaN // false
undefined == false // false
null == false // false
NaN == false // false

null == undefined // true

'' == false // true
0 == false // true
-0 == false // true

console.log(NaN == NaN) // false

console.log(null == null) // true

console.log([] == false) // true

console.log([] == []) // false

console.log([] == ![]) // true

console.log({} == false) // false

console.log({} == {}) // false

console.log({} == !{}) // false
```

为何 `[] == ![] // -> true` ？

``` js
[] == ![]
// [] 是真值，![] -> false，即
[] == false
// 根据第 9 条得出
[] == ToNumber(false)
//ToNumber(false) -> 0，即
[] == 0
// 根据第 11 条得出
ToPrimitive([]) == 0
// [].toString() -> ''，即
'' == 0
// 根据第 7 条得出
0 == 0 // -> true
```

`null` 只能和 `null` 或 `undefined` 相等，其他都不相等！

同样，`undefined` 只能和 `undefined` 或 `null` 相等，其他都不相等！

``` js
null == null // true

null == undefined // true

null == 0 // false

null == '' // false

null == false // false
```

由于 0 的类型是数值，null 的类型是 null。因此上面的前 11 步都得不到结果，要到第 12 步才能得到 false。

[相等运算符](http://es6.ruanyifeng.com/#docs/spec#%E7%9B%B8%E7%AD%89%E8%BF%90%E7%AE%97%E7%AC%A6)

## === 操作符

首先类型相等，其次判断 == 操作符
