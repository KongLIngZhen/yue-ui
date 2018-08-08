<template>
  <transition name="alert-fade">
    <div
      class="y-alert alert fade show"
      :class="[
        type ? `alert-${type}` : ``
      ]"
      role="alert"
      v-show="isShow"
    >
      <i v-if="icon" class="fa" :class="'fa-' + iconClass"></i>
      <span v-if="title">{{ title }}</span>
      <slot v-else></slot>
      <button v-if="closable" type="button" class="close" aria-label="Close" @click="close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </transition>
</template>

<script>
  const ICON_TYPE = {
    'primary': 'exclamation-circle',
    'secondary': 'exclamation-circle',
    'light': 'info-circle',
    'dark': 'info-circle',
    'info': 'info-circle',
    'success': 'check-circle',
    'danger': 'times-circle',
    'warning': 'times-circle'
  }

  export default {
    name: 'YAlert',
    props: {
      title: {
        type: String
      },
      type: {
        type: String,
        default: 'primary'
      },
      closable: {
        type: Boolean,
        default: false
      },
      icon: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isShow: true
      }
    },
    methods: {
      alert () {
        this.isShow = true
      },
      close () {
        this.isShow = false
      }
    },
    computed: {
      iconClass () {
        return ICON_TYPE[this.type]
      }
    }
  }
</script>
