<template>
  <div
    :class="{
      'table-responsive': responsive
    }"
    :style="tableContainerStyle"
  >
    <table
      class="table"
      :class="[
      striped ? 'table-striped' : '',
      border ? 'table-bordered' : '',
      dark ? 'table-dark' : '',
      hover ? 'table-hover' : '',
      small ? 'table-sm' : ''
    ]"
    >
      <thead :class="headClass">
        <tr>
          <th v-if="multiple" width="50px">
            <y-checkbox style="margin-bottom: 0px" @change="allCheckboxClick"></y-checkbox>
          </th>
          <slot></slot>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in data"
          :key="index"
          :class="[
            trClass(item, index),
            {
              'active': activeIndex === index
            }
          ]"
          @click="handleRowClick(index, item)"
        >
          <td v-if="multiple">
            <y-checkbox style="margin-bottom: 0px" ref="checkbox" v-model="ck" :label="index" :true-label="index" :false-label="index" @change="rowCheckboxClick"></y-checkbox>
          </td>
          <td v-for="col in columns" :key="col.prop">{{ item[col.prop] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Emitter from '../../../mixins/emitter'

  export default {
    name: 'YTable',
    mixins: [
      Emitter
    ],
    provide () {
      return {
        yTable: this
      }
    },
    props: {
      data: {
        type: Array,
        default: function () {
          return []
        }
      },
      striped: {
        type: Boolean,
        default: false
      },
      border: {
        type: Boolean,
        default: false
      },
      trClass: {
        type: Function,
        default: () => {}
      },
      dark: {
        type: Boolean,
        default: false
      },
      theadClass: {
        type: String,
        default: ''
      },
      hover: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      responsive: {
        type: Boolean,
        default: false
      },
      maxHeight: {
        type: String,
        default: ''
      },
      highlightCurrentRow: {
        type: Boolean,
        default: false
      },
      multiple: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        columns: [],
        activeIndex: -1,
        cacheData: [],
        multipleSelection: null,
        ck: [],
        isCheckedAll: false
      }
    },
    created () {
      this.$on('y.table.addColumn', (col) => {
        if (col) {
          this.columns.push(col)
        }
      })
    },
    mounted () {
      this.cacheData = this.data
      this.multipleSelection = new Map()
    },
    computed: {
      headClass () {
        return this.theadClass ? 'thead-' + this.theadClass : ''
      },
      tableContainerStyle () {
        let res = {}
        if (this.maxHeight) {
          res.maxHeight = this.maxHeight + 'px'
          res.overflowY = 'auto'
        }
        return res
      }
    },
    methods: {
      handleRowClick (index, item) {
        if (!this.highlightCurrentRow) return
        this.activeIndex = index
        this.$emit('current-change', index, item)
      },
      setCurrentRow (index) {
        if (!this.highlightCurrentRow) return
        this.activeIndex = index
        this.$emit('current-change', index, this.data[index])
      },
      rowCheckboxClick (index) {
        if (!this.multiple) return
        if (!this.multipleSelection.get(index)) {
          this.multipleSelection.set(index, this.data[index])
        } else {
          this.multipleSelection.delete(index)
        }
        this.$emit('current-select', index, this.data[index])
        this.$emit('selection-change', [...this.multipleSelection.values()])
      },
      allCheckboxClick () {
        this.isCheckedAll = !this.isCheckedAll
        if (this.isCheckedAll) {
          this.ck = []
          this.data.forEach((item, index) => {
            this.ck.push(index)
          })
          this.$emit('selection-change', this.data)
        } else {
          this.ck = []
          this.$emit('selection-change', [])
        }
      }
    }
  }
</script>
