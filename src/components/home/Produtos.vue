<template>
  <div id="Produto">
    <div class="container">
      <div class="row produto">
        <div class="col-lg-12 col-sm-12 col-xl-12 col-md-12">
          <h2 class="titulo-produto">Explore os Nossos Produtos</h2>
          <div class="progress">
            <div
              class="progress-bar progressCor"
              role="progressbar"
              style="width: 100%"
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="10"
            ></div>
          </div>
        </div>
        <div class="col-12">
          <router-link id="VerTodos" to="/Produtos"
            >VER TODOS PRODUTOS</router-link
          >
        </div>
        <div class="col-lg-2 col-sm-12 col-xl-2 col-md-3" id="links">
          <div class="row links">
            <div class="col-lg-12 col-sm-4 col-xl-12 col-md-12" :class="{ 'link-active': Alimentos }">
              <a
                href="#Produto" class="link-normal" :class="{ 'link-active-a': Alimentos }"
                @click="AlimentosClick(true)"
                >Pereciveis</a
              >
            </div>
            <div class="col-lg-12 col-sm-4 col-xl-12 col-md-12" :class="{ 'link-active': !Alimentos }">
              <a
                href="#Produto" class="link-normal" :class="{ 'link-active-a': !Alimentos }"
                @click="AlimentosClick(false)"
                >Não Pereciveis</a
              >
            </div>
          </div>
        </div>
        <div
          class="col-lg-9 col-sm-12 col-xl-9 col-md-9"
          id="pereciveis"
          v-show="Alimentos === true"
        >
          <div class="row carouselContainer">
            <top-product-item v-for="(produto, index) in getPerecivelProducts" :product="produto"  :key="index"/>
          </div>
        </div>
        <div
          class="col-lg-9 col-sm-12 col-xl-9 col-md-9"
          id="Npereciveis"
          v-show="Alimentos == false"
        >
          <div class="row">
            <top-product-item v-for="(produto, index) in getNotPerecivelProducts" :product="produto"  :key="index"/>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import TopProductItem from "./TopProductItem";
export default {
  components: { TopProductItem },
  data() {
    return {
      Alimentos: true,
      allProducts: [],
    };
  },
  mounted(){
    this.$store.dispatch('setProducts');
    this.allProducts = this.getProducts;
  },
  methods: {
    AlimentosClick(type) {
      this.Alimentos = type;
      return this.Alimentos;
    },
  },
  computed:{
    getPerecivelProducts(){
      return this.allProducts.filter(prod=>prod.isPerecivel && 'top' in prod).sort((a,b)=> a.top - b.top);
    },
    getNotPerecivelProducts(){
      return this.allProducts.filter(prod=>!prod.isPerecivel && 'top' in prod).sort((a,b)=> a.top - b.top);
    },
    getProducts () {
      return this.$store.getters.getProducts;
    }
  }
};
</script>
<style scoped>
@font-face {
  font-family: "JosefiniBold";
  src: local("Fonts"),
    url(../../assets/Fonts/josefin-sans.bold.ttf) format("truetype");
}
.preco {
  color: #f8ce00;
  font-family: "JosefiniBold";
  font-size: 1.08rem;
}
.titulo-produto {
  font-family: "JosefiniBold";
  font-weight: 800;
}
#Produto {
  padding: 6%;
  -moz-padding: 6%;
  -ms-padding: 6%;
  -webkit-padding: 6%;
  position: relative;
  width: 100%;
}
#Produto::before{
  content: "";
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  position: absolute;
  /* background: url('../../assets/imgs/img4.jpg') center center fixed; */
   filter: opacity(.3) brightness(60%);
  -moz-filter: 6%;
  -ms-filter: 6%;
  -webkit-filter: 6%;
}

#Produto .container{
  padding-left: 10%;
  padding-right: 10%;
}

.explore-prod {
  font-size: 1.2rem;
}
#links {
  margin-left: 0.5px !important;
}
.links {
  color: #707070 !important;
  border-left: 3px solid #70707070;
  -moz-border-left: 1px ridge #70707070;
  -ms-border-left: 1px ridge #70707070;
  -webkit-border-left: 1px ridge #70707070;
  text-align: left;
  -moz-text-align: left;
  -ms-text-align: left;
  -webkit-text-align: left;
  margin-right: -30px !important;
  font-family: "JosefiniBold";
  font-size: 1.2rem;
}

.link-normal{
  text-decoration: none;
}


.link-normal:hover{
  color: #68aa38 !important;
}
.link-active-a{
  font-size: 1.2rem;
  color: #68aa38;
}

.link-active{
    margin-left: -1%;
  border-left: 2px solid #68aa38;
}

.LinkActive {
  font-size: 1.2rem;
  color: #68aa38;
  -moz-color: #68aa38;
  -ms-color: #68aa38;
  -webkit-color: #68aa38;
  border-left: 2px solid #68aa38;
  -moz-border-left: 2px solid #68aa38;
  -ms-border-left: 2px solid #68aa38;
  -webkit-border-left: 2px solid #68aa38;
    margin-left: -1%;
}
.LinkActive:hover {
  color: #f8ce00 !important;
  -moz-color: #f8ce00;
  -ms-color: #f8ce00;
  -webkit-color: #f8ce00;
}
#Link2:hover {
  color: #f8ce00 !important;
  -moz-color: #f8ce00;
  -ms-color: #f8ce00;
  -webkit-color: #f8ce00;
}
a {
  text-decoration: none;
  -moz-text-decoration: none;
  -ms-text-decoration: none;
  -webkit-text-decoration: none;
  background-color: transparent;
  -moz-background-color: transparent;
  -ms-background-color: transparent;
  -webkit-background-color: transparent;
}
.LinkCor2:hover{
  color: #f8ce00 !important;
  -moz-color: #f8ce00;
  -ms-color: #f8ce00;
  -webkit-color: #f8ce00;
  text-decoration: none;
  -moz-text-decoration: none;
  -ms-text-decoration: none;
  -webkit-text-decoration: none;
}
.img {
  height: 155px;
  width: 100%;
  object-fit: cover;
  -moz-object-fit: cover;
  -ms-object-fit: cover;
  -webkit-object-fit: cover;
  border-radius: 7px;
  -moz-border-radius: 7px;
  -ms-border-radius: 7px;
  -webkit-border-radius: 7px;
}
.DivImg {
  margin-top: 2%;
  padding-left: 0!important;
  padding-right: 0!important;
}
figure {
  height: 250px;
  -moz-height: 250px;
  -ms-height: 250px;
  -webkit-height: 250px;
  width: 94%;
  -moz-width: 94%;
  -ms-width: 94%;
  -webkit-width: 94%;
  box-shadow: 1px 1px 4px #70707070;
  -moz-box-shadow: 0px 0px 1px gray;
  -ms-box-shadow: 0px 0px 1px gray;
  -webkit-box-shadow: 0px 0px 1px gray;
  border-radius: 7px;
  -moz-border-radius: 7px;
  -ms-border-radius: 7px;
  -webkit-border-radius: 7px;
  margin: 1% auto !important;
  -moz-margin: 1% auto !important;
  -ms-margin: 1% auto !important;
  -webkit-margin: 1% auto !important;
  transition: 0.2s ease-out;
  background-color: #fff;
  cursor: pointer;
}
figure:hover {
  transform: scale(1.08);
  transition: 0.3s;
}
figcaption {
  font-family: "Josefin-SemiBold";
  margin: 1% auto;
  -moz-margin: 1% auto;
  -ms-margin: 1% auto;
  -webkit-margin: 1% auto;
  height: 10%;
  -moz-height: 10%;
  -ms-height: 10%;
  -webkit-height: 10%;
  width: 90%;
  -moz-width: 90%;
  -ms-width: 90%;
  -webkit-width: 90%;
  padding: 4%;
  -moz-padding: 4%;
  -ms-padding: 4%;
  -webkit-padding: 4%;
  color: #707070;
  font-size: 0.8rem;
  /* box-shadow: 1px 1px 5px gray; */
}
.progress {
  height: 5px;
  width: 30px;
  margin-top: 0% !important;
  margin: 0 auto;
}
.progressCor {
  background-color: #68aa38;
  -moz-background-color: #68aa38;
  -ms-background-color: #68aa38;
  -webkit-background-color: #68aa38;
}
#VerTodos {
  font-size: 10px;
  -moz-font-size: 10px;
  -ms-font-size: 10px;
  -webkit-font-size: 10px;
  color: #707070;
  border-bottom: 2px solid #f8ce00;
  /* text-decoration:#f8ce00; */
  text-align: right !important;
  margin-left: 660px;
}
#VerTodos:hover {
  color: #f8ce00!important;
  font-size: 10px;
  -moz-font-size: 10px;
  -ms-font-size: 10px;
  -webkit-font-size: 10px;
  text-align: right !important;
  -moz-text-align: right !important;
  -ms-text-align: right !important;
  -webkit-text-align: right !important;
  margin-left: 660px;
}
a {
  color: #707070;
}
a:active {
  color: #707070;
}
@media only screen and (max-width: 600px) {
  #VerTodos {
    font-size: 10px;
    -moz-font-size: 10px;
    -ms-font-size: 10px;
    -webkit-font-size: 10px;
    color: gray;
    -moz-color: gray;
    -ms-color: gray;
    -webkit-color: gray;
    text-decoration: blue;
    -moz-text-decoration: blue;
    -ms-text-decoration: blue;
    -webkit-text-decoration: blue;
    margin: auto !important;
    -moz-margin: auto;
    -ms-margin: auto;
    -webkit-margin: auto;
  }
  .links {
    border-left: 1px solid #70707070;
    -moz-border-left: 1px ridge #70707070;
    -ms-border-left: 1px ridge #70707070;
    -webkit-border-left: 1px ridge #70707070;
    text-align: left;
    -moz-text-align: left;
    -ms-text-align: left;
    -webkit-text-align: left;
    margin-right: 60px !important;
    color: #70707070 !important;
  }
  .links {
    color: #707070 !important;
    border-left: 3px solid #70707070;
    text-align: left;
    /* margin-right: -30px !important; */
    font-family: "JosefiniBold";
    font-size: 1.2rem;
  }
  .LinkActive {
    font-size: 1.2rem;
    color: #68aa38;
    -moz-color: #68aa38;
    -ms-color: #68aa38;
    -webkit-color: #68aa38;
    border-left: 2px solid #68aa38;
    -moz-border-left: 2px solid #68aa38;
    -ms-border-left: 2px solid #68aa38;
    -webkit-border-left: 2px solid #68aa38;
    margin-left: -17px;
    padding-left: 8%;
    -moz-padding-left: 8%;
    -ms-padding-left: 8%;
    -webkit-padding-left: 8%;
  }
  .LinkActive:hover {
    font-size: 1.2rem;
    color: #f8ce00;
    border-left: 2px solid #68aa38;
    margin-left: -17px!important;
    padding-left: 8%;
  }
}
</style>