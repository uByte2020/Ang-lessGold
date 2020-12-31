<template>
  <div>
    <Navbar />
    <div id="home" class="container">
      <div class="row">
        <div
          class="col-12 inicio"
        >
          <div class="row TextoInicio">
            <div class="col-lg-12 col-xl-8 col-sm-12 col-md-4">
              <h1>
                Importação e Exportação de Bens Alimentares e Medicamentos
              </h1>
              <p class="TextoInicioP">
                Soluções que permite a satisfação dos nossos clientes e
                parceiros com maior qualidade e segurança naquilo que são as
                diversas necessidades de bens alimentares
              </p>
              <button class="btn btn-dark">Saiba mais</button>
            </div>
          </div>
        </div>
        <div class="col-12 BemVindo-LesGold">
          <div class="row">
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
              <button class="btn btn-dark">Saiba mais</button>
            </div>
          </div>
        </div>
        <div class="col-12" id="OQFazemosPrinc">
          <div class="row">
            <div class="col-lg-8 col-xl-8 col-sm-12 col-md-8 OQFazemos">
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
                  Operamos com importações e exportações diversas como,
                  Alimentos, Bebidas e Medicamentos, entre outros, na venda por
                  encomenda
                </p>
              </div>
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

export default {
  name: "Home",
  components: {
    Navbar,
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
}
.OQFazemos {
  height: 50%;
  text-align: left;
  border: 1px solid gray;
  margin: 10% 10%;
  background-color: white;
  padding: 4% 2%;
}
</style>
