import Aside from './src/aside'

Aside.install = function (Vue) {
  Vue.components(Aside.name, Aside)
}

export default Aside
