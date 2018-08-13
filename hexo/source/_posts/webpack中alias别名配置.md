---
title: webpack中alias别名配置

categories:
  - webpack

tags:
  - js
---

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

// 现在可以这样写
import formatTime from '@/utils/formatTime'
import banner from '@a/img/banner.png'
```

在 scss 中使用：

``` css
/* 原本这样写 */
@import '../../src/assets/css/mixin';

/* 现在可以这样写 */
@import '~@a/css/mixin';
```

注意区别，scss 中需要多加个 `~`
