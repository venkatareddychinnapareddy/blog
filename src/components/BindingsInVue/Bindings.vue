<template>
    <div>
        <h1 class="vueStyle">Class and Style Bindings</h1>      <!-- Class binding -->
        <h1 v-bind:style="{color:'skyblue'}">Style Bindings</h1>   <!-- Vue style binding -->
        <h1 v-bind:style="{ color: colorName }">Style Bindings</h1> <!-- Dynamic binding -->
        <h1 v-bind:class="{display:show,vueStyle:show}">Class with Object</h1>  <!-- Use two classes at a time -->
        <h1 v-bind:class="[displayClass? d : v]">Class with Array</h1>  <!-- Use two classes at a time -->
    </div>
</template>

<script>
export default {
    name : 'Bindings',
    data(){
        return {
            colorName : 'pink',
            show : true,
            d: "display",
            v: "vueStyle",
            displayClass : true
            
        }
    }   
}
</script>

<style scoped>
.vueStyle{
    color: rgb(228, 235, 234);
    background-color: rgb(12, 245, 117);
}
.display{
    color:gold;
    font-style: italic;
    background-color: rgb(17, 224, 224);
    padding:5px;
}
</style>