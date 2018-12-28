---
title: 取值与单位

categories:
  - web

tags:
  - css

date: 2018/09/11
---

取值与单位

<!-- more -->

# 长度值与单位

## 长度取值

| 长度取值 | 版本 | 描述 |
| :--- | :--- | :--- |
| `<length>` | CSS2 | `<number>`接长度单位 |

``` bash
<number>接长度单位。
特殊值0可以省略单位。例如：margin:0px可以写成margin:0
一些属性可能允许有负长度值，或者有一定的范围限制。如果不支持负长度值，那应该变换到能够被支持的最近的一个长度值。
长度单位包括包括：相对单位和绝对单位。
相对长度单位包括有： em, ex, ch, rem, vw, vh, vmax, vmin
绝对长度单位包括有： cm, mm, q, in, pt, pc, px
```

## 长度单位

文本相对长度单位

| 长度单位 | 版本 | 描述 |
| :--- | :--- | :--- |
| em | CSS1 | 相对于当前对象内文本的字体尺寸 |
| ex | CSS1 | 相对于字符“x”的高度。通常为字体高度的一半 |
| ch | CSS3 | 数字“0”的宽度 |
| rem | CSS3 | 相对于根元素(即html元素)font-size计算值的倍数 |
| % | CSS1 | 百分比 |

视口相对长度单位

| 长度单位 | 版本 | 描述 |
| :--- | :--- | :--- |
| vw | CSS3 | 相对于视口的宽度。视口被均分为100单位的vw |
| vh | CSS3 | 相对于视口的高度。视口被均分为100单位的vh |
| vmax | CSS3 | 相对于视口的宽度或高度，总是相对于大的那个。视口的宽度或高度被均分为100单位的vmax |
| vmin | CSS3 | 相对于视口的宽度或高度，总是相对于小的那个。视口的宽度或高度被均分为100单位的vmin |

绝对长度单位

| 长度单位 | 版本 | 描述 |
| :--- | :--- | :--- |
| cm | CSS1 | 厘米 |
| mm | CSS1 | 毫米 |
| q | CSS1 | 1/4毫米（quarter-millimeters）; 1q = 0.25mm |
| in | CSS1 | 英寸（inches）; 1in = 2.54cm |
| pt | CSS1 | 点（points）; 1pt = 1/72in |
| pc | CSS1 | 派卡（picas）; 1pc = 12pt |
| px | CSS1 | 像素（pixels）; 1px = 1/96in |

px 说是绝对长度单位，这是对于单个设备而言的。px 与设备显示屏的分辨率有关。对于屏幕显示，通常是一个设备像素（点）的显示。

### 浏览器支持

| 长度单位 | Chrome | IE | Firefox | Safari | Opera |
| --- | --- | --- | --- | --- | --- |
| em, ex, %, cm, mm, q, in, pt, pc, px | 1.0 | 3.0 | 1.0 | 1.0 | 3.5 |
| ch | 27.0 | 9.0 | 1.0 | 7.0 | 20.0 |
| rem |	4.0	| 9.0	| 3.6	| 4.1	| 11.6 |
| vh, vw | 20.0	| 9.0	| 19.0 | 6.0 | 20.0 |
| vmin | 20.0	| 9.0* | 19.0	| 6.0	| 20.0 |
| vmax | 26.0 | 不支持 | 19.0 | 不支持 | 20.0 |

注意: IE 9.0 是通过不标准的名称 vm 来支持 vmin 的。

### 常用相对长度

相对长度单位指定了一个长度相对于另一个长度的属性。对于不同的设备，相对长度更适用。

| 单位 | 描述 |
| --- | --- |
| em | 相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。比如如果当前行内文本的字体尺寸为 16px，2em === 32px |
| rem |  相对于根元素(即html元素)font-size |
| vw | viewpoint width，视窗宽度，1vw = 视窗宽度的 1% |
| vh | viewpoint height，视窗高度，1vh = 视窗高度的1% |
| vmin | 相对于 vw 和 vh 中较小的那个 |
| vmax | 相对于 vw 和 vh 中较大的那个 |
| % | 百分比。关键考虑到底相对什么的百分比 |

#### em 与 rem 的区别

都是相对大小。em 相对的是从当前向上查询已定义的 px，；而 rem 相对的永远是相对于根元素(即html元素)font-size。

``` html
<!-- 根元素 (html root) 的 font-size 为 50px -->
<html style="font-size: 50px;">
  <body style="margin: 0;">
    <!-- 高度 16px -->
    <div style="font-size: 16px;line-height: 1;">px文字</div>
    <!-- 高度 2em === 100px，向上查询找到根元素 (html root) -->
    <div style="font-size: 2em;line-height: 1;">em文字</div>
    <div style="font-size: 16px;">
      <!-- 高度 2em === 32px，向上查询找到 div 元素 -->
      <p style="font-size: 2em;line-height: 1;">em文字</p>
    </div>
    <!-- 高度 2rem === 100px，相对根元素 (html root) -->
    <div style="font-size: 2rem;line-height: 1;">rem文字</div>
    <div style="font-size: 16px;">
      <!-- 高度 2rem === 100px，相对根元素 (html root) -->
      <p style="font-size: 2rem;line-height: 1;">rem文字</p>
    </div>
  </body>
</html>
```

#### vw、vh、vmin、vmax

这里的 viewpoint 指浏览器内部的可视区域

viewpoint width，视窗宽度，是指 `window.innerWidth`

viewpoint height，视窗高度，是指 `window.innerHeight`

10vw = window.innerWidth * 10 / 100

10vh = window.innerHeight * 10 / 100

浏览器内部宽度 window.innerWidth，不包括 scrollbars, toolbars 等

浏览器整体宽度 window.outerWidth，包括 scrollbars, toolbars 等

显示器宽度 window.screen.width，固定不变

window.screen.width >= window.outerWidth > window.innerWidth

**有个奇怪的地方，在 chrome 的 device toolbar 调试时，window.innerWidth 最小是 980**

#### % 百分比

关键考虑到底相对什么的百分比

``` html
<html>
  <body style="margin: 0;">
    <div style="width: 400px;height: 500px;background: red;">
      <!-- 宽高是父元素的 30%，即 120px 150px，padding 是父元素的 10%，即 40px，真实宽高为 200px 230px。margin 是父元素的 10%，即 40px，第一个子元素 -->
      <div style="width: 30%;height: 30%;background: #fff;margin: 10%;padding: 10%;">
        <div style="width: 100%;height: 100%;background: #ff0;"></div>
      </div>
      <div style="width: 30%;height: 30%;background: #fff;margin: 10%;padding: 10%;box-sizing: border-box;">
        <div style="width: 100%;height: 100%;background: #ff0;"></div>
      </div>
    </div>
  </body>
</html>
```

##### width/height 的百分比

子元素的 width/height 的百分比是相对于父元素的 width/height 的百分比。

##### margin 的百分比

子元素的 margin 的百分比是相对于父元素的 width (只是 content 部分)的百分比

[margin](/zh/2018/09/11/css[margin]/)

##### padding 的百分比

子元素的 padding 的百分比是相对于父元素的 width (只是 content 部分)的百分比

[box-sizing](/zh/2018/12/28/css[box-sizing]/)

# 角度值与单位

| 角度取值 | 版本 | 描述 |
| :--- | :--- | :--- |
| `<angel>` | CSS3 | `<number>`接角度单位 |

## 角度单位

文本相对长度单位

| 角度单位 | 版本 | 描述 |
| :--- | :--- | :--- |
| deg | CSS3 | 度（Degrees） |
| grad | CSS3 | 梯度（Gradians） |
| rad | CSS3 | 弧度（Radians） |
| turn | CSS3 | 转、圈（Turns） |

### deg

deg 度（Degress）。一个圆共360度

90deg = `(90/360)*400` grad ≈ `(90/360)*2π` rad = (90/360) turn

### grad

梯度（Gradians）。一个圆共400梯度

### rad

弧度（Radians）。一个圆共2π弧度

π 为 `Math.PI`

### turn

转、圈（Turns）。一个圆共1圈

# 时间取值与单位

| 时间取值 | 版本 | 描述 |
| :--- | :--- | :--- |
| `<time>` | CSS3 | `<number>`接时间单位 |

时间值不允许有负值。

## 时间单位

| 时间单位 | 版本 | 描述 |
| :--- | :--- | :--- |
| s | CSS3 | 秒 |
| ms | CSS3 | 毫秒 |

1s = 1000ms

# 颜色取值

| 颜色取值 | 版本 | 描述 |
| :--- | :--- | :--- |
| ColorName | CSS1 | 用颜色名称来指定颜色。包括基本颜色关键字、系统颜色、SVG颜色关键字等 |
| HEX | CSS1 | 十六进制记法。语法如：#rrggbb或#rgb |
| RGB | CSS2 | rgb记法 |
| RGBA | CSS3 | rgba记法 |
| HSL | CSS3 | hsl记法 |
| HSLA | CSS3 | hsla记法 |
| transparent | CSS1/CSS3 | 全透明 |
| currentColor | CSS3 | 当前颜色 |

1. color 的部分关键字可能不被某些浏览器支持；
2. hex。#RRGGBB。
  - RR：红色值，十六进制正整数
  - GG：绿色值，十六进制正整数
  - BB：蓝色值，十六进制正整数
  - 取值范围：00 - FF。必须是两位数。对于只有一位的，应在前面补零
3. RGB(R,G,B)。
  - R：红色值，正整数 | 百分数
  - G：绿色值，正整数 | 百分数
  - B：蓝色值，正整数 | 百分数
  - 正整数值的取值范围为：0 - 255。百分数值的取值范围为：0.0% - 100.0%。超出范围的数值将被截至其最接近的取值极限
4. RGBA(R,G,B,A)。
  - A：Alpha透明度。取值0~1之间。IE9+
  - 对于IE6-8，可以使用滤镜filter处理
5. HSL(H,S,L)。
  - H：Hue(色调)。0(或360)表示红色，120表示绿色，240表示蓝色，也可取其他数值来指定颜色。取值为：0 - 360。
  - S：Saturation(饱和度)。取值为：0.0% - 100.0%
  - L：Lightness(亮度)。取值为：0.0% - 100.0%
6. HSLA(H,S,L,A)
  - A：Alpha透明度。取值0~1之间。
7. transparent 是全透明黑色(black)的速记法，即一个类似rgba(0,0,0,0)这样的值。
  - 在CSS1中，transparent被用来作为background-color的一个参数值，用于表示背景透明。
  - 在CSS2中，border-color也开始接受transparent作为参数值，《Open eBook(tm) Publication Structure 1.0.1》[OEB101]延伸到color也接受transparent作为参数值。
  - 在CSS3中，transparent被延伸到任何一个有color值的属性上。
8. currentColor是 color 属性的值，具体意思是指：currentColor关键字的使用值是 color 属性值的计算值。
  ``` css
  div {
    border: 1px solid;
    color: red;
  }
  /*
  上述代码将会让div拥有一个红色的边框，这就解释了 border-color 属性的默认值是 color 属性的值；
  如果将上述代码中的color属性定义删除，那么边框的颜色将取决于父元素的 color 计算值，因为 color 拥有继承性。
  */
  ```

# 文本取值

| 文本取值 | 版本 | 描述 |
| :--- | :--- | :--- |
| inherit | CSS2.1 | 该值使得属性能够继承祖先设置 |
| initial | CSS3 | 属性初始值 |
| unset | CSS3 | 擦除属性申明 |
| `<string>` | CSS2 | 字符串(含转义字符串) |
| `<url>` | CSS2 | 在网页上提供一个资源地址。（图像，声频，视频或浏览器支持的其他任何资源） |
| `<identifier>` | CSS2 | 使用用户自定义标识名作为组件取值 |

1. inherit 可以让一个不具备继承特性的属性可以继承父元素
2. initial 重置某个属性为UA默认设置
3. 一个属性定义了unset值，如果该属性是默认继承属性，该值等同于inherit，如果该属性是非继承属性，该值等同于initial
4. 字符串可以由双引号或单引号包起来；转义字符串由 反斜杠`(\) `开始，如：`\'`, `\"`。content、font-family 等。
5. <url> 有引号和无引号都是正确的。background
6. 自定义标识。如 myIdentifier
  ``` css
  li {
  	animation: myIdentifier 3s linear;
  }

  @keyframes myIdentifier {
    0% {

    }

    100% {

    }
  }
  ```
