<template>
    <div>
        <h1>Watchers in Vue JS</h1>
        <h2>{{count}}</h2>
        <button v-on:click="count = count + 1 "> + </button>
        <button v-on:click="count = count - 1 "> - </button>
    </div>
</template>

<script>
export default {
    name : 'Watcher',
    data()
    {
        return{
            count : 0
        }
    },
    watch : {
        count(val,prev)
        {
            if(val>10 && val>prev)
            {
                alert("Stop Counting");
            }
        }
    }
}
</script>

<style scoped>
h1{
    color : blue;
}
</style>