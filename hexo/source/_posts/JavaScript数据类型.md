---
title: JavaScript数据类型

categories:
  - web

tags:
  - js
---

JavaScript 数据类型，可分为两大类，即原始类型和引用类型，也可分为六种，Undefined、Boolean、Number、String、Null、Object。

这里的 Object 是广泛上的一切对像，即一切引用类型。

<!-- more -->

# JavaScript 语法

变量、函数名、运算符以及其他一切东西都是区分大小写的。

变量是弱类型的。

变量名需要遵守两条简单的规则：

- 第一个字符必须是字母、下划线(`_`)或美元符号(`$`)
- 余下的字符可以是下划线、美元符号或任何字母或数字字符

著名的变量命名规则：

- Camel 标记法，首字母是小写的，接下来的字母都以大写字符开头：var myTestValue = 0
- Pascal 标记法，首字母是大写的，接下来的字母都以大写字符开头：var MyTestValue = 0
- 匈牙利类型标记法，在以 Pascal 标记法命名的变量前附加一个小写字母(或小写字母序列)，说明该变量的类型：var iMyTestValue = 0

# JavaScript 数据类型

要了解深浅拷贝，先回顾 JavaScript 数据类型。

- JavaScript 数据类型
  - 原始类型(primitive type)，基本类型
    - Undefined
    - Boolean
    - Number
    - String
    - Null
  - 引用类型，类(class)，对象
    - Object 对象
    - Array 对象
    - Boolean 对象
    - Number 对象
    - String 对象
    - Function 对象(类)
    - arguments 对象
    - Math 对象
    - Date 对象
    - RegExp 对象
    - Error 对象
    - 其他全局对象

变量可以存在两种类型的值，即原始值和引用值。

原始类型或基本类型的值，就是原始值。

引用类型的值，就是引用值。

原始值，存储在栈(stack)中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。

引用值，存储在堆(heap)中的对象，也就是说，存储在变量处的值是一个指针(point)，指向存储对象的内存处。

## 原始类型或基本类型

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

constructor，对创建对象的函数的引用(指针)。对于 Object 对象，该指针指向原始的 Object() 函数。

`__proto__`，隐式原型，是每个对象都有的一个属性。一个对象的隐式原型指向构造该对象的构造函数的原型，这也保证了实例能够访问在构造函数原型中定义的属性和方法。

prototype，是函数对象(除了一些内建函数)才具有的属性，是函数对象原型的引用，一个指针，它默认返回函数对象的一个实例。

### 对象的方法

hasOwnProperty(property) 判断指定属性是否为自有属性

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

isPrototypeOf(object) 判断该对象是否为另一个对象的原型。

``` js
var obj = {
  a: 1
}

Object.isPrototypeOf(obj) // false

Object.prototype.isPrototypeOf(obj) // true
```

Object.getPrototypeOf

``` js
var obj = {
  a: 1
}

Object.getPrototypeOf(obj) === obj.__proto__
```

# 面向对象编程

对象、类、实例

## 对象

ECMA-262 把对象(object)定义为“属性的无序集合，每个属性存放一个原始值、对象或函数”。严格来说，这意味着对象是无特定顺序的值的数组。

尽管 ECMAScript 如此定义对象，但它更通用的定义是基于代码的名词(人、地点或事物)的表示。

对象由特性(attribute)构成，特性可以是原始值，也可以是引用值。如果特性存放的是函数，它将被看作对象的方法(method)，否则该特性被看作对象的属性(property)。

## 类

每个对象都由类定义，可以把类看做对象的配方。类不仅要定义对象的接口(interface)(开发者访问的属性和方法)，还要定义对象的内部工作(使属性和方法发挥作用的代码)。编译器和解释程序都根据类的说明构建对象。

## 实例

程序使用类创建对象时，生成的对象叫作类的实例(instance)。对类生成的对象的个数的唯一限制来自于运行代码的机器的物理内存。每个实例的行为相同，但实例处理一组独立的数据。由类创建对象实例的过程叫做实例化(instantiation)。

## 四种基本能力

- 封装 - 把相关的信息(无论数据或方法)存储在对象中的能力
- 聚集 - 把一个对象存储在另一个对象内的能力
- 继承 - 由另一个类(或多个类)得来类的属性和方法的能力
- 多态 - 编写能以多种方法运行的函数或方法的能力

## 对象作用域

### ECMAScript 只有公用作用域

### ECMAScript 没有静态作用域

### 关键字 this，指向调用该方法的对象

## 定义类或对象

- 工厂方式，原始的方式
- 构造函数方式
- 原型方式
- 混合的构造函数/原型方式
- 动态原型方法
- 混合工厂方式

### 修改对象
