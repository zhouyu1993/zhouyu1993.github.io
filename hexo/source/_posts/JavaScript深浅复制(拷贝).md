---
title: JavaScript深浅复制(拷贝)

categories:
  - web

tags:
  - js
---

拷贝，copy，复制，抄本、副本、别本。

拷贝就是拷贝指向对象的指针，意思就是说，拷贝出来的目标对象的指针和源对象的指针指向的内存空间是同一块空间！

拷贝分浅拷贝和深拷贝。

<!-- more -->

# 深浅拷贝

要了解深浅拷贝，需要先去回顾 JavaScript 数据类型。

JavaScript 的数据类型分为基本数据类型和引用数据类型。

基本数据类型是按值传递，其拷贝没有深浅拷贝的区别。b 是 a 的拷贝，在修改 b 时并不会改到 a。

引用数据类型是按引用传递，其拷贝才有深浅拷贝的区别。

深浅拷贝是针对对象而言的。

# 浅拷贝

shallow copy

按位拷贝对象，它会创建一个新对象，这个对象有着源对象属性值的一份精确拷贝。

如果属性是基本类型，拷贝的就是基本类型的值；如果属性是内存地址(引用类型)，拷贝的就是内存地址。

因此如果其中一个对象改变了这个地址，就会影响到另一个对象。即默认拷贝构造函数只是对对象进行浅拷贝复制(逐个成员依次拷贝)，即只复制对象空间而不复制资源，只复制引用而不复制真正的值。

浅拷贝的意思就是只复制引用，而未复制真正的值。

## 赋值操作符 = 就是浅拷贝

``` js
var obj = {
  a: 'hello',
  b: {
    a: 'world',
    b: 21,
  },
  c: ['Bob', 'Tom', 'Jenny'],
  d: function () {
   alert('hello world')
  }
}

var cloneObj = obj

cloneObj.a = 'world'

console.log(cloneObj.a, obj.a) // world, world
```

## 简单的复制函数

``` js
var obj = {
  a: 'hello',
  b: {
    a: 'world',
    b: 21,
  },
  c: ['Bob', 'Tom', 'Jenny'],
  d: function () {
   alert('hello world')
  }
}

function simpleClone (initalObj) {    
  var obj = {}
  for ( var i in initalObj) {
    obj[i] = initalObj[i]
  }
  return obj
}

var cloneObj = simpleClone(obj)

cloneObj.a = 'world'

console.log(cloneObj.a, obj.a) // world, hello

cloneObj.b.a = 'hello'

console.log(cloneObj.b.a, obj.b.a) // hello, hello

cloneObj.b = {}

console.log(cloneObj.b.a, obj.b.a) // undefined, hello

cloneObj.c[0] = 0

console.log(cloneObj.c[0], obj.c[0]) // 0, 0

cloneObj.c = [1, 2, 3]

console.log(cloneObj.c[0], obj.c[0]) // 1. 0
```

`obj[i] = initalObj[i]` 这里对对象的第一层进行了深拷贝，而第二层开始的目标我们是直接利用 = 赋值操作符进行拷贝的，只是复制了一个引用，也就是浅拷贝。

直接修改克隆对象第一层属性的值，不会对原对象产生影响。但如果修改第二层属性，即第一层属性的值是个对象，并改变其值(该对象上某个属性)，就会对原对象产生影响。

对目标对象的第一层进行深拷贝，然后后面的是浅拷贝，可以称作“首层浅拷贝”。

赋值运算符 = 实现的是浅拷贝，只拷贝对象的引用值。

js 中数组和对象自带的拷贝方法都是“首层浅拷贝”。

## concat

``` js
var array = [1, 2, 3]

var cloneArray = array.concat() // [1, 2, 3]

cloneArray[0] = 0

console.log(cloneArray, array) // [0, 2, 3], [1, 2, 3]
```

看上去好像不是浅拷贝，其实 `concat` 也是对数组的第一层进行了深拷贝。

``` js
var array = [{ x: 1 }, 2, 3]

var cloneArray = array.concat() // [{ x: 1}, 2, 3]

cloneArray[0].x = 0

console.log(cloneArray[0].x, array[0].x) // 0, 0
```

## slice

`slice` 也是对数组的第一层进行了深拷贝。

``` js
var array = [{ x: 1 }, 2, 3]

var cloneArray = array.slice() // [{ x: 1}, 2, 3]

cloneArray[0].x = 0

console.log(cloneArray[0].x, array[0].x) // 0, 0
```

## forEach

`forEach` 也是对数组的第一层进行了深拷贝。

``` js
var array = [{ x: 1 }, 2, 3]

var cloneArray = []

array.forEach((item, index) => {
  cloneArray[index] = item
}) // [1, 2, 3]

cloneArray[0].x = 0

console.log(cloneArray[0].x, array[0].x) // 0, 0
```

## map

`map` 也是对数组的第一层进行了深拷贝。

``` js
var array = [{ x: 1 }, 2, 3]

var cloneArray = array.map(item => {
  return item
}) // [1, 2, 3]

cloneArray[0].x = 0

console.log(cloneArray[0].x, array[0].x) // 0, 0
```

## 扩展运算符

`扩展运算符 ...` 也是对数组/对象的第一层进行了深拷贝。

``` js
var array = [{ x: 1 }, 2, 3]

var cloneArray = [...array] // [1, 2, 3]

cloneArray[0].x = 0

console.log(cloneArray[0].x, array[0].x) // 0, 0
```

## Object.assign()

`Object.assign()` 也是对数组/对象的第一层进行了深拷贝。

``` js
var array = [{ x: 1 }, 2, 3]

var cloneArray = Object.assign([], array) // [1, 2, 3]

cloneArray[0].x = 0

console.log(cloneArray[0].x, array[0].x) // 0, 0
```

# 深拷贝

deep copy

一个引用对象一般来说由两个部分组成：一个具名的 Handle，也就是我们所说的声明（如变量）和一个内部（不具名）的对象，也就是具名 Handle 的内部对象。它在 Manged Heap（托管堆）中分配，一般由新增引用对象的 new 方法是进行创建。深拷贝是指源对象与拷贝对象互相独立，其中任何一个对象的改动都不会对另外一个对象造成影响。

源对象与拷贝对象互相独立。

深拷贝就是对目标的完全拷贝，不像浅拷贝那样只是复制了一层引用，就连值也都复制了。

只要进行了深拷贝，它们老死不相往来，谁也不会影响谁。

一般情况下，只需使用系统提供的浅拷贝构造函数即可，但是，如果对象的数据成员包括指向堆空间的指针，就不能使用这种拷贝方式，因为两个对象都拥有同一个资源，对象析构时，该资源将经历两次资源返还，此时必须自定义深拷贝构造函数，为创建的对象分配堆空间，否则会出现动态分配的指针变量悬空的情况。

深拷贝会拷贝所有的属性，并拷贝属性指向的动态分配的内存。当对象和它所引用的对象一起拷贝时即发生深拷贝。深拷贝相比于浅拷贝速度较慢并且花销较大。

实现深拷贝的方法：

## 利用 JSON.parse 和 JSON.stringify

``` js
var array = [{ x: 1, regExp: new RegExp('1'), func: function() {}, }, 2, 3]

var cloneArray = JSON.parse(JSON.stringify(array))

cloneArray[0].x = 0

console.log(cloneArray[0].x, array[0].x) // 0, 1

console.log(cloneArray[0].regExp, cloneArray[0].func) // undefined, undefined
```

缺点：只能适用于一些简单的情况，能正确处理的对象只有 Number, String, Boolean, Array, 扁平对象，即那些能够被 json 直接表示的数据结构。RegExp 对象、Function 对象等没办法转成 JSON，所以不能被处理，会被忽略，导致丢失。

## 利用递归来实现每一层都重新创建对象并赋值

``` js
var array = [{ x: 1, regExp: new RegExp('1'), func: function() {}, }, 2, 3]

function deepClone(obj) {
  if (/(Array|Object)]/gi.test(Object.prototype.toString.call(obj))) {
    var cloneObj = obj instanceof Array ? [] : {}
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var prop = obj[key]
        if (/(Array|Object)]/gi.test(Object.prototype.toString.call(prop))) {
          cloneObj[key] = prop instanceof Array ? [] : {}  
          cloneObj[key] = deepClone(prop)
        } else {
          cloneObj[key] = prop
        }
      }
    }
    return cloneObj
  } else {
    return obj
  }
}

var cloneArray = deepClone(array)

cloneArray[0].x = 0

console.log(cloneArray[0].x, array[0].x) // 0, 1

console.log(cloneArray[0].regExp, cloneArray[0].func) // /1/, ƒ () {}
```
