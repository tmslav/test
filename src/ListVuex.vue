<template>
	<list :users="users" :store='$store'></list>
</template>

<script>
	import Vue from 'vue'
	import Vres from 'vue-resource'
	import store from './store'
	import List from './List'
	Vue.use(Vres)
	Vue.component('list',List)

	export default {
		name: 'listvuex',
		data :function(){
			return {users:this.$store.state.users.users}
		}
	}
</script>

<style>
</style>
