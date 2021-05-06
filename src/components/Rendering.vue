<template>
    <div>
        <h1 v-if='show'>Conditional Rendering in vue</h1>
        <!-- <h1 v-else>Else Side</h1> -->
        <button v-on:click='display'>Toggle</button>
    </div>
</template>

<script>
export default {    
    name : 'Rendering',
    data ()
        {
            return {
                show : false
            }
        },
        methods : {
            display () 
            {
              this.show = !this.show  // this is true as well as false 
            }
        }
    }

</script>