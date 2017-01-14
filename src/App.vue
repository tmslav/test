<template>
	<div>
		<hello></hello>
		<graph></graph>
		<graph :area='this.is_area'></graph>
		<router-view class="view"></router-view>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Hello from './components/Hello'
	import Graph from './components/Graph'
	export default {
		name: 'app',
		components: {
			Hello,Graph
		},
		methods:{
			is_area:function(){
				return True
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
