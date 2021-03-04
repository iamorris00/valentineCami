<template>
  <div class="body">
    <div class="centered-container">
      <div class="container-lg">
        <h1 class="text-white-50">Nivel 5</h1>
        <div class="container-text">
          <p class="text-white">Que binaria eres...</p>
          <p class="text-secondary">Momento de mover las piernas</p>
          <p class="text-secondary">A veces hacer visitas cae bien, y puede que Koopa la requiera en su casa...</p>
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
  name: "Level05",
  data: function () {
    return {
      contra: "",
    }
  },
  methods: {
    confirmar: function (){
      if(this.contra.toLowerCase().trim() === "k123"){
        localStorage.level05 = 'clear';
        this.$router.push('/level06')
      }
    }
  },
  beforeMount() {
    if (localStorage.level04 !== "clear") {
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