<template>
  <div id="Contactos">
    <NavbarPrinc />
    <div class="container-fluid">
      <div class="row">
          <div class="col-12 ContactoTitulo">
              <h1>CONTACTOS</h1>
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
  src: local("Fonts"),
   url(../assets/Fonts/GothamBold.otf) format("truetype");
}
.ContactoTitulo{
    background-color: rgb(31, 197, 31);
    color: #fff;
    padding: 4%;
    font-family: "Gotham";
    text-align: left;
    width: 100%;
}
</style>