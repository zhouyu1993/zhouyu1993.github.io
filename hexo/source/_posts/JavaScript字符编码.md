---
title: JavaScript字符编码

categories:
  - web

tags:
  - js

date: 2018/05/04
---

最近在做 [vue-music][1]，接口返回的日韩文字是实体编号的形式，所以需要将其解析成可阅读的日韩文字。

[1]:https://zhouyu1993.github.io/zh/2018/05/02/%E5%9F%BA%E4%BA%8Evue%E7%9A%84%E9%9F%B3%E4%B9%90music%E6%90%9C%E7%B4%A2(vue-music)/

<!-- more -->

# 字符编码

字符编码(Character encoding)也称字集码，是把字符集中的字符编码为指定集合中某一对象(例如：比特模式、自然数序列、8位组或者电脉冲)，以便文本在计算机中存储和通过通信网络的传递。

因为计算机只能处理数字，所以如果要处理文本，就必须先把文本转换为数字。

最早的计算机在设计时采用 8 个比特(bit)作为一个字节(byte)。所以，一个字节能表示的最大的整数就是 255(二进制 11111111 = 十进制 255)，如果要表示更大的整数，就必须用更多的字节。比如两个字节可以表示的最大整数是 65535，4 个字节可以表示的最大整数是 4294967295。

# 比特

比特(BIT，binary system)，计算机专业术语，是信息量单位。同时也是二进制数字中的位，信息量的度量单位，为信息量的最小单位。

8 bit (位) = 1 B (字节)

计算机中的 CPU 位数指的是 CPU 一次能处理的最大位数。例如 32 位计算机的 CPU 一次最多能处理 32 位数据。

二进制数系统中，每个 0 或 1 就是一个位(bit)。

二进制：00000000 (0) ~ 11111111 (255)

`parseInt(string, radix)` 返回一个十进制的整数。string 指需被解析的字符串，其实字符串会先被转化为数字(`Number(string)`)；radix 指需解析的数字的基数(进制)，值介于 2 ~ 36 之间，非必填。

如果 radix 不填，默认为十进制。

如果 radix 不填，但是 string 是以 '0' 开头，则有可能是八进制有可能是十进制；string 是以 '0x' 开头，则是十六进制。

``` js
parseInt('00000000', 2) // -> parseInt(0, 2)
parseInt(0, 2) // 0

parseInt('00000011', 2) // -> parseInt(11, 2)
parseInt(11, 2) // 3

parseInt('11111111', 2) // -> parseInt(11111111, 2)
parseInt(11111111, 2) // 255

parseInt('00000011', 8) // -> parseInt(11, 8)
parseInt(11, 8) // 9

parseInt('00000011', 16) // -> parseInt(11, 16)
parseInt(11, 16) // 17

// 十进制
parseInt('00000011') // -> parseInt(11)
parseInt(11) // 11

// 八进制
parseInt(00000000) // 0
parseInt(00000007) // 7
parseInt(00000010) // 8
parseInt(00000011) // 9
parseInt(00000017) // 15
parseInt(00000020) // 16

// 十六进制
parseInt('0x000011') // -> parseInt(0x000011)
parseInt(0x000011) // 17
```

# 字节

字节(Byte)，指一小组相邻的二进制数码。

ASCII 码：一个英文字母(不分大小写)占一个字节的空间，一个中文占两个字节的空间。一个二进制数字序列，在计算机中作为一个数字单元，一般为 8 位二进制数，换算为十进制。最小值 0，最大值 255。如一个 ASCII 码就是一个字节。

utf-8：一个英文字符(含英文标点)等于一个字节，一个中文(含繁体和中文标点)等于三个字节。

Unicode：一个英文(含英文标点)等于两个字节，一个中文(含繁体和中文标点)等于两个字节。

字通常分为若干个字节，每个字所包含的位数称为字长。

# 字符集

如需正确地显示 HTML 页面，浏览器必须知道使用何种字符集。

## ASCII 码

万维网早期使用的字符集是 ASCII 码。ASCII 码支持 0-9 的数字，大写和小写英文字母表，以及一些特殊字符。

HTML 和 XHTML 用标准的 7 比特 ASCII 码在网络上传输数据。

7 比特 ASCII 码可提供 128 个不同的字符值。`&#00; ~ &#127;`

通常会额外使用一个扩充的比特，以便于以 1 个字节的方式存储，1 个字节等于 8 比特。

`&#32; ~ &#126;` 是可显示的 ASCII 码。

`&#00; ~ &#31;` 和 `&#127;` 是设备控制 ASCII 码，不可在 HTML 文档中显示。

## ISO 字符集

[ISO 字符集](http://www.w3school.com.cn/tags/html_ref_charactersets.asp)是国际标准组织 (ISO) 针对不同的字母表 / 语言定义的标准字符集。

| ISO 字符集 | 描述 | 使用范围 |
| -- | -- | -- |
| ISO-8859-1 | Latin alphabet part 1 | 北美、西欧、拉丁美洲、加勒比海、加拿大、非洲 |
| ISO-8859-2 | Latin alphabet part 2 | 东欧 |
| ... | ... | ... |
| ISO-2022-JP | Latin/Japanese part 1 | 日本语 |
| ISO-2022-KR | Latin/Korean part 1 | 韩语 |

## ISO 8859-1

HTML 4.01 支持 [ISO 8859-1 字符集](http://www.w3school.com.cn/tags/html_ref_entities.html)。

ISO-8859-1 的较低部分(从 1 到 127 之间的代码)是最初的 7 比特 ASCII 码。

ISO-8859-1 的较高部分(从 160 到 255 之间的代码)全都有实体名称。

这些符号中的大多数都可以在不进行实体引用的情况下使用，但是实体名称或实体编号为那些不容易通过键盘键入的符号提供了表达的方法。

注释：实体名称对大小写敏感。

## Unicode 标准

由于上面列出的字符集都有容量限制，而且不兼容多语言环境，Unicode 联盟开发了 Unicode 标准。

Unicode 标准涵盖了世界上的所有字符、标点和符号。

不论是何种平台、程序或语言，Unicode 都能够进行文本数据的处理、存储和交换。

Unicode 可以被不同的字符集兼容。最常用的编码方式是 utf-8 和 utf-16。

utf-8：

utf-8 中的字符可以是 1-4 个字节长。utf-8 可以表示 Unicode 标准中的任意字符。utf-8 向后兼容 ASCII 码。utf-8 是网页和电子邮件的首选编码。

``` html
<meta charset="utf-8">
```

utf-16：

16 比特的 Unicode 转换格式是一种 Unicode 可变字符编码，能够对全部 Unicode 指令表进行编码。utf-16 主要被用于操作系统和环境中，比如微软的 Windows 2000/XP/2003/Vista/CE 以及 Java 和 .NET 字节代码环境。

提示：最前面的 256 个 Unicode 字符集字符对应于 256 个 ISO-8859-1 字符。

提示：所有 HTML 4 处理器均已支持 utf-8，而所有 XHTML 和 XML 处理器支持 utf-8 和 utf-16。

## HTML 4.01 符号实体

[本字符实体参考手册](http://www.w3school.com.cn/tags/html_ref_symbols.html)包括了数学符号、希腊字符、各种箭头记号、科技符号以及形状。

注释：实体名称对大小写敏感。

# 实体名称与实体编号

实体名称不一定有，但实体编码一定有!

| 结果 | 实体名称 | 实体编号 |
| -- | -- | -- |
| `&` | `&amp;` | `&#38;` |
| `♥` | `&hearts;` | `&#9829;` |
| `지` | - | `&#51648;` |
| `𠮷` | - | `&#134071;` |

``` html
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <p>
      <i>♥</i>
      <i>&hearts;</i>
      <i>&#9829;</i>
    </p>
    <p>
      <i>지</i>
      <i>&#51648;</i>
    </p>
    <p>
      <i>𠮷</i>
      <i>&#134071;</i>
    </p>
  </body>
</html>
```

显示结果

![结果](https://cmspic-10004025.image.myqcloud.com/ea5b4a70-4f66-11e8-b657-f98083298d38_size_232x234)

## 实体编码的显示

一般在 HTML 代码里写实体编码，会被直接识别成结果显示在网页上。

如果需要在网页上显示出实体编码，只需要将 `&` 写成 `&#38;`。例如想显示 `&#134071;` 即写成 `&#38;#134071;`。另外还有一种形式，利用伪元素 `:before` 或 `:after` 的 css `content` 属性。

``` html
<i>&#38;#134071;</i>
<i class="showCode"></i>
```

``` css
.showCode:before {
  content: '&#134071;';
}
```

## 显示结果与实体编码的互相转化

`&#00; ~ &#31;` 和 `&#127;` 无效，因为它们不会在 HTML 文档中显示。

### 显示结果转实体编码

``` js
function encodeChar (input) {
  const div = document.createElement('div')
  div.innerText = input
  const output = div.innerHTML
  return output
}

encodeChar('&') // '&amp;'
encodeChar('♥') // '♥'，失效
encodeChar('지') // '지'，失效
encodeChar('𠮷') // '𠮷'，失效
encodeChar('&♥지𠮷') // '&amp;♥지𠮷'，失效
encodeChar('지나;정일훈') // '지나;정일훈'，失效
```

我们发现，这种只对 ASCII 码有效(`&#32; ~ &#126;`)，但返回的是 ASCII 码的实体名称形式，而且只能在客户端使用(依赖 window.document)。

推荐采取下面方式，借助 `for...of` 和 `codePointAt`。

``` js
function encodeChar (input) {
  let output = ''
  for (let key of input) {
    output += `&#${key.codePointAt(0)};`
  }
  return output
}

encodeChar('&') // '&#38;'
encodeChar('♥') // '&#9829;'
encodeChar('지') // '&#51648;'
encodeChar('𠮷') // '&#134071;'
encodeChar('&♥지𠮷') // '&#38;&#9829;&#51648;&#134071;'
encodeChar('지나;정일훈') // '&#51648;&#45208;&#59;&#51221;&#51068;&#54984;'
```

### 实体编码转显示结果

遇到特殊字符如日韩文字的时候，后端返回给前端的数据通常会是实体编码的形式，因为是异步获取并非是直接写在 HTML 代码中，所以无法被浏览器解析，从而需要前端进行转义。

``` js
function decodeChar (input) {
  const div = document.createElement('div')
  div.innerHTML = input
  const output = div.innerText
  return output
}

decodeChar('&#38;') // '&'
decodeChar('&#9829;') // '♥'
decodeChar('&#51648;') // '지'
decodeChar('&#134071;') // '𠮷'
decodeChar('&#38;&#9829;&#51648;&#134071;') // '&♥지𠮷'
decodeChar('&#51648;&#45208;&#59;&#51221;&#51068;&#54984;') // '지나;정일훈'
decodeChar('&#51648;&#45208;;&#51221;&#51068;&#54984;') // '지나;정일훈'
```

这种方式只能在客户端使用(依赖 window.document)。

推荐采取下面方式，借助 `正则表达式` 和 `String.fromCodePoint`。

``` js
function decodeChar (input) {
  const output = input.replace(/&#{1}[0-9]{1,};{1}/ig, (v) => {
    const code = v.replace(/&#(.*);/, '$1')
    return String.fromCodePoint(code)
  })
  return output
}

decodeChar('&#38;') // '&'
decodeChar('&#9829;') // '♥'
decodeChar('&#51648;') // '지'
decodeChar('&#134071;') // '𠮷'
decodeChar('&#38;&#9829;&#51648;&#134071;') // '&♥지𠮷'
decodeChar('&#51648;&#45208;&#59;&#51221;&#51068;&#54984;') // '지나;정일훈'
decodeChar('&#51648;&#45208;;&#51221;&#51068;&#54984;') // '지나;정일훈'
```

### ES6+ 中字符串的扩展

JavaScript 内部，字符以 utf-16 的格式储存，每个字符固定为 2 个字节。对于那些需要 4 个字节储存的字符(Unicode 码点大于 0xffff，即 65535 的字符)，JavaScript 不能正确处理，JavaScript 会认为它们是两个字符，字符串长度会误判为 2，charCodeAt 方法只能分别返回前两个字节和后两个字节的值。

`지` 这个字的码点是 51648(十进制)，ES6 之前的字符串方法处理是没有问题。

`𠮷` 这个字的码点是 134071(十进制)，ES6 之前的字符串方法处理就会有问题。

``` js
'지'.length // 1

'지'.charAt(0) // '지'
'지'.charCodeAt(0) // 51648，码点，十进制
'지'.charCodeAt(0).toString(16) // 'c9c0'
+('0x' + '지'.charCodeAt(0).toString(16)) // '0xc9c0' -> 0xc9c0 码点，十六进制 -> 51648

// ES 6
'지'.codePointAt(0) // 51648，码点，十进制
'지'.codePointAt(0).toString(16) // 'c9c0'
+('0x' + '지'.codePointAt(0).toString(16)) // '0xc9c0' -> 0xc9c0 码点，十六进制 -> 51648

51648 === 0xc9c0 // true

parseInt(0xc9c0) // 51648

'지' === '\uc9c0' // true

// ES 6
'지' === '\u{c9c0}' // true

String.fromCharCode(51648) // '지'
String.fromCharCode(0xc9c0) // '지'

// ES 6
String.fromCodePoint(51648) // '지'
String.fromCodePoint(0xc9c0) // '지'
```

``` js
'𠮷'.length // 2。字符串长度误被判为 2

'𠮷'.charAt(0) // '�'，失效
'𠮷'.charAt(1) // '�'，失效

'𠮷'.charCodeAt(0) // 55362，码点，十进制，失效
'𠮷'.charCodeAt(0).toString(16) // 'd842'，失效
+('0x' + '𠮷'.charCodeAt(0).toString(16)) // '0xd842' -> 0xd842 码点，十六进制 -> 55362，失效
'𠮷'.charCodeAt(1) // 57271，码点，十进制，失效
'𠮷'.charCodeAt(1).toString(16) // 'dfb7'，失效
+('0x' + '𠮷'.charCodeAt(1).toString(16)) // '0xdfb7' -> 0xdfb7 码点，十六进制 -> 57271，失效

// ES 6
'𠮷'.codePointAt(0) // 134071，码点，十进制
'𠮷'.codePointAt(0).toString(16) // '20bb7'
+('0x' + '𠮷'.codePointAt(0).toString(16)) // '0x20bb7' -> 0x20bb7 码点，十六进制 -> 134071
'𠮷'.codePointAt(1) // 57271，码点，十进制
'𠮷'.codePointAt(1).toString(16) // 'dfb7'
+('0x' + '𠮷'.codePointAt(1).toString(16)) // '0xdfb7' -> 0xdfb7 码点，十六进制 ->57271

// codePointAt 方法在第一个字符(即 “𠮷” 的前两个字节)上，正确地识别了 “𠮷”，返回了它的十进制码点 134071(即十六进制的 0x20bb7)。在第二个字符(即 “𠮷” 的后两个字节)上，codePointAt 方法的结果与 charCodeAt 方法相同。

// 对于类似字符串 '𠮷a'，字符 'a' 在字符串 '𠮷a' 的正确位置序号应该是 1，但是必须向 codePointAt 方法传入 2。解决这个问题的一个办法是使用 `for...of` 循环，因为它会正确识别 32 位的 utf-16 字符。

let i = 0
for (let key of '𠮷a') {
  i ++
  console.log(key, i)
}
// '𠮷', 0
// 'a', 1

134071 === 0x20bb7 // true

parseInt(0x20bb7) // 134071

'𠮷' === '\u20bb7' // false，失效

// ES 6
'𠮷' === '\u{20bb7}' // true

String.fromCharCode(134071) // 'ஷ'，失效
String.fromCharCode(0x20bb7) // 'ஷ'，失效

// ES 6
String.fromCodePoint(134071) // '𠮷'
String.fromCodePoint(0x20bb7) // '𠮷'
```

# 字体图标的使用

[iconfont](http://www.iconfont.cn/)

IE9+，Chrome，Safari，Firefox 和 Opera

``` css
@font-face {
  font-family: 'iconfont';
  src: url('../font/iconfont.eot'); // IE9+
  src: url('../font/iconfont.eot?t=1491903330819#iefix') format('embedded-opentype'), // IE6 - IE8
  url('../font/iconfont.woff?t=1491903330819') format('woff'), // Modern Browsers
  url('../font/iconfont.ttf?t=1491903330819') format('truetype'), // Safari, IOS, Android
  url('../font/iconfont.svg?t=1491903330819#iconfont') format('svg'); // IOS
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
}

.iconfont {
  font-family: 'iconfont';
}

.icon-pause:before {
  content: '\e66a';
}
```

`unicode-range` 定义字体支持的 Unicode 字符范围。默认是 "U+0-10FFFF"。

# Emoji 表情符号的使用

[Emoji 简介](http://www.ruanyifeng.com/blog/2017/04/emoji.html)

2010年，Unicode 开始为 Emoji 分配码点。也就是说，现在的 Emoji 符号就是一个文字，它会被渲染为图形。

[Full Emoji List](http://www.unicode.org/emoji/charts/full-emoji-list.html)

[node-emoji](https://www.npmjs.com/package/node-emoji)

``` js
// 码点 U+1F600 (十六进制)
// 对应 0x1F600
String.fromCodePoint(0x1F600) // 😀

parseInt(0x1F600) // 码点 128512 (十进制)

// HTML 实体编码 &#128512;
function decodeChar (input) {
  const output = input.replace(/&#{1}[0-9]{1,};{1}/ig, (v) => {
    const code = v.replace(/&#(.*);/, '$1')
    return String.fromCodePoint(code)
  })
  return output
}

decodeChar('&#128512;') // 😀
```

## 微信翻译：JS 之汉字与 Unicode 码的相互转化

``` js
'好'.charCodeAt(0).toString(16) // '597d'

'好' === '\u597d'

// 有问题，无法兼容非汉字，如数字字母字符
function toUnicode (str) {
  if (str == '' || typeof str == 'undefined') return '请输入汉字'

  var str ='';

  for (var i = 0; i < str.length; i ++) {
    str += '\\u' + str.charCodeAt(i).toString(16)
  }

  return str;
}

// 有问题，无法兼容非汉字，如数字字母字符
function toGB2312 (str){
  if (str == '' || typeof str == 'undefined') return '请输入十六进制unicode'

  str = str.split('\\u')

  var str = '';

  for (var i = 0; i < str.length; i ++) {
    str += String.fromCharCode(parseInt(str[i], 16).toString(10))
  }

  return str;
}

// 考虑怎么确定汉子的范围

// 兼容
// escape 与 unescape
const GB2312UnicodeConverter = {
  ToUnicode: function (str) {
    return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u')
  },
  ToGB2312: function (str) {
    return unescape(str.replace(/\\u/gi, '%u'))
  }
}
```
