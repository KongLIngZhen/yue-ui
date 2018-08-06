<template>
  <div :class="fluid ? 'container-fluid' : 'container'">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'YContainer',
    props: {
      fluid: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
