<template>
    <div>
        <h1>Life Cycle Component in vue JS</h1>
    </div>
</template>

<script>
export default {
    name : 'LifeCycle',
    mathods : {

    },
    data()
    {
        return{}
    },

    beforeCreate : function () {
        console.warn('before Create')
    },
    created : function () {
        console.warn('Created');
    },
    beforeMount : function () {
        console.warn('before Mount');
    },
    mounted : function () {
        console.warn('Mounted');
    }
}
</script>