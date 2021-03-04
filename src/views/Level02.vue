<template>
  <div class="body">
    <div class="centered-container">
      <div class="container-lg">
        <h1 class="text-white-50">Nivel 2</h1>
        <div class="container-text">
          <p class="text-white">Bien hecho torpe! Bueno, este es aún más fácil, solo da click en avanzar</p>
            <button class="btn-success is-craze" :style="buttonOffsets" v-on:click="avanzar" @mouseenter="moveButton">Avanzar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Level02",
  data: function (){
  return{
  buttonOffsets: {
    top: null,
    left: null,
      },
    }
  },
  methods:{
  avanzar: function (){
    localStorage.level02 = "clear";
    this.$router.push("/level03")
  },
    moveButton: function (){
    this.buttonOffsets = {
      top: `${Math.random()*window.innerHeight}px`,
      left: `${Math.random()*window.innerWidth}px`
    }
    }
},
  beforeMount() {
  if (localStorage.level01 !== "clear"){
    this.$router.push("/nicetry")
  }
  }
}
</script>

<style scoped>
.body{
  background-color: #2c3e50;
  min-height: 100vh;
}
.centered-container{
  display: block;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 10rem;
}
.container-lg{
  border: solid black;
  width: 30%;
  border-radius: 10px;
}
.is-craze{
  position: absolute;
  transition: 0.22s ease all;
}
</style>