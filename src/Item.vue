<template>
	<div>
		<router-link :to="{name:'list'}">Back</router-link>
		<form>
			<label>User ID:</label><input type="text" :value="$route.params.id" v-model='input1'/>
			<label>Username</label><input type="text" v-model="username"/>
		</form>
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
			return {input1:this.$route.params.id,user:{},}
		},
		created(){
			this.loadUsers()
		},
		computed:{
			username:function(val){
				return this.user.username
			}
		},
		methods:{
			loadUsers:function(){
				let id = this.$route.params.id
				this.$http.get("/static/users.json").then((response)=>{
					this.user = _.find(response.body,function(o){return id==o.id})
				})
			},

		}
	}
</script>

<style>
</style>
