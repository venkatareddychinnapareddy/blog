<template>

 <div>
    <h1>Dynamic Components</h1>

    <button @click="tab='Node'">Load Node</button>
    <button @click="tab='Php'">Load Php</button>
    <button @click="tab='Script'">Load Script</button> 

    <component :is="tab" />

 </div>
 



</template>

<script>
import Node from './Node.vue'
import Php from './Php.vue'
import Script from './Script.vue'

export default {
    name: 'Home',
    components : {
        Node, Php, Script
    },
    data(){
        return {
            tab : 'Script'
        }
    }
}
</script>
<style scoped>
h1{
    color : orange
}
</style>