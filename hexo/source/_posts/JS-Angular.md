---
title: Angular 入门

categories:
  - web

tags:
  - Angular

date: 2021/01/01
---

Angular 是一个【应用设计框架与开发平台】，用于创建高效、复杂、精致的【单页面应用】。

Angular 的学习曲线是非常陡峭的，门槛较高，需要熟悉 HTML、CSS、JavaScript、ES2015 如 Class 类、Module 模块等，必须用 TypeScript 来开发，用 [类型](https://www.tslang.cn/docs/handbook/classes.html) 实现依赖注入，还会用 [注解/装饰器](https://www.tslang.cn/docs/handbook/decorators.html) 来提供元数据。

[依赖注入](https://angular.cn/guide/glossary#dependency-injection-di)

[Angular 中的依赖注入](https://angular.cn/guide/dependency-injection)

[Angular 词汇表](https://angular.cn/guide/glossary)

[Angular 项目文件结构](https://angular.cn/guide/file-structure)

---

架构概览

Angular 的基本构造块是 NgModule，它为组件提供了编译的上下文环境。 NgModule 会把相关的代码收集到一些功能集中。Angular 应用就是由一组 NgModule 定义出的。 应用至少会有一个用于引导应用的根模块，通常还会有很多特性模块。

	* 组件定义视图。视图是一组可见的屏幕元素，Angular 可以根据你的程序逻辑和数据来选择和修改它们。 每个应用都至少有一个根组件。

	* 组件使用服务。服务会提供那些与视图不直接相关的功能。服务提供者可以作为依赖被注入到组件中， 这能让你的代码更加模块化、更加可复用、更加高效。

模块、组件和服务都是使用装饰器的类，这装饰器会标出它们的类型并提供元数据，以告知 Angular 该如何使用它们。

	* 组件类的元数据将组件类和一个用来定义视图的模板关联起来。 模板把普通的 HTML 和 Angular 指令与绑定标记（markup）组合起来，这样 Angular 就可以在渲染 HTML 之前先修改这些 HTML。

	* 服务类的元数据提供了一些信息，Angular 要用这些信息来让组件可以通过依赖注入（DI）使用该服务。

应用的组件通常会定义很多视图，并进行分级组织。Angular 提供了 Router 服务来帮助你定义视图之间的导航路径。 路由器提供了先进的浏览器内导航功能。

[模块](https://angular.cn/guide/architecture-modules)

Angular 定义了 NgModule，它和 JavaScript（ES2015） 的模块不同而且有一定的互补性。 NgModule 为一个组件集声明了编译的上下文环境，它专注于某个应用领域、某个工作流或一组紧密相关的能力。 NgModule 可以将其组件和一组相关代码（如服务）关联起来，形成功能单元。

每个 Angular 应用都有一个根模块，通常命名为 AppModule。根模块提供了用来启动应用的引导机制。 一个应用通常会包含很多特性模块。

像 JavaScript 模块一样，NgModule 也可以从其它 NgModule 中导入功能，并允许导出它们自己的功能供其它 NgModule 使用。 比如，要在你的应用中使用路由器（Router）服务，就要导入 Router 这个 NgModule。

把你的代码组织成一些清晰的特性模块，可以帮助管理复杂应用的开发工作并实现可复用性设计。 另外，这项技术还能让你获得惰性加载（也就是按需加载模块）的优点，以尽可能减小启动时需要加载的代码体积。

[组件](https://angular.cn/api/core/Component)

每个 Angular 应用都至少有一个组件，也就是根组件，它会把组件树和页面中的 DOM 连接起来。 每个组件都会定义一个类，其中包含应用的数据和逻辑，并与一个 HTML 模板相关联，该模板定义了一个供目标环境下显示的视图。

@Component() 装饰器表明紧随它的那个类是一个组件，并提供模板和该组件专属的元数据。

装饰器是一些用于修饰 JavaScript 类的函数。Angular 定义了许多装饰器，这些装饰器会把一些特定种类的元数据附加到类上，以便 Angular 了解这些这些类的含义以及该如何使用它们。

[@Decorator](https://es6.ruanyifeng.com/#docs/decorator)

[@Decorator](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.x5c2ndtx0)

``` js
// app.module.ts

// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// @NgModule decorator with its metadata; [es6, decorator 装饰器]
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

``` js
// app.component.ts

import {
	Component, // interface 接口，继承自 Directive 装饰器
	OnInit, // interface 接口
} from '@angular/core';

import {
	UserService,
} from './core/user.service';

// @Component decorator [es6, decorator 装饰器]
@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>',
  styles: [
  	`
  		.xxx {

  		}
  	`,
  ],
  // templateUrl: './feature/home/home.component.html',
  // styleUrls: [
  // 	'./feature/home/home.component.scss',
  // ],
})
// implements [ts，interface 接口的实现]
export class AppComponent implements OnInit {
  userId: string;

  constructor (
    private userService: UserService,
  ) {
    this.userId = this.userService.getUserId();
  }

  // OnInit 接口的钩子方法叫做 ngOnInit()
  ngOnInit () {

  }
}
```
