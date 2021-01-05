<template>
  <div>
    <b-navbar
      class="mt-0"
      toggleable="lg"
      type="dark"
      :variant="BackgroundClick ? 'dark' : 'transparent'"
    >
      <b-navbar-brand class="p-1 ml-5">
        <img src="../assets/imgs/LogoImg2.png" alt="logo" class="img"
      /></b-navbar-brand>

      <b-navbar-toggle
        target="nav-collapse"
        @click="toggleBackgroundClick"
        class="Marg"
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" class="navitem">Home</b-nav-item>
          <b-nav-item href="#">Sobre Nós</b-nav-item>
          <b-nav-item href="#">Serviços</b-nav-item>
          <b-nav-item href="#">Produtos</b-nav-item>
          <b-nav-item href="#">Contactos</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      BackgroundClick: false,
    };
  },
  methods: {
    toggleBackgroundClick() {
      console.log(this.BackgroundClick);
      this.BackgroundClick = !this.BackgroundClick;
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Josefin";
  src: local("Fonts"),
    url(../assets/Fonts/josefin-sans.bold.ttf) format("truetype");
}
.navbar {
  position: absolute;
  z-index: 1;
  width: 85%;

  /* background-color: transparent !important; */
}
.navbar-dark .navbar-nav .nav-link {
  /* color: rgba(255, 255, 255, 0.5); */
  color: #fff;
  font-family: "Josefin";
  font-size: 20px;
}
.img{
  margin-left: 10%;
}
@media only screen and (min-width: 1680px){
  .img {
    margin-left: 80%;
    width: 90%;
    height: 50%;
  }
}
@media only screen and (max-width: 600px) {
  .navbar {
    position: absolute;
    z-index: 1 !important;
    width: 100%;
    /* background-color: transparent !important; */
  }
  .img {
    margin-left: -60%;
    width: 90%;
    height: 50%;
  }
  .nav-collapse,
  .Marg {
    margin-top: -20%;
    margin-left: 80%;
  }
}
@media only screen and (max-width: 790px){
  .img {
    margin-left: -50%;
    width: 90%;
    height: 50%;
  }
}
@media only screen and (max-width: 1024px){
  .img {
    margin-left: -40%;
    width: 90%;
    height: 50%;
  }
}
</style>