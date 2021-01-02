<template>
  <div>
    <Navbar />
    <div id="home">
      <div class="container inicio">
        <div class="row TextoInicio main-div">
          <div class="col-lg-12 col-xl-8 col-sm-12 col-md-4">
            <h1>Importação e Exportação de Bens Alimentares e Medicamentos</h1>
            <p class="TextoInicioP">
              Soluções que permite a satisfação dos nossos clientes e parceiros
              com maior qualidade e segurança naquilo que são as diversas
              necessidades de bens alimentares
            </p>
            <button class="btn btn-lg btn-dark">Saiba Mais</button>
          </div>
        </div>
      </div>
      <div class="container" id="BemVindo-LesGold">
        <div class="row main-div">
          <div class="col-lg-6 col-xl-4 col-sm-12 col-md-6">
            <img src="@/assets/logo.png" alt="" class="fluid img" />
          </div>
          <div class="col-lg-6 col-xl-8 col-sm-12 col-md-6 TextoBemVindo">
            <h2 class="TextoBemVindoH1">
              Bemvindo <br />
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
              Contribuinte fiscal nº 515015253 com sede em estrada da Mendanha
              nº 25 Bloco 4 4c Parque norte, Carregado e Cadafais, conselho de
              Alenquer. Registada como pessoa coletiva 515015253 com número de
              identificação na segurança social 25150152535, cujo objetivo
              social e a prestação de serviço, comércio a grosso de bebidas,
              alimentaos, medicamentos, Importação e Exportação.
            </p>
            <button class="btn btn-lg btn-dark">Saiba Mais</button>
          </div>
        </div>
      </div>
      <div class="container-fluid" id="OQFazemosPrinc">
        <div class="row">
          <div class="col-lg-8 col-xl-6 col-sm-12 col-md-8 OQFazemos">
            <div class="col-lg-4 col-xl-10 col-sm-12 col-md-6">
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
                Operamos com importações e exportações diversas como, Alimentos,
                Bebidas e Medicamentos, entre outros, na venda por encomenda
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid" id="EscolherNosPrinc">
        <div class="row justify-content-md-center" id="EscolherNos">
          <div
            class="col-lg-12 col-xl-12 col-sm-12 col-md-12 TextoEscolherNosTitulo"
          >
            <h2>Porquê Escolher-nos</h2>
          </div>
          <div class="col-lg-4 col-xl-3 col-sm-8 col-md-4 TextoEscolherNos">
            <h4>Experiencia no mercado</h4>
            <p>
              Estamos há anos no mercado prestando serviço de importação e
              exportação
            </p>
          </div>
          <div class="col-lg-4 col-xl-3 col-sm-8 col-md-4 TextoEscolherNos">
            <h4>Comprometimento com o Cliente</h4>
            <p>
              Procuramos sempre os melhores resultados para os nossos clientes.
            </p>
          </div>
          <div class="col-lg-4 col-xl-3 col-sm-8 col-md-4 TextoEscolherNos">
            <h4>Qualidade do Produto</h4>
            <p>Fornecemos sempre os melhores produtos.</p>
          </div>
        </div>
      </div>
      <div class="container" id="ExplroreProdutos">
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
  margin: 2% 0;
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
}
.OQFazemos {
  height: 50%;
  text-align: left;
  border: 1px solid gray;
  margin: 10% 10%;
  background-color: white;
  padding: 4% 2%;
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
.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: black !important;
    border-left: 3px solid black !important;
    background-color: none !important;
}
a :active{color: black !important;
    border-left: 3px solid black !important;
    background-color: none !important;
  }
</style>
