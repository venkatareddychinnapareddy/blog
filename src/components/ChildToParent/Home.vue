<template>
    <div>
        <h1>User Name : {{name}}</h1>
        <User :getUser="getUserName"/>
    </div>
</template>

<script>
import User from './User.vue'
export default {
    name : 'Home',
     components : {
        User
    },
    data()
    {
        return {
            name : ''
        }
    },
    methods : {
        getUserName(name){
            this.name = name
        }
    }
}
</script>
<style scoped>
h1{
    color : blue
}
</style>