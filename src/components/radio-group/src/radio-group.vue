<template>
  <div
    :class="[
      button ? 'btn-group btn-group-toggle' : 'y-radio-group'
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
  import Emitter from '../../../mixins/emitter'

  export default {
    name: 'YRadioGroup',
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
