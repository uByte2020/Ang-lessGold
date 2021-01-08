<template>
  <div>
    <NavbarPrinc />
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 ProdutoTitulo">
                <h1 class="ProdutoTituloH1">Produtos</h1>
            </div>
            <div class="col-12">
                <h2></h2>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import NavbarPrinc from "../components/NavbarPrinc";
export default {
  name: "ProdutoPage1",
  components: { NavbarPrinc },
};
</script>
<style scoped>
.ProdutoTitulo{
    text-align: left;
    background-color: #8cb560 ;
    padding: 2% 7%;
}
.ProdutoTituloH1{
    text-align: left;
    color: #fff;
}
</style>