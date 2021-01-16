<template>
  <div class="col-12 produto-detalhe-item">
        <div class="row">
        <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12 imagem">
            <img
            :src="loadImg(product.foto)"
            class="img"
            alt="Bacalhau Posta"
            />
        </div>
        <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12 Texto">
            <h1 class="Bacalhau">{{product.titulo}}</h1>
            <p class="BacalhauTexto">
            {{"produtos"}}
            </p>
            <h4 class="BacalhauH4">
            Origem:
            <!-- <img
                :src="loadIcon(product.icon)"
                alt="Portugal"
                class="icon img-fluid"
            /> -->
            </h4>
        </div>
        </div>
    </div>
</template>

<script>
const productImage = require.context('@/assets/imgs/products/', false, /\.png$|\.jpg$|\.jpeg$/)
const productIcon = require.context('@/assets/svg/', false, /\.png$|\.jpg$|\.svg$/)
export default {
  name: 'detalhe-produto-item',
  props: {
    product:Object
  },
  methods: {
    loadImg(imgPath) {
      return productImage('./'+imgPath)
    },
    loadIcon(iconPath) {
      return productIcon('./'+iconPath)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.produto-detalhe-item{
    margin-bottom: 1%;
    margin-top: 1%;
}

a:hover {
  text-decoration: none;
}

.img {
  height: auto !important;
  width: 70%;
  border-radius: 5px;
  box-shadow: 2px 2px 8px #707070;
  object-fit: fill !important;
}
.imagem {
  margin-left: -2%;
}
.Texto {
  text-align: left;
  margin-left: -6%;
  font-family: Josefin;
}
.Bacalhau {
  font-size: 50px;
  color: #000;
}
.BacalhauTexto {
  width: 90%;
  margin: 5% 0% !important;
  line-height: 3;
  font-size: 20px;
  color: #70707070;
}
.icon {
  height: 30px;
}
#AlimentoBacalhau {
  position: relative;
}
#AlimentoBacalhau::before {
  content: "";
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  position: absolute;
  background: url("../../assets/imgs/img4.jpg") no-repeat center center;
  background-size: 100% 120%;
  -moz-background-size: 100% 120%;
  -ms-background-size: 100% 120%;
  -webkit-background-size: 100% 150%;
  filter: opacity(0.1);
  -moz-filter: opacity(0.1);
  -ms-filter: opacity(0.1);
  -webkit-filter: opacity(0.1);
}
@font-face {
  font-family: "Josefin";
  src: local("Fonts"),
    url(../../assets/Fonts/josefin-sans.bold.ttf) format("truetype");
}
@media only screen and (max-width: 600px) {
  .Texto {
    text-align: left;
    margin-left: 1%;
    font-family: Josefin;
  }
  .img {
    height: 100% !important;
    width: 100%;
    border-radius: 5px;
    box-shadow: 2px 2px 8px #707070;
    object-fit: fill !important;
  }
  .BacalhauTexto {
    width: 100%;
    margin: 5% 0% !important;
    line-height: 2;
    font-size: 20px;
    color: #70707070;
  }
}
</style>
