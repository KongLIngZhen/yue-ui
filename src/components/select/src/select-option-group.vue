<template>
  <li>
    <ul>
      <li class="dropdown-header">{{ label }}</li>
      <slot></slot>
      <li class="dropdown-divider"></li>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'YSelectOptionGroup',
    props: {
      label: {
        type: String,
        default: ''
      }
    }
  }
</script>
