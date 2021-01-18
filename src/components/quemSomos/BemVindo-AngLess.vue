<template>
  <div id="BemVindo-AngLess">
    <div class="container-fluid BemVindo-LesGold">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12">
              <img src="@/assets/imgs/img30.jpg" alt="" class="img-fluid img" />
            </div>
            <div
              class="col-lg-8 col-xl-8 col-sm-12 col-md-12 TextoBemVindo"
            >
              <h2 class="TextoBemVindoH1" data-aos="zoom-in-down"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="1000">
                Bem-Vindo <br />
                À ANG LESS GOLD
              </h2>
              <div class="progress">
                <div
                  class="progress-bar ProgressCor1"
                  role="progressbar"
                  style="width: 100%"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="10"
                ></div>
              </div>
              <p class="TextoInicioP" data-aos="zoom-in-down"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="1200">
                A <b>ANG LESS GOLD</b> é uma empresa de direito Português,
                Contribuinte fiscal nº 515015253 com sede em estrada da Mendanha
                nº 25 Bloco 4 4c Parque norte, Carregado e Cadafais, conselho de
                Alenquer. Registada como pessoa coletiva 515015253 com número de
                identificação na segurança social 25150152535, cujo objetivo
                social e a prestação de serviço, comércio a grosso de bebidas,
                alimentaos, medicamentos, Importação e Exportação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BemVindo-AngLess",
  props: {
    margin: Text,
  },
};
</script>
<style scoped>
.BemVindo-LesGold {
  margin: 1% auto;
  -moz-margin: 1% auto;
  -ms-margin: 1% auto;
  -webkit-margin: 1% auto;
  padding: 5%;
  -moz-padding: 5%;
  -ms-padding: 5%;
  -webkit-padding: 5%;
}
.img {
  object-fit: contain;
  -moz-object-fit: contain;
  -ms-object-fit: contain;
  -webkit-object-fit: contain;
  box-shadow: 0px 0px 2px gray;
  -moz-box-shadow: 0px 0px 2px gray;
  -ms-box-shadow: 0px 0px 2px gray;
  -webkit-box-shadow: 0px 0px 2px gray;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -webkit-border-radius: 5px;
  width: 100%;
  -moz-width: 100%;
  -ms-width: 100%;
  -webkit-width: 100%;
  height: 100%;
  -moz-height: 100%;
  -ms-height: 100%;
  -webkit-height: 100%;
  margin-right: 15%;
  -moz-margin-right: 15%;
  -ms-margin-right: 15%;
  -webkit-margin-right: 15%;
}
.TextoBemVindo {
  margin-top: 1%;
  -moz-margin-top: 1%;
  -ms-margin-top: 1%;
  -webkit-margin-top: 1%;
  text-align: left;
  -moz-text-align: left;
  -ms-text-align: left;
  -webkit-text-align: left;
}
.TextoBemVindoH1 {
  font-family: "Josefin";
  -moz-font-family: "Josefin";
  -ms-font-family: "Josefin";
  -webkit-font-family: "Josefin";
  color: #707070;
  -moz-color: #707070;
  -ms-color: #707070;
  -webkit-color: #707070;
}
.ProgressCor1 {
  background-color: #8cb560 !important;
  -moz-background-color: #8cb560 !important;
  -ms-background-color: #8cb560 !important;
  -webkit-background-color: #8cb560 !important;
}
.progress {
  height: 5px;
  -moz-height: 5px;
  -ms-height: 5px;
  -webkit-height: 5px;
  width: 50px;
  -moz-width: 50px;
  -ms-width: 50px;
  -webkit-width: 50px;
}
.TextoInicioP {
  margin: 2% auto;
  -moz-margin: 2% auto;
  -ms-margin: 2% auto;
  -webkit-margin: 2% auto;
  color: #707070;
  -moz-color: #707070;
  -ms-color: #707070;
  -webkit-color: #707070;
  text-align: justify;
}
@font-face {
  font-family: "Josefin";
  src: local("Fonts"),
    url(../../assets/Fonts/josefin-sans.bold.ttf) format("truetype");
}

@font-face {
  font-family: "Gotham";
  src: local("Fonts"), url(../../assets/Fonts/GothamBold.otf) format("truetype");
}
</style>