<template>
  <li
    class="y-breadcrumb-item breadcrumb-item"
    :class="{ 'active': yBreadcrumb.active === _uid }"
    :data-attr="yBreadcrumb.separator"
    @click="currentActive"
  >
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'YBreadcrumbItem',
    inject: [
      'yBreadcrumb'
    ],
    methods: {
      currentActive () {
        this.yBreadcrumb.active = this._uid
      }
    }
  }
</script>
