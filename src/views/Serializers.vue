<template>
  <div class="parent">
    <div class="body">
      <div class="fields">
        <div class="item"
          v-for="field in model.fields"
          :item="field">
          <h4
            @click="current_field=field">
            {{ item.name }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Field from "../components/serializer_item"
export default {
  components:{ Field },
  data(){
    return {
      model: this.$store.state.current_model,
      current_field:{},
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
.item{
  padding: 10px;
  border-bottom: 1px solid lightgray;
  cursor: default;
}
.item:hover{
  background-color: #f0f0f0;
}
</style>