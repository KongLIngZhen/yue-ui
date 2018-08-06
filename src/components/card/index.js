import Card from './src/card'

Card.install = function (Vue) {
  Vue.components(Card.name, Card)
}

export default Card
