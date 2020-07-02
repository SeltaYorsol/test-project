import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
import Home from '../components/home'
import AboutUs from '../components/about-us'
import Enter from '../components/enter'


let router = new Router (  {
    routes: [ {
    path:'/home',
    name:'home',
    component: Home
} ,
{
    path:'/about',
    name:'AboutUs',
    component: AboutUs
},

{
    path:'/',
    name:'enter',
    component: Enter
}
]}
   
)

export default router;