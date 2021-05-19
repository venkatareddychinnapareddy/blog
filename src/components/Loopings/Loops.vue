<template>
    <div>
        <h1>For Loop in Vue JS</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.contact}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name : 'Loops',
    data()
    {
        return {
           users : [
                {id : 1, name: 'John',email: 'John@google.com',contact : 9713684575},
                {id : 2, name: 'Peter',email: 'Peter@google.com',contact : 9713684575},
                {id : 3, name: 'Rock',email: 'Rock@google.com',contact : 9713687575},
                {id : 4, name: 'Will',email: 'Will@google.com',contact : 9713674775},
                {id : 5, name: 'Smith',email: 'Smith@google.com',contact : 9713684575},
                {id : 6, name: 'Dodge',email: 'Dodge@google.com',contact : 9713681575},
            ]
        }
    }
}
</script>
<style scoped>
table{
    margin-left: 500px;
}
table,th,td{
    border:2px solid black;
    border-collapse: collapse;
}
</style>