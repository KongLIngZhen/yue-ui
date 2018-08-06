<script>
  export default {
    name: 'YTooltip',
    props: {
      animation: {
        type: Boolean,
        default: true
      },
      container: {
        type: [String, Boolean],
        default: false
      },
      delay: {
        type: [Number, Object],
        default: 0
      },
      html: {
        type: Boolean,
        default: false
      },
      placement: {
        type: [String, Function],
        default: 'top'
      },
      selector: {
        type: [String, Boolean],
        default: false
      },
      template: {
        type: String
      },
      title: {
        type: String
      }
    },
    mounted () {
      console.log(this.title)
      this.elem = jQuery(this.$slots.default[0].elm)
      this.elem.tooltip({
        placement: this.placement,
        title: this.title
      })
    },
    render (h) {
      let vnode = this.$slots.default[0]
      vnode.data.attrs['data-toggle'] = 'tooltip'
      return vnode
    }
  }
</script>
