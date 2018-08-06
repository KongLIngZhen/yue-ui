<template>
  <transition name="y-zoom-in-top">
    <div
      v-if="suggest && suggestionsNum"
      class="dropdown-menu y-dropdown-list"
      :class="{
        'show': suggest
      }"
      tabindex='0'
    >
      <y-scroll style="max-height: 200px;height: 100%!important;">
        <a
          class="dropdown-item"
          v-for="(item, index) in suggestions"
          :key="index"
          @click="select(item)"
        >
          {{ item[valueKey] }}
        </a>
      </y-scroll>
    </div>
  </transition>
</template>

<script>
  import Emitter from '../../../mixins/emitter'

  export default {
    name: 'YDropdownList',
    mixins: [
      Emitter
    ],
    props: {
      suggest: {
        type: Boolean,
        default: false
      },
      valueKey: {
        type: String,
        default: 'value'
      },
      suggestions: {
        type: Array,
        default: function _default () {
          return []
        }
      }
    },
    methods: {
      select (item) {
        this.dispatch('YInput', 'item-click', item)
      }
    },
    computed: {
      suggestionsNum () {
        return this.suggestions.length > 0
      }
    }
  }
</script>
