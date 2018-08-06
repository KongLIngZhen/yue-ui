<template>
  <div class="card">
    <div
      :id="'heading' + name"
      class="card-header bg-transparent"
      data-toggle="collapse"
      :data-target="'#collapse' + name"
    >
      {{ title }}
    </div>
    <div
      :id="'collapse' + name"
      class="collapse"
      :class="{
        'show': show
      }"
      :data-parent="dataParent"
    >
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'YCollapseItem',
    inject: [
      'yCollapse'
    ],
    props: {
      title: {
        type: String,
        require: true
      },
      name: {
        type: [String, Number],
        require: true
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      console.log(this.yCollapse)
    },
    computed: {
      dataParent () {
        if (this.yCollapse.accordion) return `#${this.yCollapse.id}`
      }
    }
  }
</script>
