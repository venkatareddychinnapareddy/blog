<template>
  <div>
    <h1>Multiple Slots in Vue JS</h1>

    <Child>
        <template v-slot:header>
            <h1>Peter</h1>
        </template>

         <template v-slot:main>
             <p>My Tech Words</p>
        </template>

         <template v-slot:footer>
           <button>Buy Now</button>
        </template>
    </Child>

    <Child>
        <template v-slot:header>
            <h1>Robert</h1>
        </template>

         <template v-slot:main>
             <p>My Tech Words</p>
        </template>

         <template v-slot:footer>
           <button>Buy Now</button>
        </template>
    </Child>

    <Child>
        <template v-slot:header>
            <h1>Venky</h1>
        </template>

         <template v-slot:main>
             <p>My Tech Words</p>
        </template>

         <template v-slot:footer>
           <button>Buy Now</button>
        </template>
    </Child>


 
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  name: "Home",
  components:{
      Child
  }
}
</script>

<style scoped>
h1 {
  color: salmon;
}
</style>
