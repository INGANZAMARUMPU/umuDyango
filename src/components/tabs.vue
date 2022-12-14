<template>
	<div class="parent">
		<router-link to="/" v-slot="{ href, navigate }">
			<a :href="href" @click="navigate">Model</a>
		</router-link>
		<router-link to="/admin" v-slot="{ href, navigate }">
			<a :href="href" @click="navigate">Admin</a>
		</router-link>
		<router-link to="/serializers" v-slot="{ href, navigate }">
			<a :href="href" @click="navigate">Serializer</a>
		</router-link>
		<router-link to="/viewsets" v-slot="{ href, navigate }">
			<a :href="href" @click="navigate">Views</a>
		</router-link>
	</div>
</template>
<script>
	
</script>
<style scoped>
.parent{
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-left: 1px solid grey;
	background-color: white;
}
.parent>a{
	writing-mode: vertical-rl;
	border: 1px solid grey;
	padding: 15px 5px;
	margin-left: -1px;
	border-radius: 0 15px 15px 0;
	background-color: white;
}
a{
	text-decoration: none;
}
.router-link-active{
	border-left: 0!important;
	background-color: #eee!important;
	font-weight: 700;
}
</style>