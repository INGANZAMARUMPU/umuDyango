<template>
	<div class="parent">
		<div class="classes">
			<h3 @click="active='models'" :class="{'active': active=='models'}">
				Models
			</h3>
			<h3 @click="active='choices'" :class="{'active': active=='choices'}">
				Choices
			</h3>
		</div>
		<div class="body" v-if="active=='models'">
			<div style="padding: 10px;">
				<button @click="models.push({})">
					[+] Ajouter
				</button>
			</div>
			<div>
				<Model v-for="model in models" :item="model"/>
			</div>
		</div>
		<div class="body" v-else>
			<div style="padding: 10px;">
				<button @click="models.push({})">
					[+] Ajouter
				</button>
			</div>
			<div>
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
      models:this.$store.state.models,
      active: 'models'
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
.classes{
	text-align: center;
	background-color: lightgray;
	display: flex;
	padding: 15px 0 0 10px;
}
h3{
	border: 1px solid darkgray;
	border-bottom: 0;
	padding: 5px 10px;
	border-radius: 10px 10px 0 0;
	cursor: default;
}
h3.active{
	background-color: white;
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