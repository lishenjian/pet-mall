<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {}
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #ededed;
}
h1, h2, h3, h4, h5, h6 {
  font-size: 100%;
  font-weight: 400;
}
.w {
  width: 1220px;
  margin: 0 auto;
}

</style>
