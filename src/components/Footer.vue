<template>
  <div class="container-fluid">
    <div class="row">
      <footer class="col-12">
        <div class="row footer">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <img src="../assets/imgs/img32.png" alt="Logo" />
              </div>
              <div class="col-lg-3 col-xl-3 col-sm-12 col-md-3 footerMarg">
                <h5>Endereço</h5>
                <div class="progress progress2">
                  <div
                    class="progress-bar progressCor"
                    role="progressbar"
                    style="width: 100%"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="10"
                  ></div>
                </div>
                <p>Estranda da Mendanha</p>
                <p>Nº 25 Bloco 4 - 4 C</p>
                <p>Parque norte</p>
                <p>2580-588 Carregando</p>
              </div>
              <div class="col-lg-3 col-xl-3 col-sm-12 col-md-3 footerMarg">
                <h5>Contactos</h5>
                <div class="progress progress2">
                  <div
                    class="progress-bar progressCor"
                    role="progressbar"
                    style="width: 100%"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="10"
                  ></div>
                </div>
                <p>
                  <img
                    src="../assets/svg/Portugal.svg"
                    alt="imagem-Angola"
                    class="img-fluid IMG1"
                  />
                  <b-icon
                    icon="telephone"
                    font-scale="1"
                    variant="default"
                  ></b-icon>
                  +351 935 348 752
                </p>

                <p>
                  <img
                    src="../assets/svg/Angola.svg"
                    alt="imagem-Angola"
                    class="img-fluid IMG1"
                  />
                  <b-icon
                    icon="telephone"
                    font-scale="1"
                    variant="default"
                  ></b-icon>
                  +244 948 005 815
                </p>

                <b-icon icon="facebook" variant="default" class="icon"></b-icon
                ><b-icon
                  icon="instagram"
                  class="icon"
                  variant="default"
                ></b-icon>
              </div>
              <div class="col-lg-3 col-xl-3 col-sm-12 col-md-3 footerMarg">
                <h5>Informação</h5>
                <div class="progress progress2">
                  <div
                    class="progress-bar progressCor"
                    role="progressbar"
                    style="width: 100%"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="10"
                  ></div>
                </div>
                <p>Quem Somos</p>
                <p>Contactos</p>
                <p>Politicas e Privacidades</p>
              </div>
              <div class="col-lg-3 col-xl-3 col-sm-12 col-md-3 footerMarg">
                <h5>Menu</h5>
                <div class="progress progress2">
                  <div
                    class="progress-bar progressCor"
                    role="progressbar"
                    style="width: 100%"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="10"
                  ></div>
                </div>
                <p>Inicio</p>
                <p>Produtos</p>
                <p>Serviços</p>
              </div>
            </div>
          </div>
        </div>
      <div><small>2018 - ANG LESS GOLD - TODOS DIREITOS RESERVADOS</small> </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
small{
  font-size: 0.7rem;
}
.progress {
  height: 5px;
  -moz-height: 5px;
  -ms-height: 5px;
  -webkit-height: 5px;
  width: 50px;
  -moz-width: 50px;
  -ms-width: 50px;
  -webkit-width: 50px;
}
.progressCor {
  background-color: #f8ce00 !important;
  -moz-background-color: #f8ce00 !important;
  -ms-background-color: #f8ce00 !important;
  -webkit-background-color: #f8ce00 !important;
}
.progress2 {
  height: 5px;
  -moz-height: 5px;
  -ms-height: 5px;
  -webkit-height: 5px;
  width: 30px;
  -moz-width: 30px;
  -ms-width: 30px;
  -webkit-width: 30px;
  margin-bottom: 3%;
  -moz-margin-bottom: 3%;
  -ms-margin-bottom: 3%;
  -webkit-margin-bottom: 3%;
}
.ProgressCor2 {
  background-color: #8cb560 !important;
  -moz-background-color: #8cb560 !important;
  -ms-background-color: #8cb560 !important;
  -webkit-background-color: #8cb560 !important;
}

footer {
  background-color: rgb(54, 54, 54);
  -moz-background-color: rgb(54, 54, 54);
  -ms-background-color: rgb(54, 54, 54);
  -webkit-background-color: rgb(54, 54, 54);
  padding:1% 5%;
  padding-top: 2% !important;
  -moz-padding: 5%;
  -ms-padding: 5%;
  -webkit-padding: 5%;
  color: #fff;
  -moz-color: #fff;
  -ms-color: #fff;
  -webkit-color: #fff;
}
.footer {
  text-align: left;
  -moz-text-align: left;
  -ms-text-align: left;
  -webkit-text-align: left;
}
.footerMarg {
  margin-top: 2%;
  -moz-margin-top: 2%;
  -ms-margin-top: 2%;
  -webkit-margin-top: 2%;
}
.icon {
  margin-right: 6%;
  -moz-margin-right: 6%;
  -ms-margin-right: 6%;
  -webkit-margin-right: 6%;
  margin-top: 6%;
  -moz-margin-top: 6%;
  -ms-margin-top: 6%;
  -webkit-margin-top: 6%;
  color: #f8ce00;
  -moz-color: #f8ce00;
  -ms-color: #f8ce00;
  -webkit-color: #f8ce00;
  background-color: transparent;
  -moz-background-color: transparent;
  -ms-background-color: transparent;
  -webkit-background-color: transparent;
}
.IMG1 {
  width: 10%;
  -moz-width: 10%;
  -ms-width: 10%;
  -webkit-width: 10%;
  height: 10%;
  -moz-height: 10%;
  -ms-height: 10%;
  -webkit-height: 10%;
  margin-right: 3%;
  -moz-margin-right: 3%;
  -ms-margin-right: 3%;
  -webkit-margin-right: 3%;
}
p {
  font-size: 16px;
  -moz-font-size: 16px;
  -ms-font-size: 16px;
  -webkit-font-size: 16px;
}
h6 {
  margin: auto !important;
  margin-top: 4% !important;
}
</style>