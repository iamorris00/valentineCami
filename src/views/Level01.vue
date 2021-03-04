<template>
  <div class="body">
    <div class="centered-container">
      <div class="container-lg">
        <h1 class="text-white-50">Nivel 1</h1>
        <div class="container-text">
          <p class="text-white">Empecemos fácil, ¿Cuál es tu nombre?</p>
          <div class="input-group-sm d-flex">
            <input class="form-control p-1" placeholder="Nombre de la torpe" v-model="nombre">
            <button class="btn-success" v-on:click="confirmar">Confirmar</button>
          </div>
        </div>
        <div class="alert alert-danger" role="alert" v-if="error">
          {{message}}
          <button v-on:click="clear_error" class="error_but">x</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Level01",
  components:{},
  data: function (){
    return{
      nombre: "",
      error: false,
      message: "",
    }
  },
  methods:{
    confirmar: function (){
      if(this.nombre.toLowerCase().trim() === "torpe"){
        localStorage.level01="clear";
        this.$router.push("/level02");
      }
      if(this.nombre.toLowerCase().trim() == null || this.nombre.toLowerCase().trim() == "")
      {
        this.error = true
        this.message = "Escribe tu nombre torpe"
      }
      if(this.nombre.toLowerCase().trim() !== "torpe"){
        this.error =true
        this.message = "Segura ese es tu nombre TORPE?"
      }
    },
    clear_error: function (){
      this.error = false
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
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
}
.error_but{
  background-color: #F8D7DA;
  border: none;
  font-size: 12px;
  justify-self: center;
}
</style>