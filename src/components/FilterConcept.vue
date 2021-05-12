<template>
    <div>
        <h1>{{name | Ucase}}</h1>  <!-- so we can use those upper case anywhere as we declared it in main.js -->
        <h1>{{amount | currencyConverter}}</h1>
    </div>
</template>

<script>
export default {
name : 'FilterConcept',
data(){
    return {
        name  : 'Welcome to my filter concept',
        amount : 18000
    }
}
}
</script>