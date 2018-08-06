<template>
  <div
    class="card"
    :class="[
      {
        'text-white': textWhite
      },
      bg ? 'bg-' + bg : '',
      border ? 'border-' + border : ''
    ]"
  >
    <slot name="card-img-top"></slot>
    <div class="card-header" :class="{'bg-transparent': border}" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="card-body" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="card-footer" :class="{'bg-transparent': border}" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
    <slot name="card-inner"></slot>
    <slot name="card-img-bottom"></slot>
  </div>
</template>

<script>
  export default {
    name: 'YCard',
    props: {
      bg: {
        type: String
      },
      textWhite: {
        type: Boolean,
        default: false
      },
      border: {
        type: String
      }
    }
  }
</script>
