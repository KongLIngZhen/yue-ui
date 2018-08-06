import Popover from './src/popover'

Popover.install = function (Vue) {
  Vue.components(Popover.name, Popover)
}

export default Popover
