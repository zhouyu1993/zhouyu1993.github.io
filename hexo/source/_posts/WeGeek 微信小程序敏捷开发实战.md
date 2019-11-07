---
title: WeGeek 微信小程序敏捷开发实战

categories:
  - web

tags:
  - 职业

date: 2019/11/04
---

WeGeek 微信小程序敏捷开发实战

<!-- more -->

# 腾讯云小程序解决方案 - 朱展

## 小程序架构分析

移动应用开发的三种模式

* Web App(H5)
* 原生应用
* 小程序/快应用（Hybrid）

小程序原理

* WebView 视图层（线程1）(WXML + WXSS + WXS + Component)
* AppService 逻辑层（线程2）
* WeixinJSBridge
* Native 组件、Native 能力

双线程模型、WebView预加载

## 小程序解决方案进化历程

## 腾讯云小程序解决方案介绍

# 小程序在直播产品中的技术应用 - 杨春文

NOW直播

## 构建直播小程序（基于腾讯云）

<live-pusher /> 主播端

<live-player /> 观众端

<video />

<image />

* 申请腾讯云直播服务
* 获取加密私钥
* 部署自己的业务后台（提供现成代码）
* 生成主播端地址（上行）
* 生成观众端地址（下行）
* 开启小程序

## 布局之痛

弹幕

* video 等 native 组件无法和 WebView 元素重叠
* 视频与直播间元素的混排实现，但是无法把弹幕滚动且防止视频上
* cover-view 组件与普通组件差异太大
* canvas 实现：视频上的点赞动画

## 谈谈setData优化

* 避免频繁 setData，一次返回多条消息，滚动展示，避免一条条 setData
* onHide 时停止数据更新

## 大图片之殇

大图片造成页面切换延迟、卡顿，内存占用过多被销毁

按需加载、懒加载

## 预加载

页面切换

A -> B -> fetch -> data -> render

A 到 B 之前的切换是很耗时的，可不可以在这段时间做些事情？

A -> B 时 fetch -> data -> local data

B -> get data -> render

把串行改成并行

# 如何开发一款小游戏 - 邹伟

# 有赞商城小程序 - 施德来

H5 与 native 的痛点

PWA - Google，让 Web 可以离线缓存、消息推送

Hybrid App - PhoneGap、Ionic (WebView - JS Bridge -> Native Runtime)

JS Native App - React Native、Weex (JS Runtime -> JS Bridge -> Native Runtime)

JS Native App - 小程序（微信操作系统）

很多 H5 需要高阶能力才能解决的问题，被小程序降维解决了

## 如何同时产出海量独立的微商城小程序

模版ID + ext.json

## 一套代码两个马甲

webpack + 2个 app.json (公共、专享) -> merge -> 1个app.json

## 富文本

wxParse

rich-text

## 体积越来越大

wxapp-webpack-plugin （代码精简）

分包加载

## 如何提高开发效率

zan-ui

zan-proxy

体验版、稳定版机制

体验版内测商家群

# 从小程序到小程序云开发 - Heyli

云开发：云函数、云数据库、云存储

云开发模式

## 腾讯相册小程序分享二维码优化

* 小程序码不能存太多信息
* 二维码中包含了 name, ownerid, page 等大量信息，在某些机型上无法有效识别

iPhone 6, iPhone 6P 等机型由于内存限制，识别能力比其他机型略差，有些比较模糊的图，可能会有识别问题，正在努力优化中

云开发解决方案：

小程序码只需记下一个ID，具体信息存储在小程序云的数据库中，大大提升识别度

## 在云函数中使用 request 调用接口，不用配置域名

# 从0到1快速开发电商小程序 - 钟鑫 - 京东高级前端工程师

Taro 框架多端组件及 API 相关，还有京东购物小程序首页和搜索

* index
* user
* shop
* cart
* order

# 结合AI实现智能美颜相册 - 王伟嘉 - 腾讯云研发工程师

腾讯云开启「AI识别人脸」
