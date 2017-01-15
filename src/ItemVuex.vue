<template>
	<div>
		<router-link :to="{name:'listvuex'}">Back</router-link>
		<form>
			<label>User ID:</label><input type="text" v-model="$route.params.id"/>
			<label>Username</label><input type="text"  :value="user.username" @input="update"/>
		</form>
		<button v-on:click="deleteRecord" :id="$route.params.id">Delete</button>
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
		mounted(){
			let id = this.$route.params.id
			this.user = _.find(this.$store.state.users.users,function(o){return id==o.id})

		},
		methods:{
			update:function(e){
				e.target.id = this.$route.params.id
				this.$store.commit('updateUser',e)
			},
			deleteRecord:function(e){
				this.$router.push("/listvuex")
				this.$store.commit('deleteUser',e)
			}
		}
	}
</script>

<style>
</style>
