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
    <!-- <LifeCycle/> -->
    <!-- <Login/> -->
    <!-- <SignUp/> -->
    <!-- <Validation/> -->

    <!-- <h1>Filter concept in Vue js</h1>
    <h1>{{name | Ucase }}</h1>
    <FilterConcept/> -->

    <!-- <BeforeCreated/> -->
    <!-- <BeforeMounted/> -->

    <div v-if="display">
      <BeforeDestroyed/>
    </div>
     <button v-on:click="toggle">Toggle</button>

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
  // import LifeCycle from './components/LifeCycle.vue'
  // import Login from './components/Login.vue'
  // import SignUp from './components/SignUp.vue'
  // import Validation from './components/Validation.vue'
  // import FilterConcept from './components/FilterConcept.vue'
  // import BeforeCreated from './components/BeforeCreated.vue'
  // import BeforeMounted from './components/BeforeMounted.vue'
  import BeforeDestroyed from './components/BeforeDestroyed.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Home,
    // Rendering,
    // Loops,
    // Compose,
    // Template,
    // Bindings,
    // DataBinding,
    // Child,
    // Props,
    // LifeCycle,
    // Login,
    // SignUp,
    // Validation,
    // FilterConcept
    // BeforeCreated
    // BeforeMounted
    BeforeDestroyed
  },
  data(){
    return{
      display : true
    }
  },
  methods : {
    toggle(){
      this.display = !this.display;
    }
  }

  // data(){
  //   return {
  //     name : 'Venkata reddy'
  //   }
  // -------------------------------break--------------------------}

  // data()   // when to pass big data we use data method  @this is props data
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
  // --------------------------------break---------------------------}
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
