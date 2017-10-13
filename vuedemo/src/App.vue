<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link  to="/home">home</router-link>
    <router-link  to="/demo1?id=123">demo1</router-link>
    <router-link  to="/app">app</router-link>
    <router-link  to="/vuex-demo">vuex-demo</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
