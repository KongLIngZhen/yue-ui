<template>
  <div class="y-progress">
    <div
      class="progress"
      :style="progressHeight"
    >
      <div
        class="progress-bar"
        :class="[
          progressStatus,
          progressStriped
        ]"
        :style="progressStyle"
      >
        {{ progressLabel }}
      </div>
    </div>
  </div>
</template>

<script>
  import Emitter from '../../../mixins/emitter'

  export default {
    name: 'YProgress',
    mixins: [
      Emitter
    ],
    props: {
      percentage: {
        type: Number,
        default: 0,
        require: true,
        validator: val => val >= 0 && val <= 100
      },
      label: {
        type: Boolean,
        default: false
      },
      height: {
        type: Number
      },
      status: {
        type: String
      },
      striped: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      progressStatus () {
        return this.status ? 'bg-' + this.status : ''
      },
      progressStriped () {
        if (this.striped) return 'progress-bar-striped'
      },
      progressStyle () {
        let res = {}
        res.width = this.percentage + '%'
        return res
      },
      progressLabel () {
        if (!this.label) return
        return this.percentage + '%'
      },
      progressHeight () {
        let res = {}
        res.height = this.height + 'px'
        return res
      }
    }
  }
</script>
