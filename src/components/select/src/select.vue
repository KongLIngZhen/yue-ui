<template>
  <div
    class="y-select"
    :class="{
      'is-disabled': disabled
    }"
  >
    <!--:data-toggle="disabled ? '' : 'dropdown'"-->
    <y-input
      ref="reference"
      aria-haspopup="true"
      type="text"
      v-model="currentValue"
      :name="name"
      :placeholder="placeholder"
      :readonly="true"
      :suffix-icon="suffixIcon"
      :disabled="disabled"
      :clearable="clearable"
      :size="size"
      @input="handleChange"
      @click="handleClick"
      @blur="handleBlur"
    >
    </y-input>
    <y-select-dropdown>
      <slot></slot>
    </y-select-dropdown>
  </div>
</template>

<script>
  import Emitter from '../../../mixins/emitter'

  export default {
    name: 'YSelect',
    mixins: [
      Emitter
    ],
    provide () {
      return {
        'select': this
      }
    },
    data () {
      return {
        currentValue: this.value,
        visible: false,
        cachedOptions: []
      }
    },
    props: {
      value: {
        required: true
      },
      name: String,
      placeholder: {
        type: String,
        default: ''
      },
      options: {
        type: Array,
        default: function () {
          return []
        }
      },
      optionsValue: {
        type: String,
        default: 'value'
      },
      optionsLabel: {
        type: String,
        default: 'label'
      },
      optionsDisabled: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      clearable: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: ''
      }
    },
    methods: {
      handleClick () {
        this.visible = !this.visible
      },
      handleChange () {

      },
      handleBlur () {
        this.visible = false
      },
      handleOptionClick (option) {
        this.$emit('input', option[this.optionsValue])
        this._setCurrentValue(option[this.optionsLabel])
        this.visible = false
        this.$refs.reference.blur()
      },
      _setCurrentValue (label) {
        if (label === this.$refs.reference.currentValue) return
        this.$refs.reference.currentValue = label
      },
      _setSelected () {
        let option = this._getOption(this.value)
        if (option) this._setCurrentValue(option[this.optionsLabel])
      },
      _getOption (value) {
        let option
        for (let i = this.cachedOptions.length - 1; i >= 0; i--) {
          const opt = this.cachedOptions[i]
          if (opt[this.optionsValue] === value) {
            option = opt
            break
          }
        }
        if (option) return option
      }
    },
    watch: {
      value (val) {
        this._setSelected()
      }
    },
    computed: {
      suffixIcon () {
        return this.visible ? 'fa-angle-up' : 'fa-angle-down'
      }
    },
    created () {
      this.$on('handleOptionClick', this.handleOptionClick)
    },
    mounted () {
      this._setSelected()
    }
  }
</script>
