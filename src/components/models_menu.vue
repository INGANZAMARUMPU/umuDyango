<template>
  <div class="parent">
    <button>
      Nouveau model
    </button>
    <div class="models">
      <Model v-for="model in models"/>
    </div>
    <button>
      Telecharger le projet
    </button>
  </div>
</template>

<script>
import Model from "./model_item"
export default {
  components: {
    Model
  },
  data(){
    return {
      models:[]
    }
  }
}
</script>
<style scoped>
	
</style>