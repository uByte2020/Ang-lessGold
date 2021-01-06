<template>
  <div>
    <b-navbar
      class="mt-0"
      toggleable="lg"
      type="dark"
      :variant="BackgroundClick ? 'dark' : 'default'"
    >
      <b-navbar-brand class="p-1 ml-5">
        <img src="../assets/imgs/LogopngAnglessGold.png" alt="logo" class="img"
      /></b-navbar-brand>

      <b-navbar-toggle
        target="nav-collapse"
        @click="toggleBackgroundClick"
        class="Marg"
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Sobre Nós</b-nav-item>
          <b-nav-item href="#">Serviços</b-nav-item>
          <b-nav-item href="#">Produtos</b-nav-item>
          <b-nav-item href="/Contacto">Contactos</b-nav-item>
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
  font-family: "Josefin-SemiBold";
  src: local("Fonts"),
   url(../assets/Fonts/josefin-sans.semibold.ttf) format("truetype");
}
.navbar {
  padding: 2%;
  /* background-color: transparent !important; */
}
a {
  color: green !important;
  font-family: "Josefin-SemiBold";
  font-size: 23px;
  padding-left: 2%;
  padding-right: 2%;
}
.navbar-dark .navbar-nav .nav-link {
  /* color: rgba(255, 255, 255, 0.5); */
  color: #fff;
  font-family: "Josefin";
}
.img {
  /* margin-left: 10%; */
}
@media only screen and (max-width: 600px) {
    .navbar{
        width: 100%;
    }
  .img{
      margin-left: -50% !important;
      width: 150px;
  }  
  #nav-collapse,
  .Marg
  {
      margin-left: 10%;
      background-color: rgba(70, 68, 68, 0.157);
  }
}
</style>