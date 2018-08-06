<template>
  <li
    class="dropdown-item"
    :class="{
      'disabled': disabled,
      'active': select.value === item.value
    }"
    @click="selectOptionClick"
  >
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script>
  import Emitter from '../../../mixins/emitter'

  export default {
    name: 'YSelectOption',
    mixins: [
      Emitter
    ],
    inject: [
      'select'
    ],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      item: {
        type: Object
      },
      optionsLabel: {
        type: String,
        default: 'label'
      }
    },
    computed: {
      currentLabel () {
        return this.item[this.optionsLabel]
      }
    },
    methods: {
      selectOptionClick () {
        this.disabled !== true && this.dispatch('YSelect', 'handleOptionClick', this.item)
      }
    },
    created () {
      this.select.cachedOptions.push(this.item)
    }
  }
</script>
