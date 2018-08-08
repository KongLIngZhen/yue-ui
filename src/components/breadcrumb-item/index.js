import BreadcrumbItem from './src/breadcrumb-item'

BreadcrumbItem.install = function (Vue) {
  Vue.components(BreadcrumbItem.name, BreadcrumbItem)
}

export default BreadcrumbItem
