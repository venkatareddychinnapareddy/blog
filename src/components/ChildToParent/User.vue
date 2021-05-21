<template>
    <div>
        <h1>Child or User component</h1>
        <button v-on:click="getUser(userName)">User to parent</button>
    </div>
</template>

<script>

export default {
    name : 'User',
    data(){
        return {  
            userName : 'Peter'
        }
    },
    props : {
        getUser:Function
    }
}
</script>