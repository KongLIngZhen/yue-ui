<template>
  <section class="y-section" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'YSection',
    props: {
      direction: {
        type: String
      }
    },
    computed: {
      isVertical () {
        if (this.direction === 'vertical') {
          return true
        } else if (this.direction === 'horizontal') {
          return false
        }
        return this.$slots && this.$slots.default ? this.$slots.default.some(node => {
          const tag = node.componentOptions && node.componentOptions.tag
          return tag === 'y-header' || tag === 'y-footer'
        }) : false
      }
    }
  }
</script>
