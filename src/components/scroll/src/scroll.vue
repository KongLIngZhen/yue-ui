<template>
  <div ref="wrapper" class="y-scroll-wrapper" :style="{ height: height + 'px'}">
    <div class="y-scroll-wrapper-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Emitter from '../../../mixins/emitter'

  export default {
    name: 'YScroll',
    mixins: [
      Emitter
    ],
    props: {

    },
    data () {
      return {
        height: ''
      }
    },
    watch: {

    },
    mounted () {
      this.matchHeight()
      this.$nextTick(() => {
        setTimeout(() => {
          this._initScroll()
        }, 20)
      })
    },
    methods: {
      _initScroll () {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: false,
          bounce: false,
          scrollY: true,
          scrollX: false,
          scrollbar: {
            fade: true
          },
          autoBlur: false,
          mouseWheel: {
            speed: 20,
            invert: false,
            easeTime: 300
          },
          stopPropagation: false
        })
        this.scroll.wrapper.addEventListener('wheel', this.wheel, false)
      },
      wheel (e) {
        e.stopPropagation()
      },
      matchHeight () {
        this.height = window.innerHeight - this.$el.offsetTop
      },
      refresh () {
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>
