<template>
  <div>
    <!-- :style="{ position: position }" -->
    <b-navbar
      class="mt-0"
      toggleable="lg"
      type="dark"
      :variant="BackgroundClick ? 'dark' : 'transparent'"
    >
      <!-- backgroundColor -->
      <b-navbar-brand class="p-1 ml-5">
        <img src="../assets/imgs/Logobranco.png" alt="logo" class="img"
      /></b-navbar-brand>

      <b-navbar-toggle
        target="nav-collapse"
        @click="toggleBackgroundClick"
        class="Marg"
      >
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="x" font-scale="1"></b-icon>
          <b-icon v-else icon="list" font-scale="1"></b-icon> </template
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="navitem"
            ><router-link to="/">Home</router-link></b-nav-item
          >
          <b-nav-item
            ><router-link to="/QuemSomos">Sobre Nós</router-link></b-nav-item
          >
          <b-nav-item
            ><router-link to="/Produtos">Produtos</router-link></b-nav-item
          >
          <b-nav-item
            ><router-link to="/Contacto">Contactos</router-link></b-nav-item
          >
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
  // props: {
  //   backgroundColor: {
  //     type: Text,
  //     default: "transparent",
  //   },
  //   variant: Text,
  //   position: {
  //     type: Text,
  //     default: "absolute",
  //   },
  //   navTextColor: {
  //     type: Text,
  //     default: "#fff",
  //   },
  // },
};
</script>

<style scoped>
@font-face {
  font-family: "Josefin";
  src: local("Fonts"),
    url(../assets/Fonts/josefin-sans.bold.ttf) format("truetype");
}

.nav-link {
  font-family: "Josefin-SemiBold";
  font-size: 23px;
  padding-left: 2%;
  padding-right: 2%;
}

.navbar {
  position: absolute !important;
  z-index: 1;
  width: 100%;
  padding: 1%;

  /* background-color: transparent !important; */
}
a {
  font-size: 25px !important;
  font-family: "Josefin-SemiBold";
  color: #fff !important;
}
.navbar-dark .navbar-nav .nav-link {
  /* color: rgba(255, 255, 255, 0.5); */
  color: #fff;
  font-family: "Josefin";
  font-size: 20px;
}
.img {
  margin-left: 10%;
}
.navbar-collapse,
.collapse {
  margin-right: 10%;
}
/* @media only screen and (min-width: 1680px) {
  .img {
    margin-left: 80%;
    -moz-margin-left: 50%;
    -ms-margin-left: 50%;
    -webkit-margin-left: 50%;
    height: 100%;
    -moz-height: 100%;
    -ms-height: 100%;
    -webkit-height: 100%;
    width: 100%;
    -moz-width: 100%;
    -ms-width: 100%;
    -webkit-width: 100%;
  }
} */
@media only screen and (max-width: 600px) {
  .navbar {
    position: absolute;
    -moz-position: absolute;
    -ms-position: absolute;
    -webkit-position: absolute;
    z-index: 1 !important;
    -moz-z-index: 1 !important;
    -ms-z-index: 1 !important;
    -webkit-z-index: 1 !important;
    width: 100%;
    -moz-width: 100%;
    -ms-width: 100%;
    -webkit-width: 100%;
    /* background-color: transparent !important; */
  }
  .img {
    margin-left: -50%;
    -moz-margin-left: -60%;
    -ms-margin-left: -60%;
    -webkit-margin-left: -60%;
    width: 80%;
    -moz-width: 80%;
    -ms-width: 80%;
    -webkit-width: 90%;
    height: auto;
    -moz-height: 50%;
    -ms-height: 50%;
    -webkit-height: 50%;
    margin-top: -5%;
  }
  .nav-collapse,
  .Marg {
    margin-top: -25%;
    -moz-margin-top: -20%;
    -ms-margin-top: -20%;
    -webkit-margin-top: -20%;
    margin-left: 80%;
    -moz-margin-left: 80%;
    -ms-margin-left: 80%;
    -webkit-margin-left: 80%;
  }
}
@media only screen and (max-width: 790px) {
  .img {
    margin-left: -50%;
    -moz-margin-left: -50%;
    -ms-margin-left: -50%;
    -webkit-margin-left: -50%;
    width: 90%;
    -moz-width: 90%;
    -ms-width: 90%;
    -webkit-width: 90%;
    height: 50%;
    -moz-height: 50%;
    -ms-height: 50%;
    -webkit-height: 50%;
  }
}
@media only screen and (max-width: 1024px) {
  .img {
    margin-left: -40%;
    -moz-margin-left: -40%;
    -ms-margin-left: -40%;
    -webkit-margin-left: -40%;
    width: 100%;
    -moz-width: 90%;
    -ms-width: 90%;
    -webkit-width: 90%;
    height: 100%;
    -moz-height: 50%;
    -ms-height: 50%;
    -webkit-height: 50%;
  }
}
</style>