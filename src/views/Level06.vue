<template>
  <div class="body">
    <div class="centered-container">
      <div class="container-lg">
        <h1 class="text-white-50">Nivel 6</h1>
        <div class="container-text">
          <p class="text-white">Hermosa Koopa</p>
          <p class="text-secondary">De regreso a una muy fácil</p>
          <p class="text-secondary">Solo debes darle click al <a class="text-secondary" v-on:click="confirmar">botón verde</a> y nada más</p>
          <div class="input-group-sm d-block">
            <b-button class="btn-lg" v-on:click="fake"> <b-icon icon="arrow90deg-left" aria-hidden="true"></b-icon></b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Level06",
  methods:{
  fake: function (){
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  confirmar: function (){
      localStorage.level06 = "clear";
      this.$router.push("/level07")
  },
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
.d-block{
  padding-bottom: 1rem;
}
.btn-lg{
  background-color: #42b983;
}
</style>