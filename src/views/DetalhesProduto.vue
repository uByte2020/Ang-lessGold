<template>
  <div>
    <NavbarPrinc />
    <div class="container-fluid">
      <div class="row">
        <TitleBar title="Detalhe do Produto" :bgImg="titleBarBgImg" pageClass="produto-page"></TitleBar>
        <div class="col-12" id="AlimentoBacalhau">
          <div class="row">
            <div class="col-12 ColorTextoH2">
              <h2>
                <router-link class="ColorLinkTextoH2" to="/Produtos"
                  >Todos os Produtos
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
                </router-link
                >
                
              </h2>
            </div>
            <div class="content">
              <div class="row content-row">
                <detalhe-produto-item v-for="(produto, index) in getSubProduto" :product="produto"  :key="index"/>
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
import TitleBar from "../components/TitleBar";
import DetalheProdutoItem from "../components/detalheProduto/DetalheProdutoItem";
import RecebaNovidades from "../components/RecebaNovidades";
import Footer from "../components/Footer";
export default {
  name: "DetalhesProduto",
  components: { NavbarPrinc,TitleBar, DetalheProdutoItem,RecebaNovidades, Footer },
  props: {
    _id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      produto: {},
      titleBarBgImg:"img34.jpg",
    };
  },
  mounted() {
    this.$store.dispatch("setProducts");
    this.produto = this.getProducts.filter((prod) => prod._id == this._id)[0];
  },
  computed: {
    getProducts() {
      return this.$store.getters.getProducts;
    },
    getSubProduto() {
      return this.produto.hasSubProdutos
        ? this.produto.subProdutos
        : [this.produto];
    },
  },
};
</script>
<style scoped>

.content{
  width: 100%;
}

.content-row{
  margin-left: 0!important;
  margin-right: 0!important;
}

.ColorTextoH2 {
  text-align: left !important;
  margin: 1% auto;
}
.ColorLinkTextoH2 {
  color: #8cb560;
  font-size: 1.4rem;
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
  height: 2.5px;
  width: 190px;
}
.ProgressCor1 {
  background-color: #8cb560 !important;
  -moz-background-color: #8cb560 !important;
  -ms-background-color: #8cb560 !important;
  -webkit-background-color: #8cb560 !important;
}
.img {
  height: auto !important;
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
#AlimentoBacalhau {
  position: relative;
}
#AlimentoBacalhau::before {
  content: "";
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  position: absolute;
  background: url("../assets/imgs/img4.jpg") no-repeat center center;
  -moz-background: url("../assets/imgs/img4.jpg") no-repeat center center;
  -ms-background: url("../assets/imgs/img4.jpg") no-repeat center center;
  -webkit-background: url("../assets/imgs/img4.jpg") no-repeat center center;
  background-size: 100% 120%;
  -moz-background-size: 100% 120%;
  -ms-background-size: 100% 120%;
  -webkit-background-size: 100% 150%;
  filter: opacity(0.1);
  -moz-filter: opacity(0.1);
  -ms-filter: opacity(0.1);
  -webkit-filter: opacity(0.1);
}
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