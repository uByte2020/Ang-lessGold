<template>
  <div id="Home">
    <Navbar />
    <div id="home" class="container-fluid">
      <div class="row">
        <div class="col-12">
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
                  <button class="btn btn-lg btn-dark">Saiba Mais</button>
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
                  <img src="@/assets/logo.png" alt="" class="img-fluid img" />
                </div>
                <div
                  class="col-lg-8 col-xl-8 col-sm-12 col-md-12 TextoBemVindo"
                >
                  <h2 class="TextoBemVindoH1">
                    Bem-Vindo <br />
                    À Ang Less Gold
                  </h2>
                  <div class="progress">
                    <div
                      class="progress-bar bg-danger"
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
                  <button class="btn btn-lg btn-dark">Saiba Mais</button>
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
                        class="progress-bar bg-danger"
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
              <h4>Experiencia no mercado</h4>
              <p>
                Estamos há anos no mercado prestando serviço de importação e
                exportação
              </p>
            </div>
            <div class="col-lg-7 col-xl-3 col-sm-8 col-md-7 TextoEscolherNos">
              <h4>Comprometimento com o Cliente</h4>
              <p>
                Procuramos sempre os melhores resultados para os nossos
                clientes.
              </p>
            </div>
            <div class="col-lg-7 col-xl-3 col-sm-8 col-md-7 TextoEscolherNos">
              <h4>Qualidade do Produto</h4>
              <p>Fornecemos sempre os melhores produtos.</p>
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
        <div class="col-12" id="RecebaNovidades">
          <div class="row justify-content-md-center RecebaNovidadesTexto">
            <div class="container">
              <div class="row">
                <div class="col-lg-7 col-xl-7 col-sm-12 col-md-7">
                  <h2>Receba Novidades</h2>
                  <p>
                    Cadraste o seu email e receba novidades da ANG LESS GOLD
                  </p>
                </div>
                <div class="col-lg-5 col-xl-5 col-sm-12 col-md-5" id="inputT">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="E-mail"
                  />
                  <button id="button" class="btn btn-sm btn-success">
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
                <div class="col-lg-3 col-xl-3 col-sm-12 col-md-3">
                  <h5>ANG LESS GOLD</h5>
                  <small>
                    Estranda da Mendanha <br />
                    Nº 25 Bloco 4 - 4 C <br />Parque norte <br />
                    2580-588 Carregando
                  </small>
                </div>
                <div class="col-lg-3 col-xl-3 col-sm-12 col-md-3">
                  <h5>Menu</h5>
                  <small>Inicio <br />Produtos <br />Serviços</small>
                </div>
                <div class="col-lg-3 col-xl-3 col-sm-12 col-md-3">
                  <h5>Informação</h5>
                  <small>
                    Quem Somos <br />Contactos <br />Politicas e Privacidades
                  </small>
                </div>
                <div class="col-lg-3 col-xl-3 col-sm-12 col-md-3">
                  <h5>
                    <b-icon
                      icon="facebook"
                      variant="default"
                      class="icon"
                    ></b-icon
                    ><b-icon icon="instagram" variant="default"></b-icon>
                  </h5>
                  <small>
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
                  </small>
                  <br>
                  <small>
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
                  </small>
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
// import Produtos from "../components/home/Produtos";

export default {
  name: "Home",
  components: {
    Navbar,
    // Produtos
  },
  data() {
    return {
      //backgroundimg: require("@/assets/logo.png"),
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: "josefin-sans";
  -ms-font-family: "josefin-sans";
  -moz-font-family: "josefin-sans";
  -webkit-font-family: "josefin-sans";
  src: url("../assets/Fonts/josefin-sans.bold.ttf");
  -ms-src: url("../assets/Fonts/josefin-sans.bold.ttf");
  -moz-src: url("../assets/Fonts/josefin-sans.bold.ttf");
  -webkit-src: url("../assets/Fonts/josefin-sans.bold.ttf");
}
#Home {
}
.inicio {
  padding: 5% 0;
}
.TextoInicio {
  margin-top: 5%;
  text-align: left;
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
}
.TextoBemVindoH1 {
}
.progress {
  height: 5px;
  width: 90px;
}
#OQFazemosPrinc {
  background-color: gray;
  margin-bottom: 0.5%;
  box-shadow: 1px -1px 5px black;
  padding: 8%;
}
.OQFazemos {
  height: 50%;
  text-align: left;
  border: 1px solid gray;
  /* margin: 5% auto; */
  background-color: white;
  padding: 3% 1%;
}
#EscolherNosPrinc {
  background-color: rgb(73, 63, 63);
  margin: 0.5% auto;
}
#EscolherNos {
  padding: 4%;
  text-align: center !important;
}
.TextoEscolherNosTitulo {
  color: #fff;
}
.TextoEscolherNos {
  background-color: #fff;
  margin: 1% 1%;
  padding: 4%;
  height: auto;
  border-radius: 3%;
  text-align: center !important;
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
  background-color: #65bb1f;
  text-align: center;
}
.RecebaNovidadesTexto {
  padding: 6% 3% 4% 3% !important;
  text-align: left !important;
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
.icon {
  margin-right: 6%;
}
.IMG1 {
  width: 10%;
  height: 10%;
  margin-right: 3%;
}
</style>
