[class](https://es6.ruanyifeng.com/#docs/class)
[class-extends](https://es6.ruanyifeng.com/#docs/class-extends)

class 的静态熟悉、静态方法，继承

``` js
class A {
  hello() {
    console.log('A')
  }
}

class B extends A {
  hello () {
    console.log('B')
  }
}

A.hello() // Uncaught TypeError: A.hello is not a function
B.hello() // Uncaught TypeError: B.hello is not a function

A.prototype.hello() // A
B.prototype.hello() // B

const b = new B()

b.hello() // B
b.__proto__.hello() // B
```

``` js
class A {
  static hello() {
    console.log('A')
  }
}

class B extends A {
  hello () {
    console.log('B')
  }
}

A.hello() // A
B.hello() // A。hello() 是 A 类的静态方法，B 继承 A，也继承了 A 的静态方法

A.prototype.hello() // Uncaught TypeError: A.prototype.hello is not a function
B.prototype.hello() // B

const b = new B()

b.hello() // B
b.__proto__.hello() // B
```
