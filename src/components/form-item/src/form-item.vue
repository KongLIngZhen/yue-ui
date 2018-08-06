<template>
  <div class="form-group y-form-group" :class="
    [
      {
        'is-error': validateState === 'error',
        'is-validating': validateState === 'validating',
        'is-success': validateState === 'success',
      }
    ]"
  >
    <label :for="labelFor" :style="labelStyle" v-if="label || $slots.label">
      <slot name="label">{{ label }}</slot>
    </label>
    <div class="y-form-group-item">
      <slot></slot>
      <transition name="y-zoom-in-top">
        <div
          v-if="validateState === 'error' && showMessage && form.showMessage"
          class="y-form-item-error"
        >
          {{ validateMessage }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import Emitter from '../../../mixins/emitter'
  import { noop, getPropByPath } from '../../../utils/utils'
  import AsyncValidator from 'async-validator'

  export default {
    name: 'YFormItem',
    mixins: [
      Emitter
    ],
    inject: [
      'yForm'
    ],
    props: {
      label: {
        type: String,
        default: ''
      },
      labelWidth: {
        type: String,
        default: ''
      },
      rules: [Object, Array],
      prop: {
        type: String
      },
      showMessage: {
        type: Boolean,
        default: true
      },
      for: {
        type: String
      }
    },
    data () {
      return {
        validateState: '',
        validateMessage: '',
        validateDisabled: false,
        validator: {},
        isNested: false
      }
    },
    computed: {
      labelFor () {
        return this.for || this.prop
      },
      labelStyle () {
        let ret = {}
        let labelWidth = this.labelWidth || this.form.labelWidth
        if (labelWidth) {
          ret.width = labelWidth
        }
        return ret
      },
      form () {
        return this.$parent
      },
      fieldValue: {
        cache: false,
        get () {
          let model = this.form.model
          if (!model || !this.prop) { return }

          let path = this.prop
          if (path.indexOf(':') !== -1) {
            path = path.replace(/:/, '.')
          }
          // console.log(getPropByPath(model, path, true))
          return getPropByPath(model, path, true).v
        }
      }
    },
    methods: {
      validate (trigger, callback = noop) {
        let rules = this.getFilteredRule(trigger)
        if (!rules || rules.length === 0) {
          callback()
          return true
        }

        this.validateState = 'validating'

        let descriptor = {}
        if (rules && rules.length > 0) {
          rules.forEach(rule => {
            delete rule.trigger
          })
        }
        descriptor[this.prop] = rules

        let validator = new AsyncValidator(descriptor)
        let model = {}

        model[this.prop] = this.fieldValue

        validator.validate(model, { firstFields: true }, (errors, fields) => {
          this.validateState = !errors ? 'success' : 'error'
          this.validateMessage = errors ? errors[0].message : ''

          callback(this.validateMessage)
        })
      },
      clearValidate () {
        this.validateState = ''
        this.validateMessage = ''
        this.validateDisabled = false
      },
      resetField () {
        this.validateState = ''
        this.validateMessage = ''

        let model = this.form.model
        let value = this.fieldValue
        let path = this.prop
        if (path.indexOf(':') !== -1) {
          path = path.replace(/:/, '.')
        }

        let prop = getPropByPath(model, path, true)

        if (Array.isArray(value)) {
          this.validateDisabled = true
          prop.o[prop.k] = [].concat(this.initialValue)
        } else {
          this.validateDisabled = true
          prop.o[prop.k] = this.initialValue
        }
      },
      getRules () {
        let formRules = this.form.rules
        let selfRules = this.rules

        formRules = formRules ? formRules[this.prop] : []
        return [].concat(selfRules || formRules || [])
      },
      getFilteredRule (trigger) {
        let rules = this.getRules()
        return rules.filter(rule => {
          return !rule.trigger || rule.trigger.indexOf(trigger) !== -1
        })
      },
      onFieldBlur () {
        this.validate('blur')
      },
      onFieldChange () {
        if (this.validateDisabled) {
          this.validateDisabled = false
          return
        }

        this.validate('change')
      }
    },
    mounted () {
      if (this.prop) {
        this.dispatch('YForm', 'y.form.addField', [this])

        let initialValue = this.fieldValue
        if (Array.isArray(initialValue)) {
          initialValue = [].concat(initialValue)
        }
        Object.defineProperty(this, 'initialValue', {
          value: initialValue
        })

        let rules = this.getRules()

        if (rules.length) {
          this.$on('y.form.blur', this.onFieldBlur)
          this.$on('y.form.change', this.onFieldChange)
        }
      }
    }
  }
</script>
