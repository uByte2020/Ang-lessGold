<template>
  <div id="Produto" class="container">
    <div class="row">
      <div class="col-lg-12 col-sm-12 col-xl-12 col-md-12">
        <h2>Explores os Nossos Produtos</h2>
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
        <a href="#" id="VerTodos">VER TODOS PRODUTOS</a>
      </div>
      <div class="col-lg-3 col-sm-12 col-xl-3 col-md-3">
        <div class="row links">
          <div class="col-lg-12 col-sm-4 col-xl-12 col-md-12" id="LinkCor">
            <a
              href="#Produto"
              :class="{ active: Alimentos, LinkActive: 'Link' }"
              id="Link1"
              @click="AlimentosClick()"
              >Pereciveis</a
            >
          </div>
          <div class="col-lg-12 col-sm-4 col-xl-12 col-md-12">
            <a href="#Produto" id="Link2" @click="AlimentosClick()"
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
                src="@/assets/imgs/products/img14.jpg"
                class="img-fluid img"
                alt="Mucua"
              />
              <figcaption>
                <h6>Farinha</h6>
                <p><small>Preço</small></p>
              </figcaption>
            </figure>
          </div>
          <div class="col-lg-4 col-sm-12 col-xl-4 col-md-4 DivImg">
            <figure>
              <img
                src="@/assets/imgs/products/img18.jpg"
                class="img-fluid img"
                alt="Mucua"
              />
              <figcaption>
                <h6>Bacalhau - Posta / Inteiro</h6>
                <p><small>Preço</small></p>
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
                <h6>Múcua</h6>
                <p><small>Preço</small></p>
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
                src="@/assets/imgs/products/img10.png"
                class="img-fluid img"
                alt="Mucua"
              />
              <figcaption>
                <h6>Chouriço</h6>
                <p><small>Preço</small></p>
              </figcaption>
            </figure>
          </div>
          <div class="col-lg-4 col-sm-12 col-xl-4 col-md-4 DivImg">
            <figure>
              <img
                src="@/assets/imgs/products/img10.png"
                class="img-fluid img"
                alt="Mucua"
              />
              <figcaption>
                <h6>Chouriço</h6>
                <p><small>Preço</small></p>
              </figcaption>
            </figure>
          </div>
          <div class="col-lg-4 col-sm-12 col-xl-4 col-md-4 DivImg">
            <figure>
              <img
                src="@/assets/imgs/products/img10.png"
                class="img-fluid img"
                alt="Mucua"
              />
              <figcaption>
                <h6>Chouriço</h6>
                <p><small>Preço</small></p>
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
      this.Alimentos = !this.Alimentos;
      const Cor = document.getElementById("Link1");
      const Cor2 = document.getElementById("Link2");
      if (this.Alimentos == true) {
        Cor.style.color = "#f8ce00";
        Cor.style.borderLeft = "2px solid #f8ce00";
        Cor.style.marginLeft = "-8%";
        Cor.style.paddingLeft = "4%";
        Cor.style.fontSize = "16px";
        Cor2.style.color = " #707070";
        Cor2.style.borderLeft = "0";
        Cor2.style.marginLeft = "-8%";
        Cor2.style.paddingLeft = "8%";
        Cor2.style.fontSize = "16px";
      } else {
        Cor2.style.color = "#f8ce00";
        Cor2.style.borderLeft = "2px solid #f8ce00";
        Cor2.style.marginLeft = "-8%";
        Cor2.style.paddingLeft = "4%";
        Cor.style.color = " #707070";
        Cor.style.borderLeft = "0";
        Cor.style.marginLeft = "-8%";
        Cor.style.paddingLeft = "8%";
      }
    },
  },
};
</script>
<style scoped>
/* @font-face {
  font-family: "Josefin-SemiBold";
  src: local("Fonts"),
    url(../assets/Fonts/josefin-sans.semibold.ttf) format("truetype");
} */
small{
  color: #f8ce00;
}
h3 {
  font-family: "Josefin";
  -moz-font-family: "Josefin";
  -ms-font-family: "Josefin";
  -webkit-font-family: "Josefin";
}
#Produto {
  padding: 6%;
  -moz-padding: 6%;
  -ms-padding: 6%;
  -webkit-padding: 6%;
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
}
.LinkActive {
  font-size: 16px;
  color: #f8ce00;
  -moz-color: #f8ce00;
  -ms-color: #f8ce00;
  -webkit-color: #f8ce00;
  border-left: 2px solid #f8ce00;
  -moz-border-left: 2px solid #f8ce00;
  -ms-border-left: 2px solid #f8ce00;
  -webkit-border-left: 2px solid #f8ce00;
  margin-left: -8%;
  -moz-margin-left: -8%;
  -ms-margin-left: -8%;
  -webkit-margin-left: -8%;
  padding-left: 8%;
  -moz-padding-left: 8%;
  -ms-padding-left: 8%;
  -webkit-padding-left: 8%;
}
.LinkActive:hover {
  color: #68aa38 !important;
  -moz-color: #68aa38;
  -ms-color: #68aa38;
  -webkit-color: #68aa38;
  border-left: 2px solid #f8ce00 !important;
  -moz-border-left: 2px solid #f8ce00;
  -ms-border-left: 2px solid #f8ce00;
  -webkit-border-left: 2px solid #f8ce00;
  margin-left: -8%;
  -moz-margin-left: -8%;
  -ms-margin-left: -8%;
  -webkit-margin-left: -8%;
  padding-left: 8%;
  -moz-padding-left: 8%;
  -ms-padding-left: 8%;
  -webkit-padding-left: 8%;
}
#Link2:hover {
  color: #68aa38 !important;
  -moz-color: #68aa38;
  -ms-color: #68aa38;
  -webkit-color: #68aa38;
  border-left: 2px solid #f8ce00 !important;
  -moz-border-left: 2px solid #f8ce00;
  -ms-border-left: 2px solid #f8ce00;
  -webkit-border-left: 2px solid #f8ce00;
  color: #68aa38 !important;
  margin-left: -8%;
  -moz-margin-left: -8%;
  -ms-margin-left: -8%;
  -webkit-margin-left: -8%;
  padding-left: 8%;
  -moz-padding-left: 8%;
  -ms-padding-left: 8%;
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
  color: #000;
  -moz-color: #000;
  -ms-color: #000;
  -webkit-color: #000;
  text-decoration: none;
  -moz-text-decoration: none;
  -ms-text-decoration: none;
  -webkit-text-decoration: none;
}
a:active {
}
.img {
  height: 150px;
  -moz-height: 150px;
  -ms-height: 150px;
  -webkit-height: 150px;
  width: auto;
  -moz-width: auto;
  -ms-width: auto;
  -webkit-width: 100%;
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
  height: 100%;
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
}
figure:hover {
  transform: scale(1.2);
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
  -moz-color:  #68aa38;
  -ms-color:  #68aa38;
  -webkit-color:  #68aa38;
  text-decoration: 1px  #68aa38;
  -moz-text-decoration: 1px  #68aa38;
  -ms-text-decoration: 1px  #68aa38;
  -webkit-text-decoration: 1px  #68aa38;
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
}
</style>