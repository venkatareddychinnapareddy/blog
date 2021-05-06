<template>
    <div>
        <h1>Hello Vue Welcome to Venkat</h1>
        <h1>{{data}}</h1>
        <h1>{{msg}}</h1>
        <button v-on:click="hello()">Function</button>
        <button v-on:mouseover="Grt()">Function 2</button>

    </div>
</template>

<script>
export default {
    name:'Home',
    props : {
        data : String,
        msg : String
    },
    methods : {
        hello()   // this is function
        {
            alert('Hello you clicked function button');
            prompt('Please enter your function name');
            alert('Your function is successfully created');
        },
        Grt() 
        { 
            alert('Hey you hover on funtion 2') 
        }

    }
}
</script>

<style scoped>
h1{
    color:rgb(49, 235, 126);
}
</style>