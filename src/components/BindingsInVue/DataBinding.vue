<template>
    <div>
        <h1>Data Binding in vue JS</h1>
        <h1 style="white-space:pre-line">{{messege}}</h1>
        <input type="text" v-model="messege"><br/>
        <textarea type="text" v-model="messege" /> <!-- As soon as we change  the text in input h1 text is also gonna change and that is cslled data binding -->
        <!-- textarea is for writing multiple lines initially input tag is used -->
    </div>
</template>

<script>
export default {
    name : 'DataBinding',
    data()
    {
        return {
            messege : 'Hi'
        }
    }
}
</script>

<style scoped>

</style>