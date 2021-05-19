<template>
    <div>
        <h1>Submit Form Data To API</h1>
        <h1>Post API</h1>

        <form @submit="postData" method="post">
            <input type="text" name="author" v-model="posts.author" placeholder="Author"> <br/> <br/>
            <input type="text" name="title" v-model="posts.title" placeholder="Tilte">  <br/> <br/>
            <button type="submit">Post</button>
        </form>

    </div>
</template>

<script>

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios)

export default {
    name : 'PostAPI',
    data()
    {
        return{
            posts : {
            author : null,
            title : null
        }
     }  
    },
    methods : {
        postData(e)
        {
          this.axios.post('http://localhost:8080/posts',this.posts)
          .then((result) => {
              console.log(result);
          })
          e.preventDefault();
        }
    }
}
</script>