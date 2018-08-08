<template>
  <nav aria-label="breadcrumb">
    <ol class="y-breadcrumb breadcrumb">
      <slot></slot>
    </ol>
  </nav>
</template>

<script>
  export default {
    name: 'YBreadcrumb',
    provide () {
      return {
        yBreadcrumb: this
      }
    },
    data () {
      return {
        active: ''
      }
    },
    props: {
      separator: {
        type: String,
        default: '/'
      }
    }
  }
</script>
