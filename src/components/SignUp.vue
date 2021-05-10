<template>
    <div>
        <h1>Form with checkbox and radio button</h1>
        <input type="text" placeholder="Username" v-model="signUpForm.username"> <br/> <br/>
        <input type="password" placeholder="Passord" v-model="signUpForm.password"> <br/> <br/>
        <h1>Hobbies</h1>
        <input type="checkbox" value="Cricket" id="Cricket" v-model="signUpForm.hobbies"> <label for="Cricket">Cricket</label>
        <input type="checkbox" value="Badminton" id="Badminton" v-model="signUpForm.hobbies"> <label for="Cricket">Badminton</label>
        <input type="checkbox" value="Reading" id="Reading" v-model="signUpForm.hobbies">  <label for="Cricket">Reading</label>
        <input type="checkbox" value="Sleeping" id="Sleeping" v-model="signUpForm.hobbies">  <label for="Cricket">Sleeping</label>
        <h1>Gender</h1>
        <input type="radio" name="gender" value="Male" v-model="signUpForm.gender"> <label for="Male">Male</label>
        <input type="radio" name="gender" value="Female" v-model="signUpForm.gender"> <label for="Male">Female</label> <br/><br/>
        <button v-on:click="signUpUser">Sign Up</button>
    </div>
</template>

<script>
export default {
    name : 'SignUp',
    data (){
        return {
            signUpForm : {
                username : null,
                password : null,
                hobbies : [],
                gender : null
            }
        }
    },methods : {
        signUpUser(){
            console.warn('HIII',this.signUpForm);
            alert(this.signUpForm.hobbies);
        }
    }
}
</script>
<style scoped>
input{
    height: 20px;
}
</style>