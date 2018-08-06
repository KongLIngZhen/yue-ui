<template>
  <div
    class="y-switch"
    :class="{
      'is-checked': checked,
      'is-disabled': disabled
    }"
    @click="switchValue"
  >
    <y-checkbox
      ref="input"
      class="y-switch-input"
      v-model="currentValue"
      :disabled="disabled"
      @change="handleChange"
    >
    </y-checkbox>
    <span
      ref="core"
      class="y-switch-core"
      :style="{ 'width': coreWidth + 'px' }"
    >
    </span>
  </div>
</template>

<script>
  export default {
    name: 'YSwitch',
    data () {
      return {
        currentValue: this.value,
        coreWidth: this.width
      }
    },
    props: {
      width: {
        type: Number,
        default: 0
      },
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Boolean, String, Number],
        default: false
      },
      activeValue: {
        type: [Boolean, String, Number],
        default: true
      },
      inactiveValue: {
        type: [Boolean, String, Number],
        default: false
      },
      activeColor: {
        type: String,
        default: '#409eff'
      },
      inactiveColor: {
        type: String,
        default: '#dcdfe6'
      }
    },
    computed: {
      checked () {
        return this.value === this.activeValue
      }
    },
    watch: {
      checked () {
        if (this.activeColor || this.inactiveColor) {
          this.setBackgroundColor()
        }
      }
    },
    methods: {
      switchValue () {
        this.$refs.input.$refs.checkbox.click()
      },
      handleChange (event) {
        this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue)
        this.$emit('change', !this.checked ? this.activeValue : this.inactiveValue)
      },
      setBackgroundColor () {
        let newColor = this.checked ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = newColor
        this.$refs.core.style.backgroundColor = newColor
      }
    },
    mounted () {
      this.coreWidth = this.width || 40
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor()
      }
      this.$refs.input.$refs.checkbox.checked = this.checked
    }
  }
</script>
