<script>
  export default {
    name: 'YCol',
    props: {
      xs: {
        type: [Number, Object],
        validator: validatorColNum
      },
      sm: {
        type: [Number, Object],
        validator: validatorColNum
      },
      md: {
        type: [Number, Object],
        validator: validatorColNum
      },
      lg: {
        type: [Number, Object],
        validator: validatorColNum
      },
      xl: {
        type: [Number, Object],
        validator: validatorColNum
      }
    },
    render (h) {
      let classList = []
      let sizes = ['xs', 'sm', 'md', 'lg', 'xl']
      sizes.forEach(size => {
        if (typeof this[size] === 'number') {
          classList.push(`col-${size}-${this[size]}`)
        } else if (typeof this[size] === 'object') {
          let prop = this[size]
          Object.keys(prop).forEach(k => {
            classList.push(
              k === 'span' ? `col-${size}-${prop[k]}` : `${k}-${size}-${prop[k]}`
            )
          })
        }
      })

      return h('div', {
        class: [classList]
      }, this.$slots.default)
    }
  }

  function validatorColNum (value) {
    return (typeof value === 'object' && value.span ? value.span : value) <= 12 || false
  }
</script>
