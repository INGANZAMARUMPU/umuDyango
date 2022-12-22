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
    </div>
  </div>
</template>

<script>
import Field from "../components/serializer_menu"
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