// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Plugins from './plugins'
import axios from './api/fetch'


import 'iview/dist/styles/iview.css' // 使用iview css
import './style/index.scss'

import iViewCom from './plugins/iviewCom'


Vue.config.productionTip = false
Vue.use(Plugins)
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
