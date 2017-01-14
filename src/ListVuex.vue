<template>
	<div>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Username</th>
					<th>Email</th>
					<th>Action</th>
				</tr>
			</thead>
			<tr v-for="value in users">
				<td>{{value.name}}</td>
				<td>{{value.username}}</td>
				<td>{{value.email}}</td>
				<td><router-link :to="{name:'item',params:{id:value.id}}">View/Edit</router-link></td>
			</tr>
		<table>
		<router-view class="view"></router-view>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Vres from 'vue-resource'
	Vue.use(Vres)

	export default {
		name: 'list',
		data :function(){
			return {users:[]}
		},
		mounted(){
			this.loadUsers()
		},
		methods:{
			loadUsers:function(){
				this.$http.get("/static/users.json").then((response)=>{
					this.users = response.body
				})
			}
		}
	}
</script>

<style>
</style>
