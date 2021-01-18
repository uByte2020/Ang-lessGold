<template>
  <div id="QuemSomos">
    <NavbarPrinc />
    <div class="container-fluid">
      <div class="row">
        <TitleBar title="Quem Somos" pageClass="quem-somos-page"></TitleBar>
        <div class="col-12 TituloAngLess mt-5">
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
        <div class="col-12 pt-5" id="background-black">
          <div class="row">
            <div class="col-12 TxTEImg">
              <div class="row justify-content-md-center">
                <div
                  class="col-lg-12 col-md-12 col-xl-5 col-sm-12"
                  data-aos="zoom-in-down"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <p class="BackgroundBlackTexto">
                    Para nós a chave do sucesso é melhorar dia/dia com a nossa
                    equipa de profissionais, trabalhando arduamente para
                    conceber soluções personalizadas, que vão ao encontro das
                    necessidades positivamente nas empresas dos clientes e
                    parceiros com demonstração de qualidade dos nossos produtos
                    com 80% satisfeito, elaborando programações de atendimento e
                    interface entre as diversas áreas de produção comercial e
                    operacional, coordenação e controle das atividade logísticas
                    relacionadas a armazenamento, transporte e operações
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
                  class="col-lg-4 col-md-12 col-xl-4 col-sm-12"
                  data-aos="flip-up"
                >
                  <div
                    class="row missao-visao-valor BackgroundBlackwhite"
                    :class="{ BackgroundBlackwhite1: Know }"
                  >
                    <div class="col-12 IconDiv">
                      <img
                        src="../assets/svg/missao.svg"
                        class="img-fluid icon"
                        alt="Missao"
                      />
                    </div>
                    <div class="col-12"><h2 class="titulo">Missão</h2></div>
                    <div class="col-12 Texto">
                      <p>
                        Ter uma empresa de importação e exportação de
                        referência, comprometida em satisfazer as necessidades
                        dos parceiros de négocio e clientes, capaz de atrair,
                        reter e desenvolver<span v-show="Know == false"
                          >...</span
                        >
                        <span v-show="Know">
                          os melhores profissionais e gerar os retornos
                          atrativos aos accionistas e atuando com ética e
                          responsablidade sócial.</span
                        >
                        <a @click="Saber">
                          <strong> {{ SKnow }} </strong>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-12 col-xl-4 col-sm-12"
                  data-aos="flip-up"
                >
                  <div
                    class="row missao-visao-valor BackgroundBlackwhiteVisao"
                    :class="{ BackgroundBlackwhiteVisao1: know }"
                  >
                    <div class="col-12 IconDiv2">
                      <img
                        src="../assets/svg/visao.svg"
                        class="img-fluid icon"
                        alt="Missao"
                      />
                    </div>
                    <div class="col-12 titulo2"><h2>Visão</h2></div>
                    <div class="col-12 Texto2">
                      <p>
                        <strong>Ang Less Gold </strong> está fortemente
                        envolvida na melhoria da qualidade de vida da população
                        e desenvolvimento da comunidade<span
                          v-show="know == false"
                          >...</span
                        >
                        <span v-show="know == true">
                          em todo o país (Angola e Portugal). Nesta mesma
                          virtude, também damos suporte a lares de acolhimento
                          de criança e adultos desfavorecidos, normalmente com
                          sexta básica, sopas e etc. Aliado fortemente na
                          educação, saúde, artes, cúltura e turismo.</span
                        ><a @click="saber"
                          ><strong> {{ saiba }} </strong></a
                        >
                      </p>
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
                  class="col-lg-4 col-md-12 col-xl-4 col-sm-12"
                  data-aos="flip-up"
                >
                  <div class="row missao-visao-valor BackgroundBlackwhite">
                    <div class="col-12 IconDiv3">
                      <img
                        src="../assets/svg/valor.svg"
                        class="img-fluid icon"
                        alt="Missao"
                      />
                    </div>
                    <div class="col-12 titulo3"><h2>Valores</h2></div>
                    <div class="col-12 Texto3">
                      <p>
                        Oferecer os melhores produtos de bens alimentares e
                        medicamentos aos nossos clientes, amigos e parceiros.
                      </p>
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
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";

export default {
  name: "QuemSomos",
  components: {
    NavbarPrinc,
    BemVindoAngLess,
    RecebaNovidades,
    Footer,
    TitleBar,
  },
  data() {
    return {
      know: false,
      Know: false,
      saiba: "Saiba Mais",
      SKnow: "Saiba Mais",
    };
  },
  methods: {
    saber() {
      this.know = !this.know;
      if (this.know == true) {
        this.saiba = this.saiba.replace("Mais", "Menos");
      } else {
        this.saiba = "Saiba Mais";
      }
    },
    Saber() {
      this.Know = !this.Know;
      if (this.Know == true) {
        this.SKnow = this.SKnow.replace("Mais", "Menos");
      } else {
        this.SKnow = "Saiba Mais";
      }
    },
  },
};
</script>
<style scoped>
/* Animate */
.my-element {
  display: inline-block;
  margin: 0 0.5rem;

  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 10s; /* don't forget to set a duration! */
}
.animate__animated.animate__bounce {
  --animate-duration: 21s;
}

/* This changes all the animations globally */
:root {
  --animate-duration: 800ms;
  --animate-delay: 0.9s;
}
h1 {
  text-align: left;
  margin-left: 4%;
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
#background-black {
  /* padding: 5%; */
  background-color: rgb(46, 45, 45);
  color: #fff;
  position: relative;
}
#background-black::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: url("../assets/imgs/img39.jpg") no-repeat center center fixed;
  background-size: cover;
  filter: brightness(20%);
}
.BackgroundBlackTexto {
  text-align: justify;
  font-size: 19px;
  line-height: 1.5;
  width: 100%;
}
.tabelasBracas {
  margin: auto;
  padding: 7% 9%;
}
.centro {
  margin: auto !important;
}
.BackgroundBlackwhite {
  width: 90% !important;
  background-color: #fff;
  height: 260px;
  margin: 2% auto;
  color: black;
  border-radius: 10px;
}
.BackgroundBlackwhite1 {
  width: 90% !important;
  background-color: #fff;
  height: 280px;
  margin: 2%;
  color: black;
  border-radius: 10px;
}
.BackgroundBlackwhiteVisao {
  width: 90% !important;
  background-color: #fff;
  height: 260px;
  margin: 2% auto !important;
  color: black;
  border-radius: 10px 10px 0px 0px;
}
.BackgroundBlackwhiteVisao1 {
  width: 90% !important;
  background-color: #fff;
  height: auto;
  margin: 2% auto !important;
  color: black;
  border-radius: 10px 10px 0px 0px;
}

.missao-visao-valor {
  transition: 0.3s;
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
  height: 80px;
  width: 80px;
  /* filter: invert(68%) sepia(23%) saturate(3809%) hue-rotate(359deg)
    brightness(101%) contrast(106%); */
  filter: invert(99%) sepia(0%) saturate(3800%) hue-rotate(239deg)
    brightness(115%) contrast(100%);
  background-color: #e6c4c8;
  border-radius: 100px;
  padding: 4%;
  margin-bottom: 4% !important;
}
.IconDiv {
  margin-top: -40px;
  height: 80px;
  margin-bottom: 3%;
}
.IconDiv2 {
  margin-top: -40px;
  height: 80px;
  margin-bottom: 2%;
}
.IconDiv3 {
  margin-top: -40px;
  height: 80px;
  margin-bottom: 3%;
}
.titulo {
  margin: auto;
}
.titulo2 {
  margin: auto;
}
.titulo3 {
  margin: auto;
  margin-top: -35px;
}
.Texto {
  font-size: 0.8rem;
  text-align: justify;
}
.Texto2 {
  /* margin-top: 25px; */
  font-size: 0.8rem;
  text-align: justify;
}
.Texto3 {
  margin-top: -45px;
  font-size: 0.8rem;
  text-align: justify;
}
#dataaos {
  margin-top: -5%;
  background-color: #8cb560 !important;
  height: 150px;
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

a {
  cursor: pointer;
}
@font-face {
  font-family: "Gotham";
  src: local("Fonts"), url(../assets/Fonts/GothamBold.otf) format("truetype");
}
@media only screen and (max-width: 600px) {
  #TituloAngLessH1 {
    font-size: 35px !important;
  }
  .BackgroundBlackwhite {
    background-color: #fff;
    height: 250px;
    margin: 50px auto;
    color: black;
    border-radius: 10px;
  }
  .BackgroundBlackwhite1 {
    background-color: #fff;
    margin: 50px auto;
    color: black;
    border-radius: 10px;
  }
}
</style>