<template>
    <div>
        <h3 v-bind="$attrs">Bruce</h3>
        <h3>Tom</h3>
        <h3>Cruise</h3>
       
    </div>
</template>
<script>
export default {
    name: 'User',
   inheritAttrs : false // if we want to disable item on div and to show only where we declared
}
</script>