import Main from './src/main'

Main.install = function (Vue) {
  Vue.components(Main.name, Main)
}

export default Main
