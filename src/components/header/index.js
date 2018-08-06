import Header from './src/header'

Header.install = function (Vue) {
  Vue.components(Header.name, Header)
}

export default Header
