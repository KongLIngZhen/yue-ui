<template>
  <div
    class="y-checkbox-group"
    :class="[
      button ? 'btn-group btn-group-toggle' : ''
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
  import Emitter from '../../../mixins/emitter'

  export default {
    name: 'YCheckboxGroup',
    mixins: [
      Emitter
    ],
    props: {
      value: {},
      button: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'default'
      },
      type: {
        type: String,
        default: 'secondary'
      },
      plain: {
        type: Boolean,
        default: false
      },
      min: {
        type: Number
      },
      max: {
        type: Number
      }
    },
    created () {
      this.$on('handleChange', val => {
        this.$emit('change', val)
      })
    },
    watch: {
      value (val) {
        this.dispatch('YFormItem', 'y.form.change', [this.value])
      }
    }
  }
</script>
