<template>
    <div>
        <h1>{{name}}</h1>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name : 'Child',
    props : {
        name : String,
    }
}
</script>
<style scoped>
h1{
    color : orange
}
</style>