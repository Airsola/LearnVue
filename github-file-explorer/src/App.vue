<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!-- <hello></hello> -->
    <github></github>
  </div>
</template>


<script>
import Github from './components/Github.vue'

export default {
  name: 'app',
  components: {
    Github
  }
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

body{

  color: #888
}
</style>
