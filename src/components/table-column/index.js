import TableColumn from './src/table-column'

TableColumn.install = function (Vue) {
  Vue.components(TableColumn.name, TableColumn)
}

export default TableColumn
