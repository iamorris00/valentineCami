<template>
  <div class="body">
    <div class="centered-container">
      <div class="container-lg">
        <h1 class="text-white-50">Nivel 3</h1>
        <div class="container-text">
          <p class="text-white">Vaya, parece que eres bastante rápida o astuta eh</p>
          <p class="text-secondary">Vayamos con unas matemáticas fáciles</p>
          <p class="text-secondary">1=5<br/>2=10<br/>3=15<br/>4=20<br/>5=?</p>
          <div class="input-group-sm d-flex">
            <input class="form-control p-1" placeholder="Contraseña" v-model="contra">
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
name: "Level03",
  data: function() {
    return {
      contra: "",
      message: "",
      error: false,
    }
  },
  methods:{
  confirmar: function (){
    if(this.contra.toLowerCase().trim() === "1"){
      localStorage.level03 = "clear";
      this.$router.push("/level04")
    }
    if(this.contra.toLowerCase().trim() !== "1"){
      this.error =true
      this.message = "Sabes, creo que así no funciona la igualdad..."
    }
  },
    clear_error: function (){
      this.error = false
    }
  },
  beforeMount() {
    if (localStorage.level02 !== "clear"){
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
.d-flex{
  padding-bottom: 1rem;
}
.error_but{
  background-color: #F8D7DA;
  border: none;
  font-size: 12px;
  justify-self: center;
}
</style>