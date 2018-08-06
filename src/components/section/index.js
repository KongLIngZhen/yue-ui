import Section from './src/section'

Section.install = function (Vue) {
  Vue.components(Section.name, Section)
}

export default Section
