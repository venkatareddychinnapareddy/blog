<template>
    <div>
        <h1>Form in Vue JS</h1>
        <input type="text" v-model="loginForm.username" placeholder="Username"> <br/> <br/>
        <input type="password" v-model="loginForm.password" placeholder="Password"> <br/> <br/>
        <button v-on:click="getLogin">Login</button>
    </div>
</template>

<script>
export default {
    name : 'Login',
    data(){
        return {
            loginForm : {
                username : null,
                password : null
            }
        }
    },
    methods : {
        getLogin () {
            console.log('your logged in anfd your data is', this.loginForm);
        }
    }
}
</script>

<style scoped>
input{
    height:20px;
}
</style>