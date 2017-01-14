<template>
	<div>
		<router-link :to="{name:'list'}">Back</router-link>
		<div> User ID{{$route.params.id}}</div>
		<div> Username {{user.username}}</div>
		<router-view class="view"></router-view>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Vres from 'vue-resource'
	import _ from 'lodash'

	export default {
		name: 'item',
		data :function(){
			return {user:{}}
		},
		created(){
			this.loadUsers()
		},
		methods:{
			loadUsers:function(){

				this.$http.get("/static/users.json").then((response)=>{
					let id = this.$route.params.id
					this.user = _.find(response.body,function(o){return id==o.id})
				})
			},
		}
	}
</script>

<style>
</style>
