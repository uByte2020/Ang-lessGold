<template>
  <div>
    <NavbarPrinc />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 ProdutoTitulo">
          <h1 class="ProdutoTituloH1">Produtos</h1>
        </div>
        <div class="col-12" id="AlimentoBacalhau">
          <div class="row">
            <div class="col-12 ColorTextoH2">
              <h2>
                <router-link class="ColorLinkTextoH2" to=""
                  >Todos os Produtos</router-link
                >
                <div class="progress">
                  <div
                    class="progress-bar ProgressCor1"
                    role="progressbar"
                    style="width: 100%"
                    aria-valuenow="100"
                    aria-valuemin="10"
                    aria-valuemax="100"
                  ></div>
                </div>
              </h2>
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12 imagem">
                  <img
                    src="../assets/imgs/img18.jpg"
                    class="img"
                    alt="Bacalhau Posta"
                  />
                </div>
                <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12 Texto">
                  <h1 class="Bacalhau">Bacalhau Posta/Inteira</h1>
                  <p class="BacalhauTexto">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                  </p>
                  <h4 class="BacalhauH4">
                    Produto proveniente de
                    <img
                      src="../assets/svg/pt.svg"
                      alt="Portugal"
                      class="icon img-fluid"
                    />
                  </h4>
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
import RecebaNovidades from "../components/RecebaNovidades";
import Footer from "../components/Footer";
export default {
  name: "ProdutoPage1",
  components: { NavbarPrinc, RecebaNovidades, Footer },
};
</script>
<style scoped>
.ColorTextoH2 {
  text-align: left !important;
  margin: 5% auto;
}
.ColorLinkTextoH2 {
  color: #8cb560;
}
h2 {
  margin-left: 5%;
}
.ProdutoTitulo {
  text-align: left;
  background-color: #8cb560;
  padding: 2% 7%;
}
.ProdutoTituloH1 {
  text-align: left;
  color: #fff;
}
a:hover {
  text-decoration: none;
}
.progress {
  height: 5px;
  -moz-height: 5px;
  -ms-height: 5px;
  -webkit-height: 5px;
  width: 265px;
  -moz-width: 265px;
  -ms-width: 265px;
  -webkit-width: 265px;
}
.ProgressCor1 {
  background-color: #8cb560 !important;
  -moz-background-color: #8cb560 !important;
  -ms-background-color: #8cb560 !important;
  -webkit-background-color: #8cb560 !important;
}
.img {
  height: 75% !important;
  width: 70%;
  border-radius: 5px;
  box-shadow: 2px 2px 8px #707070;
  object-fit: fill !important;
}
.imagem {
  margin-left: -2%;
}
.Texto {
  text-align: left;
  margin-left: -6%;
  font-family: Josefin;
}
.Bacalhau {
  font-size: 50px;
  color: #000;
}
.BacalhauTexto {
  width: 90%;
  margin: 5% 0% !important;
  line-height: 3;
  font-size: 20px;
  color: #70707070;
}
.BacalhauH4 {
  margin: 25% auto;
  color: #000;
}
.icon {
  height: 30px;
}
#AlimentoBacalhau{
  position: relative;
}
#AlimentoBacalhau::before{
  content: "";
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  position: absolute;
   background: url('../assets/imgs/img4.jpg') no-repeat center center;
  -moz-background: url('../assets/imgs/img4.jpg') no-repeat center center;
  -ms-background: url('../assets/imgs/img4.jpg')no-repeat center center;
  -webkit-background: url('../assets/imgs/img4.jpg') no-repeat center center;
  background-size: 100% 120%;
  -moz-background-size: 100% 120%;
  -ms-background-size: 100% 120%;
  -webkit-background-size: 100% 150%;
  filter:opacity(0.1);
  -moz-filter:opacity(0.1);
  -ms-filter:opacity(0.1);
  -webkit-filter:opacity(0.1);}
@font-face {
  font-family: "Josefin";
  src: local("Fonts"),
    url(../assets/Fonts/josefin-sans.bold.ttf) format("truetype");
}
@media only screen and (max-width: 600px) {
  .Texto {
    text-align: left;
    margin-left: 1%;
    font-family: Josefin;
  }
  .img {
    height: 100% !important;
    width: 100%;
    border-radius: 5px;
    box-shadow: 2px 2px 8px #707070;
    object-fit: fill !important;
  }
  .BacalhauTexto {
    width: 100%;
    margin: 5% 0% !important;
    line-height: 2;
    font-size: 20px;
    color: #70707070;
  }
}
</style>