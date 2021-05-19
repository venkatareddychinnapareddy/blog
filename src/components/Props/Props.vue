<template>
    <div>
        <h1>Props in vue js</h1>
        <h2>Child Component</h2>
        <h4 v-for="user in users" :key=user.name>
                           Name : {{ user.name }} <br>
                           Age :  {{ user.age }}   <br>
                           Degree :{{ user.Degree }}<br>
                           Email :  {{ user.email }}<br>
                           City :{{ user.city }}<br>
                           Stream : {{ user.stream }}<br>
                           Designantion :{{ user.designation }}
                            </h4>
    </div>
</template>

<script>
export default {
    name : 'Props',
    props : ['users']
}
</script>

