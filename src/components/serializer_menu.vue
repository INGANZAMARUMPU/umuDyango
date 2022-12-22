<template>
	<div class="parent">
		<div class="body" v-if="active=='models'">
			<div style="padding: 10px;">
				<button @click="models.push({})">
					[+] Ajouter
				</button>
			</div>
			<div>
				<Model
					v-for="model, i in models"
					:item="model"
					@delete="models.splice(i, 1)"
					@click="$store.state.current_model=model"/>
			</div>
		</div>
		<div class="body" v-else>
			<Serializer
				v-for="choice, i in choices"
				:item="choice"
				@delete="choices.splice(i, 1)"/>
			<button @click="choices.push({fields:{}})">
				[+] Ajouter
			</button>
		</div>
		<button class="down">
			Telecharger le projet
		</button>
	</div>
</template>

<script>
import Serializer from "../components/serializer_item"

export default {
  components:{
  	Serializer
  },
  data(){
    return {
    }
  },
  watch:{
  	models(new_val){
  		this.$store.state.models = new_val
  	},
  	choices(new_val){
  		this.$store.state.choices = new_val
  	}
  },
  mounted(){
    this.$store.state.current_model = this.$store.state.models[0]
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
h3.active{
	background-color: white;
}
button{
	width: 100%;
}
.body{
	flex-grow: 1;
	max-height: calc(100% - 90px);
	overflow-y: auto;
	margin-bottom: 10px;
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