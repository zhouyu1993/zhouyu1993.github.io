---
title: BFC

categories:
  - web

tags:
  - css

date: 2018/12/28
---

BFC

<!-- more -->

[BFC](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

文档流其实分为普通流、浮动流和定位流三种。

### 普通流 (normal flow)

在普通流中，元素按照其在 HTML 中的先后位置至上而下布局，在这个过程中，行内元素水平排列，直到当行被占满然后换行，块级元素则会被渲染为完整的一个新行，除非另外指定，否则所有元素默认都是普通流定位，也可以说，普通流中元素的位置由该元素在 HTML 文档中的位置决定。

### 浮动流 (float flow)

在浮动布局中，元素首先按照普通流的位置出现，然后根据浮动的方向尽可能的向左边或右边偏移，其效果与印刷排版中的文本环绕相似。

### 绝对定位流 (absolute positioning flow)

绝对定位是 position: absolute; 或 position: fixed;

position: absolute; 是相对向上查找的 position: relative; 父辈元素。

position: fixed; 是相对 viewpoint。

在绝对定位布局中，元素会整体脱离普通流，因此绝对定位元素不会对其兄弟元素造成影响，而元素具体的位置由绝对定位的坐标决定。

### BFC 概念

BFC，块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。

属于上述文档流中的普通流！

具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。

通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。

### 触发或创建 BFC

* 根元素或包含根元素的元素
* 浮动元素（元素的 float 不是 none）
* 绝对定位元素（元素的 position 为 absolute 或 fixed）
* overflow 值不为 visible 的块元素
* 行内块元素（元素的 display 为 inline-block）
* 表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
* 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
* 匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）
* display 值为 flow-root 的元素
* contain 值为 layout、content或 strict 的元素
* 弹性元素（display为 flex 或 inline-flex元素的直接子元素）
* 网格元素（display为 grid 或 inline-grid 元素的直接子元素）
* 多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
* column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。

### BFC 特性或规则及应用

* 内部的Box会在垂直方向，一个接一个地放置；
  - 我们平常说的盒子是由margin、border、padding、content组成的，实际上每种类型的四条边定义了一个盒子，分别是分别是margin box、border box、padding box、content box，这四种类型的盒子一直存在，即使他们的值为0。决定块盒在包含块中与相邻块盒的垂直间距的便是margin-box。
  - Box之间的距离虽然也可以使用padding来控制，但是此时实际上还是属于box内部里面，而且使用padding来控制的话就不能再使用border属性了。
  - 其实就是我们平常所说的div一行一行块级放置的样式
* 同一个BFC下相邻块级元素的垂直方向外边距会发生折叠，即之前提到的margin折叠只发生在同一个BFC中；
* 浮动定位和清除浮动时只会应用于同一个BFC内的元素；
* 浮动不会影响其它BFC中元素的布局，而清除浮动只能清除同一BFC中在它前面的元素的浮动；
* BFC可以包含浮动元素---清除内部浮动后；
* BFC可以阻止元素被浮动元素覆盖，BFC的区域不会与float box重叠；
  ``` html
  <div style="height: 100px;width: 100px;float: left;background: blue">我是一个左浮动的元素</div>
  <div style="width: 200px; height: 200px;background: red">我是一个没有设置浮动，也没有触发 BFC 元素</div>
  ```
  第二个元素有部分被浮动元素所覆盖，(但是文本信息不会被浮动元素所覆盖) 如果想避免元素被覆盖，可触第二个元素的 BFC 特性，在第二个元素中加入 overflow: hidden;
  ``` html
  <div style="height: 100px;width: 100px;float: left;background: blue">我是一个左浮动的元素</div>
  <div style="width: 200px; height: 200px;background: red;overflow: hidden">我是一个没有设置浮动，也没有触发 BFC 元素</div>
  ```
* 实现两列自适应布局；
  ``` html
  <div style="height: 100px;width: 100px;float: left;background: blue">我是一个左浮动的元素</div>
  <div style="height: 200px;background: red;overflow: hidden">我是一个没有设置浮动，也没有触发 BFC 元素</div>
  ```
  左边的宽度固定，右边的内容自适应宽度(去掉上面右边内容的宽度)

### BFC 与 Layout

IE 作为浏览器中的奇葩，当然不可能按部就班的支持 BFC 标准，于是乎 IE 中有了 Layout 这个东西。Layout 和 BFC 基本是等价的，为了处理 IE 的兼容性，在需要触发 BFC 时，我们除了需要用触发条件中的 CSS 属性来触发 BFC，还需要针对 IE 浏览器使用 `zoom: 1` 来触发 IE 浏览器的 Layout。
