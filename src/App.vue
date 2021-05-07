<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to My Vue.js App"/> -->
    <!-- <Home data = 'Hello here is what you need' msg = 'I am Captain America'/> -->
    <!-- <Rendering/> -->
    <!-- <Loops/> -->
    <!-- <Compose/> -->
    <Template/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
// import Rendering from './components/Rendering'
// import Loops from './components/Loops.vue'
// import Compose from './components/Compose.vue'
import Template from './components/Template.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Home,
    // Rendering,
    // Loops,
    // Compose
    Template

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
