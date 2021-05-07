<template>
    <div class="Home">
        <h1>This is Home Component</h1>
        <Users/>
        <Products/>
    </div>
</template>

<script>
import Users from './Users.vue';
import Products from './Products.vue'
export default {
    name : 'Compose',
    components : {
        Users,
       Products
    }
}
</script>

<style scoped>
.Home{
    background-color: aquamarine;
    height: 500px;
}
</style>