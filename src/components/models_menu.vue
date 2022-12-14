<template>
	<div class="parent">
		<h3>Models</h3>
		<div class="body">
			<div style="padding: 10px;">
				<button @click="models.push({})">
					[+] Ajouter
				</button>
			</div>
			<div class="models">
				<Model v-for="model in models" :item="model"/>
			</div>
		</div>
		<button class="down">
			Telecharger le projet
		</button>
	</div>
</template>

<script>
import Model from "../components/model_item"
export default {
  components:{
  	Model
  },
  data(){
    return {
      models:this.$store.state.models
    }
  },
  watch:{
  	models(new_val){
  		this.$store.state.models = new_val
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
</style>