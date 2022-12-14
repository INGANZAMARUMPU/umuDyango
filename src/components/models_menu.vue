<template>
	<div class="parent">
		<h3>Models</h3>
		<div class="body">
			<div style="margin: 10px;">
				<button @click="models.push({})">
					[+] Ajouter
				</button>
			</div>
			<div class="models">
				<div v-for="model in models" class="model">
					<h4 v-if="!!model.name">
						{{ model.name }}
					</h4>
					<input
						type="text"
						placeholder="nom du model"
						@change="e => renameModel(model, e.target.value)"
						v-else>
					<div class="btns">
						<div class="btn red">delete</div>
						<div class="btn blue">download</div>
					</div>
				</div>
			</div>
		</div>
		<button class="down">
			Telecharger le projet
		</button>
	</div>
</template>

<script>
export default {
  data(){
    return {
      models:this.$store.state.models,
    }
  },
  watch:{
  	models(new_val){
  		this.$store.state.models = new_val
  	}
  },
  methods:{
  	renameModel(model, val){
  		model.name = val.charAt(0).toUpperCase() + val.slice(1)
  	}
  }
}
</script>
<style scoped>
.parent{
	height: 100vh;
	width: 250px;
	background-color: white;
	display: flex;
	flex-direction: column;
}
h3{
	text-align: center;
	background-color: lightgray;
	padding: 10px 20px;
}
button{
	width: 100%;
}
.body{
	flex-grow: 1;
}
.down{
	background-color: steelblue;
	box-shadow: none;
}
.down:hover{
	background-color: royalblue;
}
.down:active{
	background-color: steelblue;
}
.model{
	padding: 10px;
	border-bottom: 1px solid lightgray;
}
.model:hover{
	background-color: #f0f0f0;
}
.model input{
	padding: 5px;
	width: 100%;
}
.model .btns{
	display: flex;
	justify-content: space-between;
	font-size: .8em;
}
.model .btn:hover{
	text-decoration: underline;
	cursor: default;
}
.model .btn{
	margin: 5px 0 0 0;
}
.red{
	color: red;
}
.blue{
	color: blue;
}
</style>