<template>
	<div>
		<router-link :to="{name:'home'}">Home</router-link>
		<input v-model="searchText">
		<table>
			<paginate name="users" :list="users">
			<thead>
				<tr>
					<th>Name</th>
					<th>Username</th>
					<th>Email</th>
					<th>Action</th>
				</tr>
			</thead>
			<tr v-for="value in myFilter(paginated('users'))">

				<td>{{value.name}}</td>
				<td>{{value.username}}</td>
				<td>{{value.email}}</td>
				<td>
					<router-link v-if="store" :to="{name:'itemvuex',params:{id:value.id}}">View/Edit</router-link>
					<router-link v-else :to="{name:'item',params:{id:value.id}}">View/Edit</router-link>
				</td>

			</tr>
			</paginate>
			<table>
				<paginate-links for="users" :simple="{ next: 'Next »',prev: '« Back'}"></paginate-links>
				<router-view class="view"></router-view>
	</div>
</template>

<script>
	import Vue from 'vue'
import Vres from 'vue-resource'
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)
Vue.use(Vres)

export default{
	props:['users','store'],
	data:function(){return {searchText:'',paginate:['users']}},
	name: 'list',
	methods:{
		myFilter: function (users) {
			let searchText = this.searchText
			return users.filter(function(o){return o.name.includes(searchText)})
		}
	}
}
	</script>

	<style>

	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	.paginate-list {
		width: 159px;
		margin: 0 auto;
		text-align: left;
		li {
			display: block;
			&:before {
				content: '⚬ ';
				font-weight: bold;
				color: slategray;
			}
		}
	}

	.paginate-links.items {
		user-select: none;
		a {
			cursor: pointer;
		}
		li.active a {
			font-weight: bold;
		}
		li.next:before {
			content: ' | ';
			margin-right: 13px;
			color: #ddd;
		}
		li.disabled a {
			color: #ccc;
			cursor: no-drop;
		}
	}

	a {
		color: #42b983;
	}
	</style>
