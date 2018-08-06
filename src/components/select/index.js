import Select from './src/select'
import SelectDropdown from './src/select-dropdown'
import SelectOption from './src/select-option'
import SelectOptionGroup from './src/select-option-group'

Select.install = function (Vue) {
  Vue.components(Select.name, Select)
  Vue.components(SelectDropdown.name, SelectDropdown)
  Vue.components(SelectOption.name, SelectOption)
  Vue.components(SelectOptionGroup.name, SelectOptionGroup)
}

export default Select
