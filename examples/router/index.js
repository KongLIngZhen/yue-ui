import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '../page/mainContent'
import routersConfig from './examples.router.json'

Vue.use(Router)

let route = []

function registerRouter (routersConfig) {
  Object.keys(routersConfig).forEach((i) => {
    route.push({
      path: routersConfig[i].path,
      component: r => require.ensure([], () => r(require(`../docs/${routersConfig[i].name}.md`)))
    })
  })
}

registerRouter(routersConfig)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainContent',
      component: MainContent,
      children: route
    }
  ]
})
