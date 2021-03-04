<template>
  <div class="centered-container">
    <particles-bg type="thick" :bg="true"/>
    <h1 class="text-white font-weight-bolder">Cami, gracias por jugar, no soy muy bueno haciendo este tipo de cosas
      pero lo<br/>hago con mucho amor si? No soy el mejor en este tipo de fechas, lo sé,
      <br/>pero lo quiero intentar, de alguna manera, todo puede mejorar<br/>Felices 21 meses junto a este torpe idiota. Te amo!!
    <br/> Ah y ganaste unos doritos con cocacola :3</h1>
  </div>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
  name: "Amor",
  components: {
    ParticlesBg,
  },
}
</script>

<style scoped>
.centered-container {
  padding-top: 10rem;
  display: block;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
}

</style>