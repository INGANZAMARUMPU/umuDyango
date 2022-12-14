<template>
	<div class="parent">
		<h3>Models</h3>
		<div class="body">
			<button>
				[+] Ajouter
			</button>
			<div class="models">
				<Model v-for="model in models"/>
			</div>
		</div>
		<button class="down">
			Telecharger le projet
		</button>
	</div>
</template>

<script>
import Model from "./model_item"
export default {
  components: {
    Model
  },
  data(){
    return {
      models:[]
    }
  }
}
</script>
<style scoped>
.parent{
	height: 100vh;
	max-width: 250px;
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
	padding: 10px;
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