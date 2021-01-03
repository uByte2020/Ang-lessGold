<template>
  <div id="Produto" class="container">
    <div class="row">
      <div class="col-lg-12 col-sm-12 col-xl-12 col-md-12">
        <h3>Explores os Nossos Produtos</h3>
      </div>
      <div class="col-lg-3 col-sm-12 col-xl-3 col-md-3">
        <div class="row links">
          <div class="col-lg-12 col-sm-4 col-xl-12 col-md-12">
            <a href="#pereciveis" @click="AlimentosClick()">Pereciveis</a>
          </div>
          <div class="col-lg-12 col-sm-4 col-xl-12 col-md-12">
            <a href="#Npereciveis" @click="AlimentoClick()">Não Pereciveis</a>
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
              <img src="@/assets/imgs/img6.jpg" class="img-fluid" alt="Mucua" />
              <figcaption>Mucua</figcaption>
            </figure>
          </div>
          <div class="col-4">
            <figure>
              <img src="@/assets/imgs/img6.jpg" class="img-fluid" alt="Mucua" />
              <figcaption>Mucua</figcaption>
            </figure>
          </div>
          <div class="col-4">
            <figure>
              <img src="@/assets/imgs/img6.jpg" class="img-fluid" alt="Mucua" />
              <figcaption>Mucua</figcaption>
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
              <img src="@/assets/imgs/img10.png" class="img-fluid" alt="Mucua" />
              <figcaption>Mucua</figcaption>
            </figure>
          </div>
          <div class="col-4">
            <figure>
              <img src="@/assets/imgs/img10.png" class="img-fluid" alt="Mucua" />
              <figcaption>Mucua</figcaption>
            </figure>
          </div>
          <div class="col-4">
            <figure>
              <img src="@/assets/imgs/img10.png" class="img-fluid" alt="Mucua" />
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
  border-left: 2px solid #f8ce00;
  color: #f8ce00;
  text-decoration: none;
}
</style>