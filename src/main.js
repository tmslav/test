// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import List from './List.vue'
import Item from './Item.vue'
import ListVuex from './ListVuex.vue'
import ItemVuex from './ItemVuex.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
	{path:'/',name:'home',component:App},
	{path:'/list',name:'list',component:List},
	{path:'/list/:id',name:'item',component:Item},
	{path:'/listvuex',name:'listvuex',component:ListVuex},
	{path:'listvuex',name:'itemvuex',component:ItemVuex}
]

var router = new VueRouter({routes})
new Vue({router,template:'<router-view></router-view>'}).$mount("#app")

