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

    <!-- <Props v-bind:users=users />  -->
    <!-- <LifeCycle/> -->
    <!-- <Login/> -->
    <!-- <SignUp/> -->
    <!-- <Validation/> -->

    <!-- <h1>Filter concept in Vue js</h1>
    <h1>{{name | Ucase }}</h1>
    <FilterConcept/> -->

    <!-- <BeforeCreated/> -->
    <!-- <BeforeMounted/> -->

    <!-- <div v-if="display">
      <BeforeDestroyed/>
    </div>
     <button v-on:click="toggle">Toggle</button> -->

    <!-- <GetAPI/> -->
    <!-- <BootstrapVue/> -->
    <!-- <PostAPI/> -->

    <!-- <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view> -->

   <!-------- Dynamic componets ---> 

    <!-- <SignUp/>
    <SignIn/> -->

    <!-- <component v-bind:is="cmp"></component>
    <button v-on:click="uploadCmp('signin')">Load signIn</button>
    <button v-on:click="uploadCmp('signup')">Load signUp</button> -->

    <!-- <CustomDirectives/> -->

    <!-- <Home/> -->

    <Home/>

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

  // import BeforeDestroyed from './components/BeforeDestroyed.vue'

  // import GetAPI from './components/GetAPI.vue'

  // import BootstrapVue from './components/BootstrapVue.vue'

  // import PostAPI from './components/PostAPI.vue'

  // import SignIn from './components/Dynamic/SignIn.vue'

  // import SignUp from './components/Dynamic/SignUp.vue'

  // import CustomDirectives from './components/Custom Directives/CustomDirectives.vue'

  // import Home from './components/ChildToParent/Home.vue'

  import Home from './components/Non-props Data/Home.vue'  
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
    //  Props,
    // LifeCycle,
    // Login,
    // SignUp,
    // Validation,
    // FilterConcept
    // BeforeCreated
    // BeforeMounted
    // BeforeDestroyed
    // GetAPI
    // BootstrapVue
    // PostAPI

    // 'signin' : SignIn,
    // 'signup' : SignUp

    // CustomDirectives

    // Home

    Home

  },

  // data(){   data for dynamic signin and signup
  //   return {
  //     cmp : 'signin'
  //   }
  // },
  // methods: {
  //   uploadCmp(item)
  //   {
  //     this.cmp = item
  //   }
  // }
 
  // data(){  destroyed concept data
  //   return{
  //     display : true
  //   }
  // },
  // methods : {
  //   toggle(){
  //     this.display   = !this.display;
  //   }
  // }

  // data(){
  //   return {
  //     name : 'Venkata reddy'
  //   }
  // -------------------------------break--------------------------}

  //  data()   // when to pass big data we use data method  @this is props data
  //  {
  //    return {
  //     users : [
  //        {
  //          name : 'venkat',
  //          age : 22,
  //          Degree : 'Bachelors',
  //          email : 'venkat@gmail.com',
  //         city : 'Guntur',
  //          stream : 'Mechanical',
  //          designation : 'HR'
  //        },
  //        {
  //          name : 'Reddy',
  //          age : 30,
  //          Degree : 'masters',
  //         email : 'Reddy@gmail.com',
  //          city : 'redwt',
  //          stream : 'AI',
  //          designation : 'TR'
  //        }
  //      ]
  //    }
  //  }

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
