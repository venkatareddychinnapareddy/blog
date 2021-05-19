<template>
  <div>
    <h1>Avatar Component</h1>
    <h2>Current avatar id is : {{this.avatarId}}</h2>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  data(){
      return {
        avatarId : this.$route.params.id
      }
  }
}
</script>
