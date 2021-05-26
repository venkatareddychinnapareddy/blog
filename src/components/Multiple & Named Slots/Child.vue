<template>

  <div class="cart">

   <header>
       <slot name="header">Default Data</slot>
    </header>

   <content>
       <slot name="main">Default Data</slot>
    </content>
    
   <footer>
       <slot name="footer">Default Data</slot>
    </footer>

  </div>

</template>

<script>
export default {
  name: "Child"
};
</script>
<style scoped>
.cart{
    border: 2px solid black;
    width: 170px;
    padding: 20px;
    margin: 30px;
    text-align: center;

}
</style>
