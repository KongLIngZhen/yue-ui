<script>
  export default {
    name: 'YPopover',
    props: {
      animation: {
        type: Boolean,
        default: true
      },
      container: {
        type: [String, Boolean],
        default: false
      },
      content: {
        type: [String, Function]
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
        default: 'right'
      },
      selector: {
        type: [String, Boolean],
        default: false
      },
      template: {
        type: String
      },
      title: {
        type: [String, Function],
        default: ''
      },
      trigger: {
        type: String,
        default: 'click'
      },
      offset: {
        type: Number,
        default: 0
      }
    },
    mounted () {
      this.elem = jQuery(this.$slots.default[0].elm)
      this.elem.popover({
        placement: this.placement,
        title: this.title,
        content: this.content
      })
    },
    render (h) {
      let vnode = this.$slots.default[0]
      vnode.data.attrs['data-toggle'] = 'popover'
      return vnode
    }
  }
</script>
