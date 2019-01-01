require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router'
import store from './store';
Vue.use(VueRouter);
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'home',
            component: require('./components/views/home.vue').default
        },
        {
            path:'/about',
            name:'about',
            component: require('./components/views/about.vue').default
        }
    ],
    linkActiveClass: 'is-active',
    mode: 'history'
})

export default  new Vue({
    router
})