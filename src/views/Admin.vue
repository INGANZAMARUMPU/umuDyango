<template>
  <div class="parent">
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
          <input
          type="checkbox" id="list_display" 
          v-model="list_display" name="">
          <label for="list_display">Displayed in table</label>
        </div>
        <div class="field">
          <input
          type="checkbox" id="list_editable" 
          v-model="list_editable" name="">
          <label for="list_editable">Editable in table</label>
        </div>
        <div class="field">
          <input
          type="checkbox" id="list_totals" 
          v-model="list_totals" name="">
          <label for="list_totals">Show Column totals</label>
          <div class="sub" v-if="list_totals">
            <div class="field">
              <input
              type="radio" id="avg" value="avg" 
              v-model="list_totals_variable" name="">
              <label for="avg">Average</label>
            </div>
            <div class="field">
              <input
              type="radio" id="sum" value="sum"
              v-model="list_totals_variable" name="">
              <label for="sum">Use Sum</label>
            </div>
          </div>
        </div>
        <div class="field">
          <input
          type="checkbox" id="list_filter" 
          v-model="list_filter" name="">
          <label for="list_filter">Filterable</label>
          <div class="sub" v-if="list_filter">
            <input
            type="checkbox" id="range_filter" 
            v-model="range_filter" name="">
            <label for="range_filter">Use DateRangeFilter</label>
          </div>
        </div>
        <div class="field">
          <input
          type="checkbox" id="search_fields" 
          v-model="search_fields" name="">
          <label for="search_fields">Searchable field</label>
        </div>
        {{ current_field }}
      </div>
    </div>
  </div>
</template>

<script>
import Field from "../components/admin_field"
export default {
  components:{ Field },
  data(){
    return {
      model: this.$store.state.current_model,
      current_field:{},
      list_display: false,
      list_editable: false,
      list_totals: false,
      list_filter: false,
      search_fields: false,
      list_totals_variable: "",
      range_filter: false,
    }
  },
  watch:{
    "$store.state.current_model"(new_val){
      this.model = new_val
    },
  },
  computed:{
  },
  methods:{
  },
}
</script>

<style scoped>
.btns>button{
  margin-right: 10px;
}
.body{
  display: flex;
  padding-top: 55px;
}
.fields{
  width: 200px;
  background-color: white;
  height: calc(100vh - 90px);
  overflow-y: scroll;
  margin-right: 20px;
}
.field{
  padding-bottom: 10px;
}
input[type=checkbox], input[type=radio]{
  margin-right: 10px;
}
.sub{
  margin: 10px 0 0 20px;
}
</style>