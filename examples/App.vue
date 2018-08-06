<template>
  <div id="app">
    <y-section direction="vertical">
      <main-header></main-header>
      <y-container :fluid="false">
        <router-view></router-view>
      </y-container>
    </y-section>
  </div>
</template>

<script>
  import MainHeader from './page/header'

  export default {
    name: 'App',
    components: {
      MainHeader
    }
  }
</script>
