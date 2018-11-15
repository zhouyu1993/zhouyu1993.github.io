---
title: webpack中alias别名配置

categories:
  - webpack

tags:
  - js
---

webpack 中 alias 别名配置

<!-- more -->

``` js
resolve: {
 alias: {
   '@': path.resolve(__dirname, 'src'),
   '@a': path.resolve(__dirname, 'src', 'assets'),
   '@c': path.resolve(__dirname, 'src', 'components'),
 }
}
```

在 js 中使用：

``` js
// 原本这样写
import formatTime from '../../src/utils/formatTime'
import banner from '../../src/assets/img/banner.png'
import swiper from '../../src/components/swiper'

// 现在可以这样写
import formatTime from '@/utils/formatTime'
import banner from '@/src/assets/img/banner.png'
import swiper from '@/src/components/swiper'

import banner from '@a/img/banner.png'
import swiper from '@c/swiper'
```

在 scss 中使用：

``` css
/* 原本这样写 */
@import '../../src/assets/css/mixin';

/* 现在可以这样写 */
@import '~@src/assets/css/mixin';

@import '~@a/css/mixin';
```

在 template 中使用：

``` html
<!-- 原本这样写 -->
<img src="../../src/assets/img/logo.png">

<!-- 现在可以这样写 -->
<img src="~@/src/assets/img/logo.png">

<img src="~@a/img/logo.png">
```

注意区别，`@` 前需要多加个 `~`
