<template>
    <div>
        <h1>Computed Property {{dollars}}</h1>
        <h2>Normal Property : {{(dollars * rupeeVal) - discount}}</h2>
        <h2>Computed Property : {{getResult}}</h2>
        <h2>Method Property : {{getData()}}</h2>
    </div>
</template>

<script>
export default {
    name : 'ComputedProperty',
    data()
    {
        return {
            dollars : 100,
            rupeeVal : 70,
            discount  : 10
        }
    },
    computed : {
        getResult()
        {
            return (this.dollars*this.rupeeVal)-this.discount
        }
    },
    methods : {
        getData()
        {
            return (this.dollars*this.rupeeVal)-this.discount
        }
    }
}
</script>
<style scoped>
h1{
    color: orange;
}
</style>