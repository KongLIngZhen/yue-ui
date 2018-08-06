<template>
  <div class="y-modal modal fade" :id="modal">
    <div class="modal-dialog" :class="[modalSize]">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'YModal',
    props: {
      title: {
        type: String
      },
      modal: {
        type: String,
        required: true
      },
      size: {
        type: String
      }
    },
    mounted () {
      this.elem = jQuery(this.$el)
      this.elem.on('show.bs.modal', (e) => {
        this.$emit('show', e)
      })
      this.elem.on('shown.bs.modal', (e) => {
        this.$emit('shown', e)
      })
      this.elem.on('hide.bs.modal', (e) => {
        this.$emit('hide', e)
      })
      this.elem.on('hidden.bs.modal', (e) => {
        this.$emit('hidden', e)
      })
    },
    computed: {
      modalSize () {
        if (this.size) return `modal-${this.size}`
      }
    },
    methods: {
      show () {
        this.elem.modal('show')
      },
      hide () {
        this.elem.modal('hide')
      }
    }
  }
</script>
