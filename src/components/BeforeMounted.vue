<template>
    <div>
        <h1>BeforeMounted , Mounted concept in Vue JS</h1>
        <h1 id="demo">{{name}}</h1>
    </div>
</template>

<script>
export default {
    name : 'BeforeMounted',
    data(){
        return {
            name : 'Mounting @ Venkat'
        }
    },
     mounted()
    {
        console.warn('Mounted',this.$el, document.querySelector('#demo'));  // el is html element comprised of el
    },
    beforeMount()
    {
        console.warn('Before mount',this.$el, document.querySelector('#demo'))    //always before will be called first
    }
}
</script>