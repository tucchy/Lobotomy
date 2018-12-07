// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(VueLazyload, {
  preLoad: 1.3, // 事前ロードする高さの割合指定
  attempt: 1 // ロード失敗した時のリトライの上限指定
})
