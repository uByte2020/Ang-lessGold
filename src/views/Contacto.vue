<template>
  <div id="Contactos">
    <NavbarPrinc />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 ContactoTitulo">
          <h1>CONTACTOS</h1>
        </div>
        <div class="col-12" id="Formulario">
          <div class="row">
            <div class="col-lg-6 col-xl-6 col-sm-12 col-md-6">
              <form action="" method="Post">
                <div class="row">
                  <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label for="Nome">Nome</label>
                      <input type="text" class="form-control" name="Nome" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label for="email">E-mail</label>
                      <input type="email" name="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="Telefone">Telefone</label>
                      <input type="tel" name="Telefone" class="form-control" />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="Mensagem">Mensagem</label>
                      <input
                        type="text-area"
                        name="Mensagem"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-lg-7 col-xl-7 col-sm-12 col-md-7">
                    <button
                      type="submit"
                      class="btn btn-default btn-lg btn-block"
                    >
                      ENVIAR MENSAGEM
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-6 col-xl-6 col-sm-12 col-md-6">
              <div class="row">
                <div class="col-12 AngLess">
                  <h2 class="AngLessTitulo">ANG LESS GOLD</h2>
                </div>
                <div class="col-12 Texto">
                  <p>
                    Estrada da Mendanha <br />Nº 25 Bloco 4 - 4 C <br />Parque
                    norte <br />2580-588 Carregado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <h3 class="Localizacao">Localização</h3>
          <div class="row">
            <div class="col-9">
              <Map />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import NavbarPrinc from "../components/NavbarPrinc.vue";
import Map from "../components/Contacto/Map";
export default {
  name: "Contacto",
  components: {
    Footer,
    NavbarPrinc,
    Map,
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Gotham";
  src: local("Fonts"), url(../assets/Fonts/GothamBold.otf) format("truetype");
}
.ContactoTitulo {
  background-color: #8cb560;
  color: #fff;
  padding: 5%;
  font-family: "Gotham";
  text-align: left;
  width: 100%;
  position:relative;
}
.ContactoTitulo::before{
  content:"";
  position: absolute;
  width: 100%;
  height: 100%;
  top:0px;
  left: 0px;
  background-image: url('../assets/imgs/backgroundContacto .jpeg');
}
label {
  font-size: 20px;
  text-align: left !important;
  font-family: "Gotham";
  color: #707070;
}
#Formulario {
  padding: 5%;
}
.form-control {
  width: 100%;
}
.form-group {
  text-align: left !important;
}
.btn {
  color: #fff;
  background-color: #8cb560;
  widows: 100%;
  margin-bottom: 4%;
  font-family: "Gotham";
}
.btn:hover {
  color: #fff;
}
.AngLess {
  text-align: center;
}
.AngLessTitulo {
  color: #8cb560;
  font-family: "Gotham";
}
.Texto {
  font-family: "Gotham";
  color: #707070;
  font-size: 24px;
  margin-top: 4%;
  /* margin-left: 31%; */
  /* text-align: left; */
  /* width: 40px !important; */
}
.Localizacao {
  font-family: "Gotham";
  color: #8cb560;
  text-align: left;
  padding: 5%;
}
</style>