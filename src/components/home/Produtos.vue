<template>
  <div id="Produto" class="container">
    <div class="row">
      <div class="col-lg-12 col-sm-12 col-xl-12 col-md-12">
        <h3>Explores os Nossos Produtos</h3>
      </div>
      <div class="col-lg-3 col-sm-12 col-xl-3 col-md-3">
        <div class="row links">
          <div class="col-lg-12 col-sm-4 col-xl-12 col-md-12">
            <a href="#Produto" @click="AlimentosClick()">Pereciveis</a>
          </div>
          <div class="col-lg-12 col-sm-4 col-xl-12 col-md-12">
            <a href="#Produto" @click="AlimentoClick()">Não Pereciveis</a>
          </div>
        </div>
      </div>
      <div
        class="col-lg-9 col-sm-12 col-xl-9 col-md-9"
        id="pereciveis"
        v-show="Alimentos == true"
      >
        <div class="row">
          <div class="col-4">
            <figure>
              <img src="@/assets/imgs/img14.jpg" class="img-fluid img" alt="Mucua" />
              <figcaption>Fuba de Milho</figcaption>
            </figure>
          </div>
          <div class="col-4">
            <figure>
              <img src="@/assets/imgs/img18.jpg" class="img-fluid img" alt="Mucua" />
              <figcaption>Bacalhau - Posta / Inteiro</figcaption>
            </figure>
          </div>
          <div class="col-4">
            <figure>
              <img src="@/assets/imgs/img6.jpg" class="img-fluid img" alt="Mucua" />
              <figcaption>Múcua</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div
        class="col-lg-9 col-sm-12 col-xl-9 col-md-9"
        id="Npereciveis"
        v-show="Alimentos == false"
      >
        <div class="row">
          <div class="col-4">
            <figure>
              <img src="@/assets/imgs/img10.png" class="img-fluid img" alt="Mucua" />
              <figcaption>Mucua</figcaption>
            </figure>
          </div>
          <div class="col-4">
            <figure>
              <img src="@/assets/imgs/img10.png" class="img-fluid img" alt="Mucua" />
              <figcaption>Mucua</figcaption>
            </figure>
          </div>
          <div class="col-4">
            <figure>
              <img src="@/assets/imgs/img10.png" class="img-fluid img" alt="Mucua" />
              <figcaption>Mucua</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Alimentos: true,
    };
  },
  methods: {
    AlimentosClick() {
      this.Alimentos = true;
    },
    AlimentoClick() {
      this.Alimentos = false;
    },
  },
};
</script>
<style scoped>
h3{
  font-family: "Josefin";
}
#Produto {
  padding: 6%;
}
.links {
  border-left: 1px solid gray;
}
a {
  color: #000;
  text-decoration: none;
  background-color: transparent;
}
a:active,
a:hover,
a:focus {
  color: #000;
  text-decoration: none;
}
a:active{
  color: #f8ce00;
  border-left: 2px solid #f8ce00;
  padding: 2%;
}
.img{
  height: 150px;
  width: 90%;
  box-shadow: 1px 1px 5px gray;
}
figcaption{
  margin:1% auto;
  /* margin-left: 3%; */
  height: 10%;
  width: 90%;
  padding: 4%;
  box-shadow: 1px 1px 5px gray;
}
</style>