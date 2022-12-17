<template>
  <div class="parent">
    <div class="btns">
      <button @click="createField">
        Ajouter un champ
      </button>
      <button @click="createMeta">
        [+] Meta contrainte
      </button>
    </div>
    <div class="body">
      <div class="fields">
        <Field
          v-for="field in model.fields"
          :item="field"
          @click="selected_field=field"
          @delete="remove(field)"/>
      </div>
      <div class="properties" v-if="selected_field">
        <div class="field">
          <h3>{{ selected_field_name }}</h3>
          <select v-model="current_field.type">
            <option
              v-for="field in $store.state.fields"
              :value="field.name">
              {{ field.name }}
            </option>
          </select>
        </div>
        <div class="field" v-for="key in Object.keys(current_field_fields)">
          <label>{{ key }}</label>
          <select
            v-model="current_field[key]"
            v-if="current_field_fields[key]">
            <option
              v-for="value in current_field_fields[key]"
              :value="value">
              {{ value }}
            </option>
          </select>
          <input
            v-model="current_field[key]"
            type="number" v-else-if="typeof(current_field_fields[key]) == 'number'"/>
          <select
            v-model="current_field[key]"
            v-else-if="key == 'choices'">
            <option
              v-for="value in 1"
              :value="value">
              not yet implemented
            </option>
          </select>
          <input
            v-model="current_field[key]"
            type="text" v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Field from "../components/model_field"
export default {
  components:{ Field },
  data(){
    return {
      model: this.$store.state.current_model,
      selected_field:null,
      selected_field_name:"",
      current_field:{}
    }
  },
  watch:{
    "$store.state.current_model"(new_val){
      this.model = new_val
    },
    selected_field(new_val){
      this.selected_field_name = Object.keys(new_val)[0]
      let current_field = this.selected_field[this.selected_field_name]
      for(let key of Object.keys(current_field)){
        this.current_field[key] = current_field[key]
      }
    },
    "current_field.type"(new_val){
      if(new_val != this.selected_field[this.selected_field_name].type){
        this.current_field = {
          type: new_val
        }
      }
    }
  },
  computed:{
    current_field_fields(){
      let fields = this.$store.state.fields
      for(let field of fields){
        if(field.name == this.current_field.type){
          return field.fields
        }
      }
      return {}
    }
  },
  methods:{
    remove(field){
    },
    createField(){
      if(!this.model.fields) this.model.fields = []
      this.model.fields.push({
        "champ":{}
      })
    },
    createMeta(){
    }
  },
}
</script>

<style scoped>
.btns>button{
  margin-right: 10px;
}
.body{
  display: flex;
  padding-top: 20px;
}
.fields{
  width: 200px;
  background-color: white;
  height: calc(100vh - 90px);
  overflow-y: scroll;
  margin-right: 20px;
}
.field{
  margin-bottom: 10px;
}
.field>*{
  display: block;
}
.field>input, .field>select{
  padding: 5px 10px;
  width: 200px;
}
</style>