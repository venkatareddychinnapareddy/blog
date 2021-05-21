<template>
    <div>
        <h1>Non-Props Data</h1>
        <User item='Some data is passed to child' name="user-cmd"/>
    </div>
</template>

<script>
import User from './User.vue'
export default {
    name : 'Home',
    components : {
        User
    }
}
</script>

<style scoped>
h1{
    color : orange;
}
</style>