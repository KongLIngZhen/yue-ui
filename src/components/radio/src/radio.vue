<template>
  <label
    class="y-radio"
    :class="[
      radioBtnClass,
      model === label ? 'active' : ''
    ]"
  >
    <input
      type="radio"
      class="y-radio-input"
      :class="{
        'is-checked': model === label,
        'is-disabled': disabled === true
      }"
      :value="label"
      :disabled="disabled"
      :name="name"
      v-model="model"
      @change="handleChange"
    />
    <label
      class="y-radio-label"
      :class="{
        'y-radio-label-button': this.$parent.button
      }"
    >
      <slot></slot>
    </label>
  </label>
</template>

<script>
  import Emitter from '../../../mixins/emitter'

  export default {
    name: 'YRadio',
    mixins: [
      Emitter
    ],
    props: {
      value: {},
      label: {},
      name: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isGroup () {
        let parent = this.$parent
        if (parent && parent.$options.name === 'YRadioGroup') {
          /* eslint-disable */
          this._radioGroup = parent
          return true
        }
        return false
      },
      model: {
        get () {
          return this.isGroup ? this._radioGroup.value : this.value
        },
        set (val) {
          if (this.isGroup) {
            this.dispatch('YRadioGroup', 'input', [val])
          } else {
            this.$emit('input', val)
          }
        }
      },
      radioBtnClass () {
        let parent = this.$parent
        let rbc = ``
        if (parent && parent.$options.name === 'YRadioGroup' && parent.button) {
          rbc = `btn btn-${(parent.plain ? 'outline-' : '') + parent.type} btn-${parent.size}`
        }
        return rbc
      }
    },
    methods: {
      handleChange () {
        this.$nextTick(() => {
          this.$emit('change', this.model)
          this.isGroup && this.dispatch('YRadioGroup', 'handleChange', this.model)
        })
      }
    }
  }
</script>
