<template>
  <div>
    <!-- :style="{ position: position }" -->
    <b-navbar
      class="mt-0"
      :class="navbarClass"
      toggleable="lg"
      type="dark"
      :variant="BackgroundClick ? 'dark' : backgroundColor"
    >
      <b-navbar-brand class="p-1 ml-5">
        <img :src="getLogoImg" alt="logo" class="img"
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
            ><router-link :class="getnavItemClass" to="/"
              >Home</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link :class="getnavItemClass" to="/QuemSomos"
              >Sobre Nós</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link :class="getnavItemClass" to="/Produtos"
              >Produtos</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link :class="getnavItemClass" to="/Contacto"
              >Contactos</router-link
            ></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "NavbarPrinc",
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
  computed: {
    getLogoImg() {
      return this.logoImg === "home"
        ? require("@/assets/imgs/Logobranco.png")
        : require("@/assets/imgs/LogopngAnglessGold.png");
    },
    getnavItemClass() {
      return this.navItemClass === "home" ? "nav-item-da-home" : "nav-item-da";
    },
  },
  props: {
    backgroundColor: {
      type: String,
      default: "transparent",
    },
    variant: String,
    navbarClass: {
      type: String,
      default: "navbar",
    },
    navTextColor: {
      type: String,
      default: "#fff",
    },
    logoImg: {
      type: String,
      default: "other",
    },
    navItemClass: {
      type: String,
      default: "other",
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

a:hover {
  text-decoration: none;
}

.nav-item-da {
  font-size: 25px !important;
  font-family: "Josefin-SemiBold";
  color: #8cb560 !important;
}

.nav-item-da:hover,
.nav-item-da-home:hover {
  color: #f8ce00 !important;
}

.nav-item-da-home {
  font-size: 25px !important;
  font-family: "Josefin-SemiBold";
  color: #fff !important;
}

.nav-link {
  font-family: "Josefin-SemiBold";
  font-size: 23px;
  padding-left: 2%;
  padding-right: 2%;
}

.navbar {
  position: relative !important;
  z-index: 1;
  width: 100%;
  /* padding: 1%; */

  /* background-color: transparent !important; */
}

.navbar-home {
  position: absolute !important;
  z-index: 1;
  width: 100%;
  /* padding: 1%; */
  /* background-color: transparent !important; */
}

.navbar-dark .navbar-nav .nav-link {
  /* color: rgba(255, 255, 255, 0.5); */
  color: #fff;
  font-family: "Josefin";
  font-size: 20px;
}
.img {
  margin-left: 5%;
}
.collapse {
  margin-right: 10%;
}
#nav-collapse{
  margin: auto 4%;
}
@media only screen and (max-width: 600px) {
  button,
  .navbar-toggle,
  .Marg,
  .collapse {
    color: black !important;
  }
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
    margin-left: -60%;
    -moz-margin-left: -60%;
    -ms-margin-left: -60%;
    -webkit-margin-left: -60%;
    width: 90%;
    -moz-width: 90%;
    -ms-width: 90%;
    -webkit-width: 90%;
    height: 50%;
    -moz-height: 50%;
    -ms-height: 50%;
    -webkit-height: 50%;
  }
  .Marg {
    margin-top: -20%;
    -moz-margin-top: -20%;
    -ms-margin-top: -20%;
    -webkit-margin-top: -20%;
    margin-left: 80%;
    -moz-margin-left: 80%;
    -ms-margin-left: 80%;
    -webkit-margin-left: 80%;
  }

  .navbar-collapse {
    position: absolute;
    margin-top: 80% !important;
    /* margin:auto; */
    margin-left: -5%!important;
    /* margin-right: 15% !important; */
    background-color: #343a40;
    width: 100.5% !important;
    padding: 2%;
  }
}

@media only screen and (max-width: 500px){

  .navbar-collapse {
    position: absolute;
    margin-top: 80% !important;
    /* margin:auto; */
    margin-left: -5%!important;
    /* margin-right: 15% !important; */
    background-color: #343a40;
    width: 101.2% !important;
    padding: 4%;
  }
}
@media only screen and (max-width: 360px){

  .navbar-collapse {
    position: absolute;
    margin-top: 83% !important;
    margin-left: -5%!important;
    background-color: #343a40;
    width: 100.5vw !important;
    padding: 4%;
  }
}
@media only screen and (max-width: 290px){

  .navbar-collapse {
    position: absolute;
    margin-top: 100% !important;
    margin-left: -7%!important;
    background-color: #343a40;
    width: 101.3% !important;
    /* padding: 4%; */
  }
}
@media only screen and (min-width: 310px) and (max-width: 320px){

  .navbar-collapse {
    position: absolute;
    margin-top: 90% !important;
    margin-left: -7%!important;
    background-color: #343a40;
    width: 101.9% !important;
  }
}
@media only screen and (min-width: 370px) and (max-width: 375px){

  .navbar-collapse {
    position: absolute;
    margin-top: 85% !important;
    margin-left: -7%!important;
    background-color: #343a40;
    width: 385px !important;
  }
}
@media only screen and (min-width: 530px) and (max-width: 540px){

  .navbar-collapse {
    position: absolute;
    margin-top: 60% !important;
    margin-left: -7%!important;
    background-color: #343a40;
    width: 562px !important;
  }
}
@media only screen and (max-width: 790px) {
  button,
  .navbar-toggle,
  .Marg,
  .collapse {
    color: black !important;
  }
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
    margin-left: -45% !important;
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
</style>