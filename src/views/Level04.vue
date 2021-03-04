<template>
  <div class="body">
    <div class="centered-container">
      <div class="container-lg">
        <h1 class="text-white-50">Nivel 4</h1>
        <div class="container-text">
          <p class="text-white">Toda una matematica :3</p>
          <p class="text-secondary">Veamos que piensas de esto!</p>
          <p class="text-secondary">00111001 00110101 00110000 00110100 00110001 00110101</p>
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
name: "Level04",
  data: function (){
  return {
    contra:"",
    message: "",
    error: false,
  }
  },
  methods:{
  confirmar: function (){
    if(this.contra.toLowerCase().trim() === "950415"){
      localStorage.level04 = "clear";
      this.$router.push("/level05")
    } else {
      this.error = true
      this.message = "Bueno, quizá no somos tan buenos con ciertos tipos de códigos..."
    }
  },
    clear_error: function (){
      this.error = false
    }
  },
  beforeMount() {
  if (localStorage.level03 !== "clear"){
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
.error_but{
  background-color: #F8D7DA;
  border: none;
  font-size: 12px;
  justify-self: center;
}
</style>