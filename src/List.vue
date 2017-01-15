<template>
	<div>
		<router-link :to="{name:'home'}">Home</router-link>
		<input v-model="searchText">
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Username</th>
					<th>Email</th>
					<th>Action</th>
				</tr>
			</thead>
			<tr v-for="value in myFilter(users)">
				<td>{{value.name}}</td>
				<td>{{value.username}}</td>
				<td>{{value.email}}</td>
				<td>

					<router-link v-if="store" :to="{name:'itemvuex',params:{id:value.id}}">View/Edit</router-link>
					<router-link v-else :to="{name:'item',params:{id:value.id}}">View/Edit</router-link>

				</td>

			</tr>
		<table>
		<router-view class="view"></router-view>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Vres from 'vue-resource'
	Vue.use(Vres)

	export default{
		props:['users','store'],
		data:function(){return {searchText:''}},
		name: 'list',
		methods:{
			myFilter: function (users) {
				let searchText = this.searchText
				return this.users.filter(function(o){return o.name.includes(searchText)})
			        }
		}
	}
</script>

<style>
</style>
