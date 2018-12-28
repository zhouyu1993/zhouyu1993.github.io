---
title: JavaScript模块的演变

categories:
  - web

tags:
  - js

date: 2018/01/08
---

ES6 带来的原生 JavaScript 模块体系，相信你已经用起来了，如果还没有，那你还有时间看文章？看什么看，你还不赶紧去用用。

<!-- more -->

转载：[原生 JavaScript 模块的现在与未来](https://zhuanlan.zhihu.com/p/32554482)

JavaScript 一开始并没有内建模块化支持，也几乎没有模块化这种概念。当时没那么大的需求，搞个模块化显得大材小用啊。随着互联网的发展，尤其是 2006 年 ajax 技术的出现和之后 Web 2.0 的兴起，越来越多的业务逻辑向前端转移，前端开发的复杂程度和代码量逐渐提升。这时，由于缺乏模块化概念，JavaScript 的一些问题便凸显出来：代码难以复用、容易出现全局变量污染和命名冲突、依赖管理难以维护等等。一开始，开发者们使用诸如暴露全局对象、自执行函数等方法来规避这些问题，但仍无法从根本上解决问题。

## CommonJS

2009 年，基于将 JavaScript 应用于服务端的尝试，ServerJS 诞生了。之后 ServerJS 更名为 CommonJS，并逐步发展为一个完整的模块规范。简称 CMD(Common Module Definition)

[CommonJS官网](http://www.commonjs.org/)
[CommonJS阮一峰](http://javascript.ruanyifeng.com/nodejs/module.html)

CommonJS 为模块的使用定义了一套 API。比如，它定义了全局函数 require，通过传入模块标识来引入其他模块，如果被引入的模块又依赖了其他模块，那么会依次加载这些模块；通过 module.exports 向外部暴露 API，以便其他的模块引入。

由于 CommonJS 是使用`同步方式`加载模块的，即只有加载完成才能进行接下来的操作，因此当应用于浏览器端时会受到网速的限制。

``` JS
const $ = require('jquery')

// 定义私有方法
function log (...arg) {
  console.log(...arg)
}
// 定义公有方法
function sayHello () {
  const el = $('body')
  log('zhouyu, hello', el)
}
// 暴露公有方法
module.exports = {
  sayHello
}
```

## AMD

之后，在 CommonJS 组织的讨论中，AMD(Asynchronous Module Definition)应运而生。和 CommonJS 不同的是，它使用`异步方式`加载模块，因此更适合被浏览器端采用。AMD 用全局函数 define 来定义模块，它需要三个参数：模块名称、模块的依赖数组、所有依赖都可用之后执行的回调函数(该函数按照依赖声明的顺序，接收依赖作为参数)。

[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)
[AMD中文](https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88)

``` JS
define(['jquery'], function ($) {
  // 定义私有方法
  function log (...arg) {
    console.log(...arg)
  }
  // 定义公有方法
  function sayHello () {
    const el = $('body')
    log('zhouyu, hello', el)
  }
  // 暴露公有方法
  return sayHello
})
```

## UMD

如果需要同时支持 CommonJS 和 AMD 两种格式，那么可以使用 UMD(Universal Module Definition)。事实上，UMD 通过一系列 if/else 判断来确定当前环境支持的模块体系，因此多数情况下 UMD 格式的模块会占用更大的体积。

``` js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory)
  } else if (typeof exports === 'object') {
    // Nodejs 或 CommonJS
    module.exports = factory(require('jquery'))
  } else {
    // 浏览器全局变量(root 即 window)
    root.returnExports = factory(root.jQuery)
  }
}(this, function ($) {
  // 定义私有方法
  function log (...arg) {
    console.log(...arg)
  }
  // 定义公有方法
  function sayHello () {
    const el = $('body')
    log('zhouyu, hello', el)
  }
  // 暴露公有方法
  return sayHello
}));
```

## ES6 Modules

无论是 CommonJS，AMD 还是 UMD，它们都不是标准的 JavaScript 模块解决方案。换句话说，它们都没有被写进 ECMA 的规范中。直到 2015 年 6 月，TC39 委员会终于将 Modules 写进 ECMAScript 2015 中，标志着原生模块新时代的到来。至此，JavaScript 文件有了两种形式：脚本(自 JavaScript 诞生起我们就在使用的)和模块(即 ECMAScript 2015 Modules)。下面就让我们来一起探索 ECMAScript 2015 Modules(以下简称 ES6 Modules)

[ES6 Modules](http://www.ecma-international.org/ecma-262/6.0/#sec-modules)
[ES6阮一峰](http://es6.ruanyifeng.com/#docs/module)

``` js
import $ from('jquery')

// 定义私有方法
function log (...arg) {
  console.log(...arg)
}
// 定义公有方法
function sayHello () {
  const el = $('body')
  log('zhouyu, hello', el)
}

export default sayHello
```

## ES6 Modules 现状

时至今日，几大主流浏览器都在积极推进支持原生 ES6 Modules 的工作，部分浏览器的技术预览版也已经初步完成了这一使命。可以通过 [caniuse](https://caniuse.com/#search=module) 查看目前浏览器的支持情况。

## 使用 Babel 和 webpack

由于绝大多数浏览器都不支持 ES6 Modules，所以目前如果想使用它的语法，需要借助 Babel 和 webpack，即通过 Babel 将代码编译为 ES5 的语法，然后使用 webpack 打包成目标格式。

## 直接使用 ES6 Modules

有些游览器已经支持 ES6 Modules，我们利用 `<script type="module">`(默认是 defer)来使用。

## 其他探索

* 动态加载方案 `import()`

``` js
const load = async (url) => {
  const module = await import(url)
  console.log(module, window[tempGlobal])
}
```

``` js
function load (url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    const tempGlobal = '__tempModuleLoadingVariable' + Math.random().toString(32).substring(2)
    script.type = 'module'
    script.textContent = `import * as m from "${url}"; window.${tempGlobal} = m;`

    script.onload = () => {
      resolve(window[tempGlobal])
      delete window[tempGlobal]
      script.remove()
    }

    script.onerror = () => {
      reject(new Error('Failed to load module script with URL ' + url))
      delete window[tempGlobal]
      script.remove()
    }

    document.documentElement.appendChild(script)
  })
}
```

* 基于 ES6 Modules 的 `module-pusher` 尝试

[查看原文](https://zhuanlan.zhihu.com/p/32554482)
