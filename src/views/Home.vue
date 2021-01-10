<template>
  <div id="Home">
    <NavbarPrinc :backgroundColor="'transparent'" :navbarClass="'navbar-home'" :logoImg="'home'" :navItemClass="'home'"/>
    <div id="home" class="container-fluid">
      <div class="row">
        <div class="Inicio col-12">
          <div class="row TextoInicio">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-xl-8 col-sm-12 col-md-12">
                  <h1 class="TextoInicioH1">
                    Importação e Exportação de Bens Alimentares e Medicamentos
                  </h1>
                  <p class="TextoInicioP">
                    Soluções que permite a satisfação dos nossos clientes e
                    parceiros com maior qualidade e segurança naquilo que são as
                    diversas necessidades de bens alimentares
                  </p>
                  <button type="button" class="btn btn-lg">Saiba Mais</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-lg-12 col-md-11 col-xl-9 col-sm-11" id="BemVindo-LesGold">
          <BemVindoAngLess />
        </div> -->
        <div class="col-lg-12 col-md-10 col-xl-10 col-sm-12">
          <div class="row justify-content-md-center" id="BemVindo-LesGold">
            <div class="col-lg-5 col-xl-5 col-sm-12 col-md-12 imgof">
              <img src="@/assets/imgs/img30.jpg" alt="" class="img-fluid img" />
            </div>
            <div class="col-lg-7 col-xl-7 col-sm-12 col-md-12 TextoBemVindo">
              <h2 class="TextoBemVindoH1">
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
              <p class="TextoInicioAng">
                A <b>ANG LESS GOLD</b> é uma empresa de direito Português,
                Contribuinte fiscal nº 515015253 com sede em estrada da Mendanha
                nº 25 Bloco 4 4c Parque norte, Carregado e Cadafais, conselho de
                Alenquer. Registada como pessoa coletiva 515015253 com número de
                identificação na segurança social 25150152535, cujo objetivo
                social e a prestação de serviço, comércio a grosso de bebidas,
                alimentaos, medicamentos, Importação e Exportação.
              </p>
              <button type="button" class="btn btn-lg">Saiba Mais</button>
            </div>
          </div>
        </div>
        <div class="col-12" id="OQFazemosPrinc">
          <div class="row">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-xl-6 col-sm-12 col-md-8 OQFazemos">
                  <div class="col-lg-9 col-xl-9 col-sm-12 col-md-9">
                    <h3>O que fazemos</h3>
                    <div class="progress">
                      <div
                        class="progress-bar ProgressCor2"
                        role="progressbar"
                        style="width: 100%"
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="10"
                      ></div>
                    </div>
                  </div>
                  <div class="col-lg-8 col-xl-10 col-sm-12 col-md-8">
                    <p>
                      Operamos com importações e exportações diversas como,
                      Alimentos, Bebidas e Medicamentos, entre outros, na venda
                      por encomenda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12" id="EscolherNosPrinc">
          <div class="row justify-content-md-center" id="EscolherNos">
            <div
              class="col-lg-12 col-xl-12 col-sm-12 col-md-12 TextoEscolherNosTituloPrinc"
            >
              <h2>Porque Escolher-nos</h2>
            </div>
            <div class="col-lg-7 col-xl-3 col-sm-8 col-md-7 TextoEscolherNos">
              <div class="col-12">
                <img
                  src="../assets/svg/Responsabilidadesocial.svg"
                  alt="Responsabilidade Social"
                  class="icon"
                />
              </div>
              <h4 class="TextoEscolherNosTitulo">Responsabilidade Social</h4>
              <p class="TextoEscolherNosTxt">
                Estamos há anos no mercado prestando serviço de importação e
                exportação
              </p>
            </div>
            <div class="col-lg-7 col-xl-3 col-sm-8 col-md-7 TextoEscolherNos">
              <div class="col-12">
                <img
                  src="../assets/svg/Comprometimento.svg"
                  alt="Comprometimento com o cliente"
                  class="icon"
                />
              </div>
              <h4 class="TextoEscolherNosTitulo">
                Comprometimento com o Cliente
              </h4>
              <p class="TextoEscolherNosTxt2">
                Procuramos sempre os melhores resultados para os nossos
                clientes.
              </p>
            </div>
            <div class="col-lg-7 col-xl-3 col-sm-8 col-md-7 TextoEscolherNos">
              <div class="col-12">
                <img
                  src="../assets/svg/Qualidadeproduto.svg"
                  alt="Qualidade do produto"
                  class="icon"
                />
              </div>
              <h4 class="TextoEscolherNosTitulo">Qualidade do Produto</h4>
              <p class="TextoEscolherNosTxt3">
                Fornecemos sempre os melhores produtos.
              </p>
            </div>
          </div>
        </div>
        <Produtos />

        <RecebaNovidades />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "../components/Footer.vue";
import NavbarPrinc from "../components/NavbarPrinc.vue";
import Produtos from "../components/home/Produtos";
// import BemVindoAngLess from "../components/BemVindo-AngLess";
import RecebaNovidades from "../components/RecebaNovidades";

export default {
  name: "Home",
  components: {
    NavbarPrinc,
    Produtos,
    // BemVindoAngLess,
    RecebaNovidades,
    Footer,
  },
  data() {
    return {
      // backgroundimg:[require("@/assets/imgs/img7.jpg"),require("@/assets/imgs/img9.jpg"),]
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Josefin";
  src: local("Fonts"),
    url(../assets/Fonts/josefin-sans.bold.ttf) format("truetype");
}
@font-face {
  font-family: "Josefin-SemiBold";
  src: local("Fonts"),
    url(../assets/Fonts/josefin-sans.semibold.ttf) format("truetype");
}
@font-face {
  font-family: "Gotham";
  src: local("Fonts"), url(../assets/Fonts/GothamBold.otf) format("truetype");
}
@font-face {
  font-family: "Segoe";
  src: local("Fonts"), url(../assets/Fonts/Segoe_UI.ttf) format("truetype");
}
#Home {
}
.Inicio {
  padding: 5%;
  -moz-padding: 5%;
  -ms-padding: 5%;
  -webkit-padding: 5%;
  position: relative;
  -moz-position: relative;
  -ms-position: relative;
  -webkit-position: relative;
  height: 90vh;
}
.Inicio::before {
  content: "";
  -moz-content: "";
  -ms-content: "";
  -webkit-content: "";
  position: absolute;
  -moz-position: absolute;
  -ms-position: absolute;
  -webkit-position: absolute;
  width: 100%;
  -moz-width: 100%;
  -ms-width: 100%;
  -webkit-width: 100%;
  height: 100%;
  -moz-height: 100%;
  -ms-height: 100%;
  -webkit-height: 100%;
  top: 0px;
  -moz-top: 0px;
  -ms-top: 0px;
  -webkit-top: 0px;
  left: 0px;
  -moz-left: 0px;
  -ms-left: 0px;
  -webkit-left: 0px;
  background: url("../assets/imgs/img31.jpg") no-repeat center center;
  -moz-background: url("../assets/imgs/img31.jpg") no-repeat center center;
  -ms-background: url("../assets/imgs/img31.jpg") no-repeat center center;
  -webkit-background: url("../assets/imgs/img31.jpg") no-repeat center center;
  background-size: cover;
  -moz-background-size: cover;
  -ms-background-size: cover;
  -webkit-background-size: cover;
  z-index: -1;
  -moz-z-index: -1;
  -ms-z-index: -1;
  -webkit-z-index: -1;
  filter: grayscale(50%) brightness(30%) !important;
  -moz-filter: grayscale(50%) brightness(30%) !important;
  -ms-filter: grayscale(50%) brightness(30%) !important;
  -webkit-filter: grayscale(50%) brightness(30%) !important;
}
.TextoInicio {
  margin-top: 15%;
  -moz-margin-top: 15%;
  -ms-margin-top: 15%;
  -webkit-margin-top: 15%;
  text-align: left;
  -moz-text-align: left;
  -ms-text-align: left;
  -webkit-text-align: left;
  color: #fff;
  -moz-color: #fff;
  -ms-color: #fff;
  -webkit-color: #fff;
  font-family: "Gotham";
  -moz-font-family: "Gotham";
  -ms-font-family: "Gotham";
  -webkit-font-family: "Gotham";
  /* backdrop-filter: blur(5px); */
}
.TextoInicioH1 {
  /* font-size: 100%; */
}
.TextoInicioP {
  margin: 5% auto;
  -moz-margin: 5% auto;
  -ms-margin: 5% auto;
  -webkit-margin: 5% auto;
  width: 100%;
  font-size: 19px;
  color: #70707070;
}

#BemVindo-LesGold {
  margin: 1% auto !important;
  -moz-margin: 1% auto;
  -ms-margin: 1% auto;
  -webkit-margin: 1% auto;
  padding: 5%;
  -moz-padding: 5%;
  -ms-padding: 5%;
  -webkit-padding: 5%;
  /* margin-left: 10%!important; */
}
/* .imgof{
  position: relative;
  box-shadow: 0px 0px 6px 4px gray;
  -moz-box-shadow: 0px 0px 6px 4px gray;
  -ms-box-shadow: 0px 0px 6px 4px gray;
  -webkit-box-shadow: 0px 0px 6px 4px gray;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -webkit-border-radius: 5px;
  width: 150px;
  -moz-width: 100%;
  -ms-width: 100%;
  -webkit-width: 100%;
  height: 300px;
  -moz-height: 100%;
  -ms-height: 100%;
  -webkit-height: 100%;
   margin-right: 15%;	 
}
.imgof::before{
} */
.progressLargura {
  width: 100% !important;
  /* margin-top: 20px!important; */
}
.img {
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
  height: auto;
  -moz-height: auto;
  -ms-height: auto;
  -webkit-height: auto;
  /* margin-right: 15%; */
  margin-top: 4%;
  object-fit: contain;
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
button {
  background-color: #8cb560;
  -moz-background-color: #8cb560;
  -ms-background-color: #8cb560;
  -webkit-background-color: #8cb560;
  color: #fff;
  -moz-color: #fff;
  -ms-color: #fff;
  -webkit-color: #fff;
}
button:hover {
  background-color: #f8ce00!important;
  -moz-background-color: #f8ce00!important;
  -ms-background-color: #f8ce00!important;
  -webkit-background-color: #f8ce00!important;
  color: #ffffff !important;
  -moz-color: #ffffff !important;
  -ms-color: #ffffff!important;
  -webkit-color: #ffffff !important;
}

.TextoInicioP {
  margin: 5% auto;
  -moz-margin: 2% auto;
  -ms-margin: 2% auto;
  -webkit-margin: 2% auto;
  color: #ffff;
  -moz-color: #ffff;
  -ms-color: #ffff;
  -webkit-color: #ffff;
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
.progressCor {
  background-color: #f8ce00 !important;
  -moz-background-color: #f8ce00 !important;
  -ms-background-color: #f8ce00 !important;
  -webkit-background-color: #f8ce00 !important;
}
.progress2 {
  height: 5px;
  -moz-height: 5px;
  -ms-height: 5px;
  -webkit-height: 5px;
  width: 30px;
  -moz-width: 30px;
  -ms-width: 30px;
  -webkit-width: 30px;
  margin-bottom: 3%;
  -moz-margin-bottom: 3%;
  -ms-margin-bottom: 3%;
  -webkit-margin-bottom: 3%;
}
.ProgressCor2 {
  background-color: #8cb560 !important;
  -moz-background-color: #8cb560 !important;
  -ms-background-color: #8cb560 !important;
  -webkit-background-color: #8cb560 !important;
}
#OQFazemosPrinc {
  margin-bottom: 0.5%;
  -moz-margin-bottom: 0.5%;
  -ms-margin-bottom: 0.5%;
  -webkit-margin-bottom: 0.5%;
  /* box-shadow: 1px -1px 5px black;
  -moz-box-shadow: 1px -1px 5px black;
  -ms-box-shadow: 1px -1px 5px black;
  -webkit-box-shadow: 1px -1px 5px black; */
  padding: 8%;
  -moz-padding: 8%;
  -ms-padding: 8%;
  -webkit-padding: 8%;
  position: relative;
  -moz-position: relative;
  -ms-position: relative;
  -webkit-position: relative;
}
#OQFazemosPrinc::before {
  content: "";
  -moz-content: "";
  -ms-content: "";
  -webkit-content: "";
  position: absolute;
  -moz-position: absolute;
  -ms-position: absolute;
  -webkit-position: absolute;
  width: 100%;
  -moz-width: 100%;
  -ms-width: 100%;
  -webkit-width: 100%;
  height: 100%;
  -moz-height: 100%;
  -ms-height: 100%;
  -webkit-height: 100%;
  top: 0px;
  -moz-top: 0px;
  -ms-top: 0px;
  -webkit-top: 0px;
  left: 0px;
  -moz-left: 0px;
  -ms-left: 0px;
  -webkit-left: 0px;
  background: url("../assets/imgs/img9.jpg") no-repeat center;
  -moz-background: url("../assets/imgs/img9.jpg") no-repeat  center;
  -ms-background: url("../assets/imgs/img9.jpg") no-repeat center;
  -webkit-background: url("../assets/imgs/img9.jpg") no-repeat center;

  background-size: 100% 150%;
  -moz-background-size: 100% 150%;
  -ms-background-size: 100% 150%;
  -webkit-background-size: 100% 150%;
}
.OQFazemos {
  height: 50%;
  -moz-height: 50%;
  -ms-height: 50%;
  -webkit-height: 50%;
  text-align: left;
  -moz-text-align: left;
  -ms-text-align: left;
  -webkit-text-align: left;
  border: 1px solid gray;
  -moz-border: 1px solid gray;
  -ms-border: 1px solid gray;
  -webkit-border: 1px solid gray;
  background-color: white;
  -moz-background-color: white;
  -ms-background-color: white;
  -webkit-background-color: white;
  padding: 3% 1%;
  -moz-padding: 3% 1%;
  -ms-padding: 3% 1%;
  -webkit-padding: 3% 1%;
  color: #707070;
  -moz-color: #707070;
  -ms-color: #707070;
  -webkit-color: #707070;
}
.icon {
  height: 70px;
}
#EscolherNosPrinc {
  background-color: rgb(22, 20, 20);
  -moz-background-color: rgb(22, 20, 20);
  -ms-background-color: rgb(22, 20, 20);
  -webkit-background-color: rgb(22, 20, 20);
  margin: 0.5% auto;
  -moz-margin: 0.5% auto;
  -ms-margin: 0.5% auto;
  -webkit-margin: 0.5% auto;
  position: relative;
  -moz-position: relative;
  -ms-position: relative;
  -webkit-position: relative;
}
#EscolherNosPrinc::before {
  content: "";
  -moz-content: "";
  -ms-content: "";
  -webkit-content: "";
  width: 100%;
  -moz-width: 100%;
  -ms-width: 100%;
  -webkit-width: 100%;
  position: absolute;
  -moz-position: absolute;
  -ms-position: absolute;
  -webkit-position: absolute;
  height: 100%;
  -moz-height: 100%;
  -ms-height: 100%;
  -webkit-height: 100%;
  top: 0px;
  -moz-top: 0px;
  -ms-top: 0px;
  -webkit-top: 0px;
  left: 0px;
  -moz-left: 0px;
  -ms-left: 0px;
  -webkit-left: 0px;
  background: url("../assets/imgs/img21.png") no-repeat center center;
  -moz-background: url("../assets/imgs/img21.png") no-repeat center center;
  -ms-background: url("../assets/imgs/img21.png") no-repeat center center;
  -webkit-background: url("../assets/imgs/img21.png") no-repeat center center;
  filter: brightness(30%);
  -moz-filter: brightness(30%);
  -ms-filter: brightness(30%);
  -webkit-filter: brightness(30%);
  background-size: 100% 180%;
  -moz-background-size: 100% 180%;
  -ms-background-size: 100% 180%;
  -webkit-background-size: 100% 180%;
}
#EscolherNos {
  padding: 4% 7%;
  -moz-padding: 4% 7%;
  -ms-padding: 4% 7%;
  -webkit-padding: 4% 7%;
  text-align: center !important;
  -moz-text-align: center !important;
  -ms-text-align: center !important;
  -webkit-text-align: center !important;
}
.TextoEscolherNosTituloPrinc {
  color: #fff;
  -moz-color: #fff;
  -ms-color: #fff;
  -webkit-color: #fff;
  font-family: "Josefin";
  -moz-font-family: "Josefin";
  -ms-font-family: "Josefin";
  -webkit-font-family: "Josefin";
  font-size: 40px;
  -moz-font-size: 40px;
  -ms-font-size: 40px;
  -webkit-font-size: 40px;
}
.TextoEscolherNos {
  background-color: #fff;
  -moz-background-color: #fff;
  -ms-background-color: #fff;
  -webkit-background-color: #fff;
  margin: 1% 1%;
  -moz-margin: 1% 1%;
  -ms-margin: 1% 1%;
  -webkit-margin: 1% 1%;
  padding: 1%;
  -moz-padding: 1%;
  -ms-padding: 1%;
  -webkit-padding: 3%;
  height: auto;
  -moz-height: auto;
  -ms-height: auto;
  -webkit-height: auto;
  border-radius: 3px;
  -moz-border-radius: 3%;
  -ms-border-radius: 3%;
  -webkit-border-radius: 3%;
  text-align: center !important;
  -moz-text-align: center !important;
  -ms-text-align: center !important;
  -webkit-text-align: center !important;
  width: 100% !important;
}
.TextoEscolherNosTitulo {
  font-family: "Josefin-SemiBold";
  -moz-font-family: "Josefin-SemiBold";
  -ms-font-family: "Josefin-SemiBold";
  -webkit-font-family: "Josefin-SemiBold";
  font-size: 24px;
  -moz-font-size: 24px;
  -ms-font-size: 24px;
  -webkit-font-size: 24px;
  color: #000;
  -moz-color: #000;
  -ms-color: #000;
  -webkit-color: #000;
  margin: 2% auto;
  -moz-margin: 2% auto;
  -ms-margin: 2% auto;
  -webkit-margin: 2% auto;
}
.TextoEscolherNosTxt {
  font-size: 19px;
  -moz-font-size: 19px;
  -ms-font-size: 19px;
  -webkit-font-size: 19px;
  margin: 10px auto;
  -moz-margin: 10px auto;
  -ms-margin: 10px auto;
  -webkit-margin: 10px auto;
  font-family: "Segoe";
  -moz-font-family: "Segoe";
  -ms-font-family: "Segoe";
  -webkit-font-family: "Segoe";
  font-size: 19px;
  -moz-font-size: 19px;
  -ms-font-size: 19px;
  -webkit-font-size: 19px;
}
.TextoEscolherNosTxt2 {
  font-size: 19px;
  -moz-font-size: 19px;
  -ms-font-size: 19px;
  -webkit-font-size: 19px;
  margin: 10px auto !important;
  -moz-margin: 10px auto;
  -ms-margin: 10px auto;
  -webkit-margin: 8% auto;
  font-family: "Segoe";
  -moz-font-family: "Segoe";
  -ms-font-family: "Segoe";
  -webkit-font-family: "Segoe";
  font-size: 19px;
  -moz-font-size: 19px;
  -ms-font-size: 19px;
  -webkit-font-size: 19px;
}
.TextoEscolherNosTxt3 {
  font-size: 19px;
  -moz-font-size: 19px;
  -ms-font-size: 19px;
  -webkit-font-size: 19px;
  margin: 10px auto;
  -moz-margin: 10px auto;
  -ms-margin: 10px auto;
  -webkit-margin: 10px auto;
  font-family: "Segoe";
  -moz-font-family: "Segoe";
  -ms-font-family: "Segoe";
  -webkit-font-family: "Segoe";
  font-size: 19px;
  -moz-font-size: 19px;
  -ms-font-size: 19px;
  -webkit-font-size: 19px;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: black !important;
  -moz-color: black !important;
  -ms-color: black !important;
  -webkit-color: black !important;
  border-left: 3px solid black !important;
  -moz-border-left: 3px solid black !important;
  -ms-border-left: 3px solid black !important;
  -webkit-border-left: 3px solid black !important;
  background-color: none !important;
  -moz-background-color: none !important;
  -ms-background-color: none !important;
  -webkit-background-color: none !important;
}

button {
  background-color: #8cb560;
  -moz-background-color: #8cb560;
  -ms-background-color: #8cb560;
  -webkit-background-color: #8cb560;
  color: #fff;
  -moz-color: #fff;
  -ms-color: #fff;
  -webkit-color: #fff;
}
button:hover {
  background-color: #8cb560;
  -moz-background-color: #8cb560;
  -ms-background-color: #8cb560;
  -webkit-background-color: #8cb560;
  color: #fff !important;
  -moz-color: #fff !important;
  -ms-color: #fff !important;
  -webkit-color: #fff !important;
}
p {
  font-size: 16px;
  -moz-font-size: 16px;
  -ms-font-size: 16px;
  -webkit-font-size: 16px;
}
@media only screen and (max-width: 600px) {
  
.Inicio {
  padding: 5%;
  -moz-padding: 5%;
  -ms-padding: 5%;
  -webkit-padding: 5%;
  position: relative;
  -moz-position: relative;
  -ms-position: relative;
  -webkit-position: relative;
  height: 105vh;
}
  .TextoInicio {
    margin-top: 20%;
    -moz-margin-top: 20%;
    -ms-margin-top: 20%;
    -webkit-margin-top: 20%;
  }
  #BemVindo-LesGold {
    margin: 1% auto !important;
    -moz-margin: 1% auto;
    -ms-margin: 1% auto;
    -webkit-margin: 1% auto;
    padding: 5%;
    -moz-padding: 5%;
    -ms-padding: 5%;
    -webkit-padding: 5%;
  }
}
@media only screen and (max-width: 800px) {
  #BemVindo-LesGold {
    margin: 1% auto !important;
    -moz-margin: 1% auto;
    -ms-margin: 1% auto;
    -webkit-margin: 1% auto;
    padding: 5%;
    -moz-padding: 5%;
    -ms-padding: 5%;
    -webkit-padding: 5%;
  }
}
@media only screen and (max-width: 1590px) {
  .TextoEscolherNosTxt {
    font-size: 19px;
    -moz-font-size: 19px;
    -ms-font-size: 19px;
    -webkit-font-size: 19px;
    margin: 35px auto;
    -moz-margin: 35px auto;
    -ms-margin: 35px auto;
    -webkit-margin: 35px auto;
    font-family: "Segoe";
    -moz-font-family: "Segoe";
    -ms-font-family: "Segoe";
    -webkit-font-family: "Segoe";
  }
  .TextoEscolherNosTxt2 {
    font-size: 19px;
    -moz-font-size: 19px;
    -ms-font-size: 19px;
    -webkit-font-size: 19px;
    margin: 1px auto !important;
    -moz-margin: 1px auto;
    -ms-margin: 1px auto;
    -webkit-margin: 1px auto;
    font-family: "Segoe";
    -moz-font-family: "Segoe";
    -ms-font-family: "Segoe";
    -webkit-font-family: "Segoe";
    font-size: 19px;
    -moz-font-size: 19px;
    -ms-font-size: 19px;
    -webkit-font-size: 19px;
  }
  .TextoEscolherNosTxt3 {
    font-size: 19px;
    -moz-font-size: 19px;
    -ms-font-size: 19px;
    -webkit-font-size: 19px;
    margin: 30px auto;
    -moz-margin: 30px auto;
    -ms-margin: 30px auto;
    -webkit-margin: 35px auto;
    font-family: "Segoe";
    -moz-font-family: "Segoe";
    -ms-font-family: "Segoe";
    -webkit-font-family: "Segoe";
  }
}

@media only screen and (min-width: 1590px) {
  .TextoEscolherNosTxt {
    font-size: 19px;
    -moz-font-size: 19px;
    -ms-font-size: 19px;
    -webkit-font-size: 19px;
    margin: 30px auto;
    -moz-margin: 30px auto;
    -ms-margin: 30px auto;
    -webkit-margin: 30px auto;
    font-family: "Segoe";
    -moz-font-family: "Segoe";
    -ms-font-family: "Segoe";
    -webkit-font-family: "Segoe";
  }
  .TextoEscolherNosTxt2 {
    font-size: 19px;
    -moz-font-size: 19px;
    -ms-font-size: 19px;
    -webkit-font-size: 19px;
    margin: 30px auto !important;
    -moz-margin: 30px auto;
    -ms-margin: 30px auto;
    -webkit-margin: 30px auto;
    font-family: "Segoe";
    -moz-font-family: "Segoe";
    -ms-font-family: "Segoe";
    -webkit-font-family: "Segoe";
  }
  .TextoEscolherNosTxt3 {
    font-size: 19px;
    -moz-font-size: 19px;
    -ms-font-size: 19px;
    -webkit-font-size: 19px;
    margin: 30px auto;
    -moz-margin: 30px auto;
    -ms-margin: 30px auto;
    -webkit-margin: 30px auto;
    font-family: "Segoe";
    -moz-font-family: "Segoe";
    -ms-font-family: "Segoe";
    -webkit-font-family: "Segoe";
  }
}
@media only screen and (max-width: 300px){
  #Home{
    width: 100vw!important;
  }
.Inicio {
  padding: 5%;
  -moz-padding: 5%;
  -ms-padding: 5%;
  -webkit-padding: 5%;
  position: relative;
  -moz-position: relative;
  -ms-position: relative;
  -webkit-position: relative;
  height: 100%!important;
  width: 105%!important;
}
.TextoInicio {
  margin-top: 17%;
  -moz-margin-top: 17%;
  -ms-margin-top: 17%;
  -webkit-margin-top: 17%;
  text-align: left;
  -moz-text-align: left;
  -ms-text-align: left;
  -webkit-text-align: left;
  color: #fff;
  -moz-color: #fff;
  -ms-color: #fff;
  -webkit-color: #fff;
  font-family: "Gotham";
  -moz-font-family: "Gotham";
  -ms-font-family: "Gotham";
  -webkit-font-family: "Gotham";
  /* backdrop-filter: blur(5px); */
}
.TextoInicioH1 {
  /* font-size: 100%; */
  font-size: 30px;
}
.TextoInicioP {
  margin: 5% auto;
  -moz-margin: 5% auto;
  -ms-margin: 5% auto;
  -webkit-margin: 5% auto;
  width: 100%;
  font-size: 19px;
  color: #fff;
}

}
</style>
