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
    {{ temp_field }}
    <div class="body">
      <div class="fields">
        <Field
          v-for="field in model.fields"
          :item="field"
          @click="temp_field=field"
          @delete="remove(field)"/>
      </div>
      <div class="properties" v-if="temp_field">
        <div class="field">
          <h3>{{ temp_field.name }}</h3>
          <select v-model="current_field.fields.type">
            <option
              v-for="field in $store.state.fields"
              :value="field.name">
              {{ field.name }}
            </option>
          </select>
        </div>
        <div class="field" v-for="key in Object.keys(current_field.fields)">
          <label>{{ key }} ({{ current_field.fields[key] }})</label>
          <select
            v-model="current_field.fields[key]"
            v-if="current_field.fields[key]">
            <option
              v-for="value in current_field.fields[key]"
              :value="value">
              {{ value }}
            </option>
          </select>
          <input
            v-model="current_field.fields[key]"
            type="number" v-else-if="typeof(current_field.fields[key]) == 'number'"/>
          <select
            v-model="current_field.fields[key]"
            v-else-if="key == 'choices'">
            <option
              v-for="value in 1"
              :value="value">
              not yet implemented
            </option>
          </select>
          <input
            v-model="current_field.fields[key]"
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
      temp_field:null,
      current_field:{}
    }
  },
  watch:{
    "$store.state.current_model"(new_val){
      this.model = new_val
    },
    temp_field(new_val){
      this.current_field = JSON.parse(
        JSON.stringify(this.temp_field)
      )
    },
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