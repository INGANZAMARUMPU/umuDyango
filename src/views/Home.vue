<template>
  <div class="parent">
    <div class="btns">
      <button>Ajouter un champ</button>
      <button>Ajouter une contrainte</button>
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
          <select v-if="current_field_fields[key]">
            <option
              v-for="value in current_field_fields[key]"
              :value="value">
              {{ value }}
            </option>
          </select>
          <input type="number" v-else-if="typeof(current_field_fields[key]) == 'number'"/>
          <select v-else-if="key == 'choices'">
            <option
              v-for="value in 1"
              :value="value">
              not yet implemented
            </option>
          </select>
          <input type="text" v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Field from "../components/field"
export default {
  components:{ Field },
  data(){
    return {
      model: this.$store.state.current_model,
      selected_field:null,
      selected_field_name:"",
      current_field:{
        type:""
      }
    }
  },
  watch:{
    "$store.state.current_model"(new_val){
      this.model = new_val
    },
    selected_field(new_val){
      this.selected_field_name = Object.keys(new_val)[0]
      this.current_field.type = this.selected_field[this.selected_field_name].type
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