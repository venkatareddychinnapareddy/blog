<template>
    <div>
        <h1>Employee List</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.username}}</td>
                <td>{{item.email}}</td>
                <td>{{item.address.street}}</td>
            </tr>
        </table>
    </div>
</template>


<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios)
export default {
    name : "EmployeeList",
    data()
    {
        return{
            list : undefined
        }
    },
    mounted()
    {
        Vue.axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=> {
            this.list = resp.data;
        })
    }
}
</script>

<style scoped>
table,th,td{
    border : 2px solid black;
    border-collapse: collapse;
    margin-left: 300px;
}
</style>