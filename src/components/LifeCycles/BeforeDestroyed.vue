<template>
    <div>
        <h1>Before Destroyed ,  destroyed in vue js</h1>
        <h1>{{name}}</h1>
    </div>
</template>

<script>
export default {
    name : 'BeforeDestroyed',
    data(){
        return {
            name : 'Venkata reddy @Destroyed'
        }
    },
    beforeDestroy(){
        alert('BeforeDestroyed method called');
    },
    destroyed(){
        alert('destroyed method called');
    }
}
</script>