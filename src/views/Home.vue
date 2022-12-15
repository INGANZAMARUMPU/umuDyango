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
      <div class="properties">
        <div class="field">
          <label></label>
          <input type="text" />
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
      current_field:null
    }
  },
  watch:{
    "$store.state.current_model"(new_val){
      this.model = new_val
    }
  },
  methods:{
    remove(field){

    }
  }
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
</style>