<template>
  <div id="QuemSomos">
    <NavbarPrinc />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12" id="quemSomos">
          <h1 class="quemSomosTitutlo">Quem Somos</h1>
        </div>
        <div class="col-12 Quem">
            <h1>ANG LESS GOLD <br> IMPORTAÇÃO &amp; EXPORTAÇÃO LDA</h1>
        </div>
        <BemVindoAngLess />
      </div>
    </div>
  </div>
</template>
<script>
import NavbarPrinc from "../components/NavbarPrinc";
import BemVindoAngLess from "../components/BemVindo-AngLess";
export default {
  name: "QuemSomos",
  components: {
    NavbarPrinc,
    BemVindoAngLess
  },
};
</script>
<style scoped>
h1 {
    text-align: left;
    margin-left: 4%;
}
#quemSomos {
  background-color: #8cb560;
  padding: 2%;
  margin-bottom: 3%;
}
.quemSomosTitutlo {
  margin-left: 4%;
  color: #fff;
  text-align: left;
}
</style>