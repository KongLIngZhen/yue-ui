// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Bootstrap DateTimePicker
import 'pc-bootstrap4-datetimepicker/src/js/bootstrap-datetimepicker.js'

// yue-ui css
import '@/theme/index.less'

// example css
import './style/index.css'

// highlight
import 'highlight.js/styles/github.css'
import Hljs from 'highlight.js'

Vue.config.productionTip = false

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    Hljs.highlightBlock(block)
  })
})

const requireComponent = require.context('../src', true, /\.vue$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  Vue.component(componentConfig.default.name, componentConfig.default || componentConfig)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
