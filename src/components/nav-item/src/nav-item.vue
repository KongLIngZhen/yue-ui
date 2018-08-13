<script>
  export default {
    name: 'YNavItem',
    inject: [
      'yNav'
    ],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      active: {
        type: Boolean,
        default: false
      }
    },
    render (h) {
      let a = h('a', {
        class: [
          'nav-link',
          {
            'disabled': this.disabled,
            'active': this.active
          }
        ],
        attrs: {
          href: '#/layout',
          'data-toggle': 'pill'
        }
      }, this.$slots.default)

      if (this.yNav.tag === 'ul') {
        return h('li', {
          class: ['nav-item']
        }, [a])
      } else {
        return a
      }
    }
  }
</script>
