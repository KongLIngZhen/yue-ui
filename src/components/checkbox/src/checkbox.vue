<template>
  <label
    class="y-checkbox"
    :class="[
      checkboxBtnClass,
      model === label ? 'active' : ''
    ]"
  >
    <input
      ref="checkbox"
      type="checkbox"
      class="y-checkbox-input"
      :class="{
        'is-checked': isChecked,
        'is-disabled': disabled === true
      }"
      :value="label"
      :disabled="disabled"
      :name="name"
      v-model="model"
      @change="handleChange"
    />
    <label
      class="y-checkbox-label"
      :class="{
        'y-checkbox-label-button': this.$parent.button
      }"
    >
      <slot></slot>
    </label>
  </label>
</template>

<script>
  import Emitter from '../../../mixins/emitter'

  export default {
    name: 'YCheckbox',
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
      },
      checked: Boolean,
      trueLabel: [String, Number],
      falseLabel: [String, Number]
    },
    data () {
      return {
        isLimitExceeded: false
      }
    },
    computed: {
      isGroup () {
        let parent = this.$parent
        if (parent && parent.$options.name === 'YCheckboxGroup') {
          /* eslint-disable */
          this._checkboxGroup = parent
          return true
        }
        return false
      },
      model: {
        get () {
          return this.isGroup ? this._checkboxGroup.value : this.value
        },
        set (val) {
          if (this.isGroup) {
            this.isLimitExceeded = false;
            this._checkboxGroup.min !== undefined && val.length < this._checkboxGroup.min && (this.isLimitExceeded = true)
            this._checkboxGroup.max !== undefined && val.length > this._checkboxGroup.max && (this.isLimitExceeded = true)
            if (this.isLimitExceeded) {
              this.model = !this.model
              this.dispatch('YCheckboxGroup', 'input', [this.model])
            } else {
              this.dispatch('YCheckboxGroup', 'input', [val])
            }
          } else {
            this.$emit('input', val)
          }
        }
      },
      checkboxBtnClass () {
        let parent = this.$parent
        let cbc = ``
        if (parent && parent.$options.name === 'YCheckboxGroup' && parent.button) {
          cbc = `btn btn-${(parent.plain ? 'outline-' : '') + parent.type} btn-${parent.size} ${this.isChecked ? 'active' : ''}`
        }
        return cbc
      },
      isChecked () {
        if ({}.toString.call(this.model) === '[object Boolean]') {
          return this.model
        } else if (Array.isArray(this.model)) {
          return this.model.indexOf(this.label) > -1
        } else if (this.model !== null && this.model !== undefined) {
          return this.model === this.trueLabel
        }
      }
    },
    methods: {
      addToStore () {
        if (
          Array.isArray(this.model) &&
          this.model.indexOf(this.label) === -1
        ) {
          this.model.push(this.label)
        } else {
          this.model = this.trueLabel || true
        }
      },
      handleChange (ev) {
        if (this.isLimitExceeded) return
        let value
        if (ev.target.checked) {
          value = this.trueLabel === undefined ? true : this.trueLabel
        } else {
          value = this.falseLabel === undefined ? false : this.falseLabel
        }
        this.$emit('change', value, ev)
        this.$nextTick(() => {
          // this.$emit('change', this.model)
          this.isGroup && this.dispatch('YCheckboxGroup', 'handleChange', [this._checkboxGroup.value])
        })
      }
    },
    created() {
      this.checked && this.addToStore()
    },
  }
</script>
