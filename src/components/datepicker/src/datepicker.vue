<template>
  <input type='text' class="form-control" :readonly="readonly"/>
</template>

<script>
  const events = ['hide', 'show', 'change', 'error', 'update']

  export default {
    name: 'YDatepicker',
    props: {
      value: {
        default: null,
        validator (val) {
          return val === null || val instanceof Date || typeof val === 'string' || val instanceof String
        }
      },
      config: {
        type: Object,
        default: () => ({
          locale: 'zh-cn',
          format: 'YYYY/MM/DD',
          ignoreReadonly: true
        })
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        dp: null,
        elem: null
      }
    },
    created () {
      jQuery.extend(true, jQuery.fn.datetimepicker.defaults, {
        icons: {
          time: 'far fa-clock',
          date: 'far fa-calendar',
          up: 'fas fa-arrow-up',
          down: 'fas fa-arrow-down',
          previous: 'fas fa-chevron-left',
          next: 'fas fa-chevron-right',
          today: 'fas fa-calendar-check',
          clear: 'far fa-trash-alt',
          close: 'far fa-times-circle'
        }
      })
    },
    mounted () {
      if (this.dp) return

      this.elem = jQuery(this.$el)
      this.elem.datetimepicker(this.config)
      this.dp = this.elem.data('DateTimePicker')

      this.dp.date(this.value)
      this.elem.on('dp.change', this.onChange)
      this.registerEvents()
    },
    beforeDestroy () {
      if (this.dp) {
        this.dp.destroy()
        this.dp = null
        this.elem = null
      }
    },
    methods: {
      onChange (event) {
        let formattedDate = event.date ? event.date.format(this.dp.format()) : null
        this.$emit('input', formattedDate)
      },
      registerEvents () {
        events.forEach((name) => {
          this.elem.on(`dp.${name}`, (...args) => {
            this.$emit(`dp-${name}`, ...args)
          })
        })
      }
    },
    watch: {
      value (newValue) {
        this.dp && this.dp.date(newValue || null)
      },
      config: {
        deep: true,
        handler (newConfig) {
          this.dp && this.dp.options(newConfig)
        }
      }
    }
  }
</script>
