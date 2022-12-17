<template>
	<div class="item" @dblclick="editName">
		<input
			type="text"
			placeholder="nom du item"
			@keyup.enter="renameField"
			v-model="nom"
			v-if="Object.keys(item).length==0 || edit">
		<h4 v-else>
			{{ Object.keys(item)[0] }}
		</h4>
		<div class="right">
			<span class="btn red">delete</span>
		</div>
	</div>
</template>

<script>
export default {
	props: ["item"],
  data(){
    return {
      edit: false,
      nom:"",
    }
  },
  methods:{
  	renameField(){
  		this.item.name = ""
  		this.nom = this.nom.replace("-", " ")
  		for(let x of this.nom.split(" ")){
  			this.item.name += x.charAt(0).toUpperCase() + x.slice(1)
  		}
  		this.edit = false
  	},
  	editName(){
  		this.nom = this.item.name
  		this.edit=true
  	}
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
 input{
	padding: 5px;
	width: 100%;
}
.btn{
	font-size: .8em;
}
.btn:hover{
	text-decoration: underline;
	cursor: default;
}
.red{
	color: red;
}
.right{
	display: flex;
	justify-content: flex-end;
	height: 15px;
}
.right>span{
	display: none;
}
.item:hover .right>span{
	display: block;
}
</style>