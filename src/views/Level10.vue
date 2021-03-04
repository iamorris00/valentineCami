<template>
  <div class="body">
    <div class="centered-container">
      <div class="container-lg">
        <h1 class="text-white-50">Nivel 10</h1>
        <div class="container-text">
          <p class="text-white">Easy!</p>
          <p class="text-secondary">Lo has hecho bastante bien, pero está es muy díficil</p>
          <p class="text-secondary">Cuántos meses cumplimos hoy?</p>
          <div class="input-group-sm d-flex">
            <input class="form-control p-1" placeholder="Contraseña" v-model="contra">
            <button class="btn-success" v-on:click="confirmar">Confirmar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Level10",
  data: function (){
    return{
      contra: ""
    }
  },
  methods: {
    confirmar: function (){
      if (this.contra.toLowerCase().trim() === "21"){
        localStorage.level10 = "clear";
        this.$router.push('/amor');
      }
    }
  },
  beforeMount() {
    if (localStorage.level09 !== "clear"){
      this.$router.push('/nicetry')
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
.d-flex{
  padding-bottom: 1rem;
}
</style>