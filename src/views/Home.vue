<template>
  <div id="Home">
    <Navbar />
    <div id="home" class="container-fluid">
      <div class="row">
        <div class="Inicio col-12">
          <div class="row TextoInicio">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-xl-8 col-sm-12 col-md-8">
                  <h1>
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
        <div class="col-12" id="BemVindo-LesGold">
          <div class="row">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12">
                  <img
                    src="@/assets/imgs/img30.jpg"
                    alt=""
                    class="img-fluid img"
                  />
                </div>
                <div
                  class="col-lg-8 col-xl-8 col-sm-12 col-md-12 TextoBemVindo"
                >
                  <h2 class="TextoBemVindoH1">
                    BemVindo <br />
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
                  <p class="TextoInicioP">
                    A <b>ANG LESS GOLD</b> é uma empresa de direito Português,
                    Contribuinte fiscal nº 515015253 com sede em estrada da
                    Mendanha nº 25 Bloco 4 4c Parque norte, Carregado e
                    Cadafais, conselho de Alenquer. Registada como pessoa
                    coletiva 515015253 com número de identificação na segurança
                    social 25150152535, cujo objetivo social e a prestação de
                    serviço, comércio a grosso de bebidas, alimentaos,
                    medicamentos, Importação e Exportação.
                  </p>
                  <button type="button" class="btn btn-lg">Saiba Mais</button>
                </div>
              </div>
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
        <div class="col-12" id="RecebaNovidades">
          <div class="row justify-content-md-center RecebaNovidadesTexto">
            <div class="container">
              <div class="row">
                <div class="col-lg-7 col-xl-7 col-sm-12 col-md-7">
                  <h2 class="RecebaNovidadesTitulo">Receba Novidades</h2>
                  <p class="RecebaNovidadesTexto2">
                    Cadraste o seu email e receba novidades da ANG LESS GOLD
                  </p>
                </div>
                <div class="col-lg-5 col-xl-5 col-sm-12 col-md-5" id="inputT">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="E-mail"
                  />
                  <button
                    type="button"
                    id="button"
                    class="btn btn-sm btn-success"
                  >
                    <b-icon
                      icon="arrow-right"
                      font-scale="1"
                      variant="default"
                    ></b-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Produtos from "../components/home/Produtos";

export default {
  name: "Home",
  components: {
    Navbar,
    Produtos,
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
  background: url("../assets/imgs/img28.jpg") no-repeat center center;
  -moz-background: url("../assets/imgs/img28.jpg") no-repeat center center;
  -ms-background: url("../assets/imgs/img28.jpg") no-repeat center center;
  -webkit-background: url("../assets/imgs/img28.jpg") no-repeat center center;
  background-size: cover;
  -moz-background-size: cover;
  -ms-background-size: cover;
  -webkit-background-size: cover;
  z-index: -1;
  -moz-z-index: -1;
  -ms-z-index: -1;
  -webkit-z-index: -1;
  filter: grayscale(60%) brightness(30%) !important;
  -moz-filter: grayscale(60%) brightness(30%) !important;
  -ms-filter: grayscale(60%) brightness(30%) !important;
  -webkit-filter: grayscale(60%) brightness(30%) !important;
}
.TextoInicio {
  margin-top: 5%;
  -moz-margin-top: 5%;
  -ms-margin-top: 5%;
  -webkit-margin-top: 5%;
  text-align: left;
  -moz-text-align: left;
  -ms-text-align: left;
  -webkit-text-align: left;
  color: #fff;
  -moz-color: #fff;
  -ms-color: #fff;
  -webkit-color: #fff;
  opacity: 1;
  -moz-opacity: 1;
  -ms-opacity: 1;
  -webkit-opacity: 1;
  font-family: "Gotham";
  -moz-font-family: "Gotham";
  -ms-font-family: "Gotham";
  -webkit-font-family: "Gotham";
  /* backdrop-filter: blur(5px); */
}
.TextoInicioh1 {
}
.TextoInicioP {
  margin: 2% auto;
  -moz-margin: 2% auto;
  -ms-margin: 2% auto;
  -webkit-margin: 2% auto;
}
.img {
  object-fit: fill;
  -moz-object-fit: fill;
  -ms-object-fit: fill;
  -webkit-object-fit: fill;
  box-shadow: 0px 0px 6px 4px gray;
  -moz-box-shadow: 0px 0px 6px 4px gray;
  -ms-box-shadow: 0px 0px 6px 4px gray;
  -webkit-box-shadow: 0px 0px 6px 4px gray;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -webkit-border-radius: 5px;
  width: 90%;
  -moz-width: 90%;
  -ms-width: 90%;
  -webkit-width: 90%;
  height: 100%;
  -moz-height: 100%;
  -ms-height: 100%;
  -webkit-height: 100%;
  margin-right: 15%;
  -moz-margin-right: 15%;
  -ms-margin-right: 15%;
  -webkit-margin-right: 15%;
}
#BemVindo-LesGold {
  margin: 1% auto;
  -moz-margin: 1% auto;
  -ms-margin: 1% auto;
  -webkit-margin: 1% auto;
  padding: 5%;
  -moz-padding: 5%;
  -ms-padding: 5%;
  -webkit-padding: 5%;
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
}
.ProgressCor1 {
  background-color: #8cb560 !important;
  -moz-background-color: #8cb560 !important;
  -ms-background-color: #8cb560 !important;
  -webkit-background-color: #8cb560 !important;
}
.TextoBemVindoH1 {
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
  box-shadow: 1px -1px 5px black;
  -moz-box-shadow: 1px -1px 5px black;
  -ms-box-shadow: 1px -1px 5px black;
  -webkit-box-shadow: 1px -1px 5px black;
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
  background: url("../assets/imgs/img9.jpg") no-repeat center center;
  -moz-background: url("../assets/imgs/img9.jpg") no-repeat center center;
  -ms-background: url("../assets/imgs/img9.jpg") no-repeat center center;
  -webkit-background: url("../assets/imgs/img9.jpg") no-repeat center center;

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
  padding: 3%;
  -moz-padding: 3%;
  -ms-padding: 3%;
  -webkit-padding: 3%;
  height: auto;
  -moz-height: auto;
  -ms-height: auto;
  -webkit-height: auto;
  border-radius: 3%;
  -moz-border-radius: 3%;
  -ms-border-radius: 3%;
  -webkit-border-radius: 3%;
  text-align: center !important;
  -moz-text-align: center !important;
  -ms-text-align: center !important;
  -webkit-text-align: center !important;
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
  margin: 13% auto;
  -moz-margin: 13% auto;
  -ms-margin: 13% auto;
  -webkit-margin: 13% auto;
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
  margin: 6% auto;
  -moz-margin: 6% auto;
  -ms-margin: 6% auto;
  -webkit-margin: 6% auto;
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
  margin: 15% auto;
  -moz-margin: 15% auto;
  -ms-margin: 15% auto;
  -webkit-margin: 15% auto;
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
#RecebaNovidades {
  color: #fff;
  -moz-color: #fff;
  -ms-color: #fff;
  -webkit-color: #fff;
  background-color: #68aa38;
  -moz-background-color: #68aa38;
  -ms-background-color: #68aa38;
  -webkit-background-color: #68aa38;
  text-align: center;
  -moz-text-align: center;
  -ms-text-align: center;
  -webkit-text-align: center;
}
.RecebaNovidadesTexto {
  padding: 6% 7% 4% 7% !important;
  -moz-padding: 6% 7% 4% 7% !important;
  -ms-padding: 6% 7% 4% 7% !important;
  -webkit-padding: 6% 7% 4% 7% !important;
  text-align: left !important;
  -moz-text-align: left !important;
  -ms-text-align: left !important;
  -webkit-text-align: left !important;
}
.RecebaNovidadesTitulo {
  font-family: "Josefin";
  -moz-font-family: "Josefin";
  -ms-font-family: "Josefin";
  -webkit-font-family: "Josefin";
  font-size: 60px;
  -moz-font-size: 60px;
  -ms-font-size: 60px;
  -webkit-font-size: 60px;
}
.RecebaNovidadesTexto2 {
  font-size: 24px;
  -moz-font-size: 24px;
  -ms-font-size: 24px;
  -webkit-font-size: 24px;
  font-family: "Segoe";
  -moz-font-family: "Segoe";
  -ms-font-family: "Segoe";
  -webkit-font-family: "Segoe";
}
input {
  border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -webkit-border-radius: 25px;
  text-align: center;
  -moz-text-align: center;
  -ms-text-align: center;
  -webkit-text-align: center;
  font-size: 16px;
  -moz-font-size: 16px;
  -ms-font-size: 16px;
  -webkit-font-size: 16px;
  padding: 5%;
  -moz-padding: 5%;
  -ms-padding: 5%;
  -webkit-padding: 5%;
  width: 100%;
  -moz-width: 100%;
  -ms-width: 100%;
  -webkit-width: 100%;
}
#inputT {
  margin-top: 2% !important;
  -moz-margin-top: 2% !important;
  -ms-margin-top: 2% !important;
  -webkit-margin-top: 2% !important;
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
#button {
  margin-top: -70px !important;
  -moz-margin-top: -70px !important;
  -ms-margin-top: -70px !important;
  -webkit-margin-top: -70px !important;
  margin-left: 88%;
  -moz-margin-left: 88%;
  -ms-margin-left: 88%;
  -webkit-margin-left: 88%;
  color: #fff !important;
  -moz-color: #fff !important;
  -ms-color: #fff !important;
  -webkit-color: #fff !important;
  background-color: rgb(53, 138, 53);
  -moz-background-color: rgb(53, 138, 53);
  -ms-background-color: rgb(53, 138, 53);
  -webkit-background-color: rgb(53, 138, 53);
  border-radius: 100px;
  -moz-border-radius: 100px;
  -ms-border-radius: 100px;
  -webkit-border-radius: 100px;
}
p {
  font-size: 16px;
  -moz-font-size: 16px;
  -ms-font-size: 16px;
  -webkit-font-size: 16px;
}
@media only screen and (max-width: 600px) {
  .TextoInicio {
    margin-top: 20%;
    -moz-margin-top: 20%;
    -ms-margin-top: 20%;
    -webkit-margin-top: 20%;
  }
}
</style>
