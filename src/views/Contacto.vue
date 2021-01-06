<template>
  <div id="Contactos">
    <NavbarPrinc />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 ContactoTitulo">
          <h1>CONTACTOS</h1>
        </div>
        <div class="col-6" id="Formulario">
          <form action="">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="Nome">Nome</label>
                  <input type="text" class="form-control" name="Nome" />
                </div>
              </div>
              <div class="col-6">
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
                  <input type="text-area" name="Mensagem" class="form-control" />
                </div>
              </div>
              <div class="col-6">
                <button type="submit" class="btn btn-default btn-lg">ENVIAR MENSAGEM</button>
              </div>
            </div>
          </form>
        </div>
        <!-- <Footer /> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Footer from "../components/Footer.vue"
import NavbarPrinc from "../components/NavbarPrinc.vue";
export default {
  name: "Contacto",
  components: {
    //   Footer
    NavbarPrinc,
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Gotham";
  src: local("Fonts"), url(../assets/Fonts/GothamBold.otf) format("truetype");
}
.ContactoTitulo {
  background-color: rgb(31, 197, 31);
  color: #fff;
  padding: 4%;
  font-family: "Gotham";
  text-align: left;
  width: 100%;
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
.btn{
  color: #fff;
  background-color: #8CB560;
}
</style>