<template>
  <transition
    name="y-zoom-in-top"
    @enter="enter"
  >
    <div
      class="dropdown-menu y-select-dropdown"
      :class="{ 'show': select.visible }"
      v-show="select.visible">
      <y-scroll ref="scroll" style="max-height: 200px;height: 100%!important;">
        <ul>
          <slot v-if="this.$slots.default"></slot>
          <y-select-option
            v-else
            v-for="(item, index) in select.options"
            :key="index"
            :item="item"
            :disabled="item.disabled"
          ></y-select-option>
        </ul>
      </y-scroll>
    </div>
  </transition>
</template>

<script>
  import Emitter from '../../../mixins/emitter'

  export default {
    name: 'YSelectDropdown',
    mixins: [
      Emitter
    ],
    inject: [
      'select'
    ],
    methods: {
      enter: function (el, done) {
        this.$refs.scroll.refresh()
      }
    }
  }
</script>
