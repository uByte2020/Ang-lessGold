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
                    src="@/assets/imgs/img1.jpeg"
                    alt=""
                    class="img-fluid img"
                  />
                </div>
                <div
                  class="col-lg-8 col-xl-8 col-sm-12 col-md-12 TextoBemVindo"
                >
                  <h2 class="TextoBemVindoH1">Bem-Vindo <br> À ANG LESS GOLD</h2>
                  <div class="progress ">
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
                  <button type="button" class="btn btn-lg btn-dark">
                    Saiba Mais
                  </button>
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
              class="col-lg-12 col-xl-12 col-sm-12 col-md-12 TextoEscolherNosTitulo"
            >
              <h2>Porquê Escolher-nos</h2>
            </div>
            <div class="col-lg-7 col-xl-3 col-sm-8 col-md-7 TextoEscolherNos">
              <h4 class="TextoEscolherNosTitulo">Experiencia no mercado</h4>
              <p class="TextoEscolherNosTxt">
                Estamos há anos no mercado prestando serviço de importação e
                exportação
              </p>
            </div>
            <div class="col-lg-7 col-xl-3 col-sm-8 col-md-7 TextoEscolherNos">
              <h4 class="TextoEscolherNosTitulo">Comprometimento com o Cliente</h4>
              <p class="TextoEscolherNosTxt">
                Procuramos sempre os melhores resultados para os nossos
                clientes.
              </p>
            </div>
            <div class="col-lg-7 col-xl-3 col-sm-8 col-md-7 TextoEscolherNos">
              <h4 class="TextoEscolherNosTitulo">Qualidade do Produto</h4>
              <p class="TextoEscolherNosTxt">Fornecemos sempre os melhores produtos.</p>
            </div>
          </div>
        </div>
        <!-- <div class="col-12" id="ExplroreProdutos">
          <div class="row justify-content-md-center">
            <div class="col-12">
              <h3>Explore os Nossos Produtos</h3>
            </div>
            <div class="col-12">
              <div>
                <b-card no-body>
                  <b-tabs pills card vertical nav-wrapper-class="w-30">
                    <b-tab title="Tab 1" class="tab" active
                      ><b-card-text>Tab contents 1</b-card-text></b-tab
                    >
                    <b-tab title="Tab 2" class="tab"
                      ><b-card-text>Tab contents 2</b-card-text></b-tab
                    >
                    <b-tab title="Tab 3" class="tab"
                      ><b-card-text>Tab contents 3</b-card-text></b-tab
                    >
                  </b-tabs>
                </b-card>
              </div>
            </div>
          </div>
        </div> -->
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
        <footer class="col-12">
          <div class="row footer">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-xl-3 col-sm-12 col-md-3 footerMarg">
                  <h5>Endereço</h5>
                  <div class="progress progress2">
                    <div
                      class="progress-bar progressCor"
                      role="progressbar"
                      style="width: 100%"
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="10"
                    ></div>
                  </div>
                  <p>Estranda da Mendanha</p>
                  <p>Nº 25 Bloco 4 - 4 C</p>
                  <p>Parque norte</p>
                  <p>2580-588 Carregando</p>
                </div>
                <div class="col-lg-3 col-xl-3 col-sm-12 col-md-3 footerMarg">
                  <h5>Contactos</h5>
                  <div class="progress progress2">
                    <div
                      class="progress-bar progressCor"
                      role="progressbar"
                      style="width: 100%"
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="10"
                    ></div>
                  </div>
                  <p>
                    <img
                      src="../assets/svg/Portugal.svg"
                      alt="imagem-Angola"
                      class="img-fluid IMG1"
                    />
                    <b-icon
                      icon="telephone"
                      font-scale="1"
                      variant="default"
                    ></b-icon>
                    +351 935 348 752
                  </p>

                  <p>
                    <img
                      src="../assets/svg/Angola.svg"
                      alt="imagem-Angola"
                      class="img-fluid IMG1"
                    />
                    <b-icon
                      icon="telephone"
                      font-scale="1"
                      variant="default"
                    ></b-icon>
                    +244 948 005 815
                  </p>

                  <b-icon
                    icon="facebook"
                    variant="default"
                    class="icon"
                  ></b-icon
                  ><b-icon
                    icon="instagram"
                    class="icon"
                    variant="default"
                  ></b-icon>
                </div>
                <div class="col-lg-3 col-xl-3 col-sm-12 col-md-3 footerMarg">
                  <h5>Informação</h5>
                  <div class="progress progress2">
                    <div
                      class="progress-bar progressCor"
                      role="progressbar"
                      style="width: 100%"
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="10"
                    ></div>
                  </div>
                  <p>Quem Somos</p>
                  <p>Contactos</p>
                  <p>Politicas e Privacidades</p>
                </div>
                <div class="col-lg-3 col-xl-3 col-sm-12 col-md-3 footerMarg">
                  <h5>Menu</h5>
                  <div class="progress progress2">
                    <div
                      class="progress-bar progressCor"
                      role="progressbar"
                      style="width: 100%"
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="10"
                    ></div>
                  </div>
                  <p>Inicio</p>
                  <p>Produtos</p>
                  <p>Serviços</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar.vue";
import Produtos from "../components/home/Produtos";

export default {
  name: "Home",
  components: {
    Navbar,
    Produtos,
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
  src: local("Fonts"),
   url(../assets/Fonts/GothamBold.otf) format("truetype");
}
#Home {
}
.Inicio {
  padding: 5%;
  position: relative;
}
.Inicio::before{
  content:"";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: url("../assets/imgs/img28.jpg") no-repeat center center;
  background-size: cover;
  z-index: -1;
  filter: grayscale(20%) brightness(40%);
}
.TextoInicio {
  margin-top: 5%;
  text-align: left;
  color: #fff;
  opacity: 1;
  font-family: "Gotham";
  /* backdrop-filter: blur(5px); */
}
.TextoInicioh1 {
}
.TextoInicioP {
  margin: 2% auto;
}
.img {
  box-shadow: 0px 0px 6px 4px gray;
  border-radius: 5px;
  width: 90%;
  height: 85%;
  margin-right: 15%;
}
#BemVindo-LesGold {
  margin: 1% auto;
  padding: 5%;
}
.TextoBemVindo {
  text-align: left;
  font-family: "Josefin";
}
.ProgressCor1{
  background-color:#8CB560!important;
}
.TextoBemVindoH1 {
}
.progress {
  height: 5px;
  width: 90px;
}
.progressCor {
  background-color: #f8ce00 !important;
}
.progress2 {
  height: 5px;
  width: 30px;
  margin-bottom: 3%;
}
.ProgressCor2{
  background-color:#707070 !important;
}
#OQFazemosPrinc {
  margin-bottom: 0.5%;
  box-shadow: 1px -1px 5px black;
  padding: 8%;
  position: relative;
}
#OQFazemosPrinc::before{
  content: "";
  position:absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: url("../assets/imgs/img9.jpg") no-repeat center center;
  background-size: cover;
}
.OQFazemos {
  height: 50%;
  text-align: left;
  border: 1px solid gray;
  background-color: white;
  padding: 3% 1%;
  color: #707070;
}
#EscolherNosPrinc {
  background-color:rgb(16, 139, 16);
  margin: 0.5% auto;
  position: relative;
}
#EscolherNosPrinc::before{
  content: "";
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0px;
  left: 0px;
  background: url("../assets/imgs/img21.png") no-repeat center center;
  filter: brightness(30%);
  background-size: cover;
}
#EscolherNos {
  padding: 4%;
  text-align: center !important;
}
.TextoEscolherNosTitulo {
  color: #fff;
  font-family: "Josefin";
  font-size: 40px;
}
.TextoEscolherNos {
  background-color: #fff;
  margin: 1% 1%;
  padding: 3%;
  height: auto;
  border-radius: 3%;
  text-align: center !important;
}
.TextoEscolherNosTitulo{
  font-family: "Josefin-SemiBold";
  font-size: 24px;
  color: #000;
  margin: 2% auto;
}
.TextoEscolherNosTxt{
  font-size: 19px;
  margin: 2%;
}
#ExplroreProdutos {
  margin-top: 2%;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: black !important;
  border-left: 3px solid black !important;
  background-color: none !important;
}
#RecebaNovidades {
  color: #fff;
  background-color: #68aa38;
  text-align: center;
}
.RecebaNovidadesTexto {
  padding: 6% 3% 4% 3% !important;
  text-align: left !important;
}
.RecebaNovidadesTitulo{
  font-family:"Josefin";
  font-size: 60px;
}
.RecebaNovidadesTexto2{
  font-size: 24px;
}
input {
  border-radius: 25px;
  text-align: center;
  font-size: 16px;
  padding: 5%;
  width: 100%;
}
#inputT {
  margin-top: 2% !important;
}
button {
  background-color: #8cb560;
  color: #fff;
}
button:hover {
  background-color: #8cb560;
  color: #fff !important;
}
#button {
  margin-top: -70px !important;
  margin-left: 88%;
  color: #fff !important;
  background-color: rgb(53, 138, 53);
  border-radius: 100px;
}
footer {
  background-color: rgb(54, 54, 54);
  padding: 5%;
  color: #fff;
}
.footer {
  text-align: left;
}
.footerMarg {
  margin-top: 2%;
}
.icon {
  margin-right: 6%;
  margin-top: 6%;
  color: #f8ce00;
  background-color: transparent;
}
.IMG1 {
  width: 10%;
  height: 10%;
  margin-right: 3%;
}
p {
  font-size: 16px;
}
</style>
