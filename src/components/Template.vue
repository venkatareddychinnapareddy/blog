<template>
    <div>
        <h1>Template in Vue JS</h1>
        <h2 >Name : {{name}}</h2>  
        <h2> Age : {{age}}</h2>
        <h2>Profession :{{profession}}</h2>
        <h2 v-once>City :{{city}}</h2>  <!-- v-once it means it cant be changed rest of all get changed and this is called constant -->
        <button v-bind:disabled="btnDisable" v-on:click='hello'>Click Me</button>
        <p>{{75000*6}}</p> <!--We can perfom arthmatic operations in this -->
        <h2>{{ok? 'yes' : 'no'}}</h2>
        <p v-html='header'></p>
    </div>
</template>

<script>
export default {
    name : 'Template',
    data ()
    {
        return {
            name : 'John',
            age : 40,
            profession : 'Doctor',
            city : 'San Antonio',
            header : "<h1>Hello this is inline using HTML</h1>",
            ok : true,
            btnDisable : true
        }
    },methods :
        {
            hello()
            { 
                this.name = 'Venkata reddy',
                this.age = 22,
                this.profession = 'Developer',
                this.city = 'Hyderabad',
                this.ok = !this.ok
            }

        }
}
</script>