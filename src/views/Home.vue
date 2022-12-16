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
          @click="current_field=field"
          @delete="remove(field)"/>
      </div>
      <div class="properties" v-if="current_field">
        <div class="field">
          <h3>{{ Object.keys(current_field)[0] }}</h3>
          <select v-model="current_field_type">
            <option
              v-for="field, i in $store.state.fields"
              :value="Object.keys(field)[0]">
              {{ Object.keys(field)[0] }}
            </option>
          </select>
        </div>
        <div class="field" v-for="key in Object.keys(current_field_fields)">
          <label>{{ key }}</label>
          <select v-if="Array.isArray(current_field_fields[key])">
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
      current_field:null,
      current_field_type:""
    }
  },
  watch:{
    "$store.state.current_model"(new_val){
      this.model = new_val
    },
    current_field(new_val){
      let nom = Object.keys(new_val)
      this.current_field_type =  Object.keys(new_val[nom])[0]
    }
  },
  computed:{
    current_field_fields(){
      let fields = this.$store.state.fields
      for(let type of fields){
        if(Object.keys(type)[0] == this.current_field_type){
          return type[this.current_field_type]
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