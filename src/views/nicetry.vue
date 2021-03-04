<template>
  <div class="centered-container">
    <particles-bg type="thick" :bg="true"/>
    <h1 class="text-white-50 text-white">Buen intento torpe, pero asi no avanzarás</h1>
  </div>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
name: "nicetry",
  components:{
  ParticlesBg,
  }
}
</script>

<style scoped>

</style>