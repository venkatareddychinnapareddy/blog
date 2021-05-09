<template>
    <div>
        <h1>This is a Child Component</h1>
        <button v-on:click="updateTitle">Update Title</button>
    </div>
</template>

<script>
export default {
    name : 'Child',
    methods : {
        updateTitle()
        {
            this.$emit('changeTitle','Title prop has been passed from child to parent')
        }
    }
}
</script>
