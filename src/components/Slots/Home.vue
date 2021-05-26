<template>
  <div>
    <h1>Slots in Vue JS</h1>
    <Child name = "Venkat"/>
    <Child name = 'Reddy'/>
    <Child name = 'Rahul'/>
    <Child name = 'Krish'/>

    <Child><h1>Ui Brains</h1></Child>
    <Child><h1>Code Me</h1></Child>
    <Child><h1>Decode World</h1></Child>
    <Child>
        <img src="https://wallpapercave.com/wp/0l0kzYB.jpg" width="900" alt="">
    </Child>

  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  name: "Home",
  components : {
      Child
  }
};
</script>

<style scoped>
h1 {
  color:salmon;
}
</style>
