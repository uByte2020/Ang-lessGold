<template>
  <div id="QuemSomos">
    <NavbarPrinc />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12" id="quemSomos">
          <h1 class="quemSomosTitutlo">Quem Somos</h1>
        </div>
        <div class="col-12 TituloAngLess">
          <h1>
            ANG LESS GOLD <br />
            IMPORTAÇÃO &amp; EXPORTAÇÃO LDA
          </h1>
        </div>
        <div class="BemVCompenent">
          <BemVindoAngLess />
        </div>
        <!-- <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          style="color:green; background-color:green;height:"
        ></div> -->
        <div class="col-12">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-xl-6 col-sm-12">Texto</div>

            <div class="col-lg-6 col-md-12 col-xl-6 col-sm-12">Texto</div>

            <div class="col-lg-12 col-md-12 col-xl-6 col-sm-12">
              Texto
              <div class="row justify-content-md-center">
                <div class="col-lg-4 col-md-4 col-xl-4 col-sm-12">Texto</div>
                <div class="col-lg-4 col-md-4 col-xl-4 col-sm-12">Texto</div>
                <div class="col-lg-4 col-md-4 col-xl-4 col-sm-12">Texto</div>
              </div>
            </div>
          </div>
        </div>
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
    BemVindoAngLess,
  },
};
</script>
<style scoped>
h1 {
  text-align: left;
  margin-left: 6%;
}
.BemVCompenent {
  margin: auto 3% !important;
}
.TituloAngLess {
  font-family: "Gotham";
  color: #707070;

  /* margin-left: 2%; */
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
@font-face {
  font-family: "Gotham";
  src: local("Fonts"), url(../assets/Fonts/GothamBold.otf) format("truetype");
}
</style>