<template>
  <div
    :id="id"
    class="y-collapse accordion"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'YCollapse',
    provide () {
      return {
        yCollapse: this
      }
    },
    props: {
      id: {
        type: String,
        required: true
      },
      accordion: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
