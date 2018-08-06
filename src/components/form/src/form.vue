<template>
  <form
    class="y-form"
    :class="[
      labelPosition ? 'y-form-label-' + labelPosition : '',
      size ? 'y-form-size-' + size : '',
      {
        'form-inline': inline,
      }
    ]"
  >
    <fieldset :disabled="disabled">
      <slot></slot>
    </fieldset>
  </form>
</template>

<script>
  import Emitter from '../../../mixins/emitter'

  export default {
    name: 'YForm',
    mixins: [
      Emitter
    ],
    provide () {
      return {
        yForm: this
      }
    },
    props: {
      inline: {
        type: Boolean,
        default: false
      },
      model: {
        type: Object,
        default: () => ({})
      },
      rules: {
        type: Object,
        default: () => ({})
      },
      size: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      labelWidth: {
        type: String,
        default: '80px'
      },
      showMessage: {
        type: Boolean,
        default: true
      },
      labelPosition: {
        type: String
      }
    },
    watch: {
      rules () {
        this.validate()
      }
    },
    data () {
      return {
        fields: []
      }
    },
    created () {
      this.$on('y.form.addField', (field) => {
        if (field) {
          this.fields.push(field)
        }
      })
      this.$on('y.form.removeField', (field) => {
        if (field.prop) {
          this.fields.splice(this.fields.indexOf(field), 1)
        }
      })
    },
    mounted () {

    },
    methods: {
      resetFields () {
        if (!this.model) {
          process.env.NODE_ENV !== 'production' && console.warn('model is required for resetFields to work.')
          return
        }
        this.fields.forEach(field => {
          field.resetField()
        })
      },
      clearValidate () {
        this.fields.forEach(field => {
          field.clearValidate()
        })
      },
      validate (callback) {
        if (!this.model) {
          console.warn('the model is required for validate to work!')
          return
        }

        let promise
        // if no callback, return promise
        if (typeof callback !== 'function' && window.Promise) {
          promise = new window.Promise((resolve, reject) => {
            callback = function (valid) {
              valid ? resolve(valid) : reject(valid)
            }
          })
        }

        let valid = true
        let count = 0
        // 如果需要验证的fields为空，调用验证时立刻返回callback
        if (this.fields.length === 0 && callback) {
          // eslint-disable-next-line
          callback(true)
        }
        this.fields.forEach((field, index) => {
          field.validate('', errors => {
            if (errors) {
              valid = false
            }
            if (typeof callback === 'function' && ++count === this.fields.length) {
              callback(valid)
            }
          })
        })

        if (promise) {
          return promise
        }
      }
    }
  }
</script>
