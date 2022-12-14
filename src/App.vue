<template>
  <ModelsMenu/>
  <div class="router-view">
    <router-view/>
  </div>
  <Tabs/>
</template>
<script>
import ModelsMenu from "./components/models_menu"
import Tabs from "./components/tabs"
export default {
  components:{
    ModelsMenu,
    Tabs
  }
}
</script>
<style src="./style.css">
</style>
