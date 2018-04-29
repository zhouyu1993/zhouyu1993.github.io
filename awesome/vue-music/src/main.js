// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import plugins from './plugins'
import directives from './plugins/directives'
import filters from './plugins/filters'

import './assets/css/main.scss'

Vue.config.productionTip = false

Vue.use(plugins)
Vue.use(directives)
Vue.use(filters)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
