<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to My Vue.js App"/> -->
    <!-- <Home data = 'Hello here is what you need' msg = 'I am Captain America'/> -->
    <!-- <Rendering/> -->
    <!-- <Loops/> -->
    <!-- <Compose/> -->
    <!-- <Template/> -->
    <!-- <Bindings/> -->
    <!-- <DataBinding/> -->

    <!-- <h1>{{title}}</h1>
    <Child v-on:changeTitle="updateTitleText($event)"/> -->

    <!-- <Props v-bind:users=users /> When we want send data in props use v-bind -->
    <LifeCycle/>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  // import Home from './components/Home.vue'
  // import Rendering from './components/Rendering'
  // import Loops from './components/Loops.vue'
  // import Compose from './components/Compose.vue'
  // import Template from './components/Template.vue'
  // import Bindings from './components/Bindings.vue'
  // import DataBinding from './components/DataBinding.vue'
  // import Child from './components/Child.vue'
  // import Props from './components/Props.vue'
  import LifeCycle from './components/LifeCycle.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Home,
    // Rendering,
    // Loops,
    // Compose
    // Template
    // Bindings
    // DataBinding
    // Child
    // Props
    LifeCycle
  },
  // data()   // when to pass big data we use data method
  // {
  //   return {
  //     users : [
  //       {
  //         name : 'venkat',
  //         age : 22,
  //         Degree : 'Bachelors',
  //         email : 'venkat@gmail.com',
  //         city : 'Guntur',
  //         stream : 'Mechanical'
  //       },
  //       {
  //         name : 'Reddy',
  //         age : 30,
  //         Degree : 'masters',
  //         email : 'Reddy@gmail.com',
  //         city : 'redwt',
  //         stream : 'AI',
  //       }
  //     ]
  //   }
  // }

  // data(){
  //   return {
  //     title : 'Child to Parent Data'
  //   }
  // },
  // methods : {
  //   updateTitleText(title)
  //   {
  //     this.title = title
  //   }
  // }
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
