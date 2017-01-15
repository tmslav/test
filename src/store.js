import Vue from 'vue'
import Vuex from 'vuex'
import VueRes from 'vue-resource'
import _ from 'lodash'

Vue.use(Vuex)
Vue.use(VueRes)

function getData() {
	return Vue.$http.get("/static/users.json")
}

export const  store = new Vuex.Store({
	state:{
		users:[]
	},
	mutations:{
		updateUser:function(state, message){
			let name = message.target.value
			let id = message.target.id
			let index = state.users.users.findIndex(function(o){return id==o.id})
			state.users.users[index] = {...state.users.users[index],username:name}
		},
		insertUsers:function(state,message){
			state.users.users=message
		},
		deleteUser:function(state,message){
			let id = message.target.id
			_.remove(state.users.users,function(o){return id==o.id})

		}

	}})
