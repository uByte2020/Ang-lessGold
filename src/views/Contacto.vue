<template>
  <div id="Contactos">
    <NavbarPrinc />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 ContactoTitulo">
          <h1>CONTACTOS</h1>
        </div>
        <div class="col-6">
          <form action="">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                    <label for="Nome">Nome</label>
                    <input type="text" class="form-control" name="Nome">
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                    <label for="Nome">Nome</label>
                    <input type="text" name="Nome" class="form-control">
                </div>
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
label{
    font-size: 18px;
    text-align: left!important;
}
.form-control{
    width: 60%;
}
</style>