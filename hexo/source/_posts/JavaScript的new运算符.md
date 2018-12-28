---
title: JavaScript的new运算符

categories:
  - web

tags:
  - js

date: 2018/09/05
---

new 运算符，用来创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。也就是说，是根据一个对象，去创建它的实例。

<!-- more -->

# 语法

``` js
new Constructor[([arguments])]
```

# 参数

`Constructor` 一个指定对象实例的类型的类或函数。

`arguments` 一个用来被 Constructor 调用的参数列表。


# 过程

* 新生成了一个对象
* 链接到原型
* 绑定 this
* 回新对象

在调用 `new` 的过程中会发生以上四件事情，我们也可以试着来自己实现一个 `new`。


``` js
function Car (make, model, year) {
   this.make = make
   this.model = model
   this.year = year
}

var car = new Car()
```

``` js
function Car (make, model, year) {
   this.make = make
   this.model = model
   this.year = year
}

var car = {}
car.__proto__ = Car.prototype
Car.call(car)
```

``` js
function Car (make, model, year) {
   this.make = make
   this.model = model
   this.year = year
}

function create () {
  // 创建一个空的对象
  let obj = {}
  // 获得构造函数
  let Con = [].shift.call(arguments)
  // 链接到原型
  obj.__proto__ = Con.prototype
  // 绑定 this，执行构造函数
  let result = Con.apply(obj, arguments)
  // 确保 new 出来的是个对象
  return typeof result === 'object' ? result : obj
}

var car = create(Car)
```
