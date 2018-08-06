import Tooltip from './src/tooltip'

Tooltip.install = function (Vue) {
  Vue.components(Tooltip.name, Tooltip)
}

export default Tooltip
