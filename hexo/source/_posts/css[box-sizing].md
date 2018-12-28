---
title: box-sizing

categories:
  - web

tags:
  - css

date: 2018/12/28
---

box-sizing，“盒子的大小”，顾名思义，这个属性影响的是盒模型。

<!-- more -->

适用于：所有接受 `width` 和 `height` 的元素。

继承性：无。

所以我们一般定义：

``` css
// 元素的内边距和边框将在已设定的宽度和高度内进行绘制
::before {
  box-sizing: border-box;
}

::after {
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}
```

取值：
  * content-box
    - padding和border不被包含在定义的width和height之内。对象的实际宽度等于设置的width值和border、padding之和，即 ( Element width = width + border + padding )
    - 此属性表现为标准模式下的盒模型。
  * border-box
    - padding和border被包含在定义的width和height之内。对象的实际宽度就等于设置的width值，即使定义有border和padding也不会改变对象的实际宽度，即 ( Element width = width )
    - 此属性表现为怪异模式下的盒模型。

content-box 是默认值。
