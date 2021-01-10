<template>
  <div id="QuemSomos">
    <NavbarPrinc />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12" id="quemSomos">
          <h1 class="quemSomosTitutlo">Quem Somos</h1>
        </div>
        <div class="col-12 TituloAngLess">
          <h1 id="TituloAngLessH1">
            ANG LESS GOLD <br />
            IMPORTAÇÃO &amp; EXPORTAÇÃO LDA
          </h1>
        </div>
        <div class="col-10 BemVCompenent">
          <BemVindoAngLess />
        </div>
        <div
          class="col-12"
          id="dataaos"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        ></div>
        <div class="col-12" id="BackgroundBlack">
          <div class="row">
            <div class="col-12 TxTEImg">
              <div class="row justify-content-md-center">
                <div class="col-lg-12 col-md-12 col-xl-5 col-sm-12">
                  <p class="BackgroundBlackTexto">
                    Para nós a chave do sucesso e melhor dia/dia com a nossa
                    equipa de profissionais trabalhando arduamente para conceber
                    soluções personalizadas que vão ao encontro das necessidades
                    positivamente nas empresas dos clientes e parceiros com a
                    demonstração nas empresas dos clientes e parceiros com
                    demonstração de qualidade dos nossos produtos com 80%
                    satisfeito, elaborando programações de atendimento e
                    interface entre as diversas áreas de produção comercial e
                    operacional, coordenação e controle das atividade logísticas
                    relacionadas a armazenagem e transporte, operações
                    especiais.
                  </p>
                </div>

                <div class="col-lg-12 col-md-12 col-xl-6 col-sm-12">
                  <img
                    src="../assets/imgs/img29.jpg"
                    class="img-fluid img"
                    alt="Empresarios"
                  />
                </div>
              </div>
            </div>

            <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12 tabelasBracas">
              <div class="row justify-content-md-center centro">
                <div
                  class="col-lg-3 col-md-12 col-xl-3 col-sm-12"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <div class="row BackgroundBlackwhite">
                    <div class="col-12 IconDiv">
                      <img
                        src="../assets/svg/missao.svg"
                        class="img-fluid icon"
                        alt="Missao"
                      />
                    </div>
                    <div class="col-12"><h2 class="titulo">Missão</h2></div>
                    <div class="col-12 Texto">
                      <p>Lorem ipsum dolor sit amet consetetur</p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-3 col-md-12 col-xl-3 col-sm-12"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <div class="row BackgroundBlackwhiteVisao">
                    <div class="col-12 IconDiv2">
                      <img
                        src="../assets/svg/visao.svg"
                        class="img-fluid icon"
                        alt="Missao"
                      />
                    </div>
                    <div class="col-12 titulo2"><h2>Visão</h2></div>
                    <div class="col-12 Texto2">
                      <p>Lorem ipsum dolor sit amet consetetur</p>
                    </div>
                    <div class="progress col-12">
                      <div
                        class="progress-bar ProgressCor1"
                        role="progressbar"
                        style="width: 100%"
                        aria-valuenow="100"
                        aria-valuemin="10"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-3 col-md-12 col-xl-3 col-sm-12"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <div class="row BackgroundBlackwhite">
                    <div class="col-12 IconDiv3">
                      <img
                        src="../assets/svg/valor.svg"
                        class="img-fluid icon"
                        alt="Missao"
                      />
                    </div>
                    <div class="col-12 titulo3"><h2>Valores</h2></div>
                    <div class="col-12 Texto3">
                      <p>Lorem ipsum dolor sit amet consetetur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RecebaNovidades />
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import NavbarPrinc from "../components/NavbarPrinc";
import BemVindoAngLess from "../components/quemSomos/BemVindo-AngLess";
import RecebaNovidades from "../components/RecebaNovidades";
import Footer from "../components/Footer";

export default {
  name: "QuemSomos",
  components: {
    NavbarPrinc,
    BemVindoAngLess,
    RecebaNovidades,
    Footer,
  },
};
</script>
<style scoped>
h1 {
  text-align: left;
  margin-left: 4%;
}
.BemVCompenent {
  /* margin: auto 3% !important; */
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
#BackgroundBlack {
  padding: 5%;
  background-color: rgb(46, 45, 45);
  color: #fff;
}
.BackgroundBlackTexto {
  text-align: left;
  font-size: 19px;
  line-height: 2;
  width: 100%;
}
.tabelasBracas {
  margin: 3% auto;
  padding: 9%;
  padding-bottom: 0%;
}
.centro {
  margin: auto !important;
}
.BackgroundBlackwhite {
  width: 90% !important;
  background-color: #fff;
  height: 250px;
  margin: 2%;
  color: black;
  border-radius: 10px;
}
.BackgroundBlackwhiteVisao {
  width: 90% !important;
  background-color: #fff;
  height: 250px;
  margin: 2%;
  color: black;
  border-radius: 10px 10px 0px 0px;
}
.img {
  height: auto;
  width: 90%;
  border-radius: 6% !important;
  object-fit: contain;
}
.TxTEImg {
  margin: auto !important;
}
.icon {
  margin-top: 3%;
  height: 100%;
  width: 70px;
  filter: invert(70%) sepia(11%) saturate(1530%) hue-rotate(46deg)
    brightness(93%) contrast(90%);
}
.IconDiv {
  margin: auto;
}
.IconDiv2 {
  margin: 10px auto;
}
.IconDiv3 {
}
.titulo {
  margin: auto;
}
.titulo2 {
  margin: 5px auto;
}
.titulo3 {
  margin: auto;
  margin-top: 1px;
}
.Texto {
}
.Texto2 {
  margin: 7px auto;
}
.Texto3 {
  margin-top: -10px;
}
#dataaos {
  margin-top: -5%;
  background-color: #8cb560 !important;
  height: 200px;
  /* border-radius: 100% 0 0 0; */
  clip-path: polygon(100% 0%, 0 100%, 100% 100%) !important;
}
.progress {
  height: 5px;
  -moz-height: 5px;
  -ms-height: 5px;
  -webkit-height: 5px;
  margin-top: auto;
}
.ProgressCor1 {
  background-color: #8cb560 !important;
  -moz-background-color: #8cb560 !important;
  -ms-background-color: #8cb560 !important;
  -webkit-background-color: #8cb560 !important;
}
@font-face {
  font-family: "Gotham";
  src: local("Fonts"), url(../assets/Fonts/GothamBold.otf) format("truetype");
}
@media only screen and (max-width: 600px) {
  #TituloAngLessH1 {
    font-size: 35px !important;
  }
}
</style>