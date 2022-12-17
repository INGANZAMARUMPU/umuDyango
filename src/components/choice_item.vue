<template>
	<div class="item">
		<input
			type="text"
			placeholder="Nom du Choice"
			@keyup.enter="renameChoice"
			v-model="nom"
			v-if="!item.name || edit">
		<h4 @dblclick="editName" v-else>
			{{ item.name }}
		</h4>
		<div class="field">
			<label>Type</label>
			<select>
				<option>IntegerChoices</option>
				<option>CharChoices</option>
			</select>
		</div>
		<div
			v-for="key in Object.keys(item.fields)">
			<h4
				v-if="edit_field!=key"
				@dblclick="editKey(key)">
				{{ key }} = {{ item.fields[key] }}
			</h4>
			<div class="pair" v-if="edit_field==key">
				<input
					type="" name="" placeholder="key"
					v-model="new_key"
					@keyup.enter="changeField">
				<input
					type="" name="" placeholder="value"
					v-model="new_value"
					@keyup.enter="changeField">
				<button @click="delete(item.fields[key])">
					&times
				</button>
			</div>
		</div>
		<div class="btns">
			<span class="btn red"
				@click="shift">
				delete
			</span>
			<div
				@click="createField"
				class="btn blue">
				new
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
      edit_field: null,
      nom:"",
      new_key:"",
      new_value:""
    }
  },
  methods:{
  	renameChoice(){
  		this.nom = this.nom.replace("-", " ")
  		this.nom = this.nom.replace(" ", "_")
  		this.item.name = this.nom.toUpperCase()
  		this.edit = false
  	},
  	editName(){
  		this.nom = this.item.name
  		this.edit=true
  	},
  	createField(){
  		this.item.fields["key"] = ""
  		this.edit_field = "key"
      this.new_key = "",
      this.new_value = ""
  	},
  	changeField(){
  		delete(this.item.fields[this.edit_field])
  		this.item.fields[this.new_key.toUpperCase()] = this.new_value
  		this.edit_field = null
  	},
  	editKey(key){
  		this.edit_field = key
      this.new_key = key,
      this.new_value = this.item.fields[key]
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
	margin: 10px;
	border: 1px solid lightgray;
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
.pair{
	display: flex;
	margin: 5px 0;
}
.field{
	margin: 10px 0;
}
.field>*{
	display: flex;
}
select{
	width: 100%;
	padding: 5px 10px;
}
.pair>*{
	padding: 5px 10px;
}
</style>