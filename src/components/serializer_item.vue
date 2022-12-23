<template>
	<div class="item" @dblclick="editName">
		<input
			type="text"
			placeholder="nom du item"
			@keyup.enter="renameModel"
			v-model="nom"
			v-if="!item.name || edit">
		<h4 v-else>
			{{ item.name }}
		</h4>
	</div>
</template>

<script>
export default {
	props: ["item"],
  data(){
    return {
    }
  },
  methods:{
  }
}
</script>
<style scoped>
.item{
	padding: 10px;
	border-bottom: 1px solid lightgray;
	cursor: default;
}
.item:hover{
	background-color: #f0f0f0;
}
</style>