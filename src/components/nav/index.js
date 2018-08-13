import Nav from './src/nav'

Nav.install = function (Vue) {
  Vue.components(Nav.name, Nav)
}

export default Nav
