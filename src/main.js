// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import List from './List.vue'
import Item from './Item.vue'
import ListVuex from './ListVuex.vue'
import ItemVuex from './ItemVuex.vue'
import VueRouter from 'vue-router'
import Vres from 'vue-resource'
import {store} from './store'
import style from './style.less'
Vue.use(VueRouter)
Vue.use(Vres)

const routes = [
	{path:'/',name:'home',component:App},
	{path:'/list',name:'list',component:List},
	{path:'/list/:id',name:'item',component:Item},
	{path:'/listvuex',name:'listvuex',component:ListVuex},
	{path:'/listvuex/:id',name:'itemvuex',component:ItemVuex}
]
var router = new VueRouter({routes})
//random function1
setInterval(function(){   
	     document.getElementById('monitor1').innerHTML=Math.floor((Math.random()*100)+1)+"%"
	  }, 1000);

//random function2
setInterval(function(){   
	     document.getElementById('monitor2').innerHTML=Math.floor((Math.random()*50)+1)+"%"
	  }, 1000);
new Vue({router,
	data:function(){
		return 	{users:this.users}
	},
	created(){
		this.loadUsers()
	},
	methods:{
		loadUsers:function(){
				this.$http.get("/static/users.json").then((response)=>{
				this.$store.commit('insertUsers',response.body)
				this.users = response.body
		})
	}},
	template:'<router-view :users="users"></router-view>',store}).$mount("#app")

