---
title: margin

categories:
  - web

tags:
  - css

date: 2018/09/11
---

margin

<!-- more -->

外补白 [ margin-top ] || [ margin-right ] || [ margin-bottom ] || [ margin-left ]

适用于所有元素，除非 table | inline-table | table-caption 的表格类元素之外。

取值：
  * auto：水平（默认）书写模式下，margin-top/margin-bottom 计算值为0，margin-left/margin-right取决于可用空间
  * <length>：用长度值来定义外补白。可以为负值
  * <percentage>：用百分比来定义外补白。水平（默认）书写模式下，参照其包含块 `width` 进行计算，其它情况参照 height ，可以为负值

``` bash
检索或设置对象四边的外延边距。
如果提供全部四个参数值，将按上、右、下、左的顺序作用于四边。
如果只提供一个，将用于全部的四边。
如果提供两个，第一个用于上、下，第二个用于左、右。
如果提供三个，第一个用于上，第二个用于左、右，第三个用于下。
外延边距始终透明。
```

**非替代(non-Replaced)行内元素可以使用该属性设置左、右两边的外补丁；若要设置上、下两边的外补丁，必须先使该对象表现为块级或内联块级。**

## margin折叠

margin collapsing，某些相邻的margin会发生合并。

会发生外边距折叠的三种基本情况：
  * 相邻元素之间
    - 毗邻的两个元素之间的外边距会折叠（除非后一个元素需要清除之前的浮动）。
  * 父元素与其第一个或最后一个子元素之间
    - 如果在父元素与其第一个子元素之间不存在边框、内边距、行内内容，也没有创建块格式化上下文、或者清除浮动将两者的 margin-top 分开；或者在父元素与其最后一个子元素之间不存在边框、内边距、行内内容、height、min-height、max-height将两者的 margin-bottom 分开，那么这两对外边距之间会产生折叠。此时子元素的外边距会“溢出”到父元素的外面。
  * 空的块级元素
    - 如果一个块级元素中不包含任何内容，并且在其 margin-top 与 margin-bottom 之间没有边框、内边距、行内内容、height、min-height 将两者分开，则该元素的上下外边距会折叠。

一些需要注意的地方：
  * 上述情况的组合会产生更复杂的外边距折叠。
  * 即使某一外边距为0，这些规则仍然适用。因此就算父元素的外边距是0，第一个或最后一个子元素的外边距仍然会“溢出”到父元素的外面。
  * 如果参与折叠的外边距中包含负值，折叠后的外边距的值为最大的正边距与最小的负边距（即绝对值最大的负边距）的和。
  * 如果所有参与折叠的外边距都为负，折叠后的外边距的值为最小的负边距的值。这一规则适用于相邻元素和嵌套元素。

``` html
<html>
  <body style="margin: 0;">
    <div style="margin-bottom: 10px;">这是一个标题</div>
    <div style="margin-top: 30px;">
  	  <div style="margin-top: 20px;">这是又一个标题</div>
    </div>
  </body>
</html>
```

本例中，第一个div的margin-bottom（10px），第二个div的margin-top（30px），第二个div的子元素div的margin-top（10px）将被合并，因为它们三个相邻。它们之间的margin间隙最后是（30px），即取三者之间最大的那个值。

如果给上例中的div加上border的话：

``` html
<html>
  <body style="margin: 0;">
    <div style="margin-bottom: 10px;">这是一个标题</div>
    <div style="margin-top: 30px;border:1px solid #000;">
  	  <div style="margin-top: 20px;">这是又一个标题</div>
    </div>
  </body>
</html>
```

本例中，第一个div的margin-bottom（10px），第二个div的margin-top（30px）将被合并，因为它们两个相邻。第二个div的子元素div的margin-top不与它们合并，因为它被border分隔，不与它们相邻。

margin折叠常规认知：
  * margin折叠只发生在块级元素上；
  * 浮动元素的margin不与任何margin发生折叠；
  * 绝对定位元素的margin不与任何margin发生折叠；
  * 设置了属性overflow且值不为visible的块级元素，将不与它的子元素发生margin折叠；
  * 根元素的margin不与其它任何margin发生折叠；

意味着解决margin折叠的方法有：
  * 元素设为行内块元素；
  * 元素设为浮动元素；
  * 元素设为绝对定位元素；
  * 元素设置属性overflow且值不为visible；

## BFC

[BFC](/zh/2018/12/28/css[BFC]/)
