import Progress from './src/progress'

Progress.install = function (Vue) {
  Vue.components(Progress.name, Progress)
}

export default Progress
