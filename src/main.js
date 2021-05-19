import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
Vue.directive("size",{
  bind(el,binding)
  {
    if(binding.value == 'small'){
      el.style.fontSize='20px';
    }
    else if(binding.value == 'medium'){
      el.style.fontSize='40px';
    }
    else if(binding.value == 'large'){
      el.style.fontSize='60px';
    }
    else {
       el.style.fontSize='100px';
    }
   
  }
})

// import VueRouter from 'vue-router';
// import Routing from './components/Routing';
// import About from './components/About';
// import Avatar from './components/Avatar';
// import PageNotFound from './components/PageNotFound';


// Vue.use(VueRouter);
// const routes = [
//     {path:'/', component:Routing},
//     {path:'/about', component:About},
//     {path:'/avatar/:id', component:Avatar},
//     {path:'*', component:PageNotFound}
// ]
// const router = new VueRouter({
//   routes
// });


Vue.config.productionTip = false
new Vue({
 // router : router,
  render: h => h(App),
}).$mount('#app')

// Vue.filter('Ucase',function(val){
//   return val.toUpperCase();
// });
// Vue.filter('currencyConverter' , function (val){
//   return val*75;
// });  <!--These are filter concepts -->