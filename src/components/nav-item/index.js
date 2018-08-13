import NavItem from './src/nav-item'

NavItem.install = function (Vue) {
  Vue.components(NavItem.name, NavItem)
}

export default NavItem
