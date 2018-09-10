---
title: WebKit渲染

categories:
  - web

tags:
  - css
---

WebKit 是一个渲染引擎，而不是一个浏览器，它专注于网页内容展示，其中渲染是其中核心的部分之一。

<!-- more -->

# DOM

DOM 是对 HTML 或者 XML 等文档的一种结构化表示方法，通过这种方式，用户可以通过提供标准的接口来访问 HTML 页面中的任何元素的相关属性，并可对 DOM 进行相应的添加、删除和更新操作等。更多相关信息可查阅 W3C 的文档。

W3C DOM 标准被分为 3 个不同的部分：
  * 核心 DOM - 针对任何结构化文档的标准模型
  * XML DOM - 针对 XML 文档的标准模型
  * HTML DOM - 针对 HTML 文档的标准模型

HTML DOM 将 HTML 文档表达为树结构，即 DOM 树。

![DOM 树](https://cmspic-10003009.image.myqcloud.com/dc473240-b263-11e8-ad16-6fbf6c430894_size_486x266#gif)

基于 DOM 树的一些可视(visual)的节点，WebKit 来根据需要来创建相应的 RenderObject 节点，这些节点也构成了一颗树，称之为 Render 树。基于 Render 树，WebKit 也会根据需要来为它们中的某些节点创建新的 RenderLayer 节点，从而形成一棵 RenderLayer 树。

Render 树和 RenderLayer 树是 WebKit 支持渲染所提供的基础但是却非常重要的设施。这是因为 WebKit 的布局计算依赖它们，浏览器的渲染和 GPU 硬件加速也都依赖于它们。幸运地是，得益于它们接口定义的灵活性，不同的浏览器可以很方便地来实现自己的渲染和加速机制。

为了直观了解这三种树，下图给出了这三种树及其它们之间的对应关系。

![三种树](https://cmspic-10003009.image.myqcloud.com/5b4def90-b267-11e8-ad16-6fbf6c430894_size_621x299#gif)

## Render 树的建立

Render 树是基于 DOM 树建立起来的一颗新的树， 是布局和渲染等机制的基础设施。Render 树节点和 DOM 树节点不是一一对应关系，那么哪些情况下需要建立新的 Render 节点呢？

* DOM 树的 document 节点
* DOM 树中的可视化节点，例如 HTML，BODY，DIV 等，非可视化节点不会建立 Render 树节点，例如 HEAD，META，SCRIPT 等
* 某些情况下需要建立匿名的 Render 节点，该节点不对应于 DOM 树中的任何节点

RenderObject 对象在 DOM 树创建的同时也会被创建，当然，如果 DOM 中有动态加入元素时，也可能会相应地创建 RenderObject 对象。下图示例的是 RenderObject 对象被创建的函数调用过程。

![RenderObject 对象被创建的函数调用过程](https://cmspic-10003009.image.myqcloud.com/fab9e5b0-b268-11e8-ad16-6fbf6c430894_size_333x319#gif)

Render 树建立之后，布局运算会计算出相关的属性，这其中有位置，大小，是否浮动等。有了这些信息之后，渲染引擎才只知道在何处以及如何画这些元素。

## RenderObject 类及其子类

RenderObject 是 Render 树的节点基础类，提供了一组公共的接口。它有很多的子类，这些子类可能对应一些 DOM 树中的节点，例如 RenderText，有些则是容器类，例如 RenderBlock。下图给出了一些常用的类的继承关系图，这其中 RenderBlock 是一个非常重要的类。

![常用的类的继承关系图](https://cmspic-10003009.image.myqcloud.com/7a2119e0-b269-11e8-ad16-6fbf6c430894_size_557x404#gif)

## 匿名 RenderBlock 对象

CSS 中有块级元素和内嵌(inline)元素之分。内嵌元素表现的是行布局形式，就是说这些元素以行进行显示。以 div 元素为例，如果设置属性 style 为 display:inline 时，则那是内嵌元素，那么它可能与前面的元素在同一行；如果该元素没有设置这个属性时，则是块级元素，那么在新的行里显示。

RenderBlock 是用来表示块级元素，为了处理上的方便，某些情况下需要建立匿名的 RenderBlock 对象，因为 RenderBlock 的子女必须都是内嵌的元素或者都是非内嵌的元素。所以，当它包含两种元素的时候，那么它会为相邻的内嵌元素创建一个块级 RenderBlock 节点，然后设置该节点为自己的子女并且设置这些内嵌元素为它的子女。

# 浏览器如何构建 Render 树

[Render 树的构建](https://cmspic-10003009.image.myqcloud.com/bc350930-b26a-11e8-ad16-6fbf6c430894_size_630x292)

浏览器取回代码后，首先会构造 DOM 树，就是根据 HTML 标签构建 HTML DOM 树。

之后会解析 CSS 样式，解析的顺序是浏览器的样式(UA defaults) -> 页面的 link 标签引入的链接样式 -> `@import` 引入的导入样式 -> 写在 style 标签里面的内嵌样式 -> 写在 html 标签是 style 属性的行内样式

根据 DOM 树以及解析的 CSS 样式，构造 Render 树，在 Render 树中，会把 DOM 树中没有的元素给去除，比如 head 标签以及里面的内容，以及 display:none 的元素也会被去除。

一旦 Render 树构建完成，浏览器会把树里面的内容绘制在屏幕上。

html 代码如下：

``` html
<html>
<head>
  <title>Beautiful page</title>
</head>
<body>

  <p>
    Once upon a time there was
    a looong paragraph...
  </p>

  <div style="display: none">
    Secret message
  </div>

  <div><img src="..." /></div>
  ...

</body>
</html>
```

构造的 DOM 树如下：

``` bash
documentElement (html)
  head
    title
  body
    p
      [text node]

    div
      [text node]

    div
      img

    ...
```

Render 树如下：

``` bash
root (RenderView)
  body
    p
        line 1
    line 2
    line 3
    ...

  div
    img

  ...
```

# CSS 的图层

在渲染 DOM 的时候，浏览器所做的工作实际上是：1. 获取 DOM 后分割为多个图层 2. 对每个图层的节点计算样式结果 (Recalculate style -- 样式重计算) 3. 为每个节点生成图形和位置 (Layout -- 回流和重布局) 4. 将每个节点绘制填充到图层位图中 (Paint Setup和Paint -- 重绘)  5. 图层作为纹理上传至 GPU 6. 符合多个图层到页面上生成最终屏幕图像 (Composite Layers -- 图层重组)

# 重绘 (repaint/redraw) 和重排/回流 (reflow)

## 重绘

重绘 (repaint/redraw)。当盒子的位置、大小以及其他属性，例如颜色、字体大小等都确定下来之后，浏览器便把这些原色都按照各自的特性绘制一遍，将内容呈现在页面上。重绘是指一个元素外观的改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。

触发重绘的条件：改变元素外观属性。如：color，background-color 等。

注意：table 及其内部元素可能需要多次计算才能确定好其在渲染树中节点的属性值，比同等元素要多花两倍时间，这就是我们尽量避免使用 table 布局页面的原因之一。

## 重排

重排 (重构/回流/reflow)。当元素的尺寸/几何属性(宽或高)发生变化，元素显示隐藏等，会导致浏览器需要重新计算元素的几何属性和位置，同样其他元素的几何属性和位置也会因此受到影响。浏览器会使渲染树中受到影响的部分失效，并重新构造渲染树。这就称为重排。

完成重排后，浏览器会重新绘制受影响的部分到屏幕，该过程称为重绘。重排必然导致重绘，所以重排更加恶心。其实我们一直研究的应该是怎么避免触发多次重排。

每个页面至少需要一次重排，就是在页面第一次加载的时候。

触发重排的条件：任何页面布局和几何属性的改变都会触发重排。如：
  * 页面渲染初始化(无法避免)
  * 添加或删除可见的 DOM 元素
  * 元素位置的改变，或者使用动画
  * 元素尺寸的改变，包括大小、外边距、边框等
  * 浏览器窗口尺寸的变化(resize事件发生时)
  * 填充内容的改变，比如文本的改变或图片大小改变而引起的计算值宽度和高度的改变
  * 读取元素尺寸或位置属性: offsetLeft/Top/Height/Width, clientTop/Left/Width/Height, scrollTop/Left/Width/Height,　width/height,　getComputedStyle(), currentStyle(IE)

## 建设重绘和重排来优化页面

重绘和重排的代价：耗时，导致浏览器卡慢。

优化：
  * 浏览器自身的优化：浏览器会维护 1 个队列，把所有会引起回流、重绘的操作放入这个队列，等队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会 flush 队列，进行一个批处理。这样就会让多次的回流、重绘变成一次回流重绘。
    ``` js
    var ele = document.getElementById('myDiv');
    ele.style.borderLeft = '1px';
    ele.style.borderRight = '2px';
    ele.style.padding = '5px';
    // 乍一想，元素的样式改变了三次，每次改变都会引起重排和重绘，所以总共有三次重排重绘过程，但是浏览器并不会这么笨，它会把三次修改“保存”起来(大多数浏览器通过队列化修改并批量执行来优化重排过程)，一次完成！但是，有些时候你可能会(经常是不知不觉)强制刷新队列并要求计划任务立即执行
    ```
  * 开发者的优化：减少重绘和重排就是要减少对渲染树的操作，可以合并多次的 DOM 和样式的修改，并减少对 style 样式的请求。
    - 直接改变元素的 className
    - 先设置元素为 display: none; 然后进行页面布局等操作；设置完成后将元素设置为 display: block; 这样的话就只引发两次重绘和重排
    - 要经常访问浏览器的 flush 队列属性；如果一定要访问，可以利用缓存。将访问的值存储起来，接下来使用就不会再引发回流
    - 使用 cloneNode (true or false) 和 replaceChild 技术，引发一次回流和重绘
    - 将需要多次重排的元素，position 属性设为 absolute 或 fixed，元素脱离了文档流，它的变化不会影响到其他元素
    - 如果需要创建多个 DOM 节点，可以使用 documentFragment 创建完后一次性的加入 document
      ``` js
      var fragment = document.createDocumentFragment()

      var li = document.createElement('li')
      li.innerHTML = 'apple'
      fragment.appendChild(li)

      var li = document.createElement('li')
      li.innerHTML = 'watermelon'
      fragment.appendChild(li)

      document.getElementById('fruit').appendChild(fragment)
      ```
    - 尽量不要使用 table 布局
    - 量不要在修改样式或者布局信息时查询样式，因为查询的时候会强制重排，导致浏览器无法优化多次重排

# transform 是否可以避免重排重绘问题

CSS 的最终表现分为以下四步：`Recalculate Style` -> `Layout` -> `Paint Setup and Paint` -> `Composite Layers`，即查找并计算样式 -> 排布 -> 绘制 -> 组合层

重排必定导致重绘，而查询样式会强制发生重排！

由于 `transform` 是位于 `Composite Layers` 层，而 `width`、`left`、`margin` 等则是位于 `Layout` 层。在 `Layout` 层发生的改变必定导致 `Paint Setup and Paint` -> `Composite Layers`，所以相对而言使用 `transform` 实现的动画效果肯定比 `left` 这些更加流畅。

# 动画性能优化

用绝对定位(absolute)+ 改变位移(left、top等)+ 改变大小(whidth、height) + 改变边距 (margin) 来实现的动画，出现卡顿，其原因是当这些节点改变大小或位置时，浏览器重布局了整个页面！

[CSS Triggers](https://csstriggers.com/)

## 强迫浏览器创建图层，开启 GPU 硬件加速

如果能把动画单独创建一个图层，与页面独立开，就会让动画更顺畅。

满足以下条件就会创建一个图层：

1. 3D或透视变换 (perspective transform) CSS 属性
2. 使用硬件加速视频解码的 <video> 节点
3. 拥有3D (WebGL) 上下文或硬件加速的 2D 上下文的 <canvas> 节点
4. 混合插件(如 Flash)
5. 对自己的 opacity 做 CSS 动画或使用一个动画 WebKit 变换的元素
6. 拥有硬件加速 CSS 过滤器的元素
7. 元素有一个包含复合层的后代节点(一个元素拥有一个子元素，该子元素在自己的层里)
8. 元素有一个 z-index 较低且包含一个复合层的兄弟元素(换句话说就是该元素在复合层上面渲染)

强迫浏览器对元素单独生成一个图层，把重绘的工作交给 GPU 去做，而不占用主线程。也就是利用 GPU 重绘来做动画。

使用 3d 效果来开启硬件加速：

``` css
.speed-up {
  -webkit-transform: rotate3d(250px,250px,250px,-120deg) scale3d(0.5, 0.5, 0.5) translate3d(250px, 250px, 250px);
  transform: rotate3d(250px,250px,250px,-120deg) scale3d(0.5, 0.5, 0.5) translate3d(250px, 250px, 250px);
}
```

如果并不需要用到 transform 变换，仅仅是开启硬件加速，可以用下面的语句:

``` css
.speed-up{
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
```

硬件加速最好只用在 animation 或者 transform 上。不要滥用硬件加速，因为这样会增加性能的消耗，如果滥用反而会使动画变得更加卡，这样就得不偿失了。

## 尽量不触发重绘

想提高动画性能，需要做的就是减少浏览器在动画运行时所需要做的工作。最好的情况是，改变的属性仅仅影响图层的组合，变换 (transform) 和透明度(opacity)就属于这种情况。

## 减小选择器的复杂性

``` css
.box:nth-last-child(-n+1) .title {
  /* styles */
}

.final-box-title {
  /* styles */
}
```

上面代码都是选择同一个元素，当元素很多时，第二个选择器的性能会明显优于第一个。BEM 规范有做类似事情，按照特性直接由一个选择器选择元素的性能往往会更优。

## 减少样式的计算量

减少无效元素、冗余标签。

## 使用 Flexbox 布局

## css 动画与 js 动画

css 动画优点：

(1) 浏览器可以对动画进行优化
  1. 浏览器使用与 requestAnimationFrame 类似的机制，requestAnimationFrame 比起 setTimeout、setInterval 设置动画的优势主要是:
    - requestAnimationFrame 会把每一帧中的所有 DOM 操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频，一般来说，这个频率为每秒 60 帧。
    - 在隐藏或不可见的元素中 requestAnimationFrame 不会进行重绘或回流，这当然就意味着更少的 CPU、GPU 和内存使用量。
  2. 强制使用硬件加速，通过 GPU 来提高动画性能

(2) 代码相对简单，性能调优方向固定

(3) 对于帧速表现不好的低版本浏览器，css 可以做到自然降级，而 js 则需要撰写额外代码

css 动画缺点：

(1) 运行过程控制较弱，无法附加事件绑定回调函数。css 动画只能暂停，不能在动画中寻找一个特定的时间点，不能在半路反转动画，不能变换时间尺度，不能在特定的位置添加回调函数或是绑定回放事件，无进度报告

(2) 代码冗长。想用 CSS 实现稍微复杂一点动画,最后 css 代码都会变得非常笨重。

js 动画优点：

(1) js 动画控制能力很强，可以在动画播放过程中对动画进行控制：开始、暂停、回放、终止、取消都是可以做到的。

(2) 动画效果比 css 动画丰富，有些动画效果，比如曲线运动、冲击闪烁、视差滚动效果，只有 js 动画才能完成

(3) css 动画有兼容性问题，而 js 动画大多时候没有兼容性问题

js 动画缺点：

(1) js 在浏览器的主线程中运行，而主线程中还有其它需要运行的 js 脚本、样式计算、布局、绘制任务等，对其干扰导致线程可能出现阻塞，从而造成丢帧的情况。

(2) js 动画代码的复杂度高于 css 动画

总结：如果动画只是简单的状态切换，不需要中间过程控制，在这种情况下，css 动画是优选方案。它可以让你将动画逻辑放在样式文件里面，而不会让你的页面充斥 js 库。然而如果你在设计很复杂的客户端界面或者在开发一个有着复杂 UI 状态的 APP。那么你应该使用 js 动画，这样你的动画可以保持高效，并且你的工作流也更可控。所以，在实现一些小的交互动效的时候，就多考虑考虑 css 动画。对于一些复杂控制的动画，使用 js 动画比较可靠。

## 优化 js 动画

### 使用 requestAnimationFrame

将 setTimeout 换成 requestAnimationFrame，因为 setTimeout 时间控制可能造成在一帧的中间，目前各浏览器对 requestAnimationFrame 的支持已经比较好了。

### 使用 Web Workers

将复杂计算的 JS 采用 Web Workers 进行处理。

### 减少垃圾回收

垃圾回收是一个容易被忽略的问题，因为垃圾回收的时间是不受控制的，它可能在一个动画的中途，阻塞动画的执行，更理想的情况是在循环中复用对象。
