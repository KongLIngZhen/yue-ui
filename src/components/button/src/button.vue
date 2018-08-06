<template>
  <button
    :type="nativeType"
    class="btn y-button"
    :class="[
      type ? 'btn-' + (plain ? 'outline-' : '') + type : '',
      size ? 'btn-' + size : '',
      block ? 'btn-block' : '',
      {
        'y-button-circle': circle,
        'y-button-disabled': disabled,
        'y-button-loading': loading
      }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
    :data-toggle="modalTarget ? 'modal' : ''"
    :data-target="dataTarget"
  >
    <i :class="'fa ' + icon" v-if="icon && !loading"></i>
    <i class="fa fa-circle-notch fa-spin" v-if="loading"></i>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'YButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: ''
      },
      block: {
        type: Boolean,
        default: false
      },
      plain: {
        type: Boolean,
        default: false
      },
      circle: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      icon: {
        type: String,
        default: ''
      },
      modalTarget: {
        type: String
      }
    },
    methods: {
      handleClick (e) {
        this.$emit('click', e)
      }
    },
    computed: {
      dataTarget () {
        if (this.modalTarget) {
          return '#' + this.modalTarget
        }
      }
    }
  }
</script>
