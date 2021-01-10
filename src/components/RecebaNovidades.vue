<template>
  <div class="container-fluid" id="RecebaNovidades">
    <div class="row">
      <div class="col-12" >
        <div class="row RecebaNovidadesTexto">
          <div class="container">
            <div class="row">
              <div class="col-lg-7 col-xl-7 col-sm-12 col-md-7">
                <h2 class="RecebaNovidadesTitulo">Receba Novidades</h2>
                <p class="RecebaNovidadesTexto2">
                  Cadraste o seu email e receba novidades da ANG LESS GOLD
                </p>
              </div>
              <div class="col-lg-5 col-xl-5 col-sm-12 col-md-5" id="inputT">
                <input type="text" class="form-control" placeholder="E-mail" />
                <button
                  type="button"
                  id="button"
                  class="btn btn-sm btn-success"
                >
                  <b-icon
                    icon="arrow-right"
                    font-scale="1"
                    variant="default"
                  ></b-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#RecebaNovidades {
  color: #fff;
  -moz-color: #fff;
  -ms-color: #fff;
  -webkit-color: #fff;
  background-color: #68aa38;
  -moz-background-color: #68aa38;
  -ms-background-color: #68aa38;
  -webkit-background-color: #68aa38;
  text-align: center;
  -moz-text-align: center;
  -ms-text-align: center;
  -webkit-text-align: center;
  width: 100% !important;
}
.RecebaNovidadesTexto {
  padding: 6% 7% 4% 7% !important;
  -moz-padding: 6% 7% 4% 7% !important;
  -ms-padding: 6% 7% 4% 7% !important;
  -webkit-padding: 6% 7% 4% 7% !important;
  text-align: left !important;
  -moz-text-align: left !important;
  -ms-text-align: left !important;
  -webkit-text-align: left !important;
}
.RecebaNovidadesTitulo {
  font-family: "Josefin";
  -moz-font-family: "Josefin";
  -ms-font-family: "Josefin";
  -webkit-font-family: "Josefin";
  font-size: 60px;
  -moz-font-size: 60px;
  -ms-font-size: 60px;
  -webkit-font-size: 60px;
}
.RecebaNovidadesTexto2 {
  font-size: 24px;
  -moz-font-size: 24px;
  -ms-font-size: 24px;
  -webkit-font-size: 24px;
  font-family: "Segoe";
  -moz-font-family: "Segoe";
  -ms-font-family: "Segoe";
  -webkit-font-family: "Segoe";
}
input {
  border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -webkit-border-radius: 25px;
  text-align: center;
  -moz-text-align: center;
  -ms-text-align: center;
  -webkit-text-align: center;
  font-size: 16px;
  -moz-font-size: 16px;
  -ms-font-size: 16px;
  -webkit-font-size: 16px;
  padding: 5%;
  -moz-padding: 5%;
  -ms-padding: 5%;
  -webkit-padding: 5%;
  width: 100%;
  -moz-width: 100%;
  -ms-width: 100%;
  -webkit-width: 100%;
}
#inputT {
  margin-top: 2% !important;
  -moz-margin-top: 2% !important;
  -ms-margin-top: 2% !important;
  -webkit-margin-top: 2% !important;
}
#button {
  margin-top: -70px !important;
  -moz-margin-top: -70px !important;
  -ms-margin-top: -70px !important;
  -webkit-margin-top: -70px !important;
  margin-left: 88%;
  -moz-margin-left: 88%;
  -ms-margin-left: 88%;
  -webkit-margin-left: 88%;
  color: #fff !important;
  -moz-color: #fff !important;
  -ms-color: #fff !important;
  -webkit-color: #fff !important;
  background-color: rgb(53, 138, 53);
  -moz-background-color: rgb(53, 138, 53);
  -ms-background-color: rgb(53, 138, 53);
  -webkit-background-color: rgb(53, 138, 53);
  border-radius: 100px;
  -moz-border-radius: 100px;
  -ms-border-radius: 100px;
  -webkit-border-radius: 100px;
}
@media only screen and (max-width: 300px){
.RecebaNovidadesTitulo {
  font-family: "Josefin";
  -moz-font-family: "Josefin";
  -ms-font-family: "Josefin";
  -webkit-font-family: "Josefin";
  font-size: 40px;
  -moz-font-size: 60px;
  -ms-font-size: 60px;
  -webkit-font-size: 60px;
}
}
</style>