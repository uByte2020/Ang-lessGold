<template>
  <div id="Produtos">
    <NavbarPrinc />
    <div class="container-fluid">
      <div class="row">
        <TitleBar title="Produtos" :bgImg="titleBarBgImg" pageClass="produto-page"></TitleBar>
        <div class="content">
          <div class="row produtos-content">
            <ProductItem v-for="(produto, index) in produtos" :product="produto"  :key="index"/>
          </div>
          <div class="overflow-auto">
            <div>
              <b-pagination id="customPagination" class="customPagination" variant="success" v-model="currentPage" pills :total-rows="rows" align="right" :per-page="perPage"></b-pagination>
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
import RecebaNovidades from "../components/RecebaNovidades";
import Footer from "../components/Footer";
import ProductItem from "../components/Produto/ProductItem";
import produtosJson from '@/data/produtos.json'; 

export default {
  name: "Produtos",
  components: {
    NavbarPrinc,
    RecebaNovidades,
    Footer,
    ProductItem,
    TitleBar
  },
  data() {
    return {
      perPage:8,
      currentPage: 1,
      allProducts: produtosJson,
      produtos: [],
      rows:1,
      titleBarBgImg:"img34.jpg",
      start:0,
      end:0
    };
  },
  mounted(){
    this.rows = this.allProducts.length;
    this.setProducts(this.currentPage);
  },
  watch:{
    currentPage: function(current){
      this.setProducts(current);
    }
  },
  methods:{
    setProducts(current){
      let temp = current*this.perPage;
      this.start = this.perPage*(current-1);
      this.end = this.rows <= temp ? this.rows : temp;
      this.produtos = this.allProducts.slice(this.start, this.end)
      console.log(this.start, this.end)
    },
    
  }
};
</script>
<style scoped>

#customPagination .page-item .page-item{
  background-color: red!important;
    border-color: red!important;
    position: static!important;
}

.produtos-content{
  justify-content: flex-start;
  display: flex;
}

.content::before{
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  top:0;
  left: 0;
  background: url('../assets/imgs/img4.jpg') center center;
  filter: opacity(.3);
}

.content{
    position: relative;
    padding: 35px;
    width: 100%;
}

h3 {
  font-size: 20px;
  color: #000;
}
a {
  color: #8cb560;
}

</style>