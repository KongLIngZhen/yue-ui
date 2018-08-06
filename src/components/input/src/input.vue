<template>
  <div class="y-input"
    :class="[
      {
        'is-disabled': disabled,
        'is-clearable': clearable,
        'is-prefix': $slots.prefix || prefixIcon,
        'is-suffix': $slots.suffix || suffixIcon,
        'is-suggest': suggest
      }
    ]"
  >
    <input
      ref="input"
      :type="type"
      :name="name"
      class="form-control"
      :class="[
        size ? 'form-control-' + size : ''
      ]"
      :value="currentValue"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :minlength="minlength"
      :max="max"
      :min="min"
      :readonly="readonly"
      :disabled="disabled"
      @compositionstart.native="handleComposition"
      @compositionupdate.native="handleComposition"
      @compositionend.native="handleComposition"
      @input="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @click="handleClick"
    />
    <i v-if="clearable && _clearShow" class="y-input-clearable fa fa-times" @click.stop="_handleClear"></i>
    <span class="y-input-prefix" v-if="$slots.prefix || prefixIcon">
      <slot name="prefix"></slot>
      <i class="y-input-icon fa"
        v-if="prefixIcon"
        :class="prefixIcon">
      </i>
    </span>
    <span class="y-input-suffix" v-if="$slots.suffix || suffixIcon">
      <slot name="suffix"></slot>
      <i class="y-input-icon fa"
        v-if="suffixIcon"
        :class="suffixIcon">
      </i>
    </span>
    <y-dropdown-list
      :suggest="suggest"
      :suggestions="suggestions"
    ></y-dropdown-list>
    <i class="fa fa-circle-notch fa-spin fa-fw suggestLoading" v-show="loading"></i>
  </div>
</template>

<script>
  import Emitter from '../../../mixins/emitter'
  import debounce from 'throttle-debounce/debounce'

  export default {
    name: 'YInput',
    mixins: [
      Emitter
    ],
    data () {
      return {
        currentValue: this.value,
        suggestions: [],
        isOnComposition: false,
        loading: false
      }
    },
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: [String, Number],
      name: String,
      readonly: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      },
      maxlength: Number,
      minlength: Number,
      max: Number,
      min: Number,
      validateEvent: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      clearable: {
        type: Boolean,
        default: false
      },
      prefixIcon: {
        type: String,
        default: ''
      },
      suffixIcon: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      },
      suggest: {
        type: Boolean,
        default: false
      },
      fetchSuggestions: Function,
      valueKey: {
        type: String,
        default: 'value'
      },
      triggerOnFocus: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleComposition (event) {
        if (!this.suggest) return
        if (event.type === 'compositionend') {
          this.isOnComposition = false
          this.handleChange(event.target.value)
        } else {
          this.isOnComposition = true
        }
      },
      handleChange (event) {
        const value = event.target.value
        this.$emit('input', value)
        this.setCurrentValue(value)
        if (!this.suggest) return
        if (this.isOnComposition || (!this.triggerOnFocus && !value)) {
          this.suggestions = []
          return
        }
        this.debouncedGetData(value)
      },
      handleFocus (event) {
        this.$emit('focus', event)
        this.suggest && this.triggerOnFocus && this.debouncedGetData(this.value)
      },
      handleBlur (event) {
        this.$emit('blur', event)
        if (this.validateEvent) {
          this.dispatch('YFormItem', 'y.form.blur', [this.currentValue])
        }
        // this.suggestions = []
      },
      setCurrentValue (value) {
        if (value === this.currentValue) return
        this.currentValue = value
        if (this.validateEvent) {
          this.dispatch('YFormItem', 'y.form.change', [value])
        }
      },
      _handleClear (event) {
        event.stopPropagation()
        this.$emit('input', '')
        this.setCurrentValue('')
      },
      select (item) {
        this.$emit('input', item[this.valueKey])
        this.setCurrentValue(item[this.valueKey])
        this.$emit('select', item)
        this.$nextTick(() => {
          this.suggestions = []
        })
      },
      getData (queryString) {
        this.loading = true
        this.fetchSuggestions(queryString, (suggestions) => {
          this.loading = false
          if (Array.isArray(suggestions)) {
            this.suggestions = suggestions
          } else {
            console.error('autocomplete suggestions must be an array')
          }
        })
      },
      handleClick (e) {
        this.$emit('click', e)
      },
      blur () {
        this.$refs.input.blur()
      },
      focus () {
        this.$refs.input.focus()
      }
    },
    watch: {
      'value' (val, oldValue) {
        this.setCurrentValue(val)
      }
    },
    computed: {
      _clearShow () {
        return (this.currentValue && this.currentValue !== '') || false
      }
    },
    mounted () {
      if (!this.suggest) return
      this.debouncedGetData = debounce(300, (val) => {
        this.getData(val)
      })
      this.$on('item-click', item => {
        this.select(item)
      })
    }
  }
</script>
