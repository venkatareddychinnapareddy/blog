<template>
    <div>
        <h1>Before created , created concept in Vue JS</h1>
        <h1>{{name}}</h1>
    </div>
</template>

<script>
export default {
    name : 'BeforeCreated',
    data(){
        return {
            name : 'Shivanjani'
        }
    },
    created()
    {   
        //this.name = 'Venky venoR'
        console.warn('Created',this.name);
    },
    beforeCreate()
    {
        this.name = 'venkat'
        console.warn('Before Created', this.name);
    }
}
</script>