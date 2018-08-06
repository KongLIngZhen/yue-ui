<template>
  <th :style="thStyle">
    {{ label }}
  </th>
</template>

<script>
  import Emitter from '../../../mixins/emitter'

  export default {
    name: 'YTableColumn',
    mixins: [
      Emitter
    ],
    inject: [
      'yTable'
    ],
    props: {
      label: {
        type: String
      },
      prop: {
        type: String
      },
      width: {
        type: String
      }
    },
    mounted () {
      this.dispatch('YTable', 'y.table.addColumn', [this])
    },
    computed: {
      thStyle () {
        let ret = {}
        if (this.width) {
          ret.width = this.width + 'px'
        }
        return ret
      }
    }
  }
</script>
