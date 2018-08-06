<template>
  <div class="headerWrapper">
    <y-header height="90px">
      <y-container>
        <h1>
          <img src="../assets/logo.png" width="60" height="60">
        </h1>
        <h1>
          YUE UI
        </h1>
        <p>"誓与IE斗争到底，我就不兼容IE8"</p>
      </y-container>
    </y-header>
  </div>
</template>

<script>
  export default {
    name: 'MainHeader'
  }
</script>

<style scoped>
  .headerWrapper {
    background-color: #353a3c;
  }
  .headerWrapper .container-fluid {
    height: 100%;
    padding: 0px;
    display: flex;
    align-items: center;
  }
  .headerWrapper h1 {
    margin: 0px 20px 0px 0px;
    padding: 0px;
    color: #ffffff;
  }
  .headerWrapper p {
    margin: 0px 20px 0px 0px;
    padding: 0px;
    color: #ffffff;
  }
</style>
