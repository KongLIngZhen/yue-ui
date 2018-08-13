<script>
  export default {
    name: 'YNav',
    provide () {
      return {
        yNav: this
      }
    },
    props: {
      tag: {
        type: String,
        default: 'ul'
      },
      justify: {
        type: String
      },
      vertical: {
        type: Boolean,
        default: false
      },
      pills: {
        type: Boolean,
        default: false
      },
      fill: {
        type: Boolean,
        default: false
      },
      justified: {
        type: Boolean,
        default: false
      }
    },
    render (h) {
      let classList = ['nav']
      if (this.justify) classList.push(`justify-content-${this.justify}`)
      if (this.vertical) classList.push(`flex-column`)
      if (this.pills) {
        classList.push(`nav-pills`)
        this.fill && classList.push(`nav-fill`)
        this.justified && classList.push(`nav-justified`)
      }
      return h(this.tag, {
        class: [classList]
      }, this.$slots.default)
    }
  }
</script>
