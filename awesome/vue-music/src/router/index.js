import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
* scrollBehavior [滚动行为](https://router.vuejs.org/zh-cn/advanced/scroll-behavior.html)
* mode 默认值 "hash" (浏览器环境) | "abstract" (Node.js 环境)；可配为 "history"(依赖 HTML5 History API 和服务器配置)
* base 默认值 "/" 对应 <base href="/">
* routes 数组
*/

const router = new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      const position = {}
      if (to.hash) {
        position.selector = to.hash
      }
      if (to.matched.some(m => m.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
      }
      return position
    }
  },
  mode: 'history',
  base: '/vue-demo/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: async () => await import('./home') // es6
    },
    {
      path: '/todos',
      name: 'todos',
      component (resolve) {
        // require.ensure 代码拆分
        require.ensure([], () => {
          // 将组件定义传入 resolve 回调函数
          resolve(require('./todos'))
        })
      }
    },
    {
      path: '/todos/:id',
      name: 'todo',
      component (resolve) {
        // 这个特殊的 require 语法告诉 webpack
        // 自动将编译后的代码分割成不同的块，
        // 这些块将通过 Ajax 请求自动下载
        require(['./todos/todo'], resolve)
      }
    }
  ]
})

/**
* beforeEach/beforeResolve
* 一定要调用 next 来 resolve 这个钩子。执行效果依赖 next 方法的调用参
* next() 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed（确认的）
* next(false) 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址
* next('/') 或者 next({ path: '/' }) 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航
* next(error) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调
*/

// 组件加载之前
router.beforeEach((to, from, next) => {
  // ...
  if (!to.name) {
    next('/todos')
    // if exist 404, next('/404')
  } else {
    next()
  }
})

// 异步组件解析之后
router.afterEach((to, from) => {
  // ...
  switch (to.name) {
    case 'todos':
      // 埋点
      // 分享
      // eg...
      break
    case 'todo':

      break
    default:
  }
})

// 路由出错 或者 nuxt(new Error()) 调用该钩子
router.onError((e) => {
  // ...
  console.log(e)
})

// router.beforeResolve router.afterEach router.onReady 等其他具体看文档

export default router
