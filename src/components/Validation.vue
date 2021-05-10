<template>
    <div>
        <!-- <p v-if="error.length">
            <b>please correct the following errors</b>
            <ul>
                <li v-for="e in error" v-bind:key="e.id">
                    {{e}}
                </li>
            </ul>
        </p> this part is mandatory because i have mentioned alerts  -->
        <h1>Form Validation in vue js</h1>
        <form action="" @submit="login">
            <input type="text" placeholder="Enter your username" v-model="username"> <br> <br/>
            <input type="password" placeholder="Enter your password" v-model="password"> <br> <br/>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Validation',
    data(){
        return {
            error : [],
            username : null,
            password : null
        }
    },
    methods : {
        login (e)
        {
            if(this.username && this.password)
            {
                alert('Login success')
            }
            this.error = [];
            if(!this.username)
            {
                this.error.push('username is required');
            }
             if(!this.password)
            {
                this.error.push('password is required');
            }
            alert(this.error);
            e.preventDefault();
        }
    }
}
</script>