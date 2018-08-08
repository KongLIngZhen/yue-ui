import Alert from './src/alert'

Alert.install = function (Vue) {
  Vue.components(Alert.name, Alert)
}

export default Alert
