<template>
    <div class="centered-container">
      <particles-bg type="lines" :bg="true"/>
      <h1 class="text-white-50">Bienvenida torpe, a esta caza del tesoro<br/>el objetivo de esta caza
      es utilizar tu imaginación<br/>para resolver los acertijos y avanzar en los niveles.<br/>Hay 10 acertijos, pueden estar
      o no relacionados<br/>con lugares en la vida real buena suerte.</h1>
      <button type="button" class="btn-primary btn-lg" v-on:click="Level01"> Empezar!</button>
    </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { ParticlesBg } from "particles-bg-vue";
export default {
  name: 'Intro',
  components: {
    ParticlesBg,
  },
  methods:{
    Level01: function (){
      this.$router.push("/Level01")
    }
  }
}
</script>

<style lang="scss">

.centered-container {
  padding-top: 10rem;
  display: block;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
}
</style>
