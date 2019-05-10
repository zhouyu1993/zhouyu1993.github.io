---
title: Vue.js 源码解析

categories:
  - web

tags:
  - 分享

date: 2019/04/16
---

[Vue.js 源码解析](https://github.com/answershuto/learnVue)。转。作者 answershuto。

<!-- more -->

## Vue.js响应式原理

[Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

将数据data变成可观察（observable）的

代理

一是通过observe将所有数据变成observable。二是将_data上面的数据代理到vm上

## Vue.js依赖收集

做的是这样一件事：对于 data 中定义的某些变量，在实际模板中并没有被用到，修改这些变量时如何避免重新渲染模版？

???

## 从Vue.js源码角度再看数据绑定

首先通过一次渲染操作触发Data的getter（这里保证只有视图中需要被用到的data才会触发getter）进行依赖收集，这时候其实Watcher与data可以看成一种被绑定的状态（实际上是data的闭包中有一个Deps订阅者，在修改的时候会通知所有的Watcher观察者），在data发生变化的时候会触发它的setter，setter通知Watcher，Watcher进行回调通知组件重新渲染的函数，之后根据diff算法来决定是否发生视图的更新。

Vue在初始化组件数据时，在生命周期的beforeCreate与created钩子函数之间实现了对data、props、computed、methods、events以及watch的处理。

Observer为数据加上响应式属性进行双向绑定。如果是对象则进行深度遍历，为每一个子对象都绑定上方法，如果是数组则为每一个成员都绑定上方法。

如果是修改一个数组的成员，该成员是一个对象，那只需要递归对数组的成员进行双向绑定即可。但这时候出现了一个问题：如果我们进行pop、push等操作的时候，push进去的对象根本没有进行过双向绑定，更别说pop了，那么我们如何监听数组的这些变化呢？ Vue.js提供的方法是重写push、pop、shift、unshift、splice、sort、reverse这七个数组方法。

看晕了，想睡觉zzzz

## Vue.js事件机制

四个事件API，分别是$on，$once，$off，$emit。

## VNode节点(Vue.js实现)
