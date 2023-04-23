<template>
	<div class="item" @dblclick="editName"
	:class="{'active':$store.state.current_model?.name==item?.name}">
		<input
			type="text"
			placeholder="nom du item"
			@keyup.enter="renameModel"
			v-model="nom"
			v-if="!item.name || edit">
		<h4 v-else>
			{{ item.name }}
		</h4>
		<div class="btns">
			<span class="btn red" @click="shift">
				delete
			</span>
			<div class="btn blue">
				download
			</div>
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
  	renameModel(){
  		this.item.name = ""
  		this.nom = this.nom.replace("-", " ")
  		this.nom = this.nom.replace("-", " ")
  		for(let x of this.nom.split(" ")){
  			this.item.name += x.charAt(0).toUpperCase() + x.slice(1)
  		}
  		this.edit = false
  	},
  	editName(){
  		this.nom = this.item.name
  		this.edit=true
  	},
  	shift(){
  		this.$emit("delete")
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
.btns{
	display: flex;
	justify-content: space-between;
	font-size: .8em;
}
.btn:hover{
	text-decoration: underline;
	cursor: default;
}
.btn{
	margin: 5px 0 0 0;
}
.red{
	color: red;
}
.blue{
	color: blue;
}
.active{
	background-color: #eee;
}
</style>