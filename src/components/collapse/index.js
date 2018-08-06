import Collapse from './src/collapse'
import CollapseItem from './src/collapse-item'

Collapse.install = function (Vue) {
  Vue.components(Collapse.name, Collapse)
  Vue.components(CollapseItem.name, CollapseItem)
}

export default Collapse
