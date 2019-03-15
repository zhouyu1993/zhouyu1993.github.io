# mkdir hexo && cd hexo && hexo init

源文件在 hexo 中

## 文章

`/hexo/source/_posts`

## 写法

文章中 使用 `<!-- more -->` 进行截断，显示 `阅读全文`

# https://zhouyu1993.github.io/ 域名问题

# 修改 sw 的版本号

**/hexo/themes/next/source/service-worker.js**

# 修改 themes

默认是 hexo-theme-landscape

``` bash
rm -rf /themes/landscape
```

修改为 hexo-theme-next

``` bash
git clone https://github.com/iissnan/hexo-theme-next themes/next

git clone --branch v5.1.2 https://github.com/iissnan/hexo-theme-next themes/next
```

http://theme-next.iissnan.com/

## 修改 hexo-theme-next 配置

themes/next/.config.yml

## 新建 about, tags, categories

``` yml
menu:
  home: / || home
  about: /about/ || user
  tags: /tags/ || tags
  categories: /categories/ || th
  archives: /archives/ || archive
  #schedule: /schedule/ || calendar
  #sitemap: /sitemap.xml || sitemap
  commonweal: /404/ || heartbeat

about: /about/ || user
tags: /tags/ || tags
categories: /categories/ || th
```

``` bash
hexo new post [post-name]

hexo new page [page-name]
```

## git init

``` bash
git init

git submodule add https://github.com/iissnan/hexo-theme-next.git themes/next

git add .

git commit -m 'init'

git remote add origin git@github.com:zhouyu1993/zhouyu1993.github.io.git
```

# 重要

## 网页统计

https://analytics.google.com/analytics/web/

google5f5b2bc345b78f19.html

## 网页计数

http://busuanzi.ibruce.info/

## 网页评论

https://www.livere.com/

## 微信订阅号

（RainJoy1993-rainjoy1993@gmail.com）- JS接口安全域名：

  MP_verify_O8JL39LeNd4lXSd9.txt
