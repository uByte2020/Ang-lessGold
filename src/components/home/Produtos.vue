<template>
  <div id="Produto" class="container">
    <div class="row">
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
        <!-- <a href="#" ></a> -->
      </div>
      <div class="col-lg-2 col-sm-12 col-xl-2 col-md-3" id="links">
        <div class="row links">
          <div class="col-lg-12 col-sm-4 col-xl-12 col-md-12" id="LinkCor">
            <a
              href="#Produto"
              :class="{ LinkActive: !Alimentos, LinkActive: Alimentos }"
              @click="AlimentosClick()"
              >Pereciveis</a
            >
          </div>
          <div class="col-lg-12 col-sm-4 col-xl-12 col-md-12">
            <a
              href="#Produto"
              :class="{ LinkActive: Alimentos, LinkActive: !Alimentos }"
              @click="AlimentosClick()"
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
        <div class="row">
          <div class="col-lg-4 col-sm-12 col-xl-4 col-md-4 DivImg">
            <figure>
              <img
                src="@/assets/imgs/products/img10.png"
                class="img-fluid img"
                alt="Chouriço"
              />
              <figcaption>
                <h6 class="explore-prod">Chouriço</h6>
                <p class="preco">Preço</p>
              </figcaption>
            </figure>
          </div>
          <div class="col-lg-4 col-sm-12 col-xl-4 col-md-4 DivImg">
            <figure>
              <img
                src="@/assets/imgs/products/img1.jpeg"
                class="img-fluid img"
                alt="Chispe"
              />
              <figcaption>
                <h6 class="explore-prod">Chispe</h6>
                <p class="preco">Preço</p>
              </figcaption>
            </figure>
          </div>
          <div class="col-lg-4 col-sm-12 col-xl-4 col-md-4 DivImg">
            <figure>
              <img
                src="@/assets/imgs/products/img17.jpg"
                class="img-fluid img"
                alt="Carne"
              />
              <figcaption>
                <h6 class="explore-prod">Carne</h6>
                <p class="preco">Preço</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div
        class="col-lg-9 col-sm-12 col-xl-9 col-md-9 DivImg"
        id="Npereciveis"
        v-show="Alimentos == false"
      >
        <div class="row">
          <div class="col-lg-4 col-sm-12 col-xl-4 col-md-4 DivImg">
            <figure>
              <img
                src="@/assets/imgs/products/img14.jpg"
                class="img-fluid img"
                alt="Farinha Musseque"
              />
              <figcaption>
                <h6 class="explore-prod">Farinha Musseque</h6>
                <p class="preco">Preço</p>
              </figcaption>
            </figure>
          </div>
          <div class="col-lg-4 col-sm-12 col-xl-4 col-md-4 DivImg">
            <figure>
              <img
                src="@/assets/imgs/products/img18.jpg"
                class="img-fluid img"
                alt="Peixe Seco"
              />
              <figcaption>
                <h6 class="explore-prod">Peixe Seco</h6>
                <p class="preco">Preço</p>
              </figcaption>
            </figure>
          </div>
          <div class="col-lg-4 col-sm-12 col-xl-4 col-md-4 DivImg">
            <figure>
              <img
                src="@/assets/imgs/products/img6.jpg"
                class="img-fluid img"
                alt="Mucua"
              />
              <figcaption>
                <h6 class="explore-prod">Múcua</h6>
                <p class="preco">Preço</p>
              </figcaption>
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
      return (this.Alimentos = !this.Alimentos);
      // const Cor = document.getElementById("Link1");
      // const Cor2 = document.getElementById("Link2");
      // if (this.Alimentos == true) {
      //   Cor.style.color = "#68aa38";
      //   Cor.style.borderLeft = "2px solid #68aa38";
      //   Cor.style.marginLeft = "-12%";
      //   Cor.style.paddingLeft = "4%";
      //   Cor.style.fontSize = "1.2rem";
      //   Cor2.style.color = " #707070";
      //   Cor2.style.borderLeft = "0";
      //   Cor2.style.marginLeft = "-8%";
      //   Cor2.style.paddingLeft = "8%";
      //   Cor2.style.fontSize = "1.2rem";
      // } else {
      //   Cor2.style.color = "#68aa38";
      //   Cor2.style.borderLeft = "2px solid #68aa38";
      //   Cor2.style.marginLeft = "-12%";
      //   Cor2.style.paddingLeft = "4%";
      //   Cor.style.color = " #707070";
      //   Cor.style.borderLeft = "0";
      //   Cor.style.marginLeft = "-8%";
      //   Cor.style.paddingLeft = "8%";
      // }
    },
  },
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
  margin-left: -12%;
  padding-left: 8%;
  -moz-padding-left: 8%;
  -ms-padding-left: 8%;
  -webkit-padding-left: 8%;
}
.LinkActive:hover {
  color: #f8ce00 !important;
  -moz-color: #f8ce00;
  -ms-color: #f8ce00;
  -webkit-color: #f8ce00;
  border-left: 2px solid #f8ce00 !important;
  -moz-border-left: 2px solid #f8ce00;
  -ms-border-left: 2px solid #f8ce00;
  -webkit-border-left: 2px solid #f8ce00;
  margin-left: -12% !important;
  -webkit-margin-left: -8%;
  padding-left: 8%;
  -moz-padding-left: 8%;
  -ms-padding-left: 8%;
  -webkit-padding-left: 8%;
}
#Link2:hover {
  color: #f8ce00 !important;
  -moz-color: #f8ce00;
  -ms-color: #f8ce00;
  -webkit-color: #f8ce00;
  border-left: 2px solid #f8ce00 !important;
  -moz-border-left: 2px solid #f8ce00;
  -ms-border-left: 2px solid #f8ce00;
  -webkit-border-left: 2px solid #f8ce00;
  margin-left: -12% !important;
  padding-left: 8%;
  -webkit-padding-left: 8%;
}
a {
  /* color: #707070!important;
  -moz-color: #000;
  -ms-color: #000;
  -webkit-color: #000; */
  text-decoration: none;
  -moz-text-decoration: none;
  -ms-text-decoration: none;
  -webkit-text-decoration: none;
  background-color: transparent;
  -moz-background-color: transparent;
  -ms-background-color: transparent;
  -webkit-background-color: transparent;
}
a:active,
a:hover,
a:focus {
  color: #f8ce00 !important;
  -moz-color: #f8ce00;
  -ms-color: #f8ce00;
  -webkit-color: #f8ce00;
  border-left: 2px solid #f8ce00 !important;
  -moz-border-left: 2px solid #f8ce00;
  -ms-border-left: 2px solid #f8ce00;
  -webkit-border-left: 2px solid #f8ce00;
  margin-left: -12% !important;
  -webkit-margin-left: -8%;
  padding-left: 8%;
  -moz-padding-left: 8%;
  -ms-padding-left: 8%;
  -webkit-padding-left: 8%;
  text-decoration: none;
  -moz-text-decoration: none;
  -ms-text-decoration: none;
  -webkit-text-decoration: none;
}
a:active {
}
.img {
  height: 155px;
  width: 100%;
  object-fit: cover;
  -moz-object-fit: cover;
  -ms-object-fit: cover;
  -webkit-object-fit: cover;
  /* box-shadow: 1px 1px 5px gray; */
  border-radius: 7px;
  -moz-border-radius: 7px;
  -ms-border-radius: 7px;
  -webkit-border-radius: 7px;
}
.DivImg {
  margin-top: 2%;
  -moz-margin-top: 2%;
  -ms-margin-top: 2%;
  -webkit-margin-top: 2%;
}
figure {
  height: 90%;
  -moz-height: 100%;
  -ms-height: 100%;
  -webkit-height: 100%;
  width: 200px;
  -moz-width: auto;
  -ms-width: auto;
  -webkit-width: auto;
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
  /* margin-left: 3%; */
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
  -moz-height: 5px;
  -ms-height: 5px;
  -webkit-height: 5px;
  width: 30px;
  -moz-width: 30px;
  -ms-width: 30px;
  -webkit-width: 30px;
  margin-top: 0% !important;
  -moz-margin-top: 0% !important;
  -ms-margin-top: 0% !important;
  -webkit-margin-top: 0% !important;
  margin: 2% 48%;
  -moz-margin: 2% 48%;
  -ms-margin: 2% 48%;
  -webkit-margin: 2% 48%;
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
  color: gray;
  -moz-color: gray;
  -ms-color: gray;
  -webkit-color: gray;
  text-decoration: blue;
  -moz-text-decoration: blue;
  -ms-text-decoration: blue;
  -webkit-text-decoration: blue;
  text-align: right !important;
  -moz-text-align: right !important;
  -ms-text-align: right !important;
  -webkit-text-align: right !important;
  margin-left: 80%;
  -moz-margin-left: 80%;
  -ms-margin-left: 80%;
  -webkit-margin-left: 80%;
}
#VerTodos:hover {
  color: #68aa38;
  -moz-color: #68aa38;
  -ms-color: #68aa38;
  -webkit-color: #68aa38;
  text-decoration: 1px #68aa38;
  -moz-text-decoration: 1px #68aa38;
  -ms-text-decoration: 1px #68aa38;
  -webkit-text-decoration: 1px #68aa38;
}
a {
  color: #707070;
}
a:active {
  color: #f8ce00;
}
a:hover {
  /* color: #68aa38; */
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
    margin: auto;
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
  a:hover,
  a:active,
  a:focus,
  .LinkActive:hover {
    font-size: 1.2rem;
    color: #f8ce00;
    border-left: 2px solid #68aa38;
    margin-left: -17px!important;
    padding-left: 8%;
  }
}
</style>